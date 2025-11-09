import React from 'react'
import {Link} from 'react-router-dom';

function Logout() {
  return (
    <div>
      Thank You Visit Again!
      <Link to="/login"><p className='text-lg'>Login</p></Link>
    </div>
  )
}

export default Logout
