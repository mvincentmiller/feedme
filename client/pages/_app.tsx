import App from 'next/app'
import { CounterProvider } from '../components/Counter'
import fetch from 'node-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000', fetch
  })
});


client
  .query({
    query: gql`
      {
  orders {
    order_id
    customer_id
    employee_id
    order_date
    required_date
    shipped_date
    ship_via
    freight
    ship_name
    ship_address
    ship_city
    ship_region
    ship_postal_code
    ship_country
  }
}
    `
  })
  .then(result => console.log(result));



class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    )
  }
}

export default MyApp
