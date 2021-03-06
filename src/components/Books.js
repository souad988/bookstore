import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book/Book';
import AddBook from './AddBook';
import './App.css';
import { setBooks } from '../redux/books/books';
import BookStoreService from '../api/apiServices';

function Books() {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const reformulateData = (data) => {
    const books = Object.entries(data);
    return books.map((element) => ({ item_id: element[0], ...element[1][0] }));
  };
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await BookStoreService.apiGetBooks();
      dispatch(setBooks(reformulateData(response.data)));
    };

    fetchBooks();
    return () => {

    };
  }, []);

  return (
    <div className="books_container">
      {bookList ? bookList.map((item) => (
        <Book
          id={item.item_id}
          key={item.item_id}
          author={item.author}
          title={item.title}
          category={item.category}
          progress={item.progress}
          chapter={item.chapter}

        />
      )) : <h1 className="emptyStore">No books in the store</h1>}
      <AddBook />
    </div>
  );
}

export default Books;
