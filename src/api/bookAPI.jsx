// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux/es/exports';
// eslint-disable-next-line import/no-cycle
// import { fetchBooks } from '../redux/books/books';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
// const dispatch = useDispatch();

export const appId = async () => {
  const response = await fetch(`${API_URL}/apps/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const id = response.text().then((data) => {
    if (response.status === 201) {
      localStorage.setItem('book-store', data);
    }
    return data;
  })
    .catch((err) => err);
  return id;
};

// App ID
export const fetchAppId = () => {
  const key = localStorage.getItem('book-store');
  if (key === null) {
    appId();
    const newKey = localStorage.getItem('book-store');
    console.log(newKey);
    return newKey;
  }
  return key;
};
// app id from the local storage
const id = fetchAppId();
export const getBooks = async () => {
  const response = await fetch(`${API_URL}/apps/${id}/books`,
    {
      method: 'GET',
    });
  const bookList = [];
  const books = await response.json().then((data) => data)
    .catch((err) => { console.log('Error', err); });
  Object.keys(books).forEach((book) => {
    books[book][0].id = book;
    bookList.push(books[book][0]);
  });
  return bookList;
};

export const postBook = async (bookdetails) => {
  const response = await fetch(`${API_URL}/apps/${id}/books`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookdetails),
    });
  const book = await response.json().then((data) => data).catch((err) => { console.log('Error', err); });
  return book;
};

export const deleteBook = async (bookId) => {
  const response = await fetch(`${API_URL}/apps/${id}/books/${bookId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  await response.json();
  return bookId;
};
