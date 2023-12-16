import React, {useState} from "react";
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Recipes from '../Components/Recipes'
import {Route, Routes} from 'react-router-dom';
import Rother from "../Components/Rother";

//Halaman base untuk layout
const Base = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        // console.log("this")
        setOpen(!open);
    }
    return (
        <div>
            <Header toggleDrawer={toggleDrawer} open={open}/>
            <Sidebar toggleDrawer={toggleDrawer} open={open}/>
            <main>
                <div/>
                <Routes>
                    <Route path={`/recipes`} element={<Recipes/>}/>
                    <Route path={`/rother`} element={<Rother/>}/>
                </Routes>
                <Footer/>
            </main>
        </div>
    )
};

export default Base;
