import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";


const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};







export default App;