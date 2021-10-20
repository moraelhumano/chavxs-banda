import React, { Component } from 'react';
import LogoNavChavxs from '../../src/logochavxsbanda.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class NavBar extends Component{
    render() {
        return (
        <>
        <nav className="md:fixed w-full  z-30 top-0 primary-bg-color px-12 md:px-16 py-2 mx-auto flex  justify-center ">
            <div className="flex w-full items-center justify-center md:justify-between">
                <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img className="h-16 md:h-20 items-center" src={LogoNavChavxs} alt="" />
                </Link>
            </div>
        </nav>
        </>

        )
    }
}
export default NavBar;

