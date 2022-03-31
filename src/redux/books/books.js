export const booksState = [{
  id: '1',
  title: 'The Yellow Meads of Asphodel',
  author: 'H. E. Bates',
  category: 'action',
  progress: '64',
  chapter: 'chapter 17',
},
{
  id: '3',
  title: 'The Wives of Bath Susan Swan',
  author: 'Geoffrey Chaucer',
  category: 'comedy',
  progress: '16',
  chapter: 'chapter 17',
},
{
  id: '2',
  title: 'The World, the Flesh and the Devil',
  author: 'Mary Elizabeth Braddon',
  category: 'drama',
  progress: '8',
  chapter: 'chapter 17',
}];
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const booksReducer = (booksState = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...booksState, action.book];
    case REMOVE_BOOK:
      return [...booksState].filter((book) => book.id !== action.id);
    default:
      return booksState;
  }
};

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
