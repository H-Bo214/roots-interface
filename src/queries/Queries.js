import {gql} from '@apollo/client'

export const GET_USER_COOKBOOKS = gql`
  query getUserCookbooks($id: ID!) {
    getUserCookbooks(id: $id){
      id
      title
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      email
      id
      name
    }
  }
`;

export const GET_RECIPE = gql`
  query getRecipe($id: ID!) {
    getRecipe(id: $id) {
      author
      description
      id
      ingredients {
        amount
        id
        name
        unit
      } 
      instructions
      title
    }
  }

`;

export const GET_COOKBOOK = gql`
  query getCookbook($id: ID!) {
    getCookbook(id: $id) {
      author
      id
      title
      recipes {
        title
        id
      }
    }
  }
`;