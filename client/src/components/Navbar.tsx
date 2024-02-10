// import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className='h-14  flex justify-between items-center'>
        <Link to="/">
        <h1 className='text-2xl text-indigo-600 p-4'>Not Another Task App</h1>
        </Link>
        
        <a className='text-lg p-4 text-sky-600 underline' href="https://www.github.com/yousefnegmeldin" target="_blank">Yousef Negmeldin</a>
    </nav>
  )
}

export default Navbar