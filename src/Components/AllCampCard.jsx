import React from 'react';

const AllCampCard = ({data}) => {
    return (
        <div>
            <div className='w-[90%] lg:w-auto mx-auto shadow-2xl p-4 rounded-md'>
                <img className='rounded-lg mb-4 w-full h-52' src={data.photo} alt="" />
                <h1 className='text-2xl mb-3 font-semibold font-bebas'>{data.title}</h1>
                <div className='flex justify-between font-bold mb-3'>
                    <h2><span className="font-medium">Category:</span> {data.camType}</h2>
                    <h2><span className="font-medium">Deadline:</span> {data.deadline}</h2>
                </div>
                <h2 className='font-bold mb-4'><span className="font-medium">Posted By:</span> {data.userName}</h2>
                <button className="btn bg-primary hover:bg-secondary hover:text-black hover:border-0 text-white text-lg w-full">See More</button>
            </div>
        </div>
    );
};

export default AllCampCard;