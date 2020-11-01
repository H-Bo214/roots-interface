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