import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function BookItem({ book, fetchBooks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(book);
  const { token } = useAuth();

  const handleDelete = async () => {
    await fetch(`http://localhost:5050/api/books/${book._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    fetchBooks();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5050/api/books/${book._id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(editData)
    });
    setIsEditing(false);
    fetchBooks();
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="book-card">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="auth-form">
          <div className="form-group">
            <input
              name="title"
              value={editData.title}
              onChange={handleChange}
              className="input"
              placeholder="Book Title"
            />
          </div>
          <div className="form-group">
            <input
              name="author"
              value={editData.author}
              onChange={handleChange}
              className="input"
              placeholder="Author"
            />
          </div>
          <div className="form-group">
            <input
              name="rating"
              type="number"
              value={editData.rating}
              onChange={handleChange}
              className="input"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
            />
          </div>
          <div className="form-group">
            <textarea
              name="review"
              value={editData.review}
              onChange={handleChange}
              className="input"
              rows="4"
              placeholder="Your Review"
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="button button-primary">Save</button>
            <button type="button" onClick={() => setIsEditing(false)} className="button button-secondary">Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">By {book.author}</p>
          <div className="book-rating">
            Rating: {book.rating}/5
          </div>
          <p className="book-review">{book.review}</p>
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)} className="button button-secondary">Edit</button>
            <button onClick={handleDelete} className="button button-primary">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default BookItem;
