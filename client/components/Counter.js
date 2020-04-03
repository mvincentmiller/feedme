import React, { useReducer, useContext } from 'react'
import fetch from 'node-fetch';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000', fetch
  })
});


// client
//   .query({
//     query: gql`
//       {
//   orders {
//     order_id
//     customer_id
//     employee_id
//     order_date
//     required_date
//     shipped_date
//     ship_via
//     freight
//     ship_name
//     ship_address
//     ship_city
//     ship_region
//     ship_postal_code
//     ship_country
//   }
// }
//     `
//   })
//   .then(result => console.log(result));

const CounterStateContext = React.createContext()
const CounterDispatchContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    case 'INCREASE_BY':
      return state + action.payload
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <ApolloProvider client={client}>    
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
    </ApolloProvider>
  )
}

export const useCount = () => useContext(CounterStateContext)
export const useDispatchCount = () => useContext(CounterDispatchContext)
