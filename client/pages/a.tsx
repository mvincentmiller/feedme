import React from 'react'
import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Counter'
import { DisplayData } from '../components/DisplayData'
import { useRouter } from 'next/router'


const AboutPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()
  const router = useRouter()
	console.log(router.query)

  const handleIncrease = event =>
    dispatch({
      type: 'INCREASE',
    })
  const handleIncrease15 = event =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 15,
    })

  return (
    <>
      <h1>Stuff</h1>
      <p>what kind of stuff? {router.query.stuff}</p>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <DisplayData/>
      </p>
    </>
  )
}

export default AboutPage
