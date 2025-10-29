import React from 'react';
import headerLogo from '../../assets/images/mentoriplogo.png'
import logoImage from '../../assets/images/logoimage.png'
import { IoMdNotificationsOutline } from 'react-icons/io';
const Header = () => {
    return (
       <section>
        <div className='flex justify-between'>
             <div>
            <img className='w-[240px] h-[90px]' src={headerLogo} alt="" />
        </div>
        <div className='flex items-center gap-2'>
            <IoMdNotificationsOutline className='text-4xl text-red-800 bg-gray-200 py-2 px-2 rounded-full' />
            <img className='w-[48px] h-[48px] rounded-full' src={logoImage} alt="" />
            <h3 className='font-bold'>Marvin McKinney</h3>
        </div>
        </div>
       </section>
    );
};

export default Header;