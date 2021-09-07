import React from "react";
import illustration from '../imgs/me.jpg';
import cvPDF from '../assets/Eliezer-Couoh-CV.pdf'


export default () =>(
    <div className="container-center pt-20 sm:px-12 mx-auto">
        <h1 className=" font-bold text-3xl flex justify-center items-center " >About me</h1>
        <span className="font-bold bg-gray-900 text-1xl txt-color-primary flex justify-center items-center w-48 mx-auto">Who is Eliezfer?</span>
        <div className=" py-10 flex flex-col md:flex-row justify-center items-center ">
            
            <img className=" w-56 object-contain rounded-xl mx-auto md:w-4/12 lg:w-2/6 xl:mx-auto" src={illustration} alt=""></img>
            <div className=" pt-10 md:w-3/5 flex flex-col items-center ">
               <p className="  px-10 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non bibendum elit. Maecenas eu nisl nec lorem porttitor iaculis sit amet ac nibh. Sed sollicitudin libero quis urna pharetra ultricies. Morbi non turpis non ligula auctor faucibus. Sed velit erat, fringilla a ornare sed, pharetra id quam. Nunc mi orci, lobortis ut justo a, accumsan sodales dolor. In ac ex posuere, ornare risus at, interdum nisl. 
                </p> 

                <div className="sm:px-10 py-6 grid gap-x-8 grid-flow-col grid-cols-3 text-center ">
                    <div className="flex flex-col justify-center items-center ">
                        <span className=" bg-gray-900 text-white text-bold text-md sm:text-2xl"> 01+ </span>
                        <span className="text-sm sm:text-base"> Years <br></br>experience  </span>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center">
                        <span className="bg-gray-900 text-white  text-bold text-md sm:text-2xl"> 02+ </span>
                        <span className="text-sm sm:text-base"> Companies <br></br> worked </span>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center">
                        <span className="bg-gray-900 text-white  text-bold text-md sm:text-2xl"> 02+ </span>
                        <span className="text-sm sm:text-base"> Companies <br></br> worked </span>
                    </div>
            
                </div>
                
                <div className="sm:px-10">
                    <a href={cvPDF} download class="bg-color-primary hover:bg-blue-700 font-bold py-2 my-6 px-4 rounded inline-flex items-center">
                        <span className="text-white">Download CV  </span>
                        <svg class="fill-current w-6 h-6 ml-2"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#FFFFFF" d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"/>
                        </svg>
                    </a>
                    
                </div>

            </div>
            
        </div>
    </div>
)