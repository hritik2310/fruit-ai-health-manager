const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);


app.use(cors());            
app.use(express.json());    


let faqs = [
  { id: 1, question: "How is Tangerine healthy?", answer: "Tangerine is a great health booster due to its high vitamin C content." },
  { id: 2, question: "What is the benefit of Apple?", answer: "An apple a day keeps the doctor away." },
];


app.get('/faqs', (req, res) => {
  res.json(faqs);
});


app.post('/faqs', (req, res) => {
  const newFaq = req.body;
  newFaq.id = faqs.length ? faqs[faqs.length - 1].id + 1 : 1;
  faqs.push(newFaq);
  res.status(201).json(newFaq);
});


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


app.delete('/faqs/:id', (req, res) => {
  const faqId = parseInt(req.params.id, 10);
  faqs = faqs.filter(f => f.id !== faqId);
  res.status(204).send();
});


app.listen(port, () => {
  console.log(`FAQ backend running at http://localhost:${port}`);
});






const io = new Server(server, {
  cors: {
    origin: '*', // Allow any domain, modify as per your needs
  },
});


io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

 
  socket.on('sendMessage', (message) => {
    console.log('Message received:', message);

  
    io.emit('receiveMessage', message);
  });


  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


app.get('/', (req, res) => {
  res.send('Server is up and running!');
});


server.listen(4000, () => {
  console.log('Server is running on port 4000');
});

