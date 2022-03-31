import React from 'react';
import Book from './book/Book';
import AddBook from './AddBook';

function Books() {
  const books = [
    
  ];
  return (
    <div className="books_container">
      {books.map((book) => (
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
