import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './styles.css';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:5000/api/books');
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Book Review Manager</h1>
      <BookForm fetchBooks={fetchBooks} />
      <BookList books={books} fetchBooks={fetchBooks} />
    </div>
  );
}

export default App;