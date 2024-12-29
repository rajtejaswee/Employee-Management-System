import React, { useState } from 'react'
import LoginBanner from '../Banner/LoginBanner'

function Login({handleLogin}) {
     
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    } 
  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center'>
      <LoginBanner />
          <div className='border-2 border-custom-blue rounded-md drop-shadow-xl shadow-white-500/40 p-20'>
              <form onSubmit={(e) => {
                  submitHandler(e)
                }}
                  className='flex flex-col items-center justify-center'>
                  <input
                      value={email}
                      onChange={(e) => {
                          setEmail(e.target.value)
                      }}
                      required className='bg-transparent text-white outline-none border-2 border-custom-blue rounded-full drop-shadow-xl py-4 px-5' type="email" placeholder="Email" />
                  <input
                      value={password}
                      onChange={(e) => {
                          setPassword(e.target.value)
                      }}
                      required className='bg-transparent text-white outline-none border-2 border-custom-blue rounded-full drop-shadow-xl py-4 px-5 mt-3' type="password" placeholder="Password" />
                  <button className='bg-custom-blue text-black px-3 py-4 rounded-full drop-shadow-lg w-full mt-5 ' >Log In</button>
              </form>
      </div>
    </div>
  )
}

export default Login
