import React from 'react'
import '../AddRecipeFromBook/AddRecipeFromBook.css'

const AddRecipeFromBook = () => {
  return (
    <form className='book-form'>
      <h3>Add from an existing cookbook</h3>
      <select name='books'>
        <option>Book1</option>
        <option>Book2</option>
      </select>
      <select name='books'>
        <option>Recipe1</option>
        <option>Recipe2</option>
      </select>
      <button className='add-recipe-button' type ='button' onClick={() => console.log('add recipe')}>ADD TO MY RECIPE BOOK</button>
    </form>
  )
}

export default AddRecipeFromBook;