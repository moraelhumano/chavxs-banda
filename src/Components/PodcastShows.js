import React, { Component } from 'react';
import  Zoom  from 'react-reveal/Zoom';
import  Fade  from 'react-reveal/Fade';


import LaMaldicion from '../../src/lamaldicion-logo.jpg';
import CineYAlcohol from '../../src/cineyalcohol.jpeg';
import Herejes from '../../src/herejes-logo.jpeg';
import Politicamente from '../../src/politicamentec.jpeg';
import StatusQlo from '../../src/status-ballarta.jpeg';
import SieteMachos from '../../src/7-machos.jpeg';



class PodcastShows extends Component{
    render() {
        return (
        <>
            <section className="w-full flex justify-center flex-col mt-6 md:mt-12">
            <Zoom>
                <div className="title-section">
                    <h3 className="text-2xl md:text-4xl text-gray-600 text-center text-white font-bold leading-none">
                        NUESTROS PODCAST
                    </h3>
                </div>
            </Zoom>  
                <div className="min-w-7xl flex justify-center flex-col md:flex-row mt-8">
                <Fade left>
                    <div className="max-w-xs h-120 shadow-md border border-gray-200 rounded-lg  mb-5 flex items-center flex-col m-auto md:m-0">
                        <div className="w-full rounded-t-lg flex justify-center" style={{background:'#9c9692'}}>
                            <img className="w-64 rounded-t-lg" src={StatusQlo} alt="" />
                        </div>
                        <div className="h-full p-5 flex content-between flex-col">
                        <div className="h-inherit">
                            <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-0.5">Status Qlo</h5>
                        </a>
                        <p className=""><b>MIÉRCOLES | 10:00AM</b></p>
                        <p className="font-normal text-gray-700">Un videoblog con micrófono visible de Carlos Ballarta </p>   
                        </div>
                        <div className="flex md:justify-start space-x-6 text-gray-600">
                            <a href="https://www.instagram.com/status_qlo/" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/watch/370213806501456/2722038104754968/" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/watch?v=sFYPiNU7FIQ" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8"  aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path className="text-shadow-title" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a> 
                            <a href="https://open.spotify.com/show/6m8vwkwY9I7Fepk7dIkHyc" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                                </svg>
                            </a> 
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="max-w-xs h-120 shadow-md border border-gray-200 rounded-lg  mb-5 flex items-center flex-col m-auto md:m-0 md:mx-2">
                    <div className="bg-white w-full rounded-t-lg flex justify-center border-b-2" >
                        <img className="w-64 rounded-t-lg" src={Herejes} alt="" />
                    </div>
                    <div className="h-full p-5 flex content-between flex-col">
                    <div className="h-inherit">
                            <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-0.5">Herejes: El Podcast</h5>
                        </a>
                        <p className=""><b>DOMINGO | 10:00AM</b></p>
                        <p className="font-normal text-gray-700">Un podcast de libre indagación, actitud abierta y búsqueda de las ideas por lo que valen en sí mismas.</p>   
                        </div>
                        <div className="flex md:justify-start space-x-6 text-gray-600">
                            <a href="https://www.instagram.com/herejes_elpodcast" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/herejespodcast/" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/HerejesP" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/watch?v=Z1RRx-S4l84&list=PLA014zR7bjsY5RGCr9xLZYifaXkA7oCT-" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8"  aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path className="text-shadow-title" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a> 
                            <a href="https://open.spotify.com/show/5pimYTQLSCx0M0wYyYWGe8" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                                </svg>
                            </a> 
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade left>
                <div className="max-w-xs h-120 shadow-md border border-gray-200 rounded-lg  mb-5 flex items-center flex-col m-auto md:m-0">
                    <div className="w-full rounded-t-lg flex justify-center" style={{backgroundColor: '#fff300'}}>
                        <img className="w-64 rounded-t-lg" src={CineYAlcohol} alt="" />  
                    </div>
                    <div className="h-full p-5 flex content-between flex-col">
                        <div className="h-inherit">
                            <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-0.5">Cine y Alcohol</h5>
                        </a>
                        <p className=""><b>MARTES | 12:00PM</b></p>
                        <p className="font-normal text-gray-700">Un Podcast donde junto a Chava, hablamos entre copas sobre cine, televisión y cultura pop.</p>   
                        </div>
                        <div className="flex md:justify-start space-x-6 text-gray-600">
                            <a href="https://www.facebook.com/cineyalcohol/" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                                </svg>
                            </a>    
                            <a href="https://www.youtube.com/watch?v=O_BqqqXOye4&list=PLA014zR7bjsZvp1YkZa-4fNv5GIYx7_pb" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8"  aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path className="text-shadow-title" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a> 
                            <a href="https://open.spotify.com/show/10uYVlQuP4iDA1tLEdr7jC" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                                </svg>
                            </a> 
                        </div>
                    </div>
                </div>
                </Fade>
            </div>

            <div className="min-w-7xl flex justify-center flex-col md:flex-row mt-0 md:mt-6 ">
            <Fade right>
                <div className="max-w-xs h-120 shadow-md border border-gray-200 rounded-lg  mb-5 flex items-center flex-col m-auto md:m-0">
                        <div className="w-full rounded-t-lg flex justify-center flex-col md:flex-row bg-politicamente items-center">
                            <img className="w-64 rounded-t-lg" src={Politicamente} alt="" />
                        </div>
                        <div className="h-full p-5 flex content-between flex-col">
                        <div className="h-inherit">
                            <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-0.5">Políticamente Promiscuo</h5>
                        </a>
                        <p className=""><b>MARTES | 09:00PM</b></p>
                        <p className="font-normal text-gray-700">Un Podcast donde junto a Chava, hablamos entre copas sobre cine, televisión y cultura pop.</p>   
                        </div>
                        <div className="flex md:justify-start space-x-6 text-gray-600">
                            <a href="https://www.youtube.com/watch?v=2jFb842_D2M&list=PLA014zR7bjsZvFzCCQ9-ah-ued4cCM8a-" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8"  aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path className="text-shadow-title" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a> 
                            <a href="https://open.spotify.com/show/1PwV7CNY3Qg7qyKNe1yR9J" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                                </svg>
                            </a> 
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade left>
                <div className="max-w-xs h-120 shadow-md border border-gray-200 rounded-lg  mb-5 flex items-center flex-col m-auto md:m-0 md:mx-2">
                    <div className="bg-black w-full rounded-t-lg flex justify-center">
                        <img className="w-64 rounded-t-lg" src={LaMaldicion} alt="" />
                    </div>
                    <div className="h-full p-5 flex content-between flex-col">
                        <div className="h-inherit">
                            <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-0.5">La Maldición Gitana</h5>
                        </a>
                        <p className=""><b>LUNES | 09:00PM</b></p>
                        <p className="font-normal text-gray-700">Un Podcast donde junto a Chava, hablamos entre copas sobre cine, televisión y cultura pop.</p>   
                        </div>
                        <div className="flex md:justify-start space-x-6 text-gray-600">
                            <a href="https://www.facebook.com/LaMaldicionGitanaPodcast/" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/GitanaMaldicion" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/watch?v=QDThlaoDC5E&list=PLA014zR7bjsZscVrtqlPyrtK-7gEs--AQ" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8"  aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path className="text-shadow-title" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a> 
                            <a href="https://open.spotify.com/show/3tDDvMElwSEN9GJlt6SZlK" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                                </svg>
                            </a> 
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="max-w-xs h-120 shadow-md border border-gray-200 rounded-lg  mb-5 flex items-center flex-col m-auto md:m-0">
                    <div className="bg-black w-full rounded-t-lg flex justify-center">
                        <img className="w-64 rounded-t-lg" src={SieteMachos} alt="" />
                    </div>
                    <div className="h-full p-5 flex content-between flex-col">
                        <div className="h-inherit">
                            <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-0.5">7 Machos</h5>
                        </a>
                        <p className=""><b>DOMINGO | 08:00PM</b></p>
                        <p className="font-normal text-gray-700">Uno de los colectivos clasicos del Stand Up ahora en podcas. Ahí se quedan con sus mamarrachos </p>   
                        </div>
                        <div className="flex md:justify-start space-x-6 text-gray-600">
                            <a href="https://www.instagram.com/7_machos" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/sietemachines/" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/sietemachines" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/watch?v=tt6qWlTypfY&list=PLA014zR7bjsZIXgzVNAfObkllID0qPlfq" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8"  aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path className="text-shadow-title" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a> 
                            <a href="https://open.spotify.com/album/6RgGXHeTTBLrcCIHjKpvFa" target="_blank" className=" text-shadow-title h-fit-content">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor"  viewBox="0 0 24 24">
                                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                                </svg>
                            </a> 
                        </div>
                    </div>
                </div>
                </Fade>
            </div>


            {/* <div className="min-w-7xl flex justify-center">
                    <div className="max-w-xs h-120 shadow-md border border-gray-200 rounded-lg  mb-5 flex items-center  flex-col">
                        <div className="bg-black w-full rounded-t-lg flex justify-center">
                            <a  href="#">
                                <img className="w-64 rounded-t-lg" src={LaMaldicion} alt="" />
                            </a>
                        </div>
                        <div className="p-5">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">La Maldición Gitana</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3">Tres hombres, una maldición y una botella de mezcal</p>
                        <div className="flex justify-center md:justify-start mt-4 space-x-6 text-gray-600 ">
                            <a href="https://www.instagram.com/elalexfdz" target="_blank" className=" text-shadow-title">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/ElAlexFdz" target="_blank" className=" text-shadow-title">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/alexfdz" target="_blank" className=" text-shadow-title">
                                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/c/AlexFdzOficial/playlists" target="_blank" className=" text-shadow-title">
                                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                
            </div> */}

            </section>
        </>

        )
    }
}
export default PodcastShows;



