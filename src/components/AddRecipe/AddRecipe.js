import React from 'react'
import AddRecipeFromBook from '../AddRecipeFromBook/AddRecipeFromBook';
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm';
import './AddRecipe.css'

const AddRecipe = () => {
  return (
    <div className='AddRecipe'>
      <AddRecipeFromBook />
      <NewRecipeForm />
    </div>
  )
}

export default AddRecipe;