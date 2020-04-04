import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { useDispatchAuth } from './Store'
import {set_token} from '../actions'
import { LOGIN } from '../gql'



export default () => {

    const auth_dispatch = useDispatchAuth()

    useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  let email
  let password
  const [login, { data }] = useMutation(LOGIN)

  if (data) {
    set_token(auth_dispatch, data.login)
    localStorage.setItem('slinky', data.login)
    console.log(data.login)
  }

  const clear = async () => {
    localStorage.setItem('slinky', '')
    set_token(auth_dispatch, '')
  };


  
  return (
    <div className="box">
    <div className='row'>
      <div className='column column-50 column-offset-25'>
        <form>
          <div className='row'>
            <div className='column column-50 column-offset-25'>
              <label>
                Email
                <input className="input"
                  type='email'
                  name='email'
                  ref={node => { email = node }}
                />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='column column-50 column-offset-25'>
              <label>
                Password
                <input className="input"
                  type='password'
                  name='email'
                  ref={node => { password = node }}
                />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='column column-50 column-offset-25'>
              <button 
                className='button is-primary'
                onClick={e => {
                  e.preventDefault()
                  login({ variables: { email: email.value, password: password.value } })
                }}
              >
                Authenticate
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <style jsx>{`
        .box {
            background-color: rgba(255,255,255,.9);
        }

        .button {
          margin: .5em;
          min-width: 2em;
      }
      `}</style>
    </div>
  )
}


