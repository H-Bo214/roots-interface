import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App/App';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { GET_USER, GET_USER_COOKBOOKS } from '../../queries/Queries';

const waitForData = () =>
  new Promise(res => setTimeout(res, 0)).catch(err => console.log(err));

describe('App', () => {
  let mockUser, mockGetCookbooks;
  beforeEach(() => {
    mockUser = [
      {
        request: {
          query: GET_USER,
          variables: {
            id: '6',
          },
        },
        result: {
          data: {
            getUser: {
              email: 'tyler@creatorFam.com',
              id: '6',
              name: 'Tyler',
            },
          },
        },
      },
    ];
  });

  mockGetCookbooks = [
    {
      request: {
        query: GET_USER_COOKBOOKS,
        variables: {
          id: '6',
        },
      },
      result: {
        data: {
          getUserCookbooks: [
            {
              id: '1',
              title: "Neeru's Cookbook",
            },
            {
              id: '2',
              title: 'Indian Food',
            },
          ],
        },
      },
    },
  ];

  it('should render loading state initially', async () => {
    await waitForData();
    render(
      <MemoryRouter>
        <MockedProvider mocks={mockUser}>
          <App />
        </MockedProvider>
      </MemoryRouter>,
    );

    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });
});