import React from 'react';
import Nav from './Nav';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  let name = 'Joe'
  it('Should have the correct content when rendered', () => {
    render(
      <MemoryRouter>
        <Nav 
          user={name}
        />
      </MemoryRouter>
    );

    const rootsLogo = screen.getByAltText('logo with word roots');

    expect(rootsLogo).toBeInTheDocument();
  });
});
