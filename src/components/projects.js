import React from "react";
import Carousel from "react-elastic-carousel";
import knImg from '../imgs/projects/kn.png';
import hnkImg from '../imgs/projects/heineken.png';
import tuduImg from '../imgs/projects/tudu.png';

export default () =>{

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
      ];

    
    return(
    <div id='projects' className="container-center pt-20 sm:px-12 mx-auto">
        <h1 className=" font-bold text-3xl flex justify-center items-center " >Projects</h1>
        <span className="font-bold bg-gray-900 text-1xl txt-color-primary flex justify-center items-center w-48 mx-auto">What have I worked on?</span>
        <div className=" py-10 flex flex-col md:flex-row justify-center items-center ">
         
        <Carousel breakPoints={breakPoints} >
            <div className="sm:p-6 ">
                <div className=" flex flex-col md:flex-row justify-center items-center">
                    <img className=" object-contain rounded-xl mx-auto md:w-6/12 lg:w-3/6 xl:mx-auto" src={knImg} alt=""></img>
                    <div className="  md:w-6/12 md:pl-10 flex flex-col ">
                        <span className="font-bold text-1xl py-4 text-gray-900 align-baseline lg:text-2xl">Knetworks</span>
                        <p className="lg:py-10 ">
                            Platform for managing the hiring of people for different companies. <br></br>
                            Backend tools: Java Spring and MongoDB. <br></br>
                            DevOps tools: Docker, Kubernates and Jenkins. <br></br>
                            Responsabilities: implementation of features and infrastructure release.
                        </p> 
                        {/*<div className="">
                            <a href="http://52.185.65.62/login" target="_blank" class="bg-color-primary hover:bg-blue-700 font-bold py-2 my-6 px-4 rounded inline-flex items-center">
                                <span className="text-white">Ver proyecto  </span>
                                
                            </a>
                        </div>*/}
                    </div>
                </div>
            </div>
            <div className="sm:p-6 ">
                <div className=" flex flex-col md:flex-row justify-center items-center">
                    <img className=" object-contain rounded-xl mx-auto md:w-6/12 lg:w-3/6 xl:mx-auto" src={hnkImg } alt=""></img>
                    <div className="  md:w-6/12 md:pl-10 flex flex-col ">
                        <span className="font-bold text-1xl py-4 text-gray-900 align-baseline lg:text-2xl">Heineken</span>
                        <p className="lg:py-10 ">
                            Platform to analyze data from company resources.<br></br>
                            Backend tools: Java Spring y MySql. <br></br>
                            Responsabilities: Backend sopport, and features for statistical analysis of confidence intervals for consumption predictions.  
                        </p> 
                        {/*<div className="">
                            <a href="https://performanceheineken.com/" target="_blank" class="bg-color-primary hover:bg-blue-700 font-bold py-2 my-6 px-4 rounded inline-flex items-center">
                                <span className="text-white">Ver proyecto  </span>
                                
                            </a>
                    </div>*/}
                    </div>
                </div>
            </div>
            <div className="sm:p-6 ">
                <div className=" flex flex-col md:flex-row justify-center items-center">
                    <img className=" object-contain rounded-xl mx-auto md:w-6/12 lg:w-3/6 xl:mx-auto" src={tuduImg} alt=""></img>
                    <div className="  md:w-6/12 md:pl-10 flex flex-col ">
                        <span className="font-bold text-1xl py-4 text-gray-900 align-baseline lg:text-2xl">Mobile App TuDu</span>
                        <p className="lg:py-10 ">
                            Mobile banking application for purchasing, transactions and paying for services with digital cards.<br></br>
                            Backend tools: Apis Rest con Java Spring, MySQL y MongoDB. <br></br>
                            FrontEnd tools: React Native. <br></br>
                            DevOps tools: Docker, Kubernates y Jenkins.<br></br>
                        </p> 
                        {/*
                        <div className="">
                        <span className="font-bold bg-color-primary text-1xl text-gray-900 flex justify-center items-center w-48 mx-auto py-2 my-6">APK aún no disonible</span>
                            
                </div>*/}
                    </div>
                </div>
            </div>
        </Carousel>
            
        </div>
    </div>
)}