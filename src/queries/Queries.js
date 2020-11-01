import {gql} from '@apollo/client'

export const GET_USER_COOKBOOKS = gql`
  query getUserCookbooks($id: ID!) {
    getUserCookbooks(id: $id){
      user{
        id
        name
      }
      id
      title
    }
  }
`;