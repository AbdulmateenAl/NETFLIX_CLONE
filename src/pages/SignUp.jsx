import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/e8317f86-f4e2-4330-8323-a66a2deff4ad/NG-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='/' />
        <div className='bg-blaack/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'></div>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1>Sign Up</h1>
            </div>
          </div>
    </div>
    </>
  )
}

export default SignUp