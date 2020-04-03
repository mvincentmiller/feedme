import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
	    <Link href="/a?stuff=things" as="/a">
        <a>a?stuff</a>
      </Link>
    </li>
  </ul>
)
