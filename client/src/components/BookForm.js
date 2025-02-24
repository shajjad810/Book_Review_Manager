import React, { useState } from 'react';

function BookForm({ fetchBooks }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    rating: '',
    review: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({ title: '', author: '', rating: '', review: '' });
    fetchBooks();
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Book Title"
        required
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        required
      />
      <textarea
        name="review"
        value={formData.review}
        onChange={handleChange}
        placeholder="Your Review"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;