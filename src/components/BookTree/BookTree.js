import React from 'react';
import './BookTree.css';
import { mockUser } from '../../mockData/mockData'
import BookCard from '../BookCard/BookCard';

const BookTree = () => {
  const userCookBooks = mockUser.ownedBooks.map(book => {
    return <BookCard cookBookName={book.bookName} />
  })
  //map over gotten user data to create multiple book cards
  return (
    <section className='BookTree'>
      <div className='user-img'>
        <img src='https://image.flaticon.com/icons/png/512/17/17004.png' alt='user icon' />
      </div>
      {userCookBooks}
    </section>
  );
};

export default BookTree;
