import { gql } from 'urql'

const GET_USER = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`
