const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';
// Reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.value;
    default:
      return state;
  }
};

// Action
export const checkStatus = () => {
  const status = {
    type: CHECK_STATUS,
    value: 'Under construction',
  };
  return status;
};

export default categoriesReducer;
