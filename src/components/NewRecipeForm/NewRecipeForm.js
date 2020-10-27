import React, { useState } from 'react';
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
    <form>
      <h1>Add A Recipe</h1>

      <input type='text' name='author' placeholder='Recipe Author' onChange={(e) => setAuthor(e.target.value)} />
      <input type='text' name='name' placeholder='Name of Recipe' onChange={(e) => setName(e.target.value)} />
      <textarea type='text' name='description' placeholder='Recipe Description' onChange={(e) => setDescription(e.target.value)} />
      <textarea type='text' name='instructions' placeholder='Recipe Instructions' onChange={(e) => setInstructions(e.target.value)}/>

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />

      <input type='text' name='ingredient1' placeholder='Ingredient' />
      <input type='text' name='ingredient1unit' placeholder='Unit' />
      <input type='text' name='measurement' placeholder='Measurement' />
      <button type ='button' onClick={() => console.log('add recipe')}>Add to my recipe book</button>
    </form>
  );
};

export default NewRecipeForm;
