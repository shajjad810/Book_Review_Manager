import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    rating: '',
    review: ''
  });
  const { token } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5050/api/books', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });
    setFormData({ title: '', author: '', rating: '', review: '' });
    // The BookList component will automatically refresh due to the useEffect
  };

  return (
    <div className="card mb-8">
      <h2 className="mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="flex flex-direction-column gap-4">
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Book Title"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating (1-5)"
            className="input"
            min="1"
            max="5"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Your Review"
            className="input"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="button button-primary">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
