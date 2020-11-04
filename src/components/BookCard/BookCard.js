import React, { Fragment } from 'react';
import './BookCard.css';

const BookCard = ({ cookBookName, bookId }) => {
  return (
    <Fragment>
      <section className="family-cookbook">
        <h3>{cookBookName}</h3>
      </section>
    </Fragment>
  );
};

export default BookCard;