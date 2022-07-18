// Reducer
export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return action.text;
    default:
      return state;
  }
};

// Action Creators

export const CheckStatus = () => {
  const status = {
    type: 'CHECK_STATUS',
    text: 'Under construction',
  };
  return status;
};
