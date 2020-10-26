import React, { useState } from 'react';
import './NewRecipe.css';

const NewRecipeForm = () => {
  const [author, setAuthor] = useState('');
  const [name, setName] = useState('');

  return (
    <form onSubmit={() => console.log('enter the thing')}>
      <h1>Add A Recipe</h1>
      <input type='text' name='author' placeholder='Recipe Author' onChange={(e) => setAuthor(e.target.value)} />
      <input type='text' name='name' placeholder='Name of Recipe' onChange={(e) => setName(e.target.value)} />
      <textarea type='text' name='description' placeholder='Recipe Description' />
      <textarea type='text' name='instructions' placeholder='Recipe Instructions' />
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
      <button onClick={() => console.log('add recipe')}>Add to my recipe book</button>
    </form>
  );
};

export default NewRecipeForm;
