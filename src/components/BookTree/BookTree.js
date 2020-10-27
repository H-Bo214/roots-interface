import React, { useState }from 'react';
import './BookTree.css';
import { mockUser } from '../../mockData/mockData'
import BookCard from '../BookCard/BookCard';
import AddCookBook from '../AddCookBook/AddCookBook';

const BookTree = () => {
  const [user, setUser] = useState(mockUser)
  const userCookBooks = user.ownedBooks.map(book => {
    return <BookCard 
    cookBookName={book.bookName}  
    key={book.bookId} 
    bookId={book.bookId}
    />
  })

  const addNewBook = (bookName) => {
    const newBook = [...user.ownedBooks, { bookName }]
    const updatedUser = 
    {
      name: user.name,
      userId: user.userId,
      ownedBooks: newBook
    }
    setUser(updatedUser)
  }


  //map over gotten user data to create multiple book cards
  // const userCookBooks = mockUser.ownedBooks.map(book => {
  //   return <BookCard 
  //   cookBookName={book.bookName}  
  //   key={book.bookId} 
  //   bookId={book.bookId}
  //   />
  // })
  return (
    <section className='BookTree'>
      <div className='user-icon-container'>
        <img src='https://image.flaticon.com/icons/png/512/17/17004.png' alt='user icon' className='user-img' />
      </div>
      {/* <div> */}
        {/* <AddCookBook addNewBook={addNewBook}/> */}
      {/* </div> */}
      <div className='user-cook-books'>
      <AddCookBook addNewBook={addNewBook}/>
        {userCookBooks}
      </div>
    </section>
  );
};

export default BookTree;
