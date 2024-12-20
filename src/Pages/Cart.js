import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import Navbar from '../Components/Navbar';


const Cart = () => {
  const cart=useSelector((state)=>state.cart);
  const [totalAmount,setTotalAmount]  =useState(0);
  useEffect(() =>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])  
  return (<>
    <div className="bg-slate-900 w-full fixed z-10">
          <Navbar/>
        </div>
  
    <div className='pt-20 h-full max-w-[1200px] mx-auto w-[90%]'>
      {
        cart.length>0?
        (<div className='flex justify-between lg:flex-row md:flex-col sm:flex-col min-[100px]:flex-col'>
          <div className='w-[80%] flex-col'>
          {
            cart.map((item, index)=>{
              return(
                <CartItem key={item.id} item={item} itemIndex={index}/>
              )
            })

          }
            
          </div>
          <div className='w-[100%] m-10 flex flex-col justify-between '>
            <div className='mt-16 ml-10 w-[40%]'>
              <div className='text-green-700 font-bold text-xl '>Your Cart</div>
              <div className='text-green-700 font-bold text-5xl'>Summary</div>
              <p className='font-semibold text-[#374151] mt-5 text-xl'>
                <span>Total Items : {cart.length}</span>
              </p>
            </div>
            <div className='text-[#374151] text-xl font-semibold w-[100%]'>
              <p className='mt-10'>Total Amount : <span className='text-black font-extrabold'>${totalAmount}</span> </p>
              <button className="bg-green-700 w-full hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
            </div>
          </div>
        </div>):
        (
          <div className='items-center h-screen justify-center flex flex-col'>
            <h1 className='text-[#374151] font-bold text-3xl'>Your Cart is empty!</h1>
            <NavLink to="/home">
              <button className='my-5 mx-10 bg-green-600 px-10 py-3 text-white rounded-lg font-bold uppercase'>Shop Now</button>
            </NavLink>
          </div>)
      }
    </div>
    </>
  )
}

export default Cart
