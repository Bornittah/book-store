import uniqid from 'uniqid';
import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from '../redux/books/books';
import Button from './shared/Button';

const Form = () => {
  const dispatch = useDispatch();
  return (
    <div className="form-section">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addBook({
              item_id: uniqid(),
              title: e.target.elements.title.value,
              author: e.target.elements.author.value,
              category: e.target.elements.category.value,
            }),
          );
          e.target.reset();
        }}
        className="form flex"
      >
        <input type="text" name="title" placeholder="Book title" />
        <input type="text" name="author" placeholder="Book author" />
        <select required name="category">
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
        />
      </form>
    </div>
  );
};

export default Form;
