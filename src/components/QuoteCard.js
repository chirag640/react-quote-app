import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography variant="body1" style={styles.quote}>
          "{quote}"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onSave(quote)} style={styles.button}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
}

const styles = {
  card: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  quote: {
    fontStyle: 'italic',
    color: '#333',
  },
  button: {
    marginLeft: 'auto',
  },
};

export default QuoteCard;
