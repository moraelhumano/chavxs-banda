import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';


import ChavxsBandaHero from '../../src/chavxsbandalogo.png';

class HeroHome extends Component{
    render() {
        return (
        <>
            <section className="md:pt-24 hero-home h-auto flex-col flex jusify-center">
                <div className="bg-black-alpha pb-10 md:pb-0">
                    <div className="container md:h-full px-3 md:px-0 mx-auto flex justify-around">
                        <div className="w-full flex justify-center text-center flex-col md:flex-row pt-6 md:pt-4">
                            <RubberBand>
                            <div className="md:w-3/12 flex items-center justify-center">
                                <img className=" w-2/3 md:w-full " src={ChavxsBandaHero} />  
                            </div>
                            </RubberBand>
                            <Fade bottom>
                            <div className="flex items-center md:items-start justify-center flex-col text-center md:text-left pl-0 md:pl-12">
                                <h1 class="jt text-6xl md:text-9xl">
                                    <span class="jt__row">
                                        <span class="jt__text">CHAVXS BANDA</span>
                                    </span>
                                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                                        <span class="jt__text">CHAVXS BANDA</span>
                                    </span>
                                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                                        <span class="jt__text">CHAVXS BANDA</span>
                                    </span>
                                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                                        <span class="jt__text">CHAVXS BANDA</span>
                                    </span>
                                </h1>
                                <p className="tracking-tight font-extrabold text-white sm:text-4xl text-shadow-lg">CREANDO COMEDIA ALTERNATIVA</p>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>

        )
    }
}
export default HeroHome;

