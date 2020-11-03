import { gql } from '@apollo/client';

export const CREATE_COOKBOOK = gql`
  mutation createCookbook($userId: ID!, $author: String!, $title: String!) {
    createCookbook(userId: $userId, author: $author, title: $title) {
      id
    }
  }
`;
