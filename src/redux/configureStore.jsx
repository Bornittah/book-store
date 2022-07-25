import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    bookStore: booksReducer,
    categories: categoriesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
