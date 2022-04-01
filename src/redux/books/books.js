import BookStoreService from '../../api/apiServices';

export const booksState = [];
const SET_BOOKS = 'bookStore/books/SET_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const booksReducer = (booksState = [], action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.books;
    case ADD_BOOK:
      return [...booksState, action.book];
    case REMOVE_BOOK:
      return [...booksState].filter((book) => book.item_id !== action.id);
    default:
      return booksState;
  }
};

export function setBooks(books) {
  return { type: SET_BOOKS, books };
}

export const addBook = (book) => async (dispatch) => {
  await BookStoreService.apiAddBook(book);
  dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (id) => async (dispatch) => {
  await BookStoreService.apiRemoveBook(id);
  dispatch({ type: REMOVE_BOOK, id });
};
