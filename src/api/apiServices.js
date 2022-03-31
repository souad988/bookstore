import http from "./api";

const apiGetBooks = () => {
  return http.get("/books");
};

const apiAddBook = data => {
  return http.post("/books", data);
};

const apiRemoveBook = id => {
  return http.delete(`/books/${id}`);
};

const BookStoreService = {
  apiGetBooks,
  apiAddBook,
  apiRemoveBook,
};
export default BookStoreService;