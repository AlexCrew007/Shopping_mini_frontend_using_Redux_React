import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { CartItem} from '../components/CartItem';
export const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(cart)
  console.log(cart.length)
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])

  return (
    <div className='flex flex-col items-center'>
      {
        cart.length > 0 ? 
        <div className='flex'>
          <div className=' mt-5 mr-9 mb-20  w-full '>
              {
                cart.map((product)=>{
                  return <CartItem key={product.id} {...product}></CartItem>
                })
              }
          </div>
        <div className='flex flex-col justify-between'> 
            <div className='mt-20'>
              <div className='text-green-900 text-[20px] font-semibold uppercase'>Your Cart</div>
              <div className='text-green-700 text-4xl font-semibold uppercase'>Summary</div>
             <div className=' mt-5' >
             <p  className='font-semibold text-[20px]'>
                <span>Total Items: {cart.length}</span>
              </p>
             </div>
            </div>
            <div className='font-semibold text-[20px]'>
              <p className='flex'>Total Amount: ${totalAmount}</p>
              <button className='bg-green-500 rounded-lg text-2xl
          text-white border-2
           font-semibold text-[12px] p-2 px-7  uppercase
          hover:bg-white
          hover:text-green-700 transition duration-300 ease-in mb-20'>
                CheckOut Now
              </button>
            </div>
        </div>
        </div>
        
        : 
        <div className='flex' >
        <div className=' flex flex-col mt-20 justify-center items-center  '> 
          <p className='text-slate-600 font-semibold mt-20 mb-10 text-2xl' >Your Cart is Empty!</p>
          <NavLink to='/'><button className='bg-green-500 rounded-lg text-2xl
          text-white border-2
           font-semibold text-[12px] p-2 px-7  uppercase
          hover:bg-white
          hover:text-green-700 transition duration-300 ease-in'>Shop Now</button></NavLink>
        </div>
        </div>
      }
    </div>
  )
}
