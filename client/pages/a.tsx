import React from 'react'
import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Counter'
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
      <h1>ABOUT</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </>
  )
}

export default AboutPage
