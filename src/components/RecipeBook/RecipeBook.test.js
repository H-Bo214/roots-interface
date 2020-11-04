import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeBook from './RecipeBook';
import { GET_COOKBOOK } from '../../queries/Queries';
import { MockedProvider } from '@apollo/client/testing';

describe('Recipe Book', () => {
  let mocks;
  beforeEach(() => {
    mocks = [
      {
        request: {
          query: GET_COOKBOOK,
          variables: {
            id: '1',
          },
        },
        result: {
          data: {
            getCookbook: {
              author: 'Michael Alex',
              id: '1',
              title: "Michael's Cookbook",
              recipes: [
                {
                  title: 'Beef Stew',
                  id: '1',
                },
                {
                  title: 'Chowder',
                  id: '2',
                },
              ],
            },
          },
        },
      },
    ];
  });
  it('should render with loading while loading', () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <RecipeBook bookId={'1'} />
        </MockedProvider>
      </MemoryRouter>,
    );

    const loading = screen.getByText('Loading...');

    expect(loading).toBeInTheDocument();
  });

  it('should render correctly after loading', async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <RecipeBook bookId={'1'} />
        </MockedProvider>
      </MemoryRouter>,
    );

    const title = await waitFor(() => screen.getByText("Michael's Cookbook"));
    const author = screen.getByText('Hosted by: Michael Alex');
    const recipesTitle = screen.getByText('Recipes:');
    const recipeOne = screen.getByText('Beef Stew');
    const recipeTwo = screen.getByText('Chowder');
    const addRecipeButton = screen.getByRole('button', { name: 'Add Recipe' });

    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(recipesTitle).toBeInTheDocument();
    expect(recipeOne).toBeInTheDocument();
    expect(recipeTwo).toBeInTheDocument();
    expect(addRecipeButton).toBeInTheDocument();
  });
});