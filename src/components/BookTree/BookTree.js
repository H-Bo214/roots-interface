import React, { useState } from 'react';
import { useQuery} from '@apollo/client'
import './BookTree.css';
import { mockUser } from '../../mockData/mockData';
import BookCard from '../BookCard/BookCard';
import AddCookBook from '../AddCookBook/AddCookBook';
import userIcon from '../../assets/tan-user-icon.svg';
import { GET_USER_COOKBOOKS } from '../../queries/Queries'



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

  const userID = '1'
  const {loading, error, data} = useQuery(GET_USER_COOKBOOKS, {
    variables: {id: userID},
  })

  if(loading) return <h1>Loading...</h1>;
  if(error) {
    console.log(error);
    return <h1>error</h1>;
  }

  return (
    <section className='BookTree'>
      <div className='user-icon-container'>
        <img 
          src={userIcon} 
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