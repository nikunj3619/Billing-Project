import React from 'react'
import {CircleChevronLeft} from 'lucide-react';

function PathComponent() {
  return (
    <div className='w-full flex flex-col gap-4'>

      <div className='h-15 flex items-center gap-2 pl-4'>
        <div>
          <CircleChevronLeft />
        </div>
        <h3>Dashboard Page</h3>
      </div>
      <hr className='w-full' /> 
    </div>
  )
}

export default PathComponent
