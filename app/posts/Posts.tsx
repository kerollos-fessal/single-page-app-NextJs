import React from 'react'
import Link from 'next/link'
import { sort } from 'fast-sort'

interface Post{
    id: number,
    title : string,
    body : string
}
interface props{
    orderBy:string
}

const Posts =async ({orderBy}:props) => {
    const response =await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts:Post[] =await response.json();
    const sortedPosts = sort(posts).asc(orderBy==='title'?post=>post.title:post=>post.body)
  return (
    <div>
        <Link className='font-bold mb-5 inline-block' href="/posts?orderBy=title">Title</Link> or <Link className='font-bold' href="/posts?orderBy=body">Body</Link>
    <div className='flex justify-between flex-wrap'>
        {sortedPosts.map(post=>
        
        <div key={post.id} className='text-white w-80 px-2 py-1 rounded-md shadow-slate-700 shadow-md mb-10 bg-slate-400 border-stone-900 border-4'>
            <div className='border-b-rose-950 font-bold border-b-2 text-center'>{post.title}</div>
            <div className='font-serif hover:cursor-pointer  hover:text-lime-300 text-justify'>{post.body}</div>
        </div>
        )}
    </div>
    </div>
  )
}

export default Posts
