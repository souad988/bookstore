import React, {useState} from 'react'
import Book from './Book'

function Books() {
  const [books,setBooks]=useState([
    {title:'The Yellow Meads of Asphodel',
     author:'H. E. Bates',
     category:'action',
     progress:'64'
    },
    {title:'The World, the Flesh and the Devil',
     author:'Mary Elizabeth Braddon',
     category:'drama',
     progress:'8'
    },
    {title:'The Wives of Bath	Susan Swan',
     author:'Geoffrey Chaucer',
     category:'comedie',
     progress:'16'
    }
  ])
  return (
    <div className='books_container'>
      {books.map(book=>
                <Book book={book} />
      )}
      <button>Remove</button> 
    </div>
  )
}

export default Books