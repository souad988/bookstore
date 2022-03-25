import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './BookProgress.css'

function BookProgress({...props}) {
  return (
    <div className='bookProgress_container'>
        <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar value={props.book.progress}  />
        </div>
        <div>
            <span>{props.book.progress}%</span> <br />
            <span>Completed</span>    
        </div>
    </div>
  )
}

export default BookProgress