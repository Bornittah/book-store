import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Progressbar from 'react-js-progressbar';
import Button from './shared/Button';
import { removeBook } from '../redux/books/books';

const Book = ({ details }) => {
  const {
    id, title, author, category,
  } = details;
  const dispatch = useDispatch();

  return (
    <div className="wrapper flex space-btn">
      <div className="flex-1">
        <p className="category">{category}</p>
        <h4 className="title">{title}</h4>
        <h6 className="author">{author}</h6>
        <div className="flex action-btn-list">
          <Button
            className="tranparent-btn border-right"
            value="Comments"
          />
          <Button
            className="tranparent-btn border-right"
            value="Remove"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeBook(id));
            }}
          />
          <Button
            className="tranparent-btn"
            value="Edit"
          />
        </div>
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
            value="Update Progress"
          />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }),
};

Book.defaultProps = {
  details: null,
};
export default Book;
