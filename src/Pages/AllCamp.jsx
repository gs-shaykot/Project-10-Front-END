import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Typewriter } from 'react-simple-typewriter';
import { ThemeContext } from '../Provider/ThemeProvider';

const AllCamp = () => {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        fetch('http://localhost:5000/campaigns/all')
            .then(res => res.json())
            .then(data => {
                setCard(data);
                console.log(card);
                setLoading(false);
            });
    }, []);


    const handleSort = (e) => {
        fetch('http://localhost:5000/campaigns/all/sorted/descending')
            .then(res => res.json())
            .then(data => {
                setCard(data);
                console.log(card);
                setLoading(false);
            });
    }

    return (
        <div className={`w-full  ${theme === "light" ? '' : 'bg-gray-900 text-white'}`}>
            <div className={`container mx-auto w-11/12 md:w-auto`}>
                <div className="overflow-x-auto py-6">
                    <h2 className='font-bebas text-3xl text-center underline mb-6'>All Campaigns</h2>
                    <button onClick={handleSort} className="btn bg-secondary text-white text-xl px-10 mb-6">Sort</button>
                    {
                        loading ? (
                            <div className="flex justify-center items-center">
                                <span className="loading loading-bars loading-lg"></span>
                            </div>) :
                            (
                                <Table className='text-center'>
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
                                    <Tbody>
                                        {
                                            card.map((data, idx) => {
                                                return (
                                                    <Tr key={data._id}>
                                                        <Td>{idx + 1}</Td>
                                                        <Td>{data?.userName}</Td>
                                                        <Td>{data?.userEmail}</Td>
                                                        <Td>{data?.title}</Td>
                                                        <Td>{data?.camType}</Td>
                                                        <Td>${data?.amount}</Td>
                                                        <Td>
                                                            <NavLink to={`/campaigns/${data._id}`} className='btn bg-primary hover:bg-secondary p-2 text-white'>
                                                                See More
                                                            </NavLink>
                                                        </Td>
                                                    </Tr>
                                                );
                                            })
                                        }
                                    </Tbody>
                                </Table>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCamp;
