import React from 'react';
import Book from './book/Book';
import AddBook from './AddBook';

function Books() {
  const books = [
    {
      id: 1,
      title: 'The Yellow Meads of Asphodel',
      author: 'H. E. Bates',
      category: 'action',
      progress: '64',
      chapter: 'chapter 17',
    },
    {
      id: 3,
      title: 'The Wives of Bath Susan Swan',
      author: 'Geoffrey Chaucer',
      category: 'comedy',
      progress: '16',
      chapter: 'chapter 17',
    },
    {
      id: 2,
      title: 'The World, the Flesh and the Devil',
      author: 'Mary Elizabeth Braddon',
      category: 'drama',
      progress: '8',
      chapter: 'chapter 17',
    },
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
