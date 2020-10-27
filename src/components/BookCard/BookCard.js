import React, { Fragment } from 'react'
import './BookCard.css'
// import bookIcon from '../../assets/book-icon.png'
import spiralBook from '../../assets/spiral-book.svg'
const BookCard = ({ cookBookName, bookId }) => {
  return (
    <Fragment>
        <section className='family-cookbook' >
          <h3>{cookBookName}</h3>
          <img 
            src={spiralBook}
            alt='black book icon'
          />
        </section>
    </Fragment>
  )
}

export default BookCard;