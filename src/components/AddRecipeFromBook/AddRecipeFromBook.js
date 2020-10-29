import React from 'react'
import '../AddRecipeFromBook/AddRecipeFromBook.css'

const AddRecipeFromBook = () => {
  return (
    <form className='book-form'>
      <h3>Add from an existing cookbook</h3>
      <label htmlFor='book-selection'>Select a book:</label>
      <select id='book-selection' name='books'>
        <option>Book1</option>
        <option>Book2</option>
      </select>
      <label htmlFor='recipe-selection'>Select a recipe:</label>
      <select id='recipe-selection' name='recipe'>
        <option>Recipe1</option>
        <option>Recipe2</option>
      </select>
      <button className='add-recipe-button' type ='button' onClick={() => console.log('add recipe')}>Add to my recipe book</button>
    </form>
  )
}

export default AddRecipeFromBook;