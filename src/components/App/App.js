import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import BookTree from '../BookTree/BookTree';
import RecipeBook from '../RecipeBook/RecipeBook';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { useQuery} from '@apollo/client'
import './App.css';
import AddRecipe from '../AddRecipe/AddRecipe';
import { GET_USER } from '../../queries/Queries'



const App = () => {
  const id = '1' 
  const { loading, error, data } = useQuery(GET_USER, { variables: {id} })

  let [user, setUser] = useState({ email: '', id: '', name: '' })

  useEffect(() => {
    if(data) {
      user = {
        email: data.getUser.email,
        id: data.getUser.id,
        name: data.getUser.name,
      }
      setUser(user)
    }
  }, [data])

  if(loading) return <h1>Loading...</h1>;
  if(error) {
    console.log(error);
    return <h1>An error occurred getting your information. Please try again.</h1>;
  }

  return (
    <div className='App'>
      <Switch>
        <Route
          path='/recipe-book/:bookId'
          render={({ match }) => {
            return <RecipeBook  bookId={match.params.bookId} />;
          }}
        />
        <Route
          path='/add-recipe/:bookId'
          render={({ match }) => {
            return <AddRecipe user={user} bookId={match.params.bookId} />;
          }}
        />
        <Route
          path='/single-recipe/:recipeId'
          render={({ match }) => {
            return <SingleRecipe recipeId={match.params.recipeId}/>;
          }}
        />
        <Route 
          path='/'
          render={ () => {
           return <BookTree user={user} />
          }} 
           />
      </Switch>
      <Nav user={user} />
    </div>
  );
};

export default App;