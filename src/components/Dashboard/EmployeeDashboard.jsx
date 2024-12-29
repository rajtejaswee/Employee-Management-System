import React from 'react'
import Header from '../Header/Header'
import Tasks from '../Tasks/Tasks'
import Taskcarosals from '../Tasks/Taskcarosals'
import EmployeeBanner from '../Banner/EmployeeBanner'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-7 h-screen '>
          <Header data={data} />
          <EmployeeBanner />
          <Tasks data={data}/>
          <Taskcarosals data={data}/>
    </div>
  )
}

export default EmployeeDashboard
