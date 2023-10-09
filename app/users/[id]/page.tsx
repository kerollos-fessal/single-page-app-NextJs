import Link from 'next/link'
import React from 'react'

interface props{
    params:{id:number}
}

const userpage = ({params}:props) => {
  return (
    <div>
    <div>
      user page id: {params.id}
    </div>
    <Link href="/">Back to home</Link>
    </div>
  )
}

export default userpage
