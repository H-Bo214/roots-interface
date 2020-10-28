import React, { useState, Fragment } from 'react';
import './NewRecipeForm.css';
import { mockUser, mockCookBook } from '../../mockData/mockData'

const NewRecipeForm = () => {
  const [author, setAuthor] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')
      // Will need to send a mutation request to BE to add/create a new recipe  // Endpoint name createRecipe // 
      // format//
      //      {
  //  cookbookID: 'string',
  //  recipeName: 'string',
  //  recipeAuthor: 'string',
  //  description: 'sting', /* option to be empty*/
  //  instructions: 'string',
  //  ingredients: [
  //    {
  //      name: 'sting',
  //      unit: 'sting', /* option to be empty*/
  //      measurement: 0,
  //    },
  //    {
  //      name: 'sting',
  //      unit: 'sting', /* option to be empty*/
  //      measurement: 0,
  //    },
  //  ]
  // }
  
  return (
    <div>
      <div className='NewRecipeForm'>
        <form className='add-recipe-form'>
      <h1>Add a recipe</h1>
      <div className='recipe-details-container'>
          <div className='recipe-details'>
            <label htmlFor='author'>Author:</label>
            <input id="author" className='author' type='text' name='author' placeholder='Recipe Author' onChange={(e) => setAuthor(e.target.value)} />
            <label htmlFor='recipe-name'>Name:</label>
            <input id='recipe-name' className='recipe-name' type='text' name='name' placeholder='Name of Recipe' onChange={(e) => setName(e.target.value)} />
            <label htmlFor='description'>Description:</label>
            <textarea id='description' className='description' type='text' name='description' placeholder='Recipe Description' onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor='instructions'>Instructions:</label>
            <textarea id='instructions' className='instructions' type='text' name='instructions' placeholder='Recipe Instructions' onChange={(e) => setInstructions(e.target.value)}/>
            <div className='button-parent'>
              <button className='add-recipe-button' type ='button' onClick={() => console.log('add recipe')}>ADD TO MY RECIPE BOOK</button>
            </div>
          </div>
          <div className='ingredients-parents'>
            <label htmlFor='ingredient1'>Ingredient:</label>
            {/* will need to update the id of ingredient, unit and measurement to be dynamic. the input associated with the label must be a unique id. */}
            <input id='ingredient1' className='ingredient' type='text' name='ingredient1' placeholder='Ingredient' />
            <div className='unit-measurement-parent'>
              <label htmlFor='unit1'>Unit:</label>
              <input id='unit1' className='unit' type='text' name='unit1' placeholder='Unit' />
              <label htmlFor='measurement1'>Measurement:</label>
              <input id='measurement1' className='measurement' type='text' name='measurement1' placeholder='Measurement' />
            </div>
          </div>
      </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipeForm;
