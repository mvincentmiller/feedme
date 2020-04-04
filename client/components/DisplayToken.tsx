import React from 'react'
import { useToken } from '../components/Store'
import { useDispatchAuth } from './Store'
import {set_token} from '../actions'

export default () => {
   
    const token = useToken()
    const auth_dispatch = useDispatchAuth()
   
    const clear = async () => {
        localStorage.setItem('slinky', '')
        set_token(auth_dispatch, '')
      };


if (token) { return ( <div>
<div className="box">
<p className="wrap"> 
 {token}
</p>
<p><button className="button is-primary" onClick={() => clear() }>Clear</button> </p>
</div>
<style jsx>{`
      
      .box {
          max-width: 300px;
      }

      .wrap {
          font-size: 6pt;
          max-width:300px;
          word-wrap: break-word;
          overflow-wrap: anywhere;
      }

      .button {
        margin: .5em;
        min-width: 2em;
        margin-top: 1em;
    }
          
      `}</style>
</div>
)
} else return <></>}