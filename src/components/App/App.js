import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import BookTree from '../BookTree/BookTree';
import RecipeBook from '../RecipeBook/RecipeBook';
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
// const client  = new ApolloClient({// uri:'your graphQL route'})

const App = () => {
  return (
    // <ApolloProvider client={/* should be 'client', no quotes */}>
    <body>
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
            return <NewRecipeForm />;
          }}
        />
        <Route
          path='/single-recipe/:recipeId'
          render={({ match }) => {
            return <SingleRecipe />;
          }}
        />
        <Route
          path='/add-recipe/:bookId'
          render={({ match }) => {
            return <NewRecipeForm />;
          }}
        />
        <Route path='/' component={BookTree} />
      </Switch>
      <Nav />
    </body>
    // </ApolloProvider>
  );
};

export default App;
