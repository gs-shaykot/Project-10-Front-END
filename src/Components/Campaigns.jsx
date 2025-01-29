import React, { useContext, useEffect, useState } from 'react';
import Campaign from './Campaign';
import { Bounce, Zoom } from "react-awesome-reveal";
import { ThemeContext } from '../Provider/ThemeProvider';
const Campaigns = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/campaigns')
            .then(res => res.json())
            .then(data => {
                setCard(data)
            })
    }, [])
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`container mx-auto ${theme === "light" ? '' : 'text-white'}`}>
            <div className='py-6'>
                <h1 className='font-bebas text-center text-4xl md:text-5xl font-semibold underline mb-8'>
                    <Bounce>
                        Ruinning Campaigns
                    </Bounce>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                    <Zoom>
                        {
                            card.map(data => <Campaign key={data._id} data={data}></Campaign>)
                        }
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default Campaigns;