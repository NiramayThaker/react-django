import React, { useState } from 'react';

const Admin = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    image: '',
    downloadLink: '',
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the book details to the console.
    console.log('New Book Data:', book);
    // Reset the form
    setBook({
      title: '',
      author: '',
      category: '',
      image: '',
      downloadLink: '',
    });
  };

  return (
    <div className="admin-page">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={book.category}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="url"
            name="image"
            value={book.image}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Download Link:
          <input
            type="url"
            name="downloadLink"
            value={book.downloadLink}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Admin;
