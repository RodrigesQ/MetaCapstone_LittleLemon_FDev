
import React from 'react'
import Home from "./routes/Home";
import About from "./routes/About";
import Menu from "./routes/Menu";
import Reservations from "./routes/Reservations";
import OrderOnline from "./routes/OrderOnline";
import Login from "./routes/Login";

import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <>
            <Routes>
                <Route path = "/" element = {<Home />}/>
                <Route path = "/about" element = {<About />}/>
                <Route path = "/menu" element = {<Menu />}/>
                <Route path = "/reservations" element = {<Reservations />}/>
                <Route path = "/order-online" element = {<OrderOnline />}/>
                <Route path = "/login" element = {<Login />}/>
            </Routes>
        </>
    );
}

export default App;
