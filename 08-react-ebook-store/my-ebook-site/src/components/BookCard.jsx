import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="card-image">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="card-content">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <a 
          href={book.downloadLink} 
          download 
          className="download-btn"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default BookCard;
