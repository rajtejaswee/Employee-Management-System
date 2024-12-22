import React from 'react'
import Header from '../Header/Header'
import Tasks from '../Tasks/Tasks'
import Taskcarosals from '../Tasks/Taskcarosals'
import EmployeeBanner from '../Banner/EmployeeBanner'

const EmployeeDashboard = () => {
  return (
    <div className='p-7 h-screen '>
          <Header />
          <EmployeeBanner />
          <Tasks />
          <Taskcarosals />
    </div>
  )
}

export default EmployeeDashboard
