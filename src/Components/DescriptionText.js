import React, { Component } from 'react';
import  Bounce  from 'react-reveal/Zoom';




class DescriptionText extends Component{
    render() {
        return (
        <>
        <section className="mt-6 md:mt-12">
                <section className="max-w-5xl bg-white rounded-2xl p-6 mx-auto container-services ">
                    <section className="flex justify-center flex-col md:flex-row text-center ">
                    <Bounce left>
                        <div className="sm:w-full p-2 sm-text-center flex flex-col justify-center">
                            <h3 className="text-3xl md:text-5xl text-gray-600 font-bold leading-none">
                                ¡CHAVXS BANDA!
                            </h3>
                            <p className="text-lg md:text-3xl text-gray-600 mt-4 font-light leading-5">
                            Somos una productora de comedia alternativa que busca impulsar talentos cuyo estilo de comedia difiera del común denominador. Nos motiva la representación y la diversidad. 
                            </p>
                        </div>
                        </Bounce>
                    </section>
                </section>
        </section>

        </>

        )
    }
}
export default DescriptionText;



