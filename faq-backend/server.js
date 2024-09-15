const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const http = require('http');
const { Server } = require('socket.io');
// Set up the server
const server = http.createServer(app);

// Middleware
app.use(cors());            // Allow cross-origin requests
app.use(express.json());    // Parse JSON bodies

// Fake database for FAQs (you can use a real DB later)
let faqs = [
  { id: 1, question: "How is Tangerine healthy?", answer: "Tangerine is a great health booster due to its high vitamin C content." },
  { id: 2, question: "What is the benefit of Apple?", answer: "An apple a day keeps the doctor away." },
];

// Routes
// GET all FAQs
app.get('/faqs', (req, res) => {
  res.json(faqs);
});

// POST (add new FAQ)
app.post('/faqs', (req, res) => {
  const newFaq = req.body;
  newFaq.id = faqs.length ? faqs[faqs.length - 1].id + 1 : 1;
  faqs.push(newFaq);
  res.status(201).json(newFaq);
});

// PUT (update an existing FAQ)
app.put('/faqs/:id', (req, res) => {
  const faqId = parseInt(req.params.id, 10);
  const faqIndex = faqs.findIndex(f => f.id === faqId);

  if (faqIndex !== -1) {
    faqs[faqIndex] = { ...faqs[faqIndex], ...req.body };
    res.json(faqs[faqIndex]);
  } else {
    res.status(404).json({ message: 'FAQ not found' });
  }
});

// DELETE (remove an FAQ)
app.delete('/faqs/:id', (req, res) => {
  const faqId = parseInt(req.params.id, 10);
  faqs = faqs.filter(f => f.id !== faqId);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`FAQ backend running at http://localhost:${port}`);
});





//2
// Set up Socket.io
const io = new Server(server, {
  cors: {
    origin: '*', // Allow any domain, modify as per your needs
  },
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle message sent from client
  socket.on('sendMessage', (message) => {
    console.log('Message received:', message);

    // Broadcast the message to all clients
    io.emit('receiveMessage', message);
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Example route to check server is working
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Listen on a port (e.g., 4000)
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});

