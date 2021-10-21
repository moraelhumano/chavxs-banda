import React, { Component } from 'react';
import  Bounce  from 'react-reveal/Bounce';
import  Zoom  from 'react-reveal/Zoom';

import { Carousel } from 'react-responsive-carousel';



import Show00 from '../../src/show00.jpeg';
import Show01 from '../../src/show01.jpeg';
import Show02 from '../../src/show02.jpeg';
import Show03 from '../../src/show03.jpeg';
import Show04 from '../../src/show04.jpeg';



class DescriptionText extends Component{
    render() {
        return (
        <>
       <section className="max-w-5xl bg-white rounded-2xl mx-auto container-services flex-col mb-12 mt-16 md:mt-20">
       <Zoom>
                <div className="title-section flex flex-col">
                    <h3 className="text-2xl md:text-4xl text-gray-600 text-center text-white font-bold leading-none">
                        EL JAM DE STAND UP
                    </h3>
                    <h4 className="text-lg md:text-2xl text-gray-600 text-center font-light leading-none">TEMPORADA EN MARKETEATRO ROMA</h4>

                </div>
            </Zoom>  
            <section className="container min-w-7xl  mx-auto mt-6 flex flex-col md:flex-row wrap-own">
            <Bounce right>
            <div  className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
                <Carousel className="carousel-fan h-full " interval={3000} autoPlay  dynamicHeight infiniteLoop width  >
                    <div className="flex">
                        <img className="img-carousel-shows" src={Show00} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={Show01} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={Show02} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={Show03} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={Show04} />
                    </div>

                </Carousel>                       
            </div>
            </Bounce>
            <Bounce left>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-gray-600 mb-8 md:mb-0 text-lg md:text-left flex justify-start p-6" >
            <div class="w-full flex flex-col justify-start">
                <div className=" text-center md:text-left ">
                    <p className="text-gray-600 text-base md:text-xl font-bold">ANA JULIA / OCTUBRE 21 / 21:00 HRS</p>
                    <a className="self-center mt-12" target="_blank" href="https://www.goliiive.com/chavxs-banda">
                        <button class="mx-auto lg:mx-0 py-2 text-white font-bold bg-blue  px-4 border bg-primary-color content-center mt-2 rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
                <div className="mt-8 text-center md:text-left">
                    <p className="text-gray-600 font-bold text-base md:text-xl">RAY CONTERAS / OCTUBRE 28 / 21:00 HRS</p>
                    <a className="self-center mt-12" target="_blank" href="https://www.goliiive.com/chavxs-banda-con-ray-contreras">
                        <button class="mx-auto lg:mx-0 py-2 text-white font-bold mt-2 bg-blue px-4 border bg-primary-color content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>   
                    </a>
                </div>
                <div className="mt-8 text-center md:text-left">
                    <a className="self-center mt-12" target="_blank" href="https://www.goliiive.com/chavxs-banda-con-la-bea-y-kike-vazquez">
                    <p className="text-gray-600 font-bold text-base md:text-xl">LEA Y KIKE VAZQUEZ / NOVIEMBRE 4 / 21:00 HRS</p>
                        <button class="mx-auto lg:mx-0 py-2 text-white font-bold bg-blue mt-2 px-4 border bg-primary-color content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
                <div className="mt-8 text-center md:text-left">
                    <a className="self-center mt-12" target="_blank" href="https://www.goliiive.com/chavxs-banda-con-marcela-lecuona">
                    <p className="text-gray-600 font-bold text-base md:text-xl">MARCELA LEUCONA / NOVIEMBRE 11 / 21:00 HRS</p>
                        <button class="mx-auto lg:mx-0 py-2 text-white font-bold bg-blue mt-2 px-4 border bg-primary-color content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
            </div>
            </div>
            </Bounce>
        </section>
       
        </section>

        

        </>

        )
    }
}
export default DescriptionText;



