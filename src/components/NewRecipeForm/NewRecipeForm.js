import React, { useState, Fragment } from 'react';
import './NewRecipe.css';
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
      <h1>Add a recipe</h1>
      <div className='NewRecipeForm'>
        <form className='add-recipe-form'>
          <div className='recipe-details'>
            <input className='author' type='text' name='author' placeholder='Recipe Author' onChange={(e) => setAuthor(e.target.value)} />
            <input className='recipe-name' type='text' name='name' placeholder='Name of Recipe' onChange={(e) => setName(e.target.value)} />
            <textarea className='description' type='text' name='description' placeholder='Recipe Description' onChange={(e) => setDescription(e.target.value)} />
            <textarea className='instructions' type='text' name='instructions' placeholder='Recipe Instructions' onChange={(e) => setInstructions(e.target.value)}/>
            <div className='button-parent'>
              <button className='add-recipe-button' type ='button' onClick={() => console.log('add recipe')}>ADD TO MY RECIPE BOOK</button>
            </div>
          </div>
          <div className='ingredients-parents'>
            <input className='ingredient' type='text' name='ingredient1' placeholder='Ingredient' />
            <div className='unit-measurement-parent'>
              <input className='unit' type='text' name='ingredient1unit' placeholder='Unit' />
              <input className='measurement' type='text' name='measurement' placeholder='Measurement' />
            </div>
            <input className='ingredient' type='text' name='ingredient1' placeholder='Ingredient' />
            <div className='unit-measurement-parent'>
              <input className='unit' type='text' name='ingredient1unit' placeholder='Unit' />
              <input className='measurement' type='text' name='measurement' placeholder='Measurement' />
            </div>
            <input className='ingredient' type='text' name='ingredient1' placeholder='Ingredient' />
            <div className='unit-measurement-parent'>
              <input className='unit' type='text' name='ingredient1unit' placeholder='Unit' />
              <input className='measurement' type='text' name='measurement' placeholder='Measurement' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipeForm;
