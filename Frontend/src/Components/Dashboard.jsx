import React from 'react';
import NavigationBar from './NavigationBar';
import PathComponent from './PathComponent';
import Content from './Content';

function Dashboard() {
  return (
    <div id='wrapper' className='flex'>
      <NavigationBar></NavigationBar>
      <div className='flex flex-col w-full'>
        <PathComponent></PathComponent>
        <Content></Content>
      </div>


    </div>
  );
}

export default Dashboard;
