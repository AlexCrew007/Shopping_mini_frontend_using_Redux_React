import React from 'react'
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

export const CartItem = ({title,image,description,price,id}) => {

  const dispatch = useDispatch();

  function deleteHandler(){
    dispatch(remove(id));
    toast.error('Item deleted')
  }
  return (
    <div className='flex mt-6  items-center '>
      <div className='flex justify-between items-center '>
        <div className='flex w-full h-[250px] m-5 '>
          <img className='w-full'  src={image} alt='img'/>
        </div>
        <div className=' ml-5 w-full'>
        <div className='mb-3'>
          <p className='text-gray-700  font-semibold text-2xl text-left 
            truncate  mt-1'>{title}</p>
        </div>
        <div>
        <p className=' font-normal w-80 text-left text-[15px] text-slate-600' >{description}</p>
        </div>
          <div>
          <div className='flex justify-between gap-12 items-center w-full mt-10'>
          <div>
            <p className='text-green-600 font-semibold'>{price}</p>
          </div>
          </div>
            <div className='relative text-[40px] '>
            <button className='absolute -top-8 -right-2 rounded-full bg-red-400 text-3xl' onClick={deleteHandler}><AiFillDelete/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
