import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import List from '../containers/List';
import Regis from '../containers/Regis';

const AppRoutes = () => {
    return (
        <BrowserRouter>
          <Navbar/>
        <Routes>

            <Route path="/" element={<Regis/>}/>
            <Route path="/List" element={<List/>}/>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;