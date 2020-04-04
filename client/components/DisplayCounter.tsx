import React from 'react'
import { useCount } from '../components/Store'
//import './counter.scss'

export default () => {
    const count = useCount()
return (<div>
<pre>Counter: {count}</pre>
<style jsx>{`
      
      pre {
          background: rgba(0,0,0,.2);
          color: $light;
          font-size: 6pt;
      }
      
      `}</style>
</div>
)
}