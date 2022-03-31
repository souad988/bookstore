import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {addBook} from  '../redux/books/books'
import { v4 as uuid } from 'uuid';

function AddBook() {
  const dispatch=useDispatch();
  const [book,setBook]=useState(
    {
               id:uuid(),
               chapter:'chapter 0',
               progress:'0'
    }
  );
  const onChange=(e)=>{
    setBook({...book,
                    [e.target.name] : e.target.value,
                  })
                 
  }
  const handelClick=(e)=>{
    
    dispatch(addBook(book))
    setBook({
         id:uuid(),
         chapter:'chapter 0',
         progress:'0'
    })
  
  }
  return (
    <div className="addBook_container">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input  name='title' onChange={onChange} placeholder='Add title' value={book.title?book.title:''}/>
        <input  name='author' onChange={onChange} placeholder='Add author' value={book.author?book.author:''} />
        <select name="category" required defaultValue="Category" onChange={onChange}>
          <option value="Category" disabled hidden>Category</option>
          <option value="comedy">comedy</option>
          <option value="drama">drama</option>
          <option value="classic">classic</option>
        </select>
        <button type="button" onClick={handelClick} className="blue_btn">Add Book</button>

      </form>
    </div>
  );
}

export default AddBook;
