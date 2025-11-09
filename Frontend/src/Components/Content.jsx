import React from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

function Content(props) {
  return (
    <div className='w-full h-full p-4 mt-2'>
      <div className='flex gap-2 items-center'>
        <input type="text" name="search" id="search" className='border w-full h-12 rounded-md p-4'></input>
        <Search />
      </div>
      <div className='flex gap-6 mt-6'>
        <div className='border border-green-500 rounded-md w-1/4 h-30 p-4 flex flex-col'>
        <p>{props.summaryData1.head}</p>
        <p className='text-3xl'>{props.summaryData1.value}</p>
        <div className='text-right'><Link to="/details"><p className='text-lg'>Details</p></Link></div>
        </div>
        <div className='border border-green-500 rounded-md w-1/4 h-30 p-4 flex flex-col'>
        <p>{props.summaryData2.head}</p>
        <p className='text-3xl'>{props.summaryData2.value}</p>
        <div className='text-right'>Details</div>
        </div>
        <div className='border border-green-500 rounded-md w-1/4 h-30 p-4 flex flex-col'>
        <p>{props.summaryData3.head}</p>
        <p className='text-3xl'>{props.summaryData3.value}</p>
        <div className='text-right'>Details</div>
        </div>
        <div className='border border-green-500 rounded-md w-1/4 h-30 p-4 flex flex-col'>
        <p>{props.summaryData4.head}</p>
        <p className='text-3xl'>{props.summaryData4.value}</p>
        <div className='text-right'>Details</div>
        </div>
      </div>
    </div>
  )
}

export default Content
