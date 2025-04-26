import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex bg-gradient-to-r from-violet-600 to-indigo-400 justify-between m-3 p-4 rounded-lg shadow-2xl text-white items-center'>
            <div className='flex items-center space-x-3'>
                <div className='text-2xl font-bold'>ToDo<span className='text-yellow-300'>List</span></div>
                <span className='hidden md:inline text-sm italic'>Organize your tasks efficiently!</span>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                    </svg>
                </button>
            </div>
            <ul className={`md:flex gap-6 items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
                <li><a href="#" className='hover:text-yellow-300 transition'>Home</a></li>
                <li><a href="#" className='hover:text-yellow-300 transition'>Tasks</a></li>
                <li><a href="#" className='hover:text-yellow-300 transition'>Calendar</a></li>
                <li><a href="#" className='hover:text-yellow-300 transition'>Settings</a></li>
            </ul>
            <div className='relative'>
                <button className='flex items-center space-x-2 bg-yellow-400 px-3 py-2 rounded-lg hover:bg-yellow-500 transition'>
                    <span className='hidden md:inline'>Profile</span>
                    <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5.121 17.804A10.944 10.944 0 0112 21c2.946 0 5.633-1.137 7.879-2.996m-2.495-1.615A10.947 10.947 0 0121 12h-2m-2.879 4.804c1.076-1.074 1.879-2.597 1.879-4.804s-.803-3.73-1.879-4.804m-1.615 2.495A10.947 10.947 0 0112 3c-2.946 0-5.633 1.137-7.879 2.996M3.42 7.37A10.947 10.947 0 013 12h2m2.879-4.804C6.803 8.27 6 9.793 6 12s.803 3.73 1.879 4.804' />
                    </svg>
                </button>
                <div className='absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-md hidden group-hover:block'>
                    <a href="#" className='block px-4 py-2 hover:bg-gray-100'>Profile</a>
                    <a href="#" className='block px-4 py-2 hover:bg-gray-100'>Settings</a>
                    <a href="#" className='block px-4 py-2 hover:bg-gray-100'>Logout</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
