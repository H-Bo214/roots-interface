import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeBook.css';

const RecipeBook = (props) => {
  const listOfRecipes = (
    <ul>
      <li>Recipe 1 Name</li>
      <li>Recipe 2 Name</li>
      <li>Recipe 3 Name</li>
      <li>Recipe 4 Name</li>
    </ul>
  );
  return (
    <div>
      <h1>BookTitle</h1>
      <p>Book Owner</p>
      {listOfRecipes}
      <Link to={`/add-recipe/${props.bookId}`}>
        <button>Add Recipe</button>
      </Link>
    </div>
  );
};

export default RecipeBook;
