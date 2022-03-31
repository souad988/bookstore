import React,{useState} from 'react';
import {useDispatcher} from 'react-redux'
import {addBook} from  '../redux/books/books'

function AddBook() {
  const dispatch=useDispatcher();
  const [book,useBook]=useState(
    {
      id: 1,
      title: 'The Yellow Meads of Asphodel',
      author: 'H. E. Bates',
      category: 'action',
      progress: '64',
      chapter: 'chapter 17',
    }
  );

  return (
    <div className="addBook_container">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input />
        <select name="category" required defaultValue="Category">
          <option value="Category" disabled hidden>Category</option>
          <option value="comedy">comedy</option>
          <option value="drama">drama</option>
          <option value="classic">classic</option>
        </select>
        <button type="button" onClick={()=>dispatch(addBook())} className="blue_btn">Add Book</button>

      </form>
    </div>
  );
}

export default AddBook;
