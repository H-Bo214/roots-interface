import {gql} from '@apollo/client'

export const GET_USER_COOKBOOKS = gql`
  query getUserCookBooks($id: String!) {
    data
  }
`;