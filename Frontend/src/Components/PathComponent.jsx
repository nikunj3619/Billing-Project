import React from 'react'
import {CircleChevronLeft} from 'lucide-react';

function PathComponent(props) {
  return (
    <div className='w-full flex flex-col text-lg'>

      <div className='h-15 flex items-center gap-2 pl-4'>
        <div>
          <CircleChevronLeft />
        </div>
        <h3>{props.PageName}</h3>
      </div>
      <hr className='w-full' /> 
    </div>
  )
}

export default PathComponent
