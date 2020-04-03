import React from 'react'
import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Store'


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
  </div>
)}