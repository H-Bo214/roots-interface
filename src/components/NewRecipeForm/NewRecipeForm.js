import React, { useState } from 'react';
import './NewRecipeForm.css';
import { useMutation } from '@apollo/client';
import { CREATE_RECIPE, CREATE_INGREDIENT } from '../../queries/Mutations';
import { useHistory } from 'react-router-dom';

const NewRecipeForm = ({ user, bookId }) => {
  const history = useHistory()
  const [author, setAuthor] = useState('recipe author');
  const [name, setName] = useState('recipe title');
  const [description, setDescription] = useState('recipe description');
  const [instructions, setInstructions] = useState('recipe instructions');
  const [ingredients, setIngredients] = useState([
    { name: '', unit: '', measurement: 0 },
  ]);
  const [
    createRecipe,
    { loading, error, data: createRecipeData = {} },
  ] = useMutation(CREATE_RECIPE);
  const [createIngredient] = useMutation(CREATE_INGREDIENT);

  const handleChange = (e, index) => {
    const values = [...ingredients];
    values[index][e.target.name] = e.target.value;
    setIngredients(values);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await createRecipe({
      variables: {
        description,
        instructions,
        title: name,
        author,
        cookbookId: bookId,
      },
    }).catch(err => console.log(err));

    createAllIngredients(res.data.createRecipe.id);

    history.push(`/recipe-book/${bookId}`)
  };

  const createAllIngredients = id => {
    ingredients.map(async ingredient => {
      await createIngredient({
        variables: {
          amount: ingredients.measurement,
          name: ingredient.name,
          recipeId: id,
          unit: ingredient.unit,
        },
      }).catch(err => console.log(err));
    });
  };

  const handleAddIngredient = e => {
    e.preventDefault();
    setIngredients([
      ...ingredients,
      {
        name: '',
        unit: '' /* option to be empty*/,
        measurement: 0,
      },
    ]);
  };

  const handleRemoveIngredient = (e, index) => {
    e.preventDefault();
    const values = [...ingredients];
    if (values.length > 1) {
      values.splice(index, 1);
      setIngredients(values);
    }
  };

  const ingredientFields = () => {
    return ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <div className="unit-measurement-parent">
            <label htmlFor={`ingredient${index}`}>Ingredient:</label>
            <input
              maxLength="30"
              id={`ingredient${index}`}
              name="name"
              className="ingredient"
              value={ingredient.name}
              type="text"
              placeholder="Ingredient name"
              onChange={e => handleChange(e, index)}
            />
            <label htmlFor={`unit${index}`}>Unit:</label>
            <input
              maxLength="10"
              id={`unit${index}`}
              name="unit"
              className="unit"
              value={ingredient.unit}
              type="text"
              placeholder="Unit"
              onChange={e => handleChange(e, index)}
            />
            <label htmlFor={`measurement${index}`}>Measurement:</label>
            <input
              maxLength="3"
              id={`measurement${index}`}
              name="measurement"
              className="measurement"
              value={ingredient.measurement}
              type="text"
              placeholder="Measurement"
              onChange={e => handleChange(e, index)}
            />
            <button onClick={(e) => handleAddIngredient(e)}>Ingredient + </button>
            <button onClick={(e) => handleRemoveIngredient(e, index)}>
              Ingredient -{' '}
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="NewRecipeForm">
        <form className="add-recipe-form" onSubmit={handleSubmit}>
          <h1>Add a recipe</h1>
          <div className="recipe-details-container">
            <div className="recipe-details">
              <label htmlFor="author">Author:</label>
              <input
                id="author"
                className="author"
                type="text"
                name="author"
                placeholder="Recipe author"
                onChange={e => setAuthor(e.target.value)}
              />
              <label htmlFor="recipe-name">Recipe name:</label>
              <input
                id="recipe-name"
                className="recipe-name"
                type="text"
                name="name"
                placeholder="Recipe name"
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                className="description"
                type="text"
                name="description"
                placeholder="Recipe description"
                onChange={e => setDescription(e.target.value)}
              />
              <label htmlFor="instructions">Instructions:</label>
              <textarea
                id="instructions"
                className="instructions"
                type="text"
                name="instructions"
                placeholder="Recipe instructions"
                onChange={e => setInstructions(e.target.value)}
              />
              <div className="button-parent">
                <button
                  className="add-recipe-button"
                  type="button"
                  onClick={handleSubmit}
                >
                  Add to my recipe book
                </button>
              </div>
            </div>
            <div className="ingredients-parents">{ingredientFields()}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipeForm;