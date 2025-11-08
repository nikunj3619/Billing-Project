import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className='flex flex-col border border-red-500 h-screen w-1/7 gap-4'>
      <div id='logo' className="border border-red-500 h-15"> 
        dfd
      </div>
      <hr className='w-full' />
      <div id='title' className="border border-red-500 h-8"> 
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div id='title' className="border border-red-500 h-8"> 
        <Link to="/billing">Billing</Link>
      </div>
    </div>
  );
}

export default NavigationBar;
