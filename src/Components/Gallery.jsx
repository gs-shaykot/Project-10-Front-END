import React, { useContext } from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import { ThemeContext } from '../Provider/ThemeProvider';

const Gallery = () => {
    const{theme}=useContext(ThemeContext)
    return (
        <div className={`container mx-auto py-7 w-11/12 lg:w-full ${theme==="light"? '': 'text-white'}`}>
            <div className='text-center py-6'>
                <Bounce>
                    <h1 className='font-bebas text-5xl font-semibold underline'>Our Gallery</h1>
                </Bounce>
            </div>
            <Fade>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <img className='rounded-lg w-full h-full' src="https://i.ibb.co.com/vvm1h8R/B-min.png" alt="" />
                    <img className='rounded-lg w-full h-full' src="https://i.ibb.co.com/rk5cLpt/C-min.png" alt="" />
                    <img className='rounded-lg w-full h-full' src="https://i.ibb.co.com/YjhnWZg/D-min.jpg" alt="" />
                    <img className='rounded-lg w-full h-full' src="https://i.ibb.co.com/N66J2DW/front-view-man-working-eco-friendly-wind-power-project-with-laptop-wind-turbines-min.jpg" alt="" />
                    <img className='rounded-lg w-full h-full' src="https://i.ibb.co.com/GktJBt6/stock-photo-cloud-lung-concept-of-green-and-healthy-earth-sustainable-and-ecology-oxygen-fresh-air-b.jpg" alt="" />
                    <img className='rounded-lg w-full h-full' src="https://i.ibb.co.com/4ghLW7r/1733255224565-min.jpg" alt="" />
                    <img className='rounded-lg w-full h-full' src="https://i.ibb.co.com/c80YCwC/photorealistic-wild-tuna-day-celebration-min.jpg" alt="" />
                    <img className='rounded-lg w-full h-full' src="https://i.ibb.co.com/tpRccm0/A-min.png" alt="" />
                </div>
            </Fade>
        </div>
    );
};

export default Gallery; 