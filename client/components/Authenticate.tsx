import React from 'react'
import { useDispatchAuth } from './Store'
import {set_token} from '../actions'


export default () => {

  const auth_dispatch = useDispatchAuth()

const getToken = async (uid) => {
    const data = {uid: uid};
    let response = await fetch('http://localhost:3000/get-token', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let r = await response.json()
    let token = await r.token 
    return token  
  }

    const authenticate = async () => {
      const result = await getToken(
        'random123',
      );
      console.log(result)
      set_token(auth_dispatch, result)
      localStorage.setItem('slinky', result)
    };

    const clear = async () => {
      localStorage.setItem('slinky', '')
      set_token(auth_dispatch, '')
    };


 return (
  <div>    
    <button className="button is-primary" onClick={() => authenticate() }>Authenticate</button>
    <button className="button is-primary" onClick={() => clear() }>Clear</button> 
    <style jsx>{`
        .button {
          margin: .5em;
          min-width: 2em;
      }
      `}</style>
  </div>
  
)}

