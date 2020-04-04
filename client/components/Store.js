import React, { useReducer, useContext } from 'react'
import fetch from 'node-fetch';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from "apollo-link-context";

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: 'http://localhost:4000', fetch
//   })
// });


const httpLink = createHttpLink({
  uri: 'http://localhost:4000', fetch
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const AuthStateContext = React.createContext()
const AuthDispatchContext = React.createContext()


const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.payload  
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [auth_state, auth_dispatch] = useReducer(authReducer, 0)

  return (
    
    <AuthDispatchContext.Provider value={auth_dispatch}>
      <AuthStateContext.Provider value={auth_state}>
      <ApolloProvider client={client}> 
        {children}
    </ApolloProvider>
    </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
    
  )
}

export const useToken = () => useContext(AuthStateContext)
export const useDispatchAuth = () => useContext(AuthDispatchContext)


