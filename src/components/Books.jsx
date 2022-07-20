import Book from './Book';
import Form from './Form';

const Books = () => (
  <div>
    <h2>List of Books</h2>
    <ol className="book-list">
      <li>
        <Book />
      </li>
    </ol>
    <Form />
  </div>
);

export default Books;
