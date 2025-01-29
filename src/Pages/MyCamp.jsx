import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ThemeContext } from '../Provider/ThemeProvider';
import axios from 'axios';

const MyCamp = () => {
    const { user } = useContext(AuthContext);
    const [myCamp, setMyCamp] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/campaigns/all/email/${user.email}`, { withCredentials: true })
        .then(response => { 
            setMyCamp(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error.message);
            setLoading(false);
        });
    
    }, [user.email]);

    const handleCampDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaigns/all/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingCamp = myCamp.filter(user => user._id !== id);
                            setMyCamp(remainingCamp);
                            console.log('data should be delete', data)
                        }
                    })
                    .catch(error => console.log(error.message));
            }
        });
    };
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-full  ${theme === "light" ? '' : 'bg-gray-900 text-white'}`}>
            <div className="container mx-auto w-11/12 md:w-auto">
                <div className="overflow-x-auto py-8">
                    <h2 className='font-bebas text-3xl text-center underline mb-6'>My Campaigns</h2>
                    {
                        loading ? (
                            <div className="flex justify-center items-center">
                                <span className="loading loading-bars loading-lg"></span>
                            </div>
                        ) : (
                            myCamp.length !== 0 ?
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th></Th>
                                            <Th>Name</Th>
                                            <Th>Email</Th>
                                            <Th>Campaign Title</Th>
                                            <Th>Campaign Type</Th>
                                            <Th>Donation Goal</Th>
                                            <Th>Activity</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody className='text-center'>
                                        {
                                            myCamp.map((data, idx) => {
                                                return (
                                                    <Tr key={data._id}>
                                                        <Td>{idx + 1}</Td>
                                                        <Td>{data?.userName}</Td>
                                                        <Td>{data?.userEmail}</Td>
                                                        <Td>{data?.title}</Td>
                                                        <Td>{data?.camType}</Td>
                                                        <Td>${data?.amount}</Td>
                                                        <Td>
                                                            <div className='flex !flex-row gap-2 justify-center text-2xl'>
                                                                <MdDeleteForever onClick={() => handleCampDelete(data._id)} className='text-red-500 cursor-pointer' />
                                                                <NavLink to={`/updateCampaign/${data._id}`}>
                                                                    <MdEditSquare className='text-primary' />
                                                                </NavLink>
                                                            </div>
                                                        </Td>
                                                    </Tr>
                                                );
                                            })
                                        }
                                    </Tbody>
                                </Table> :
                                <h1 className='text-center font-3xl font-semibold'>PLEASE ADD CAMPAIGN FIRST</h1>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCamp;
