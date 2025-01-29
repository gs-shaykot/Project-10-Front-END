// use the front code, and modify as present need
import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { ThemeContext } from '../Provider/ThemeProvider';

const CampDetail = () => {

    const { user } = useContext(AuthContext)
    const { theme } = useContext(ThemeContext)
    const campaign = useLoaderData();
    const donateData = { Donar_email: user.email, Donar_name: user.displayName, photo: campaign.photo, Camp_title: campaign.title, type: campaign.camType, goal: campaign.amount, organizer: campaign.userName, organizer_email: campaign.userEmail, deadline: campaign.deadline }


    const handleDonate = (e) => {
        const currentDate = new Date();
        const deadlineDate = new Date(campaign.deadline);
        if (deadlineDate < currentDate) {
            Swal.fire({
                title: "Deadline Passed",
                text: "The campaign deadline has passed. You cannot donate to this campaign.",
                icon: "warning",
            });
            return;
        }

        fetch('http://localhost:5000/donated_collection', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Success",
                    text: "Campaign Added Successfully",
                    icon: "success",
                });
            });
    };

    return (
        <div className={`${theme === "light" ? '' : 'bg-gray-900 text-white'} py-10`}>
            <div className={`container flex flex-col md:flex-row ${theme === "light" ? 'text-gray-800' : 'shadow-gray-800 text-white'} shadow-lg rounded-lg overflow-hidden p-6 mx-auto`}>
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                    <img
                        src={campaign.photo}
                        alt={campaign.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Information Section */}
                <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0 ">
                    <h2 className="text-2xl font-bold mb-2">{campaign.title}</h2>
                    <p className="text-sm  mb-4">Type: <span className="font-medium ">{campaign.camType}</span></p>
                    <p className=" mb-4">{campaign.description}</p>

                    <div className="mb-4">
                        <p className="text-sm ">Goal Amount: <span className="text-lg font-semibold text-green-600">${campaign.amount}</span></p>
                        <p className="text-sm ">Deadline: <span className="font-medium">{campaign.deadline}</span></p>
                    </div>

                    <div className="pt-4 border-t">
                        <p className="text-sm  font-semibold">Organizer:</p>
                        <p className=" font-medium"><span className='font-semibold'>Name: </span>{campaign.userName}</p>
                        <p className=" text-sm"><span className='font-semibold'>Email: </span>{campaign.userEmail}</p>
                    </div>

                    <div className="mt-6">
                        <button onClick={handleDonate} className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none">Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampDetail;