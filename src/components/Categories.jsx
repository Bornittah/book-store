import { useSelector, useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';
import Button from './shared/Button';

const Categories = () => {
  const response = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <Button value="Check status" onClick={() => dispatch(checkStatus())} />
      <h3>{response}</h3>
    </div>
  );
};

export default Categories;
