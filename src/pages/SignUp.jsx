import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <div className='w-full h-screen'>
        <img className='w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/e8317f86-f4e2-4330-8323-a66a2deff4ad/NG-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='/' />
        <div className='absolute inset-0 flex flex-col justify-center items-center z-10'>
          <h1 className='font-bold text-4xl text-center text-white'>Unlimited movies, TV shows, and more</h1>
          <div className='flex flex-col justify-center items-center w-[550px] py-4'>
            <p className='text-white font-medium text-xl py-4'>Watch anywhere. Cancel anytime.</p>
            <p className='text-white w-[400px] md:w-[550px] text-xl text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          <div className='flex flex-col space-y-2 text-center'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-2 px-10'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-4 w-[350px] sm:w-[350px] md:w-[400px] lg:w-[550px] bg-gray-600 rounded' type="email" placeholder='Email address' />
              <input onChange={(e) => setPassword(e.target.value)} className='p-4 w-[350px] sm:w-[350px] md:w-[400px] lg:w-[550px] bg-gray-600 rounded' type="password" placeholder='Paaword' />
              <button className='bg-red-700 p-4 text-white font-medium rounded'>{"Sign Up"}</button>
              <p className='text-gray-200'>Already subscribed to netflix? <Link to='/login' >Sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp