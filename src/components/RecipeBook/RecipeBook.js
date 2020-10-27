import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeBook.css';

import { mockCookBook } from '../../mockData/mockData';

const RecipeBook = (props) => {
  // make gql for the cookbook based on an id
  const listOfRecipes = mockCookBook.recipes.map((recipe) => {
    return <li key={recipe.recipeId}>{recipe.recipeName}</li>;
  });

  return (
    <section>
      <h1>{mockCookBook.name}</h1>
      <p>{mockCookBook.author.userName}</p>
      {listOfRecipes}
      <Link to={`/add-recipe/${mockCookBook.id}`}>
        <button>Add Recipe</button>
      </Link>
    </section>
  );
};

export default RecipeBook;
