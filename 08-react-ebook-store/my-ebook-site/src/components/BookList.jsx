import React from 'react';
import BookCard from './BookCard';

const books = [
    { id: 1, title: 'Design Patterns', author: 'Erich Gamma et al.', category: 'Design', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGxUDsB6DGLVqLo3UssstHNth1vxdEAr4RBrcdMvr2W2GQyKfffm-U1vdPXlAGACSVI0qRgizc8sKH39AlR5YU1MGg125RjPMCCy_DZwEV' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas', category: 'Programming', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDxuaOi-Saf_YCTx7VETmtbdwU__PwW-PHV6tXfqTeOnwtpI-FmzGmj4kWqBpTDAriGlDUTyvDnx3UZv7p4WnkfnKHsj1jmIssib1xHp4' },
    { id: 3, title: 'Steal Like an Artist', author: 'Austin Kleon', category: 'Design', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScPpAEBun4Pt7bIK5UqksdaZnxuiAI8Yb59G2bH6FcK6EZCRXPjSeuUdjw-9xjJDsyJm_WwYo0vZK1h_Z6QHsZYBIFqqoxJag59I3myVLfL-OCDovG8paE5A' },
    { id: 4, title: '1984', author: 'George Orwell', category: 'Fiction', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbtFQlEzAuToYZV7cLNQvVNwz6pUbb4CATFNwSo0_UYZM5wK-dBSTV_8MbTrrdQNN_DjzzResoSOUOgarRt1laLzw-Z-oaIarZXYPKutL-TmgHNOEoCBZI' },
    { id: 5, title: 'Brave New World', author: 'Aldous Huxley', category: 'Fiction', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZykfgjxbFZec_yyJUXsZ52WfX7Qf9vTKrPpKmYj1fmUg70vsipVmLk1TTG3o_-eE3GJN6vbULdMua1P6lhCB5n6eRvGubelqsRSzCgvG4' },
];

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
