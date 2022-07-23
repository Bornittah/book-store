import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BooksList from './components/BooksList';
import BooksLibrary from './components/BooksLibrary';
import Categories from './components/Categories';
import NavBar from './components/shared/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksLibrary />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
