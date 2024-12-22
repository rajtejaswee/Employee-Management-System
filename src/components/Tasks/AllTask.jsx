import React from 'react'

const AllTask = () => {
  return (
    <div className='bg-black p-10 h-48 overflow-auto'>
          <div className='bg-custom-red mb-2 py-2 px-4 flex justify-between rounded'>
              <h2 className='text-md'>Raj Tejaswee</h2>
              <h3 className='font-thin'>Working on the Management System</h3>
              <h5 className='bg-custom-beige text-black font-thin px-2 py-1 rounded-full'>Not Active</h5>
          </div>
          <div className='bg-custom-blue mb-2 py-2 px-4 flex justify-between rounded'>
              <h2 className='text-md text-black'>Sanya Ghosh</h2>
              <h3 className='font-thin text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maxime?</h3>
              <h5 className='bg-dark-red text-white font-thin px-2 py-1 rounded-full'>Active</h5>
       </div>
          <div className='bg-dark-blue mb-2 py-2 px-4 flex justify-between rounded'>
              <h2 className='text-md'>Harsh Mittal</h2>
              <h3 className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maxime?</h3>
              <h5 className='bg-custom-beige text-black font-thin px-2 py-1 rounded-full'>Not Active</h5>
          </div>
          <div className='bg-custom-beige mb-2 py-2 px-4 flex justify-between rounded'>
              <h2 className='text-md text-black'>Lakshya Gupta</h2>
              <h3 className='font-thin text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maxime?</h3>
              <h5 className='bg-dark-red text-white font-thin px-2 py-1 rounded-full'>Active</h5>
          </div>
          
    </div>
  )
}

export default AllTask
