import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { booksState, booksReducer } from './books/books';
import { categoriesState, categoriesReducer } from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore((state, action) => rootReducer(state, action),
  { books: booksState, categories: categoriesState }, composeWithDevTools(applyMiddleware(thunk)));
export default store;
