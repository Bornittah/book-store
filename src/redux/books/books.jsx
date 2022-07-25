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
    return response;
  });

// remove book from the api
export const removeBook = createAsyncThunk(REMOVE_BOOK,
  async (bookId, thunkAPI) => {
    const response = await deleteBook(bookId);
    thunkAPI.dispatch(fetchBooks());
    return response;
  });

const slice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      fetchBooks.fulfilled,
      (books, action) => action.payload,
    );
    builder.addCase(addBook.fulfilled, (books, action) => {
      books.push(action.payload);
    });
    builder.addCase(removeBook.fulfilled,
      (books, action) => books.filter((book) => book.id !== action.payload));
  },
});

export const { bookAdded, bookRemoved } = slice.actions;

export default slice.reducer;
