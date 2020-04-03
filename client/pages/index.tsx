import React from 'react'
import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Store'
import {handleIncrease, handleDecrease} from '../actions'

export default () => {

  const count = useCount()
  const dispatch = useDispatchCount()

 return (
  <div>
  <h1>Home</h1>
 
  <p>Counter: {count}</p>
  <button onClick={(e) => handleIncrease(e, dispatch)}>+</button>
      <button onClick={(e) => handleDecrease(e, dispatch)}>-</button>

   <ul>
    <li>
      <Link href="/stuff" as="/nothinghereandmasked">
        <a>Load DisplayData but don't load anything.</a>
      </Link>
    </li>
    <li>
	    <Link href="/stuff?stuff=orders">
        <a>DisplayData with a query parameter 'orders'</a>
      </Link>
    </li>
  </ul>
  </div>
)}