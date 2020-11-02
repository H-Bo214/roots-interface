import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeBook.css';
import { useQuery } from '@apollo/client'
import { GET_COOKBOOK } from '../../queries/Queries'

const RecipeBook = ( { bookId }) => {
  const {loading, error, data} = useQuery(GET_COOKBOOK, {
    variables: { id: bookId },
  })

  let listOfRecipes;
  if(data) listOfRecipes = data.getCookbook.recipes.map((recipe) => {
    return (
      <Link to={`/single-recipe/${recipe.id}`} key={recipe.id}>
        <li>{recipe.title}</li>
      </Link>
    );
  });

  if(loading) return <h1>Loading...</h1>;
  if(error) {
    console.log(error);
    return <h1>error</h1>;
  }

  return (
    <div className='recipe-book-page'>
      <div className='recipe-book-wrapper'>
        <section className='recipe-book'>
          <div className='left-page'>
            <h1 className='book-title'>{data.getCookbook.title}</h1>
          </div>
          <div className='right-page'>
            <p className='author'>Hosted by: {data.getCookbook.author}</p>
            <h3 className='right-page-title'>Recipes:</h3>
            <article className='recipe-list'>{listOfRecipes}</article>
            <Link to={`/add-recipe/${bookId}`}>
              <button>Add Recipe</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipeBook;
