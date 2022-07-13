import Button from './shared/Button';

const Form = () => (
  <div>
    <h2>Add new book</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book author" />
      <Button value="Add book" />
    </form>
  </div>
);

export default Form;
