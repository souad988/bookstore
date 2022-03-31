import { combineReducers, createStore } from 'redux';
import { booksState, booksReducer } from './books/books';
import { categoriesState, categoriesReducer } from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore((state, action) => rootReducer(state, action),
  { books: booksState, categories: categoriesState });
export default store;
