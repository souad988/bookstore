import { combineReducers, createStore ,applyMiddleware} from 'redux';
import { booksState, booksReducer } from './books/books';
import { categoriesState, categoriesReducer } from './categories/categories';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore((state, action) => rootReducer(state, action),
  { books: booksState, categories: categoriesState },composeWithDevTools(applyMiddleware(thunk)));
export default store;
