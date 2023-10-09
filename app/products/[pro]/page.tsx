import Link from 'next/link'
import React from 'react'

interface props{
    params:{pro:string[]}
}

const userpage = ({params}:props) => {
  return (
    <div>
    <div>
      user page products: {params.pro}
    </div>
    <Link href="/">Back to home</Link>
    </div>
  )
}

export default userpage