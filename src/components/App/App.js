import React, {useRef} from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import BookTree from '../BookTree/BookTree';
import RecipeBook from '../RecipeBook/RecipeBook';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

import './App.css';
import AddRecipe from '../AddRecipe/AddRecipe';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route
          path='/recipe-book/:bookId'
          render={({ match }) => {
            return <RecipeBook />;
          }}
        />
        <Route
          path='/add-recipe/:bookId'
          render={({ match }) => {
            return <AddRecipe />;
          }}
        />
        <Route
          path='/single-recipe/:recipeId'
          render={({ match }) => {
            return <SingleRecipe />;
          }}
        />
        <Route path='/' component={BookTree} />
      </Switch>
      <Nav />
    </div>
  );
};

export default App;
