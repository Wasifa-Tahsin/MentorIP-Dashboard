import React from 'react';
import Slidebar from '../pages/Slidebar'
import Dashboard from '../Dashboard/Dashboard';
import Header from '../page/Header';
import { Outlet } from 'react-router';
const Root = () => {
    return (
        <div>
       <Header></Header>
       
      <div className='flex'>
         <Slidebar></Slidebar>
       <Outlet></Outlet>
      </div>
          
            
        </div>
    );
};

export default Root;