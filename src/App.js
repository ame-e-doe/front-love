import React from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Rotas from './rotas'

import { HashRouter } from "react-router-dom";

const App = () => {
      return (
        <HashRouter>
              <Navbar />
              <Rotas />
        </HashRouter>
      );
}
export default App;