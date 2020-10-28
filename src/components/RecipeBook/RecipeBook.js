import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeBook.css';

import { mockCookBook } from '../../mockData/mockData';

const RecipeBook = (props) => {
  // make gql for the cookbook based on an id
  const listOfRecipes = mockCookBook.recipes.map((recipe) => {
    return (
      <Link to={`/single-recipe/${recipe.recipeId}`}>
        <li key={recipe.recipeId}>{recipe.recipeName}</li>
      </Link>
    );
  });

  return (
    <div className='recipe-book-page'>
      <div className='recipe-book-wrapper'>
        <section className='recipe-book'>
          <div className='left-page'>
            <h1 className='book-title'>{mockCookBook.name}</h1>
          </div>
          <div className='right-page'>
            <p className='author'>Hosted by: {mockCookBook.author.userName}</p>

            <article className='recipe-list'>{listOfRecipes}</article>
            <Link to={`/add-recipe/${mockCookBook.id}`}>
              <button>Add Recipe</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipeBook;
