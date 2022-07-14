import PropTypes from 'prop-types';
import Button from './shared/Button';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <h4>{title}</h4>
      <p>{author}</p>
      <Button value="remove" />
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
