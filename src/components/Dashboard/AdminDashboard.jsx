import React from 'react'
import Header from '../Header/Header'
import Form from '../Form/Form'
import AdminBanner from '../Banner/AdminBanner'
import AllTask from '../Tasks/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen p-7'>
          <Header />
          <AdminBanner />
          <Form />
          <AllTask />
    </div>
  )
}

export default AdminDashboard
