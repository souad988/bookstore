import React from 'react'
import BookProgress from './BookProgress'
import './Book.css'
import BookChapter from './BookChapter'

function Book({...props}) {
  return (
    <div className='book_container'>
      <div className='book_info'>
        <div className='book_info_desc'>
          <strong>{props.book.category}</strong>
          <h3>{props.book.title}</h3>
          <strong>{props.book.author}</strong>
        </div>
        <div className='book_crud'>
          <button>Comments</button>
          <button className='remove_btn'>Remove</button>
          <button>Edit</button>
      </div>
      </div>

      <BookProgress book={props.book}/>
      <BookChapter book={props.book}/>
    </div>
  )
}

export default Book