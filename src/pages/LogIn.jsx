import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img className='w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/e8317f86-f4e2-4330-8323-a66a2deff4ad/NG-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='/' />
        <div className='absolute inset-0 flex flex-col justify-center items-center z-10'>
          <div className='flex flex-col space-y-2 text-center'>
            <form className='bg-black/85 flex flex-col space-y-2 py-[90px] px-10'>
              <h1 className='relative bottom-5 flex text-white text-3xl font-bold'>Sign In</h1>
              <input className='p-4 w-[350px] bg-gray-600 rounded' type="email" placeholder='Email address' />
              <input className='p-4 w-[350px] bg-gray-600 rounded' type="password" placeholder='Paaword' />
              <button className='bg-red-700 p-4 text-white font-medium w-[350px] rounded'>{"Sign In"}</button>
              <p className='text-gray-200'>New to Netflix? <Link to='/login' >Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn