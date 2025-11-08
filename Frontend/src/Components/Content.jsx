import React from 'react'

function Content(props) {
  return (
    <div className='w-full h-full p-4'>
      <div className='flex gap-6'>
        <div className='border border-green-500 rounded-md w-1/4 h-30 p-4 flex flex-col'>
        <p>{props.summaryData1.head}</p>
        <p className='text-3xl'>{props.summaryData1.value}</p>
        <div className='text-right'>Details</div>
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
