import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ChatbotPage from './components/ChatbotPage';
import TranslatorPage from './components/TranslatorPage';
import FaqPage from './components/FaqPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatbotPage />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
