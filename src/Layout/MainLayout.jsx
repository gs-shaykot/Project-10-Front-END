import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

const MainLayout = () => {
    return (
        <div className='font-roboto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;