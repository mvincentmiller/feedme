import React from 'react'
import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Counter'
import { useQuery, gql } from '@apollo/client';

const ORDERS = gql`
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
const DisplayData = () => {
  const { loading, error, data } = useQuery(ORDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {console.log(data)}  
  return data.orders.map(({ ship_city, ship_country }) => (
    <div key={ship_city}>
      <p>
        {ship_city}, {ship_country}
      </p>
    </div>
  ));
}


export default () => {

  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = event =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = event =>
    dispatch({
      type: 'DECREASE',
    })


  return (
  <div>
  <h1>Home</h1>
 
  <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

   <ul>
    <li>
      <Link href="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
	    <Link href="/a?stuff=things" as="/a">
        <a>a?stuff</a>
      </Link>
    </li>
  </ul>
  <DisplayData/>
  </div>
)}