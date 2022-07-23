import uniqid from 'uniqid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addBook, fetchBooks } from '../redux/books/books';
import Button from './shared/Button';

const Form = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    item_id: uniqid(),
    title: '',
    author: '',
    category: '',
  });

  const handleChanges = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-section">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="flex form">
        <input type="text" value={state.title} name="title" onChange={handleChanges} placeholder="Book title" />
        <input type="text" value={state.author} name="author" onChange={handleChanges} placeholder="Book author" />
        <select required value={state.category} name="category" onChange={handleChanges}>
          <option value="Category" hidden>Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
        </select>
        <Button
          className="btn"
          value="Add book"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addBook(state));
            setState({
              item_id: uniqid(),
              title: '',
              author: '',
              category: '',
            });
            dispatch(fetchBooks());
          }}
        />
      </form>
    </div>
  );
};

export default Form;
