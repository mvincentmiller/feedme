import React from 'react'
import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Store'
import { DisplayData } from '../components/DisplayData'
import { useRouter } from 'next/router'
import {handleIncrease, handleDecrease} from '../actions'


const AboutPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()
  const router = useRouter()

  return (
    <>
      <h1>Stuff</h1>
      <p>What kind of stuff? {router.query.stuff || 'Nope, none of the things...'}</p>
      <p>Counter: {count}</p>
      <button onClick={(e) => handleIncrease(e, dispatch)}>+</button>
      <button onClick={(e) => handleDecrease(e, dispatch)}>-</button>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <DisplayData stuff={router.query.stuff}/>
      </p>
    </>
  )
}

export default AboutPage
