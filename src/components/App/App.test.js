import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App/App';

describe('App', () => {
  it('should render App', () => {
    render(
      <App/>
    )
    const img = screen.getByRole('img', {name: 'logo'})
    const title = screen.getByRole('heading', {name: 'Hello World!'})

    expect(img).toBeInTheDocument()
    expect(title).toBeInTheDocument();
  })




  
})
