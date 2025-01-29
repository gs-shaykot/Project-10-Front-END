import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaRegSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from '../Provider/ThemeProvider';

const Header = () => {
    const { user, LogOut, setUser } = useContext(AuthContext)
    console.log(user)
    const { theme, handleToggle } = useContext(ThemeContext)
    const SignOut = () => {
        LogOut()
            .then(res => {
                setUser()
                Swal.fire({
                    title: "Logeg Out!",
                    icon: "success"
                });
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    icon: "error"
                });
            })
    }

    return (
        <div className={` ${theme === "light" ? '' : 'bg-gray-900 text-white'}`}>
            <div className="container mx-auto navbar w-11/12 md:w-auto">
                <div className="navbar-start">
                    <div className="dropdown !z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/allCamp'>All Campaign</NavLink></li>
                            <li><NavLink to='/addCamp'>Add Campaign</NavLink></li>
                            <li><NavLink to='/myCamp'>My Campaign</NavLink></li>
                            <li><NavLink to='/myDonation'>My Donations</NavLink></li>
                            <li><NavLink to='/login' className='my-2 btn bg-primary !border-primary text-white font-semibold'>LogIn</NavLink></li>
                            <li><NavLink to='/register' className='btn border-2 border-secondary bg-transparent font-semibold'>Register</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10 h-10' src="https://i.ibb.co.com/pxFGPk1/logo-unscreen.gif" alt="" />
                        <NavLink to='/' className='font-bebas font-medium text-2xl'>Crowdcube</NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allCamp'>All Campaign</NavLink></li>
                        <li><NavLink to='/addCamp'>Add Campaign</NavLink></li>
                        <li><NavLink to='/myCamp'>My Campaign</NavLink></li>
                        <li><NavLink to='/myDonation'>My Donations</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    <div className="md:mr-2">
                        {
                            user ?
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-8 md:w-10 rounded-full">
                                            <img
                                                referrerPolicy='no-referrer'
                                                alt="Tailwind CSS Navbar component"
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu bg-base-100 text-black menu-sm dropdown-content rounded-box z-30 mt-3 w-52 p-2 shadow">
                                        <li><a>{user?.displayName}</a></li>
                                        <li><a onClick={SignOut}>Logout</a></li>
                                    </ul>
                                </div> :
                                <div className='gap-2 hidden md:flex'>
                                    <NavLink to='/login' className='btn bg-primary text-white font-semibold'>LogIn</NavLink>
                                    <NavLink to='/register' className={`btn border-2 border-secondary bg-transparent font-semibold  ${theme === "light" ? '' : 'bg-gray-900 text-white'}`}>Register</NavLink>
                                </div>
                        }
                    </div>
                    <div className='bg-gray-100 rounded-full p-2 flex justify-center items-center'>
                        {
                            theme === "light" ?
                                <FaMoon onClick={handleToggle} className='cursor-pointer' /> :
                                <FaRegSun onClick={handleToggle} className='cursor-pointer text-gray-900' />
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;