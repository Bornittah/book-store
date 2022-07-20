import { useSelector, useDispatch } from 'react-redux';
import Button from './shared/Button';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  return (books.map((book) => (
    <li key={book.id}>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <Button
        value="Remove"
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeBook(book.id));
        }}
      />
    </li>
  )));
};

export default Book;
