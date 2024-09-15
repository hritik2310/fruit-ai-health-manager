import React, { useState } from 'react';
import axios from 'axios';
import './TranslatorPage.css';

const TranslatorPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish
  const [error, setError] = useState('');
  const API_KEY = '9UZe0g7W3cYZqKVnuQgwIOopFe8YgXeC'; // Your IBM Watson API Key

  const handleTranslate = async () => {
    if (!inputText) {
      alert('Please enter text to translate.');
      return;
    }

    try {
      const response = await axios.post('https://api.apilayer.com/language_translation/translate', 
      {
        target: targetLanguage,
        source: 'en',
        text: inputText,
      }, {
        headers: {
          'apikey': API_KEY,
        },
      });

      if (response.status === 200) {
        const translated = response.data.translations[0].translation;
        setTranslatedText(translated);
        setError('');
      } else {
        throw new Error('Failed to translate');
      }
    } catch (err) {
      console.error('Error translating:', err);
      setError('Failed to translate. Please try again later.');
    }
  };

  return (
    <div className="translator-page">
      <h2>Translator</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
        className="input-text"
      />
      <div>
        <label htmlFor="language-select">Select Language:</label>
        <select
          id="language-select"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          className="language-select"
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ar">Arabic</option>
          <option value="hi">Hindi</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <button onClick={handleTranslate} className="translate-button">Translate</button>
      {error && <p className="error-message">{error}</p>}
      {translatedText && (
        <p>
          <strong>Translated Text:</strong> {translatedText}
        </p>
      )}
    </div>
  );
};

export default TranslatorPage;
