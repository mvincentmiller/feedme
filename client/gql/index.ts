import { gql } from '@apollo/client';


export const USERS = gql`
  query {
    users {
      username,
      email
    }
  }
`

export const ME = gql`
  query {
    me {
      username,
      email
    }
  }
`
// export const CREATE_USER = gql`
// mutation {
//   signup(username: "bob", email: "bob@bob.com", password: "password")
// }
// `

export const CREATE_USER = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password)
  }
`



export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

// export const LOGIN = gql`
//     mutation {
//       login(email: "johndoe@example.com", password: "password")
//     }   
// `

