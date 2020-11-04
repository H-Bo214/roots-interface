import React from 'react';
import './SingleRecipe.css';
import { useQuery } from '@apollo/client';
import { GET_RECIPE } from '../../queries/Queries';

const SingleRecipe = ({ recipeId }) => {
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { id: recipeId },
  });

  let recipeIngredients;
  if (data)
    recipeIngredients = data.getRecipe.ingredients.map(ingredient => {
      return (
        <li key={ingredient.id}>
          {ingredient.amount} {ingredient.unit} {ingredient.name}
        </li>
      );
    });

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.log(error);
    return <h1>error</h1>;
  }

  return (
    <div className="recipe-page-background">
      <div className="recipe-page-paper">
        <article className="recipe-page-content">
          <div className="recipe-text">
            <h1>{data.getRecipe.title}</h1>
            <br></br>
            <p>{data.getRecipe.author}</p>
            <p>{data.getRecipe.description}</p>
            <br></br>
            {recipeIngredients}
            <br></br>
            <p className="recipe-instructions">{data.getRecipe.instructions}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleRecipe;