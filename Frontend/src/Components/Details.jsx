import React from 'react'
import NavigationBar from './NavigationBar';
import PathComponent from './PathComponent';
import BillsListDetails from './BillsListDetails';

const bill1 = {
    id : 4,
    cont_name : "Ajay Paints",
    gen_date : "25/07/2025",
    img : "abcd/image1",
    approval_date : "27/07/2025",
    approved_img : "abcd/image1",
    status : 2,
    utr_no : "YUGYU321541",
    comment : " ",
    processed_date : "01/09/2025"
}

function Details() {
  return (
    <div id='wrapper' className='flex'>
      <NavigationBar></NavigationBar>
      <div className="h-screen w-px bg-gray-400"></div>
      <div className='flex flex-col w-full'>
        <PathComponent PageName="Details Page"></PathComponent>
        <BillsListDetails></BillsListDetails>
      </div>


    </div>
  );
}

export default Details
