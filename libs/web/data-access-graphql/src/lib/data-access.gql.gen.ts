import * as Types from './types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetUsersQuery = {
  __typename?: 'Query'
  users: Array<{ __typename?: 'User'; id: string; name?: string | null }>
}

export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`

export function useGetUsersQuery(
  options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>,
) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables>({
    query: GetUsersDocument,
    ...options,
  })
}
