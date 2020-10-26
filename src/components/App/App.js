import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookTree from '../BookTree/BookTree';
import RecipeBook from '../RecipeBook/RecipeBook';
import Nav from '../Nav/Nav';
import './App.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route
          path='/recipe-book/:bookId'
          render={({ match }) => {
            return <RecipeBook />;
          }}
        />
        <Route path='/' component={BookTree} />
      </Switch>
    </div>
  );
};

export default App;
