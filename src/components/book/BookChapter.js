import React from 'react'

function BookChapter({...props}) {
  return (
    <div className='bookChapter_container'>
         <h4>Current Chapter</h4>
         <h5>{props.book.chapter}</h5>
         <button className='blue_btn'>Update Progress</button>
    </div>
  )
}

export default BookChapter