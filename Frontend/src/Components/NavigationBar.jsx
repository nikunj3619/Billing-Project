import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, ReceiptIndianRupee, LogOut } from 'lucide-react';

function NavigationBar() {
  return (

    <div className='flex flex-col h-screen w-1/7'>
      <div id='logo' className="h-15 px-2 pt-4">
        dfd
      </div>
      <hr className='w-full' />
      <div className='flex flex-col gap-6 px-2 pt-4'>
        <div id='title' className="h-8 flex gap-2 items-center">
          <LayoutDashboard />
          <Link to="/dashboard"><p className='text-lg'>Dashboard</p></Link>
        </div>

        <div id='title' className="h-8 flex gap-2 items-center">
          <ReceiptIndianRupee />
          <Link to="/billing"><p className='text-lg'>Billing</p></Link>
        </div>
        <div id='title' className="h-8 flex gap-2 items-center">
          <LogOut />
          <Link to="/logout"><p className='text-lg'>Logout</p></Link>
        </div>
      </div>

    </div>
  );
}

export default NavigationBar;
