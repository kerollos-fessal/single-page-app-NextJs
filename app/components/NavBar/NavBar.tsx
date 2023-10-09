import React from 'react'
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="font-bold bg-slate-500 flex justify-between mb-11 p-5 text-white shadow-black shadow-md">
    <Link className="hover:text-yellow-500" href="/users">Users</Link>
    <Link className="hover:text-yellow-500" href="/products">Products</Link>
    <Link className="hover:text-yellow-500" href="/about">About us</Link>
    <Link className="hover:text-yellow-500" href="/contact">Contact us</Link>
    <Link className="hover:text-yellow-500" href="/posts">Posts</Link>
    </nav>
  )
}

export default NavBar
