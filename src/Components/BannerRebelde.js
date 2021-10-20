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
            <div className="w-screen bg-black flex items-center justify-center flex-col md:flex-row">
                <img className="w-52" src={RebeldeLogo} />
                <p className="tracking-tight font-extrabold text-white px-20 sm:text-2xl md:text-3xl text-shadow-lg">ENCUENTRA AQUÍ TUS BOLETOS</p>

                <img className="w-44" src={RebeldeBallarta} />
            </div>
        </a>
        </>

        )
    }
}
export default BannerRebelde;

