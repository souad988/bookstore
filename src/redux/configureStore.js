import Redux, { combineReducers } from 'react-redux';
import { booksReducer } from './books/books';
import { categoriesReducer } from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = Redux.createStoreHook(rootReducer);
export default store;
