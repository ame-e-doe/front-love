import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";

function Rotas() {
    return(
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/user" element={<BoardUser/>} />
            </Routes>
    )
}
export default Rotas;