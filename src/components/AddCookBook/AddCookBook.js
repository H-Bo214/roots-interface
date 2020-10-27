import React, { useState } from 'react' 
import './AddCookBook.css'

const AddCookBook = ( { addNewBook } ) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return;
    addNewBook(value)
    setValue('')
  }



  return (
    <form className='cookbook-form'>
      <h3>Add a new cookbook</h3>
      <input
        type='text'
        className='new-book-input'
        placeholder='Cookbook name...'
        value={value}
        onChange={ e => setValue(e.target.value)}
      />
      <button type='button' onClick={handleSubmit}>ADD TO COOKBOOKS</button>
    </form>
  )
}

export default AddCookBook;