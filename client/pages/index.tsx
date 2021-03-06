import React from "react";
import Link from "next/link";
import Authenticate from "../components/Authenticate";
import DisplayToken from "../components/DisplayToken";
import {set_token} from '../actions'
import { useDispatchAuth } from '../components/Store'
import { useToken } from '../components/Store'

export default () => {
  const auth_dispatch = useDispatchAuth()

  const token = useToken()

  React.useEffect(() => {
    const token = localStorage.getItem('slinky')
    set_token(auth_dispatch, token)
    return () => {
      console.log('Index.')
    };
  }, []);
  

  return (
    <div className="section">
   {!token && <Authenticate /> }
  {token && <div>
    <DisplayToken /> 
    
    <ul>
        <li>
          <Link href="/stuff" as="/nothinghereandmasked">
            <a className="button">Load DisplayData but don't load anything.</a>
          </Link>
        </li>
        <li>
          <Link href="/stuff?stuff=orders">
            <a className="button">
              DisplayData with a query parameter 'orders'
            </a>
          </Link>
        </li>
      </ul>
      </div>
    
    }
     

      <style jsx>{`
        .button {
          margin: 0.5em;
          min-width: 2em;
        }
      `}</style>
    </div>
  );
};
