import { gql } from '@apollo/client';

export const CREATE_COOKBOOK = gql`
  mutation createCookbook($userId: ID!, $author: String!, $title: String!) {
    createCookbook(userId: $userId, author: $author, title: $title) {
      id
    }
  }
`;

export const CREATE_RECIPE = gql`
  mutation createRecipe(
    $description: String!
    $instructions: String!
    $title: String!
    $author: String!
    $cookbookId: ID!
  ) {
    createRecipe(
      description: $description
      instructions: $instructions
      title: $title
      author: $author
      cookbookId: $cookbookId
    ) {
      id
    }
  }
`;

export const CREATE_INGREDIENT = gql`
  mutation createIngredient(
    $amount: String!
    $name: String!
    $recipeId: ID!
    $unit: String!
  ) {
    createIngredient(
      amount: $amount
      name: $name
      recipeId: $recipeId
      unit: $unit
    ) {
      id
    }
  }
`;