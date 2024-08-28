import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';


function HomePage() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']; // Example names list

  return (
    <>
      <NavBar />
      <div className="home-page">
        <h1>HomePage</h1>
        <SearchBar names={names} />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
