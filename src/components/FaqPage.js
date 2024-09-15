import React, { useState, useEffect } from 'react';
import './FaqPage.css';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  // Fetch FAQs from the backend
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('http://localhost:5000/faqs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched FAQs:', data); // Log data
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
  
    fetchFaqs();
  }, []);
  
  console.log('FAQs State:', faqs); // Log state
  


  // Add a new FAQ
  const addFaq = async () => {
    if (!newQuestion || !newAnswer) {
      alert('Please enter both question and answer');
      return;
    }

    const newFaq = { question: newQuestion, answer: newAnswer };

    try {
      const response = await fetch('http://localhost:5000/faqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFaq)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setFaqs([...faqs, data]);
      setNewQuestion('');
      setNewAnswer('');
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  // Delete an FAQ
  const deleteFaq = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/faqs/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFaqs(faqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  // Update an FAQ
  const updateFaq = async (id) => {
    if (!newQuestion || !newAnswer) {
      alert('Please enter both question and answer');
      return;
    }

    const updatedFaq = { question: newQuestion, answer: newAnswer };

    try {
      const response = await fetch(`http://localhost:5000/faqs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFaq)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const updatedFaqs = faqs.map(faq => (faq.id === id ? data : faq));
      setFaqs(updatedFaqs);
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">FAQ Section</h1>
      <div className="faq-list">
        {faqs.length ? faqs.map((faq) => (
          <div key={faq.id} className="faq-card">
  <div className="faq-content">
    <h3>{faq.question}</h3>
    <h6>{faq.answer}</h6>
  </div>
  <div className="button-container">
    <button onClick={() => deleteFaq(faq.id)} className="delete-btn">Delete</button>
    <button onClick={() => updateFaq(faq.id)} className="edit-btn">Update</button>
  </div>
</div>

        )) : <p>No FAQs available.</p>}
      </div>
      <div className="add-faq-section">
  <h2>Add New FAQ</h2>
  <input
    type="text"
    placeholder="Enter question"
    value={newQuestion}
    onChange={(e) => setNewQuestion(e.target.value)}
  />
  <input
    type="text"
    placeholder="Enter answer"
    value={newAnswer}
    onChange={(e) => setNewAnswer(e.target.value)}
  />
  <button onClick={addFaq} className="add-btn">Add FAQ</button>
</div>


    </div>
  );
  
};

export default FaqPage;
