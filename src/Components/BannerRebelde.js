import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';


import RebeldeBallarta from '../../src/BallartaRebelde.jpeg';
import RebeldeLogo from '../../src/RebeldeLogo.png';


class BannerRebelde extends Component{
    render() {
        return (
        <> 
        <a href="https://carlosballarta.net/" target="_blank">
            <div className="w-screen bg-black flex items-center justify-center flex-row py-2 md:py-0 px-4 md:px-0">
                <img className="w-28 md:w-52" src={RebeldeLogo} />
                <p className="tracking-tight w-1/2 font-extrabold text-white  sm:text-2xl md:text-3xl text-shadow-lg pl-4 md:pl-0 text-left md:text-center pb-3 pt-2 md:pt-0">ENCUENTRA AQUÍ TUS BOLETOS</p>
                <img className="md:w-44 hide-element" src={RebeldeBallarta} />
            </div>
        </a>
        </>

        )
    }
}
export default BannerRebelde;

