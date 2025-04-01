import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';
import { useAuth } from '../context/AuthContext';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://localhost:5050/api/books', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Failed to load books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBooks();
    }
  }, [token]);

  if (loading) {
    return (
      <div className="book-grid">
        {[1, 2, 3].map((n) => (
          <div key={n} className="book-card" style={{ opacity: 0.7 }}>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="book-card text-center">
        <p className="text-error">{error}</p>
        <button onClick={fetchBooks} className="button button-primary mt-4">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="book-grid">
      {books.length === 0 ? (
        <div className="book-card text-center">
          <p className="text-secondary">No books added yet. Add your first book review!</p>
        </div>
      ) : (
        books.map(book => (
          <BookItem key={book._id} book={book} fetchBooks={fetchBooks} />
        ))
      )}
    </div>
  );
}

export default BookList;
