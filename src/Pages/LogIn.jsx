import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { ThemeContext } from '../Provider/ThemeProvider';
import axios from 'axios';

const LogIn = () => {

    const { theme } = useContext(ThemeContext)
    const { logInUser, logInGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const userLog = { email, password }

        logInUser(email, password)
            .then(res => {
                Swal.fire({
                    title: "Successfully☺️",
                    text: "Successfully Loged in.",
                    icon: "success"
                });
                // navigate(location?.state ? location.state : '/')
                const user = { email: email }
                axios.post('http://localhost:5000/jwt', user,{withCredentials:true})
                    .then(data=>{
                        console.log(data)
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: "Wrong Information",
                    text: error.message,
                    icon: "error"
                });
            })

    }

    const handleGoogleLogin = () => {
        logInGoogle()
            .then(res => {
                Swal.fire({
                    title: "Successfully☺️",
                    text: "Successfully Loged in.",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    icon: "error"
                });
            })
    }

    return (
        <div className={`${theme === 'light' ? '' : 'bg-gray-900'}`}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body pb-0" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label ">
                                    <NavLink href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</NavLink>
                                    <NavLink to='/register' href="#" className="label-text-alt link link-hover font-semibold">Register</NavLink>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-primary hover:bg-primary  border-0">Login</button>
                            </div>
                        </form>
                        <div className="w-full flex justify-center py-4 px-8">
                            <button onClick={handleGoogleLogin} className="w-full btn bg-transparent border-2 border-secondary hover:bg-secondary hover:border-0 hover:text-white">Login with Google</button>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <img className='w-full h-full' src="https://i.ibb.co.com/tYf4JD7/bgc-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;