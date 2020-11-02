import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';
import { GET_RECIPE } from '../../queries/Queries';
import { MockedProvider } from '@apollo/client/testing';

describe('Single Recipe', () => {
	let mocks;
	beforeEach(() => {
		mocks = [
			{
				request: {
					query: GET_RECIPE,
					variables: {
						id: '1',
					},
				},
				result: {
					data: {
						getRecipe: {
							author: 'Michael Alex',
							description: 'A hearty beef and potato stew',
							id: '1',
							ingredients: [
								{
									amount: 2,
									id: '1',
									name: 'beef',
									unit: 'lbs',
								},
								{
									amount: 3,
									id: '2',
									name: 'potato',
									unit: 'lbs',
								},
							],
							instructions: 'Cook in a crockpot',
							title: 'Campfire Stew',
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
					<SingleRecipe recipeId={'1'} />
				</MockedProvider>
			</MemoryRouter>
		);

		const loading = screen.getByText('Loading...');

		expect(loading).toBeInTheDocument();
	});

	it('should render correctly after loading', async () => {
		render(
			<MemoryRouter>
				<MockedProvider mocks={mocks}>
					<SingleRecipe recipeId={'1'} />
				</MockedProvider>
			</MemoryRouter>
		);

		const author = await waitFor(() => screen.getByText('Michael Alex'));
		const description = screen.getByText('A hearty beef and potato stew');
		const instructions = screen.getByText('Cook in a crockpot');
		const title = screen.getByText('Campfire Stew');
		const ingredientOne = screen.getByText('2 lbs beef');
		const ingredientTwo = screen.getByText('3 lbs potato');

		expect(author).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		expect(instructions).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(ingredientOne).toBeInTheDocument();
		expect(ingredientTwo).toBeInTheDocument();
	});
});
