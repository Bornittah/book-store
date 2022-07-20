import React, { useRef } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/books';
import Button from './shared/Button';

const Form = () => {
  // calling useDispatch to the component
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);

  return (
    <div>
      <h2>Add new book</h2>
      <form>
        <input ref={title} type="text" placeholder="Book title" />
        <input ref={author} type="text" placeholder="Book author" />
        <Button
          value="Add book"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addBook(title.current.value, author.current.value, uniqid()));
          }}
        />
      </form>
    </div>
  );
};

export default Form;
