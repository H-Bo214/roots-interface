import React, { Fragment } from 'react'
import './BookCard.css'
import bookIcon from '../../assets/book-icon.png'

const BookCard = ({ cookBookName, bookId }) => {
  return (
    <Fragment>
        <section className='family-cookbook' >
          <h3>{cookBookName}</h3>
          <img 
            src={bookIcon}
            alt='black book icon'
          />
        </section>
    </Fragment>
  )
}

export default BookCard;