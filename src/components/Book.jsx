import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './shared/Button';
import { removeBook, fetchBooks } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.bookStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <ol className="book-list">
      { books.map((book) => (
        <li key={book.id}>
          <p>{book.category}</p>
          <h4>{book.title}</h4>
          <h6>{book.author}</h6>
          <Button
            id={book.id}
            value="Remove"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeBook(e.target.id));
              dispatch(fetchBooks());
            }}
          />
        </li>
      ))}
    </ol>
  );
};
export default BookList;
