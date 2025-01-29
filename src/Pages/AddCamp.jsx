import React, { useContext } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { ThemeContext } from '../Provider/ThemeProvider';

const AddCamp = () => {

    const { user } = useContext(AuthContext)
    const { theme } = useContext(ThemeContext)
    const handleCampaign = (e) => {
        e.preventDefault();

        // Extracting values from the form
        const photo = e.target.photo.value;
        const title = e.target.title.value;
        const camType = e.target.camType.value;
        const description = e.target.description.value;
        const amount = e.target.amount.value;
        const deadline = e.target.deadline.value;
        const userEmail = e.target.userEmail.value;
        const userName = e.target.userName.value;

        const campaignData = {
            photo,
            title,
            camType,
            description,
            amount: parseInt(amount),
            deadline,
            userEmail,
            userName,
        };


        fetch('http://localhost:5000/campaigns', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(campaignData)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Successfully",
                    text: "Campaign Added Successfully",
                    icon: "success"
                });
                e.target.reset()
            })
    };

    return (
        <div className={`bg-gray-100 min-h-screen flex flex-col items-center justify-center ${theme === "light" ? "bg-[url('https://i.ibb.co.com/SKSfgt9/11.png')] bg-cover" : "text-white bg-gray-900"} p-6 md:p-20`}>
            <div className="self-start ml-40 items-center text-3xl text-shadow flex gap-1 font_prim">
                <IoArrowBack />
                <NavLink to="/">Main</NavLink>
            </div>
            <div className={`w-full max-w-4xl ${theme === "light" ? 'bg-white' : 'text-white bg-gray-700 shadow-slate-800'} shadow-lg rounded-lg p-5 md:p-10`}>
                <h2 className="text-center font-bold mb-4 font_prim text-xl underline md:text-3xl text-shadow">Add New Campaign</h2>
                <p className={`text-center text-gray-600 mb-8 ${theme === "light" ? '' : 'text-white'}`}>
                    The Add Campaign route provides functionality to create and configure new campaigns. This route typically allows users to input campaign details, set objectives, and specify parameters such as budget, duration, and target audience.
                </p>

                <form onSubmit={handleCampaign} className="text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-2">Event Photo</label>
                        <input
                            type="url"
                            name="photo"
                            placeholder="Enter Photo URL"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Campaign Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter Campaign Title"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Campaign Type</label>
                        <select name="camType" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
                            <option value="Personal">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Social Cause</option>
                            <option value="ideas">Creative Ideas</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Description</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter Description"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Donation Amount</label>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Enter Donation Amount more than $20"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={user?.email}
                            readOnly
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={user?.displayName}
                            readOnly
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="text-white px-8 py-3 rounded w-full bg-primary border border-secondary font_prim md:text-xl"
                        >
                            Add Campaign
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCamp;
