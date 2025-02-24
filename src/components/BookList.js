import React from 'react';
import BookItem from './BookItem';

function BookList({ books, fetchBooks }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookItem key={book._id} book={book} fetchBooks={fetchBooks} />
      ))}
    </div>
  );
}

export default BookList;
