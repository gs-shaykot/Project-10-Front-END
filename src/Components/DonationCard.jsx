import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Provider/ThemeProvider';

const DonationCard = ({data}) => {
    const{theme}=useContext(ThemeContext)
    console.log("From: ",data)
    return (
        <div>
            <div className={`w-[90%] lg:w-auto mx-auto ${theme==="light"? '': 'text-white shadow-slate-700'} shadow-2xl p-4 rounded-md`}>
                <img className='rounded-lg mb-4 w-full h-52' src={data.photo} alt="" />
                <h1 className='text-2xl mb-3 font-semibold font-bebas'>{data.Camp_title}</h1>
                <div className='flex justify-between font-bold mb-3'>
                    <h2><span className="font-medium">Category:</span> {data.type}</h2>
                    <h2><span className="font-medium">Deadline:</span> {data.deadline}</h2>
                </div>
                <div className="flex justify-between font-bold mb-3">
                    <h2 className='font-bold mb-4'><span className="font-medium">Posted By:</span> {data.organizer}</h2>
                    <h2 className='font-bold mb-4'><span className="font-medium">Donated Amount:</span> {data.goal}</h2>
                </div>
                <div className="flex flex-col justify-between font-bold mb-3">
                    <h2 className='font-bold mb-4'><span className="font-medium">Donated By:</span> {data.Donar_name}</h2>
                    <h2 className='font-bold mb-4'><span className="font-medium">Donaer Email:</span> {data.Donar_email}</h2>
                </div> 
            </div>
        </div>
    );
};

export default DonationCard;