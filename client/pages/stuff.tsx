import React from 'react'
import Link from 'next/link'

import { DisplayData } from '../components/DisplayData'
import { useRouter } from 'next/router'
import DisplayToken from '../components/DisplayToken'

const AboutPage = () => {
   
  const router = useRouter()

  return (
    <div className="columns">
      <div id="info" className="column">
      <div className="box">
      <p>What kind of stuff?</p> 
      <p>{router.query.stuff || 'Nope, none of the things...'}</p>
     </div>
     <DisplayToken/>
        <p>
        <Link href="/">
          <a className="button">Home</a>
        </Link>
        </p>
        </div>
        <div className="column">
        <div className="section">
        <DisplayData stuff={router.query.stuff}/>
        </div>
        </div>
        <style jsx>{`
        .button {
          margin: .5em;
          min-width: 2em;
      }
      `}</style>
    </div>
  )
}

export default AboutPage
