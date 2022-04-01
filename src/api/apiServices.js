import http from './api';

const apiGetBooks = () => http.get('/books');

const apiAddBook = (data) => http.post('/books', data);

const apiRemoveBook = (id) => http.delete(`/books/${id}`);

const BookStoreService = {
  apiGetBooks,
  apiAddBook,
  apiRemoveBook,
};
export default BookStoreService;
