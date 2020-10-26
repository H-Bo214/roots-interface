import React, { Fragment } from 'react'
import './BookCard.css'
import bookIcon from '../../assets/book-icon.png'

const BookCard = ({ cookBookName }) => {
  return (
    <Fragment>
        <section className='family-cookbooks'>
          {cookBookName}
          <img 
            src={bookIcon}
          />
        </section>
    </Fragment>
  )
}

export default BookCard;