import React, { useState } from 'react';
import BookCard from './BookCard';

const categoriesData = [
    { id: 1, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', category: 'Programming', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTo2Dgd7u2PcEy2P_-2YPlLCtv3wC-4HJ39KMkIfMuH7e2Xr733W_zSyskj3GNQaOcgs4iliEM-ZLzYd2KtBobGGVSWgKqEjr-GRRK-a2nGcqvTQEwgNS55tA' },
    { id: 2, title: 'You Don’t Know JS', author: 'Kyle Simpson', category: 'Programming', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxCrTFTZnQjzyp8rhIcfuJpUdQuG8H6WRBnc3l6aBTjUCYMsoY1WgBsbKZdMFVczHN3tOpon-TQ4WaM0QRNCCglPE45Vr6WNd_g52u8Tym-l3Lv4RiPUJFvA' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin', category: 'Programming', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQF1oZHon_hS3k4ro3Weg2sITzE9P7PqDO15R1QKv_r9pHNPtBAxOFQg8I1kCiiOLOHw8P1qk7kz_FIK2NdQd8flbf6qtdXXdiJdk1Q47v' },
    { id: 4, title: 'Design Patterns', author: 'Erich Gamma et al.', category: 'Design', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGxUDsB6DGLVqLo3UssstHNth1vxdEAr4RBrcdMvr2W2GQyKfffm-U1vdPXlAGACSVI0qRgizc8sKH39AlR5YU1MGg125RjPMCCy_DZwEV' },
    { id: 5, title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas', category: 'Programming', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDxuaOi-Saf_YCTx7VETmtbdwU__PwW-PHV6tXfqTeOnwtpI-FmzGmj4kWqBpTDAriGlDUTyvDnx3UZv7p4WnkfnKHsj1jmIssib1xHp4' },
    { id: 6, title: 'Steal Like an Artist', author: 'Austin Kleon', category: 'Design', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScPpAEBun4Pt7bIK5UqksdaZnxuiAI8Yb59G2bH6FcK6EZCRXPjSeuUdjw-9xjJDsyJm_WwYo0vZK1h_Z6QHsZYBIFqqoxJag59I3myVLfL-OCDovG8paE5A' },
    { id: 7, title: '1984', author: 'George Orwell', category: 'Fiction', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbtFQlEzAuToYZV7cLNQvVNwz6pUbb4CATFNwSo0_UYZM5wK-dBSTV_8MbTrrdQNN_DjzzResoSOUOgarRt1laLzw-Z-oaIarZXYPKutL-TmgHNOEoCBZI' },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', category: 'Fiction', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZykfgjxbFZec_yyJUXsZ52WfX7Qf9vTKrPpKmYj1fmUg70vsipVmLk1TTG3o_-eE3GJN6vbULdMua1P6lhCB5n6eRvGubelqsRSzCgvG4' },
  ];
  

const categories = ['All', 'Programming', 'Design', 'Fiction'];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData =
    selectedCategory === 'All'
      ? categoriesData
      : categoriesData.filter((item) => item.category === selectedCategory);

  return (
    <div className="categories-page">
      <h2>Categories</h2>
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="book-list">
        {filteredData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
