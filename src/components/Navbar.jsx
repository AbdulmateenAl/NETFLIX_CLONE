import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute z-20 flex items-center justify-between w-full p-4'>
        <Link to='/' >
          <h1 className='z-10 text-4xl font-bold text-red-600 cursor-pointer'>NETFLIX</h1>
        </Link>
        <div>
          <Link to='/login'>
            <button className='pr-4 text-white'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-4 py-2 rounded cursor=pointer text-white'>Sign Up</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar