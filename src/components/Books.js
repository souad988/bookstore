import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book/Book';
import AddBook from './AddBook';

function Books() {
  const bookList = useSelector((state) => state.books);
  return (
    <div className="books_container">
      {bookList.map((book) => (
        <Book
          key={book.id}
          author={book.author}
          title={book.title}
          category={book.category}
          progress={book.progress}
          chapter={book.chapter}
        />
      ))}
      <AddBook />
    </div>
  );
}

export default Books;
