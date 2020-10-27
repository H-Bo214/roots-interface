import React, { useState } from 'react' 
import './AddCookBook.css'

const AddCookBook = ( { addNewBook } ) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    console.log('hello')
    if (!value) return;
    addNewBook(value)
    setValue('')
  }



  return (
    <form>
      <input
        type='text'
        className='new-book-input'
        placeholder='Add book name'
        value={value}
        onChange={ e => setValue(e.target.value)}
      />
      <button type='button' onClick={handleSubmit}>Add to my cookbooks</button>
    </form>
  )
}

export default AddCookBook;