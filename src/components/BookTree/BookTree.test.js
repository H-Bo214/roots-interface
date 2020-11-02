import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookTree from './BookTree';
import { GET_USER_COOKBOOKS } from '../../queries/Queries'
import { MockedProvider} from '@apollo/client/testing'


describe('BookTree', () => {
  let mocks;
  beforeEach(() => {
    mocks = [
      {
        request: {
          query: GET_USER_COOKBOOKS,
          variables: {
            id: '0',
          },
        },
        result: {
          data: {
            "getUserCookbooks": [
              {
                "id": "1",
                "title": "Neeru's Cookbook",
              },
              {
                "id": "2",
                "title": "Indian Food",
              }
            ]
          }
        },
      },
    ]
  })
  it('should render with while loading', () => {
    let name = 'Joe'
    let id = '0'
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <BookTree
            user={name}
            id={id}
          />
        </MockedProvider>
      </MemoryRouter>
    );

    const loading = screen.getByText('Loading...')

    expect(loading).toBeInTheDocument();
  });

  it('should render correctly after loading', async () => {
    let name = 'Joe'
    let id = '0'
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <BookTree
            user={name}
            id={id}
          />
        </MockedProvider>
      </MemoryRouter>
    );

    const userIcon = await waitFor(() => screen.getByAltText('user icon'));
    const addCookBookButton = screen.getByRole('button', {name: 'Add to cookbooks'})
    const cookbookOne = screen.getByText('Neeru\'s Cookbook');
    const cookbookTwo = screen.getByText('Indian Food');

    expect(userIcon).toBeInTheDocument();
    expect(addCookBookButton).toBeInTheDocument();
    expect(cookbookOne).toBeInTheDocument();
    expect(cookbookTwo).toBeInTheDocument();
  });
});