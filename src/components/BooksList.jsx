import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.bookStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <ol className="book-list">
      { books.map((book) => (
        <li key={book.id} className="list-item">
          <Book details={book} />
        </li>
      ))}
    </ol>
  );
};
export default BooksList;
