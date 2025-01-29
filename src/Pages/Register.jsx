// user is being created but no toast is showing
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase';
import Swal from 'sweetalert2'
import { ThemeContext } from '../Provider/ThemeProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        const userReg = { name, email, password, photo }
        console.log(userReg)
        const passReg = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passReg.test(password)) {
            Swal.fire({
                title: "Wrong Credential",
                text: "Password must be at least 6 characters long and include an uppercase and a lowercase letter.",
                icon: "warning"
            });
            return;
        }

        createUser(email, password)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        // Profile updated!
                        // ...
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Updating Failed",
                            text: "Something wrong Happened.",
                            icon: "error"
                        });
                    });
                Swal.fire({
                    title: "Succeess",
                    text: "User Created Successfully",
                    icon: "success"
                });
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    title: "User creation failed!",
                    text: error.message,
                    icon: "error"
                });
            })
    }

    return (
        <div className={`${theme === 'light' ? '' : 'bg-gray-900'}`}>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label ">
                                        <NavLink to='/login' href="#" className="label-text-alt link link-hover font-medium ">or, Login</NavLink>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-primary hover:bg-secondary hover:text-black border-0 btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="text-center lg:text-left">
                            <img src="https://i.ibb.co.com/Cz9cSRs/business-people-group-48369-10667-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;