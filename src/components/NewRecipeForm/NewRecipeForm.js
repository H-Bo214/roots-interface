import React, { useState, Fragment } from 'react';
import './NewRecipeForm.css';
import { mockUser, mockCookBook } from '../../mockData/mockData'
import { ValuesOfCorrectTypeRule } from 'graphql';

const NewRecipeForm = () => {
  const [author, setAuthor] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')
  const [ingredients, setIngredients] = useState([{ name: '', unit: '', measurement: 0,
  }])
  
  const handleChange = (e, index) => {
    const values = [...ingredients]
    values[index][e.target.name] = e.target.value
    setIngredients(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ingredients', ingredients)
  }
  
  const handleAddIngredient = (e) => {
    setIngredients([...ingredients, {
      name: '',
      unit: '', /* option to be empty*/
      measurement: 0,
    }])
  }
  
  const handleRemoveIngredient = (index) => {
    const values = [...ingredients]
    if (values.length > 1) {
      values.splice(index, 1)
      setIngredients(values)

    }
  }
  
  const ingredientFields = () => {
    return ingredients.map((ingredient, index) =>{
      return <div key={index}>
        <div className='unit-measurement-parent'>
          <label htmlFor='ingredient1'>Ingredient:</label>
          <input name='name' label='ingredient-name' value={ingredient.name} onChange={e => handleChange(e, index)} className='ingredient'/>
          <label htmlFor='unit1'>Unit:</label>
          <input id='unit1' className='unit' type='text' name='unit' placeholder='Unit' value={ingredient.unit} onChange={e => handleChange(e, index)}/>
          <label htmlFor='measurement1'>Measurement:</label>
          <input id='measurement1' className='measurement' type='text' name='measurement' placeholder='Measurement' value={ingredient.measurement} onChange={e => handleChange(e, index)}/>
          <button onClick={() => handleAddIngredient()}>Ingredient + </button>
          <button onClick={() => handleRemoveIngredient(index)}>Ingredient - </button>
        </div> 
      </div>
    })
  }

  return (
    <div>
      <div className='NewRecipeForm'>
        <form className='add-recipe-form' onSubmit={handleSubmit}>
      <h1>Add a recipe</h1>
      <div className='recipe-details-container'>
          <div className='recipe-details'>
            <label htmlFor='author'>Author:</label>
            <input id="author" className='author' type='text' name='author' placeholder='Recipe Author' onChange={(e) => setAuthor(e.target.value)} />
            <label htmlFor='recipe-name'>Name:</label>
            <input id='recipe-name' className='recipe-name' type='text' name='name' placeholder='Name of Recipe' onChange={(e) => setName(e.target.value)} />
            <label htmlFor='description'>Description:</label>
            <textarea id='description' className='description' type='text' name='description' placeholder='Recipe Description' onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor='instructions'>Instructions:</label>
            <textarea id='instructions' className='instructions' type='text' name='instructions' placeholder='Recipe Instructions' onChange={(e) => setInstructions(e.target.value)}/>
            <div className='button-parent'>
              <button className='add-recipe-button' type ='button' onClick={handleSubmit}>Add to my recipe book</button>
            </div>
          </div>
          <div className='ingredients-parents'>
            {ingredientFields()}
          </div>
      </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipeForm;


      // Will need to send a mutation request to BE to add/create a new recipe  // Endpoint name createRecipe // 
      // format//
      //      {
  //  cookbookID: 'string',
  //  recipeName: 'string',
  //  recipeAuthor: 'string',
  //  description: 'sting', /* option to be empty*/
  //  instructions: 'string',
  //  ingredients: [
  //    {
  //      name: 'sting',
  //      unit: 'sting', /* option to be empty*/
  //      measurement: 0,
  //    },
  //    {
  //      name: 'sting',
  //      unit: 'sting', /* option to be empty*/
  //      measurement: 0,
  //    },
  //  ]
  // }