import React from 'react'

const Tasks = () => {
  return (
    <div className='flex gap-5'>
          <div className='bg-custom-blue px-9 py-9 h-40 w-1/2 mt-10 rounded-2xl'>
              <h1 className='text-5xl font-extrabold'>0</h1>
              <h3 className='text-3xl font-thin'>New Task</h3>
          </div>
          <div className='bg-custom-red px-9 py-9 h-40 w-1/2 mt-10 rounded-2xl'>
              <h1 className='text-5xl font-extrabold'>3</h1>
              <h3 className='text-3xl font-thin'>Completed</h3>
          </div>
          <div className='bg-dark-blue px-9 py-9 h-40 w-1/2 mt-10 rounded-2xl'>
              <h1 className='text-5xl font-extrabold'>2</h1>
              <h3 className='text-3xl font-thin'>Accepted</h3>
          </div>
          <div className='bg-custom-beige px-9 py-9 h-40 w-1/2 mt-10 rounded-2xl'>
              <h1 className='text-5xl text-black font-extrabold'>1</h1>
              <h3 className='text-3xl  text-black font-thin'>Failed</h3>
          </div>
      
    </div>
  )
}

export default Tasks
