import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import Cart from "./components/Cart"
import DetailsProduct from './components/DetailsProduct';
import ResumeOrder from './components/views/ResumeOrder';


function Rotas() {
    return(
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/user" element={<BoardUser/>} />
                <Route exact path="/cart/:idProduct" element={<Cart/>} />
                <Route exact path="/detailsProduct/:id" element={<DetailsProduct/>} />
            </Routes>
    )
}
export default Rotas;