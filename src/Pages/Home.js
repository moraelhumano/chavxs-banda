import React, { Component } from 'react';

import HeroHome from '../Components/HeroHome';
import Calendar from '../Components/Calendar';

// import Shows from '../Components/Shows';
// import Profile from '../Components/Profile';
// import Projects from '../Components/Projects'
import Footer from '../Components/Footer';


 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DescriptionText from '../Components/DescriptionText';
import PodcastShows from '../Components/PodcastShows';
import BannerRebelde from '../Components/BannerRebelde';
import FanArtNote from '../Components/FanArtNote';

// import MerchBanner from '../Components/MerchBanner';



class Home extends Component{
    render() {
        return (
        <>
        <Router>
        <HeroHome />
        <BannerRebelde />
        <DescriptionText />
        <PodcastShows />
        
        <Calendar />
            {/*
            <MerchBanner />
            <Profile />
            <Shows />
            <Projects />
            */}
             <Footer />
             <FanArtNote />
        </Router>
        </>

        )
    }
}
export default Home;


