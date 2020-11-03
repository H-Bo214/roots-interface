import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddRecipe from './AddRecipe';
import { MemoryRouter } from 'react-router-dom';

describe('AddRecipe', () => {
  it('should render the basic areas of the container', () => {
    render(
      <MemoryRouter>
        <AddRecipe />
      </MemoryRouter>,
    );

    const h1 = screen.getByText('Add a recipe');
    const authorLabel = screen.getByText('Author:');
    const recipeAuthor = screen.getByPlaceholderText('Recipe author');

    expect(h1).toBeInTheDocument();
    expect(authorLabel).toBeInTheDocument();
    expect(recipeAuthor).toBeInTheDocument();
  });
});
