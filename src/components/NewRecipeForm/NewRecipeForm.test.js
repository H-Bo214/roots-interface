import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { CREATE_RECIPE, CREATE_INGREDIENT } from '../../queries/Mutations';

describe('NewRecipeForm', () => {
  let mocks;
  let addRecipeCalled = false;
  let addIngredientCalled = false;
  beforeEach(() => {
    mocks = [
      {
        request: {
          query: CREATE_RECIPE,
          variables: {
            description: 'recipe description',
            instructions: 'recipe instructions',
            title: 'recipe title',
            author: 'recipe author',
            cookbookId: '1',
          },
        },
        result: () => {
          addRecipeCalled = true;
          return {
            data: {
              createRecipe: {
                id: '1',
              },
            },
          };
        },
      },
      {
        request: {
          query: CREATE_INGREDIENT,
          variables: {
            amount: '1',
            name: 'flour',
            recipeId: '1',
            unit: 'cup',
          },
        },
        result: () => {
          addIngredientCalled = true;
          return {
            data: {
              createIngredient: {
                id: '1',
              },
            },
          };
        },
      },
    ];
  });
  it('should render all components of the page', () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <NewRecipeForm user={{}} bookId="1" />
        </MockedProvider>
      </MemoryRouter>,
    );

    const heading = screen.getByText('Add a recipe');
    const authorLabel = screen.getByText('Author:');
    const recipeAuthor = screen.getByPlaceholderText('Recipe author');
    const recipeLabel = screen.getByText('Recipe name:');
    const recipeName = screen.getByPlaceholderText('Recipe name');
    const descriptionLabel = screen.getByText('Description:');
    const recipeDescription = screen.getByPlaceholderText('Recipe description');
    const instructionsLabel = screen.getByText('Instructions:');
    const recipeInstructions = screen.getByPlaceholderText(
      'Recipe instructions',
    );
    const submitButton = screen.getByRole('button', {
      name: 'Add to my recipe book',
    });
    const ingredientLabel = screen.getByText('Ingredient:');
    const ingredientName = screen.getByPlaceholderText('Ingredient name');
    const unitLabel = screen.getByText('Unit:');
    const unit = screen.getByPlaceholderText('Unit');
    const measurementLabel = screen.getByText('Measurement:');
    const measurement = screen.getByPlaceholderText('Measurement');
    const addAdditionalIngredientButton = screen.getByRole('button', {
      name: 'Ingredient +',
    });
    const removeIngredientFieldButton = screen.getByRole('button', {
      name: 'Ingredient -',
    });

    expect(heading).toBeInTheDocument();
    expect(authorLabel).toBeInTheDocument();
    expect(recipeAuthor).toBeInTheDocument();
    expect(recipeLabel).toBeInTheDocument();
    expect(recipeName).toBeInTheDocument();
    expect(recipeDescription).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
    expect(recipeInstructions).toBeInTheDocument();
    expect(instructionsLabel).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(ingredientName).toBeInTheDocument();
    expect(ingredientLabel).toBeInTheDocument();
    expect(unit).toBeInTheDocument();
    expect(unitLabel).toBeInTheDocument();
    expect(measurement).toBeInTheDocument();
    expect(measurementLabel).toBeInTheDocument();
    expect(addAdditionalIngredientButton).toBeInTheDocument();
    expect(removeIngredientFieldButton).toBeInTheDocument();
  });

  it('should allow a user to add to the form inputs', () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <NewRecipeForm user={{}} bookId="1" />
        </MockedProvider>
      </MemoryRouter>,
    );

    const recipeAuthor = screen.getByPlaceholderText('Recipe author');
    const recipeName = screen.getByPlaceholderText('Recipe name');
    const recipeDescription = screen.getByPlaceholderText('Recipe description');
    const recipeInstructions = screen.getByPlaceholderText(
      'Recipe instructions',
    );
    const ingredientName = screen.getByPlaceholderText('Ingredient name');
    const unit = screen.getByPlaceholderText('Unit');
    const measurement = screen.getByPlaceholderText('Measurement');

    fireEvent.change(recipeAuthor, { target: { value: 'recipe author' } });
    fireEvent.change(recipeName, { target: { value: 'recipe title' } });
    fireEvent.change(recipeDescription, {
      target: { value: 'recipe description' },
    });
    fireEvent.change(recipeInstructions, {
      target: { value: 'recipe instructions' },
    });
    fireEvent.change(ingredientName, { target: { value: 'flour' } });
    fireEvent.change(unit, { target: { value: 'cup' } });
    fireEvent.change(measurement, { target: { value: '1' } });

    expect(recipeAuthor.value).toBe('recipe author');
    expect(recipeName.value).toBe('recipe title');
    expect(recipeDescription.value).toBe('recipe description');
    expect(recipeInstructions.value).toBe('recipe instructions');
    expect(ingredientName.value).toBe('flour');
    expect(unit.value).toBe('cup');
    expect(measurement.value).toBe('1');
  });

  it('should allow a user to add additional ingredient fields', () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <NewRecipeForm user={{}} bookId="1" />
        </MockedProvider>
      </MemoryRouter>,
    );

    const addAdditionalIngredientButton = screen.getByRole('button', {
      name: 'Ingredient +',
    });

    fireEvent.click(addAdditionalIngredientButton);

    const ingredientLabels = screen.getAllByText('Ingredient:');
    const ingredientNames = screen.getAllByPlaceholderText('Ingredient name');
    const unitLabels = screen.getAllByText('Unit:');
    const units = screen.getAllByPlaceholderText('Unit');
    const measurementLabels = screen.getAllByText('Measurement:');
    const measurements = screen.getAllByPlaceholderText('Measurement');

    expect(ingredientNames.length).toEqual(2);
    expect(ingredientLabels.length).toEqual(2);
    expect(units.length).toEqual(2);
    expect(unitLabels.length).toEqual(2);
    expect(measurements.length).toEqual(2);
    expect(measurementLabels.length).toEqual(2);
  });

  it('should allow a user to remove ingredient fields', () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <NewRecipeForm user={{}} bookId="1" />
        </MockedProvider>
      </MemoryRouter>,
    );

    const addAdditionalIngredientButton = screen.getByRole('button', {
      name: 'Ingredient +',
    });
    const removeIngredientFieldButton = screen.getByRole('button', {
      name: 'Ingredient -',
    });

    fireEvent.click(addAdditionalIngredientButton);
    fireEvent.click(addAdditionalIngredientButton);
    fireEvent.click(addAdditionalIngredientButton);
    fireEvent.click(removeIngredientFieldButton);

    const ingredientLabels = screen.getAllByText('Ingredient:');
    const ingredientNames = screen.getAllByPlaceholderText('Ingredient name');
    const unitLabels = screen.getAllByText('Unit:');
    const units = screen.getAllByPlaceholderText('Unit');
    const measurementLabels = screen.getAllByText('Measurement:');
    const measurements = screen.getAllByPlaceholderText('Measurement');

    expect(ingredientNames.length).toEqual(3);
    expect(ingredientLabels.length).toEqual(3);
    expect(units.length).toEqual(3);
    expect(unitLabels.length).toEqual(3);
    expect(measurements.length).toEqual(3);
    expect(measurementLabels.length).toEqual(3);
  });

  // it('should allow a user to submit a recipe after filling out all fields', async () => {
  //   render(
  //     <MemoryRouter>
  //       <MockedProvider mocks={mocks}>
  //         <NewRecipeForm user={{}} bookId="1" />
  //       </MockedProvider>
  //     </MemoryRouter>,
  //   );

  //   const recipeAuthor = screen.getByPlaceholderText('Recipe author');
  //   const recipeName = screen.getByPlaceholderText('Recipe name');
  //   const recipeDescription = screen.getByPlaceholderText('Recipe description');
  //   const recipeInstructions = screen.getByPlaceholderText(
  //     'Recipe instructions',
  //   );
  //   const ingredientName = screen.getByPlaceholderText('Ingredient name');
  //   const unit = screen.getByPlaceholderText('Unit');
  //   const measurement = screen.getByPlaceholderText('Measurement');
  //   const submitButton = screen.getByRole('button', {
  //     name: 'Add to my recipe book',
  //   });

  //   expect(addRecipeCalled).toBe(false);
  //   expect(addIngredientCalled).toBe(false);

  //   fireEvent.change(recipeAuthor, { target: { value: 'recipe author' } });
  //   fireEvent.change(recipeName, { target: { value: 'recipe title' } });
  //   fireEvent.change(recipeDescription, {
  //     target: { value: 'recipe description' },
  //   });
  //   fireEvent.change(recipeInstructions, {
  //     target: { value: 'recipe instructions' },
  //   });
  //   fireEvent.change(ingredientName, { target: { value: 'flour' } });
  //   fireEvent.change(unit, { target: { value: 'cup' } });
  //   fireEvent.change(measurement, { target: { value: '1' } });
  //   fireEvent.click(submitButton);

  //   await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
  //   expect(addRecipeCalled).toBe(true);

  //   await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
  //   expect(addIngredientCalled).toBe(true);
  // });
});