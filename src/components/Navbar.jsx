import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import image from '../download.png'
import { useSelector } from 'react-redux'
export const Navbar = () => {
  const {cart} = useSelector((state)=>state)
  return (
    <div>
    <nav className='flex  items-center justify-between h-20 max-w-6xl mx-auto'>
      <NavLink to={'/'}>
      <div className='ml-5'>
      <img  className='h-14' src={image} alt='nav'></img>
      </div>
      </NavLink>
      <div className='flex items-center  font-medium text-slate-100 ml-20 '>
        <NavLink to={'/'}>
        <p> Home </p> 
        </NavLink>
      </div>
          <NavLink to={'/cart'}>
            <div className='text-white relative'>
                <BsFillCartFill className='text-2xl'></BsFillCartFill>
               {
                 cart.length > 0 && 
                 <span
                 className='absolute -top-1 -right-2
                 bg-green-600 text-xs w-5 h-5 flex
                 justify-center items-center animate-bounce rounded-full
                 text-white'
                 >{cart.length}</span>
               }
              
            </div>
          </NavLink>
    </nav>
    </div>
  )
}
