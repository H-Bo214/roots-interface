import React from 'react'
import { render, screen, fireEvent, queryByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm'
import { MemoryRouter } from 'react-router-dom'


describe('NewRecipeForm', () => {
 beforeEach(() => {

   render(
     <MemoryRouter>
       <NewRecipeForm />
     </MemoryRouter>
   )
 })

 it('should render a heading', () => {
  const h1 = screen.getByText('Add a recipe')
  expect(h1).toBeInTheDocument()
 })

 it('should render a Recipe author input', () => {
  const authorLabel = screen.getByText('Author:')
  const recipeAuthor = screen.getByPlaceholderText('Recipe author')
  expect(authorLabel).toBeInTheDocument()
  expect(recipeAuthor).toBeInTheDocument()
 })

 it('should render a Recipe name input', () => {
  const recipeLabel = screen.getByText('Recipe name:')
  const recipeName = screen.getByPlaceholderText('Recipe name')
  expect(recipeLabel).toBeInTheDocument()
  expect(recipeName).toBeInTheDocument()
 })

 it('should render a Recipe description input', () => {
  const descriptionLabel = screen.getByText('Description:')
  const recipeDescription = screen.getByPlaceholderText('Recipe description')
  expect(recipeDescription).toBeInTheDocument()
  expect(descriptionLabel).toBeInTheDocument()
 })

 it('should render Recipe instructions input', () => {
  const instructionsLabel = screen.getByText('Instructions:')
  const recipeInstructions = screen.getByPlaceholderText('Recipe instructions')
  expect(recipeInstructions).toBeInTheDocument()
  expect(instructionsLabel).toBeInTheDocument()
 })

 it('should render a Add to my recipe book button', () => {
  const button = screen.getAllByRole('button')
  expect(button[0]).toBeInTheDocument()
 })

 it('should render an Ingredient input', () => {
  const ingredientLabel = screen.getByText('Ingredient:')
  const ingredientName = screen.getByPlaceholderText('Ingredient name')
  expect(ingredientName).toBeInTheDocument()
  expect(ingredientLabel).toBeInTheDocument()
 })

 it('should render a unit input', () => {
  const unitLabel = screen.getByText('Unit:')
  const unit = screen.getByPlaceholderText('Unit')
  expect(unit).toBeInTheDocument()
  expect(unitLabel).toBeInTheDocument()
 })

 it('should render a measurement input', () => {
  const measurementLabel = screen.getByText('Measurement:')
  const measurement = screen.getByPlaceholderText('Measurement')
  expect(measurement).toBeInTheDocument()
  expect(measurementLabel).toBeInTheDocument()
 })

 it('should render a Ingredient + button', () => {
  const button = screen.getAllByRole('button')
  expect(button[1]).toBeInTheDocument()
 })

 it('should render a Ingredient - button', () => {
  const button = screen.getAllByRole('button')
  expect(button[2]).toBeInTheDocument()
 })

})