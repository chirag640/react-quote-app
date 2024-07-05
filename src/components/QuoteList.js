import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const QuoteList = ({ savedQuotes }) => {
  return (
    <List style={styles.list}>
      {savedQuotes.map((quote, index) => (
        <ListItem key={index} style={styles.listItem}>
          <ListItemText primary={quote} />
        </ListItem>
      ))}
    </List>
  );
}

const styles = {
  list: {
    marginTop: '20px',
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginBottom: '10px',
    padding: '10px 20px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
};

export default QuoteList;
