import React from 'react';
import NavigationBar from './NavigationBar';
import PathComponent from './PathComponent';
import Content from './Content';

function Dashboard() {
  const summaryData1 = {
    head : "Total Bills Processed",
    value : 235
  }
  const summaryData2 = {
    head : "Total Value",
    value : "8,35,478"
  }
  const summaryData3 = {
    head : "Dummy data",
    value : 12345
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
        <PathComponent></PathComponent>
        <Content summaryData1={summaryData1} summaryData2={summaryData2} summaryData3={summaryData3} summaryData4={summaryData4}></Content>
      </div>


    </div>
  );
}

export default Dashboard;
