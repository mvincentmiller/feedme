import { gql } from '@apollo/client';


export const ORDERS = gql`
  query {
    users
  }
`


// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password)
//   }


export const LOGIN = gql`
    mutation {
      login(email: "johndoe@example.com", password: "password")
    }   
`

export const SIGNUP = gql`
 mutation {
      signup (username: "johndoe", email: "johndoe@example.com", password: "password")
    }
`