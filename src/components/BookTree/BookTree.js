import React, { useState } from 'react';
import './BookTree.css';
import { mockUser } from '../../mockData/mockData';
import BookCard from '../BookCard/BookCard';
import AddCookBook from '../AddCookBook/AddCookBook';

const BookTree = () => {
  const [user, setUser] = useState(mockUser);

  const userCookBooks = user.ownedBooks.map((book) => {
    return <BookCard 
      cookBookName={book.bookName} 
      key={book.bookId} 
      bookId={book.bookId} 
    />;
  });

  const addNewBook = (bookName) => {
    const newBook = [...user.ownedBooks, { bookName }];
    const updatedUser = {
      name: user.name,
      userId: user.userId,
      ownedBooks: newBook,
    };
    setUser(updatedUser);
  };

  return (
    <section className='BookTree'>
      <div className='root-background'></div>
      <div className='user-icon-container'>
        <img 
          src='https://image.flaticon.com/icons/png/512/17/17004.png' 
          alt='user icon' 
          className='user-img' 
        />
      </div>
      <div className='user-cook-books'>
        <AddCookBook 
         addNewBook={addNewBook} 
        />
        {userCookBooks}
      </div>
    </section>
  );
};

export default BookTree;

    // Will need to send a mutation request to BE to add/create a new cookbook // Endpoint name createCookbook //
    // format//
    //      {
    //        title: bookName
    //        author: {
    //          userId: user.userId,
    //          userName: user.name
    //       }