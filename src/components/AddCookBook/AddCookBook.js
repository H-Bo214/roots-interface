import React, { useState } from 'react';
import './AddCookBook.css';

const AddCookBook = ({ addNewBook }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNewBook(value);
    setValue('');
  };

  return (
    <form className='cookbook-form' onSubmit={handleSubmit}>
      <h3>Add a new cookbook</h3>
      <label htmlFor='cookbook-name'></label>
      <input
        id='cookbook-name' 
        type='text' 
        className='new-book-input' 
        placeholder='Cookbook name...' 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type='submit'>Add to cookbooks</button>
    </form>
  );
};

export default AddCookBook;