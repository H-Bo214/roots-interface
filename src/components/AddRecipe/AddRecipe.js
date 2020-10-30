import React from 'react'
// import AddRecipeFromBook from '../AddRecipeFromBook/AddRecipeFromBook';
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm';
import './AddRecipe.css'

const AddRecipe = () => {
  return (
    <div className='AddRecipe'>
      {/* Will need to render this component once we implement this feature. See the AddRecipeFromBook component file */}
      {/* <AddRecipeFromBook /> */}
      <NewRecipeForm />
    </div>
  )
}

export default AddRecipe;