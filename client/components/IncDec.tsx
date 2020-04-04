import React from 'react'
import { useDispatchCount } from '../components/Store'
import {handleIncrease, handleDecrease} from '../actions'


export default () => {

  const dispatch = useDispatchCount()

 return (
  <div>
    <button className="button is-primary" onClick={(e) => handleIncrease(e, dispatch)}>+</button>
    <button className="button is-primary" onClick={(e) => handleDecrease(e, dispatch)}>-</button>
    <style jsx>{`
        .button {
          margin: .5em;
          min-width: 2em;
      }
      `}</style>
  </div>
  
)}

