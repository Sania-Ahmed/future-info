import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;