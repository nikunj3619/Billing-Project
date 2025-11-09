import React from 'react';
import NavigationBar from './NavigationBar';
import PathComponent from './PathComponent';
import Content from './Content';

function Billing() {
  const summaryData1 = {
    head : "Pending",
    value : 15
  }
  const summaryData2 = {
    head : "Signed",
    value : 10
  }
  const summaryData3 = {
    head : "Processed",
    value : 8
  }
  const summaryData4 = {
    head : "Dummy Data",
    value : 879
  }
  return (
    <div id='wrapper' className='flex'>
      <NavigationBar></NavigationBar>
      <div className="h-screen w-px bg-gray-400"></div>
      <div className='flex flex-col w-full'>
        <PathComponent PageName="Billing Page"></PathComponent>
        <Content summaryData1={summaryData1} summaryData2={summaryData2} summaryData3={summaryData3} summaryData4={summaryData4}></Content>
      </div>


    </div>
  );
}

export default Billing;
