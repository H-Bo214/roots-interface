import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App/App';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { CREATE_COOKBOOK } from '../../queries/Mutations';

describe('App', () => {
  it('should pass a test', () => {
    expect(true).toEqual(true);
  });
});
