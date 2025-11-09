import React from 'react'
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div>
      This is Login Form!!!
      <Link to="/dashboard"><p className='text-lg'>Dashboard</p></Link>
    </div>
  )
}

export default Login
