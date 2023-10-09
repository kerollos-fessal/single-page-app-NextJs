import React from 'react'
import Link from 'next/link'
import Posts from './Posts'

interface props{
    searchParams:{orderBy: string}
}

const posts = async({searchParams:{orderBy}}:props) => {
  return (
    <div>
    <div className='font-extrabold mb-2 underline'>
      All recent posts orderBy: {orderBy}
    </div>
    <Posts orderBy={orderBy}></Posts>
     <Link href="/">Back to home</Link>
     </div>
  )
}

export default posts
