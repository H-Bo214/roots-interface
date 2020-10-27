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
    <div>
      <h1>{mockRecipe.recipeName}</h1>
      <h2>{mockRecipe.recipeAuthor}</h2>
      <p>{mockRecipe.description}</p>
      {recipeIngredients}
      <p>{mockRecipe.instructions}</p>
    </div>
  );
};

export default SingleRecipe;
