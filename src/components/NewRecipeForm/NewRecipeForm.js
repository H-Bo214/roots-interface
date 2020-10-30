import React, { useState } from 'react';
import './NewRecipeForm.css';

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
          <label htmlFor={`ingredient${index}`}>Ingredient:</label>
          <input 
            maxLength='30' 
            id={`ingredient${index}`}
            name='name' 
            className='ingredient'
            value={ingredient.name} 
            type='text'
            placeholder='Ingredient name'
            onChange={e => handleChange(e, index)} 
          />
          <label htmlFor={`unit${index}`}>Unit:</label>
          <input 
            maxLength='10' 
            id={`unit${index}`} 
            name='unit' 
            className='unit' 
            value={ingredient.unit} 
            type='text' 
            placeholder='Unit' 
            onChange={e => handleChange(e, index)}
          />
          <label htmlFor={`measurement${index}`}>Measurement:</label>
          <input 
            maxLength='3' 
            id={`measurement${index}`} 
            name='measurement' 
            className='measurement' 
            value={ingredient.measurement} 
            type='text'
            placeholder='Measurement' 
            onChange={e => handleChange(e, index)}
          />
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
              <input 
                id="author" 
                className='author' 
                type='text' 
                name='author' 
                placeholder='Recipe author' 
                onChange={(e) => setAuthor(e.target.value)} 
              />
              <label htmlFor='recipe-name'>Recipe name:</label>
              <input 
                id='recipe-name' 
                className='recipe-name' 
                type='text' 
                name='name' 
                placeholder='Recipe name' 
                onChange={(e) => setName(e.target.value)} 
              />
              <label htmlFor='description'>Description:</label>
              <textarea 
                id='description' 
                className='description' 
                type='text' 
                name='description' 
                placeholder='Recipe description' 
                onChange={(e) => setDescription(e.target.value)} 
              />
              <label htmlFor='instructions'>Instructions:</label>
              <textarea 
                id='instructions' 
                className='instructions' 
                type='text' 
                name='instructions' 
                placeholder='Recipe instructions' 
                onChange={(e) => setInstructions(e.target.value)}
              />
              <div className='button-parent'>
                <button 
                  className='add-recipe-button' 
                  type ='button' 
                  onClick={handleSubmit}>Add to my recipe book
                </button>
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