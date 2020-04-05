import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { useDispatchAuth } from './Store'
import {set_token} from '../actions'
import { CREATE_USER } from '../gql'



export default () => {

    const auth_dispatch = useDispatchAuth()

    useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  let username
  let email
  let password
  const [create, { data }] = useMutation(CREATE_USER)

  if (data) {
 
    console.log(data)
  }

  
  return (
    <div className="box">
    <div className='row'>
      <div className='column column-50 column-offset-25'>
        <form>
        <div className='row'>
            <div className='column column-50 column-offset-25'>
              <label>
                Username
                <input className="input"
                  type='username'
                  name='username'
                  ref={node => { username = node }}
                />
              </label>
            </div>
          </div>
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
                  create({ variables: { username: username.value, email: email.value, password: password.value } })
                }}
              >
                Create User
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


