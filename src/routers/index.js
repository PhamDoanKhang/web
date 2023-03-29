import React from "react";
import { Route,Routes } from 'react-router-dom'
import Home from "../page/Home";
import About from "../page/About";
import pathName from "../routers/path"
import Contact from "../page/Contact";
import HomePage from "../../src/page/Home/home"
// import Rea
function HandelRouter() {
    return ( 
        <Routes>
            <Route path={pathName.home} element={<Home/>}>
                <Route index path="/" element={<HomePage />} />
                <Route path={pathName.about} element={<About />} />
                <Route path={pathName.contact} element={<Contact />} />
            </Route>
        </Routes>
     );
}

export default HandelRouter;