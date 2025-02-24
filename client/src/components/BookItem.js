import React, { useState } from 'react';

function BookItem({ book, fetchBooks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(book);

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/api/books/${book._id}`, {
      method: 'DELETE'
    });
    fetchBooks();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/books/${book._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editData)
    });
    setIsEditing(false);
    fetchBooks();
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="book-item">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            name="title"
            value={editData.title}
            onChange={handleChange}
          />
          <input
            name="author"
            value={editData.author}
            onChange={handleChange}
          />
          <input
            name="rating"
            type="number"
            value={editData.rating}
            onChange={handleChange}
            min="1"
            max="5"
          />
          <textarea
            name="review"
            value={editData.review}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Rating: {book.rating}/5</p>
          <p>Review: {book.review}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default BookItem;