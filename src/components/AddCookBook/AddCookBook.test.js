import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddCookBook from '../AddCookBook/AddCookBook'
import { MemoryRouter } from 'react-router-dom'

describe('AddCookBook', () => {
  let addNewBook;
  beforeEach(() => {
    addNewBook = jest.fn()
    render(
      <MemoryRouter>
        <AddCookBook 
          addNewBook={addNewBook}
        />
      </MemoryRouter>
    )
  })

  it('should render a heading', () => {
    const h3 = screen.getByText('Add a new cookbook')
    expect(h3).toBeInTheDocument()
   })

  it('should render a Cookbook name input field', () => {
    const bookNameInput= screen.getByPlaceholderText('Cookbook name...')
    expect(bookNameInput).toBeInTheDocument()
   })

   it('should render an Add to cookbooks button', () => {
    const button = screen.getAllByRole('button')
    expect(button[0]).toBeInTheDocument()
   })

   it('should be able to update the input field', () => {
    const bookNameInput= screen.getByRole('textbox')
    expect(bookNameInput).toBeInTheDocument()

    fireEvent.change(bookNameInput, {target:{value:'Creator family cookbook'}})
    expect(bookNameInput.value).toBe('Creator family cookbook')
   })

   it('should be able to add a new cookbook',  () => {
    const bookNameInput= screen.getByRole('textbox')
    expect(bookNameInput).toBeInTheDocument()

    fireEvent.change(bookNameInput, { target: {value:'Creator family cookbook'} })
    expect(bookNameInput.value).toBe('Creator family cookbook')

    const button = screen.getAllByRole('button')
    expect(button[0]).toBeInTheDocument()

    fireEvent.click(button[0])
    expect(addNewBook).toHaveBeenCalledTimes(1)

   })

})