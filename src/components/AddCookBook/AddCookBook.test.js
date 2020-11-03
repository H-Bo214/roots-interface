import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCookBook from '../AddCookBook/AddCookBook';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { CREATE_COOKBOOK } from '../../queries/Mutations';

describe('AddCookBook', () => {
  let addNewBook, mocks;
  beforeEach(() => {
    addNewBook = jest.fn();
    mocks = [
      {
        request: {
          query: CREATE_COOKBOOK,
          variables: {
            userId: '1',
            author: 'Will be removed',
            title: 'Creator family cookbook',
          },
        },
        result: {
          data: {
            createCookbook: {
              id: '1',
            },
          },
        },
      },
    ];
  });

  it('should render with the correct elements', () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <AddCookBook addNewBook={addNewBook} userId="1" />
        </MockedProvider>
      </MemoryRouter>,
    );

    const h3 = screen.getByText('Add a new cookbook');
    const bookNameInput = screen.getByPlaceholderText('Cookbook name...');
    const button = screen.getAllByRole('button');

    expect(h3).toBeInTheDocument();
    expect(bookNameInput).toBeInTheDocument();
    expect(button[0]).toBeInTheDocument();
  });

  it('should be able to update the input field', () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <AddCookBook addNewBook={addNewBook} userId="1" />
        </MockedProvider>
      </MemoryRouter>,
    );

    const bookNameInput = screen.getByRole('textbox');
    expect(bookNameInput).toBeInTheDocument();

    fireEvent.change(bookNameInput, {
      target: { value: 'Creator family cookbook' },
    });
    expect(bookNameInput.value).toBe('Creator family cookbook');
  });

  it('should be able to add a new cookbook', async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <AddCookBook addNewBook={addNewBook} userId="1" />
        </MockedProvider>
      </MemoryRouter>,
    );

    const bookNameInput = screen.getByRole('textbox');

    fireEvent.change(bookNameInput, {
      target: { value: 'Creator family cookbook' },
    });
    expect(bookNameInput.value).toBe('Creator family cookbook');

    const button = screen.getAllByRole('button');
    expect(button[0]).toBeInTheDocument();

    fireEvent.click(button[0]);

    await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
    expect(addNewBook).toHaveBeenCalledTimes(1);
    expect(addNewBook).toHaveBeenCalledWith('Creator family cookbook', '1');
  });
});
