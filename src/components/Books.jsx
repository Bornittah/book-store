import Book from './Book';
import Form from './Form';

const Books = () => (
  <div>
    <h2>List of Books</h2>
    <ul>
      <li>
        <Book title="Learn how to code" author="Bornittah" />
      </li>
      <li>
        <Book title="Learn how to debug your code" author="Bornittah" />
      </li>
    </ul>
    <Form />
  </div>
);

export default Books;
