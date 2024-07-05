import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button } from '@mui/material';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    setQuote(response.data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <Container style={styles.container}>
      <Typography variant="h4" component="h1" gutterBottom style={styles.header}>
        Ron Swanson Quotes
      </Typography>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <Button variant="contained" color="primary" onClick={fetchQuote} style={styles.button}>
        Get New Quote
      </Button>
      <Typography variant="h5" component="h2" gutterBottom style={styles.subHeader}>
        Saved Quotes
      </Typography>
      <QuoteList savedQuotes={savedQuotes} />
    </Container>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '20px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#333',
    marginBottom: '20px',
  },
  subHeader: {
    color: '#555',
    marginTop: '40px',
  },
  button: {
    marginTop: '20px',
  },
};

export default App;
