import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Progressbar from 'react-js-progressbar';
import Button from './shared/Button';
import { removeBook, fetchBooks } from '../redux/books/books';

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
          <div className="wrapper flex space-btn">
            <div className="flex-1">
              <p className="category">{book.category}</p>
              <h4 className="title">{book.title}</h4>
              <h6 className="author">{book.author}</h6>
              <ul className="flex action-btn-list">
                <li className="border-right">
                  <Button
                    className="tranparent-btn"
                    value="Comments"
                  />
                </li>
                <li className="border-right">
                  <Button
                    className="tranparent-btn"
                    id={book.id}
                    value="Remove"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(removeBook(e.target.id));
                      dispatch(fetchBooks());
                    }}
                  />
                </li>
                <li>
                  <Button
                    className="tranparent-btn"
                    value="Edit"
                  />
                </li>
              </ul>
            </div>
            <div className="flex flex-1 space-btn">
              <div className="progressbar">
                <Progressbar
                  input={60}
                  pathWidth={5}
                  pathColor="#0290ff"
                  trailWidth={5}
                  trailColor="#e4e4e4"
                  textStyle={{ fill: '#0290ff' }}
                />
              </div>
              <div className="chapter-section">
                <h3 className="chapter">CURRENT CHAPTER</h3>
                <p className="sub-chapter">Chapter 1</p>
                <Button
                  className="btn"
                  id={book.id}
                  value="Update Progress"
                />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};
export default BooksList;
