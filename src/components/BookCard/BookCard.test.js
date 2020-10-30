import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BookCard from '../BookCard/BookCard'
import { MemoryRouter } from 'react-router-dom'

describe('BookCard', () => {
  let cookBookName
  beforeEach(() => {
    cookBookName = 'Creator family cookbook'
    render(
      <MemoryRouter>
        <BookCard 
          cookBookName={cookBookName} 
        />
      </MemoryRouter>
    )
  })

  it('should render a book title', () => {
    const h3 = screen.getByText(cookBookName)
    expect(h3).toBeInTheDocument()
  });

  it('should render a book image', () => {
    const img = screen.getByAltText('spiral book icon')
    expect(img).toBeInTheDocument()
  });

});
