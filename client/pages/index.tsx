import React from 'react'
import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Store'
import IncDec from '../components/IncDec'
import DisplayCounter from '../components/DisplayCounter'


export default () => {

  const count = useCount()
  const dispatch = useDispatchCount()

 return (
  <div className="section">
 <DisplayCounter/>
<IncDec/>
 
 <ul>
    <li>
      <Link href="/stuff" as="/nothinghereandmasked">
        <a className="button">Load DisplayData but don't load anything.</a>
      </Link>
    </li>
    <li>
	    <Link href="/stuff?stuff=orders">
        <a className="button">DisplayData with a query parameter 'orders'</a>
      </Link>
    </li>
  </ul>


      
<style jsx>{`
        .button {
          margin: .5em;
          min-width: 2em;
      }
      `}</style>
 
  </div>
  
)}

