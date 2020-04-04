import React from 'react'
import { useToken } from '../components/Store'

export default () => {
   
    const token = useToken()
   
if (token) { return ( <div>
<div className="box">
<p className="wrap"> 
 {token}
</p>
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
      
      `}</style>
</div>
)
} else return <></>}