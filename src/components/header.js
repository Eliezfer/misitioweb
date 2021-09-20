import React from "react";
import illustration from '../imgs/profile-header.png';
import Navbar from "./navbar";


export default () =>(
    <header className="bg-gray-900 sm:h-screen ">
        <Navbar/>
        <div className=" my-auto md:space-y-4 mx-auto px-12 sm:py-20  max-w-7xl ">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:flex md:mb-4">
               


                <img className="col-span-1 w-56 object-contain mx-auto sm:order-3 md:w-4/12 lg:w-1/4 xl:mx-auto xl:w-1/4 " src={illustration} alt=""></img>
                <h1 className="flex justify-center items-center col-span-2  md:hidden font-bold text-white text-4xl pt-4">Hi, Soy Eliezer </h1>
                <div className="col-span-2 sm:col-span-1 md:px-6 md:mx-6 md:w-1/2 w-auto flex flex-col items-center justify-center sm:justify-items-start sm:items-start " >
                    
                    <h1 className=" text-xs invisible md:visible font-bold text-white md:text-4xl lg:text-5xl md:py-4">Hi, Soy Eliezer </h1>
                    
                    <h3 className=" font-bold text-white text-1xl md:text-md xl:text-xl pb-4 md:py-4">Ingeniero de Software</h3>
                    <p className="text-base sm:text-sm md:text-md xl:text-xl text-white font-light py-4">
                     Soy un Ingeniero de Software recien egresado (2021), con experiencia en dos años enfocado en el desarrollo web, aseguramiento de la calidad de software y DevOps.
                    </p>
                    <button class="bg-color-primary hover:bg-blue-700 text-white font-bold py-2 my-6 px-4 rounded inline-flex items-center">
                        <span>Contact Me</span>
                        <svg class="fill-current w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"/>
                        </svg>
                    </button>
                </div>
                
            </div>

        </div>
    </header>
)