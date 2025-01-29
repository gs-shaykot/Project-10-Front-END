import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ThemeContext } from '../Provider/ThemeProvider';

const UpdateCamp = () => {

    const { user } = useContext(AuthContext)
    const { id } = useParams() 

    const handleUpdate = (e) => {
        e.preventDefault();

        const photo = e.target.photo.value;
        const title = e.target.title.value;
        const camType = e.target.camType.value;
        const description = e.target.description.value;
        const amount = e.target.amount.value;
        const deadline = e.target.deadline.value;
        const userEmail = e.target.userEmail.value;
        const userName = e.target.userName.value;

        const UpdatecampaignData = {
            photo,
            title,
            camType,
            description,
            amount: parseInt(amount),
            deadline,
            userEmail,
            userName,
        };

        fetch(`http://localhost:5000/updateCampaign/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UpdatecampaignData),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Update Result: ", data)
                Swal.fire({
                    title: "Successfully",
                    text: "Campaign Added Successfully",
                    icon: "success"
                });
                e.target.reset()
            })
            .catch(error => console.log("Update Error:", error.message))
    }

    const { theme } = useContext(ThemeContext)
    return (
        <div className={`bg-gray-100 min-h-screen flex flex-col items-center justify-center ${theme === "light" ? "bg-[url('https://i.ibb.co.com/SKSfgt9/11.png')] bg-cover" : "text-white bg-gray-900"} p-6 md:p-20`}>
            <div className={`w-full max-w-4xl ${theme === "light" ? 'bg-white' : 'text-white bg-gray-700 shadow-slate-800'} shadow-lg rounded-lg p-5 md:p-10`}>
                <h2 className="text-center font-bold mb-4 font_prim text-xl underline md:text-3xl text-shadow">Update Campaign</h2>
                <p className={`text-center text-gray-600 mb-8 ${theme === "light" ? '' : 'text-white'}`}>
                    The Update Campaign route provides functionality to update old Campaign data. This route typically allows users to input campaign details, set objectives, and specify parameters such as budget, duration, and target audience.
                </p>

                <form onSubmit={handleUpdate} className="text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            Update Campaign
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCamp;