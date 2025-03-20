import React from 'react';
import BookList from './BookList';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My eBook Library</h1>
          <p>
            Discover a curated collection of engaging reads, from timeless classics to modern masterpieces.
            Explore, enjoy, and get inspired!
          </p>
        </div>
      </section>
      <section className="featured-books">
        <h2>Featured Books</h2>
        <BookList />
      </section>
    </div>
  );
};

export default Home;
