import React from 'react';
import './SingleRecipe.css';

import { mockRecipe } from '../../mockData/mockData';

const SingleRecipe = () => {
  // get the recipe from the server by id

  //map over ingredients
  const recipeIngredients = mockRecipe.ingredients.map((ingredient) => {
    return (
      <li>
        {ingredient.measurement} {ingredient.unit} {ingredient.name}
      </li>
    );
  });

  return (
    <div className='recipe-page-background'>
      <div className='recipe-page-paper'>
        <article className='recipe-page-content'>
          <div className='recipe-text'>
            <h1>{mockRecipe.recipeName}</h1>
            <br></br>
            <p>{mockRecipe.recipeAuthor}</p>
            <p>{mockRecipe.description}</p>
            <br></br>
            {recipeIngredients}
            <br></br>
            <p className='recipe-instructions'>{mockRecipe.instructions}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleRecipe;
