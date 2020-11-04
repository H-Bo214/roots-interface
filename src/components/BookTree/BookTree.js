import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import './BookTree.css';
import BookCard from '../BookCard/BookCard';
import AddCookBook from '../AddCookBook/AddCookBook';
import { GET_USER_COOKBOOKS } from '../../queries/Queries';
import { Link } from 'react-router-dom';

const BookTree = ({ user }) => {
  const id = user.id || '0';
  const { loading, error, data } = useQuery(GET_USER_COOKBOOKS, {
    variables: { id },
  });

  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data.getUserCookbooks);
    }
  }, [data]);

  const userCookBooks = books.map(book => {
    return (
      <Link key={book.id} to={`/recipe-book/${book.id}`}>
        <BookCard cookBookName={book.title} bookId={book.id} />;
      </Link>
    );
  });

  const addNewBook = (title, id) => {
    const newBooks = [...books, { title, id }];
    setBooks(newBooks);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.log(error);
    return <h1>error</h1>;
  }

  return (
    <section className="BookTree">
        <AddCookBook 
          addNewBook={addNewBook} 
          userId={id} 
          userName={user.name}
        />
      <div className="user-cook-books">
        {userCookBooks}
      </div>
    </section>
  );
};

export default BookTree;