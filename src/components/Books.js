import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book/Book';
import AddBook from './AddBook';
import './App.css'
import {setBooks} from '../redux/books/books'
import BookStoreService from '../api/apiServices'

function Books() {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchBooks=async()=>{
      try {
        const response = await BookStoreService.apiGetBooks();
        console.log('from books js::',response.data);
        dispatch(setBooks(response.data));
        console.log(bookList)
      } catch (error) {
        console.error(error);
      }
    }

    fetchBooks();
    return () => {
      
    }
  },[])
  
  return (
    <div className="books_container">
      {bookList?Object.entries(bookList).map((item_id,book) => (
        <Book
          id={item_id}
          key={item_id}
          author={book.author}
          title={book.title}
          category={book.category}
          progress={book.progress}
          chapter={book.chapter}
        />
      )):<h1 className='emptyStore'>No books in the store</h1>}
      <AddBook />
    </div>
  );
}

export default Books;
