import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import DonationCard from '../Components/DonationCard';
import { Typewriter } from 'react-simple-typewriter'
import { ThemeContext } from '../Provider/ThemeProvider';
const myDonate = () => {
    const { user } = useContext(AuthContext);
    const [myCamp, setMyCamp] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/donated_collection/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCamp(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error.message);
                setLoading(false);
            });
    }, [user.email]);
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-full  ${theme === "light" ? '' : 'bg-gray-900 text-white'}`}>
            <div className="container mx-auto w-11/12 md:w-auto">
                <div className='py-6'>
                    <div className='font-bebas text-center text-5xl font-semibold underline mb-8'>
                        MY
                        <Typewriter words={[' Donations']} loop={false} />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                        {!loading && myCamp.length > 0 ? (
                            myCamp.map(data => (
                                <DonationCard key={data._id} data={data}></DonationCard>
                            ))
                        ) : (
                            !loading && <h2 className='text-center font-bold text-2xl'>No donations found. Start a new campaign to see your contributions!</h2>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default myDonate;
