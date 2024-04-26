import React from "react";
import illustration from '../imgs/profile-header.png';
import github from '../imgs/github-mark-white.png';
import linkendin from '../imgs/In-White.png';
import cvPDF from '../assets/Eliezer_Couoh_Resume-2024-EN.pdf'

export default () =>(
    <header className="bg-gray-900 sm:h-screen  pt-20 sm:pt-pt-20">
        
        <div className=" my-auto md:space-y-4 mx-auto px-12 sm:py-20  max-w-7xl ">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:flex md:mb-4">
               


                <img className="col-span-1 w-56 object-contain mx-auto sm:order-3 md:w-5/12 lg:w-4/12 xl:mx-auto xl:w-4/12 " src={illustration} alt=""></img>
                <p class="flex justify-center items-center col-span-2 text-white md:hidden pt-4" >Hi, I'm</p>
                <h1 className="flex justify-center items-center col-span-2  md:hidden font-bold text-white text-4xl ">Eliezer Couoh </h1>
                <div className="col-span-2 sm:col-span-1 md:px-6 md:mx-6 md:w-1/2 w-auto flex flex-col items-center justify-center" >
                    <p class=" hidden text-white md:contents" >Hi, I'm</p>
                    <h1 className=" hidden md:inline font-bold text-white md:text-4xl lg:text-5xl md:py-2">Eliezer Couoh </h1>
                    
                    <h2 class=" text-white text-xl md:py-4">Backend developer</h2>
                    

                    <div className="flex flex-wrap pb-6 inline-flex items-center justify-center">
                        <a href={cvPDF} download class="btn-header btn-color-2 p-2 my-2 px-4 mx-2 rounded-full inline-flex items-center justify-center">
                            <span className="text-white">Download CV  </span>
                            <svg class="fill-current w-6 h-6 ml-2 animate-bounce"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="#FFFFFF" d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"/>
                            </svg>
                        </a>
                        
                    
                        <a href="../#contact" class="btn-header bg-color-primary hover:bg-blue-700 text-white p-2 my-2 px-4 mx-2 rounded-full inline-flex items-center justify-center">
                            <span>Contact me</span>
                            <svg class="fill-current w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-wrap pb-6">
                    <a href="https://github.com/Eliezfer">
                        <img
                            src={github}
                            alt="My Github profile"
                            className="h-8 px-4"
                        />
                        </a>

                       <a href="https://www.linkedin.com/in/eliezfer">
                        <img
                            src={linkendin} 
                            alt="My LinkedIn profile"
                            className="h-8 px-4"
                        />
                        </a>
                    </div>

                </div>
                
            </div>

        </div>
    </header>
)