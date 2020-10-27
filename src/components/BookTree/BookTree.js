import React from 'react';
import './BookTree.css';

const BookTree = () => {
  const userCookBooks = <h1>CookBooks</h1>;
  //map over gotten user data to create multiple book cards

  return (
    <div>
      <img src='https://image.flaticon.com/icons/png/512/17/17004.png' alt='user icon' />
      {userCookBooks}
    </div>
  );
};

export default BookTree;
