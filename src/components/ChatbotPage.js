import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// backend connection
const socket = io('http://localhost:4000'); 

const RealTimeChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    socket.on('receiveMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

   
    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

   
    socket.emit('sendMessage', message);

   
    setMessage('');
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.chatBox}>
        {/* Display all messages */}
        {messages.map((msg, index) => (
          <div key={index} style={styles.chatMessage}>
            <p>{msg}</p>
          </div>
        ))}
      </div>

      <footer style={styles.footer}>
        <input
          style={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button style={styles.sendButton} onClick={handleSendMessage}>
          Send
        </button>
      </footer>
    </div>
  );
};

// Styles
const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    backgroundColor: '#333',
  },
  chatBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#2c2c2c',
  },
  chatMessage: {
    maxWidth: '60%',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '10px',
    backgroundColor: '#555',
    color: '#fff',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderTop: '1px solid #555',
    backgroundColor: '#444',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #555',
    borderRadius: '20px',
    marginRight: '10px',
    backgroundColor: '#555',
    color: '#fff',
  },
  sendButton: {
    backgroundColor: '#b68bff',
    border: 'none',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
  },
};

export default RealTimeChat;
