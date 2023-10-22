import { gql } from 'urql'

export const GET_USER = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`
