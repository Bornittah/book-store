import Form from './Form';
import Button from './shared/Button';

const Books = () => (
  <div>
    <h2>List of Books</h2>
    <ul>
      <li>
        Fight Hunger by Nim
        <Button value="Remove" />
      </li>
      <li>
        Fight Hunger by Nim
        <Button value="Remove" />
      </li>
    </ul>
    <Form />
  </div>
);

export default Books;
