import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-thin'>Hello !! <span className='text-3xl font-semibold'> <br/> {data.name} 👋🏻</span></h1>
          <button className='bg-dark-red text-lg font-medium px-5 py-3 rounded-2xl'>Log out</button>
    </div>
  )
}

export default Header
