import React, { useContext } from 'react';
import Banner from '../Components/Banner';
import Gallery from '../Components/Gallery';
import ReviewSlider from '../Components/Review';
import Status from '../Components/Status';
import Campaigns from '../Components/Campaigns';  
import { ThemeContext } from '../Provider/ThemeProvider';
const HomeLayout = () => {  
    const { theme, handleToggle } = useContext(ThemeContext)
    return (
        <div className={theme==="light"? 'bg-white': 'bg-gray-900'}> 
            <Banner></Banner>
            <Campaigns></Campaigns>
            <Gallery></Gallery>
            <Status></Status>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default HomeLayout;