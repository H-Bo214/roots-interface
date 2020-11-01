import React, { useState, useEffect } from 'react';
import { useQuery} from '@apollo/client'
import './BookTree.css';
import BookCard from '../BookCard/BookCard';
import AddCookBook from '../AddCookBook/AddCookBook';
import userIcon from '../../assets/tan-user-icon.svg';
import { GET_USER_COOKBOOKS } from '../../queries/Queries'



const BookTree = () => {
  // Get user would go first to get an id could be done on a app load as well
  const id = '1'
  const {loading, error, data} = useQuery(GET_USER_COOKBOOKS, {
    variables: {id},
  })
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if(data){
      setBooks(data.getUserCookbooks)
    }
  }, [data]);

  const userCookBooks = books.map((book) => {
      return <BookCard 
        cookBookName={book.title} 
        key={book.id} 
        bookId={book.id} 
      />;
    });

  const addNewBook = (title, id) => {
    const newBooks = [...books, { title, id }];
    // const updatedUser = {
    //     name: user.name,
    //     userId: user.userId,
    //     ownedBooks: newBook,
    //   };
    setBooks(newBooks);
    };
    
    
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
         userId={id}
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