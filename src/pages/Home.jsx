import React, { useEffect, useState } from 'react';
import url from '../baseUrl';
import { Spinner } from '../components/Spinner';
import { Product } from '../components/Product';

export const Home = () => {
  
  const [loading ,setLoading] = useState(false)
  const [products, setProducts] = useState([]) 
  const [selected, setSelected] = useState(true)

  async function fetchData(){
    setLoading(true)
    try{
      const data = await fetch(url);
      const output = await data.json()
    setProducts(output)
    }
    catch(error){
      console.log("Wrong API Call");
      setProducts([])
    }
    setLoading(false)
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className=''>
      {
        loading ? <Spinner></Spinner> : 
        products.length > 0 ?
        <div className='grid xs:grid:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2
        mx-auto space-y-10 space-x-5 min-h-[80vh]' > 
        {
          products.map((productDetails,)=>{
            return <Product key={productDetails.id} {...productDetails} selected={selected} setSelected={setSelected}></Product>
          })
        }
        </div> 
        :
        <div className='flex justify-center items-center'>
          <p>No Data Found</p>
        </div>
      }
    </div>
  )
}
