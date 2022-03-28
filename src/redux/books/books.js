const booksState=[]
const ADD_BOOK='ADD_BOOK'
const REMOVE_BOOK='REMOVE_BOOK'

export default booksReducer = (booksState,action)=>{
      switch (action.type) {
          case ADD_BOOK:
              return [...booksState,action.book]
              break;
          case REMOVE_BOOK:
              return [...booksState].filter((book)=>book.id!==action.id)
              break;
          default:
              return bookState;
              break;
      }

}

export function addBook(book) {
    return { type: ADD_BOOK,book };
  }
    
    
  export function removeBook(id) {
    return { type: REMOVE_BOOK, id };
  }