import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postBook, getBooks, deleteBook } from '../../api/bookAPI';

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const FETCH_BOOKS = 'book-store/books/FETCH_BOOKS';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

// fetch books from the api
export const fetchBooks = createAsyncThunk(FETCH_BOOKS,
  async () => {
    const response = await getBooks();
    return response;
  });
// add book to api
export const addBook = createAsyncThunk(ADD_BOOK,
  async (bookdetails) => {
    const response = await postBook(bookdetails);
    await fetchBooks();
    return response;
  });

// remove book from the api
export const removeBook = createAsyncThunk(REMOVE_BOOK,
  async (bookId) => {
    const response = await deleteBook(bookId);
    await fetchBooks();
    return response;
  });

const slice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers: {
    [addBook.fulfilled]: (state, action) => action.payload,
    [fetchBooks.fulfilled]: (state, action) => action.payload,
    [removeBook.fulfilled]: (state, action) => action.payload,
  },
});
export const booksList = (state) => state.bookList;
export default slice.reducer;
