import React, { useState } from 'react';
import './AddCookBook.css';
import { useMutation } from '@apollo/client';
import { CREATE_COOKBOOK } from '../../queries/Mutations';

const AddCookBook = ({ addNewBook, userId, userName }) => {
  const [value, setValue] = useState('');
  const [createBook, { data }] = useMutation(CREATE_COOKBOOK);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    createBook({
      variables: { userId: userId, author: userName, title: value },
    }).then(data => {
      addNewBook(value, data.data.createCookbook.id);
    });
    setValue('');
  };

  return (
    <form className="cookbook-form" onSubmit={handleSubmit}>
      <h3>Add a new cookbook</h3>
      <div className="cookbook-form-child">
        <label htmlFor="cookbook-name"></label>
        <input
          id="cookbook-name"
          type="text"
          className="new-book-input"
          placeholder="Cookbook name..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add to cookbooks</button>
      </div>
    </form>
  );
};

export default AddCookBook;