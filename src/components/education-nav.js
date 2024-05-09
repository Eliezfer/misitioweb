import React from 'react';
import gradIcon  from "../imgs/graduation-cap.svg";
import workIcon  from "../imgs/briefcase-alt.svg";
import uadyImg from '../imgs/journay/uady.jpg';
import botImg from '../imgs/journay/bot.jpg';
import fmatImg from '../imgs/journay/fmat.jpg';
import adiraImg from '../imgs/journay/adira.jpg';
import accentureImg from '../imgs/journay/accenture.jpg'
import nexuImg from '../imgs/journay/nexu.png'
//import { useStaticQuery, graphql} from 'gatsby';

export default(props)=>{
   /** const data = useStaticQuery(graphql`
        {
            allEducationJson{
                edges{
                    node{
                        slug
                        title
                        description
                    }
                }
            }
        }
    `);*/

    return(
        <div id='qualification' className="container-center pt-20 px-12 mx-auto">
            <h1 className=" font-bold text-3xl flex justify-center items-center " >Qualification</h1>
            <span className="font-bold bg-gray-900 text-1xl txt-color-primary flex justify-center items-center text-center w-48 mx-auto"> My personal journey</span>

            <div class="relative container mx-auto px-6 flex flex-col space-y-8">
            <div
                class="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>
            <div class="relative z-10">
                <img
                    src={uadyImg}
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container">
                    <div class="timeline-pointer" aria-hidden="true"></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <div className="flex"><span
                            class="font-bold txt-color-primary text-sm tracking-wide"
                            >2016 - 2021  </span>
                             <img src={gradIcon} className=" w-5 mx-4" alt=""></img>
                        </div>
                        <h1 class="text-1xl xl:text-xl font-bold pt-1">
                            Ingeniería de Software
                        </h1>
                        <p class="pt-1">
                            Universidad Autónoma de Yucatán
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative z-10">
                <img
                    src={botImg}
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container timeline-container-left">
                    <div
                        class="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <div className="flex"><span
                            class="font-bold txt-color-primary text-sm tracking-wide"
                            >April 2019 - July 2019 </span>
                             <img src={workIcon} className=" w-5 mx-4" alt=""></img>
                        </div>
                        <h1 class="text-1xl xl:text-xl font-bold pt-1">SQA Training</h1>
                        <p class="pt-1">
                            Blue Ocean Technologies
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative z-10">
                <img
                    src={fmatImg}
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container">
                    <div class="timeline-pointer" aria-hidden="true"></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <div className="flex"><span
                            class="font-bold txt-color-primary text-sm tracking-wide"
                            >January 2020 - August 2020 </span>
                             <img src={workIcon} className=" w-5 mx-4" alt=""></img>
                        </div>
                        <h1 class="text-1xl xl:text-xl font-bold pt-1">
                            Developer
                        </h1>
                        <p class="pt-1">
                            FMAT - FISU (social service)
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative z-10">
                <img
                    src={adiraImg}
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container timeline-container-left">
                    <div
                        class="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <div className="flex"><span
                            class="font-bold txt-color-primary text-sm tracking-wide"
                            >August 2020 - June 2022 </span>
                             <img src={workIcon} className=" w-5 mx-4" alt=""></img>
                        </div>
                        <h1 class="text-1xl xl:text-xl font-bold pt-1">Backend & DevOps Developer</h1>
                        <p class="pt-1">
                            Adira MX Suite
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        {/*<div className="flex"><span
                            class="font-bold txt-color-primary text-sm tracking-wide"
                            >Julio 2021 - presente </span>
                             <img src={workIcon} className=" w-5 mx-4" alt=""></img>
                        </div>*/}
                        <h1 class="text-1xl xl:text-xl font-bold pt-1">Full-stack Developer</h1>
                        <p class="pt-1">
                            Adira MX Suite
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative z-10">
                <img
                    src={accentureImg}
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container">
                    <div class="timeline-pointer" aria-hidden="true"></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <div className="flex"><span
                            class="font-bold txt-color-primary text-sm tracking-wide"
                            >October 2021 - June 2022 </span>
                             <img src={workIcon} className=" w-5 mx-4" alt=""></img>
                        </div>
                        <h1 class="text-1xl xl:text-xl font-bold pt-1">
                            App Engineering Analyst (Java Backend Developer)
                        </h1>
                        <p class="pt-1">
                            Accenture
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative z-10">
                <img
                    src={nexuImg}
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container timeline-container-left">
                    <div
                        class="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <div className="flex"><span
                            class="font-bold txt-color-primary text-sm tracking-wide"
                            >June 2022 - Present </span>
                             <img src={workIcon} className=" w-5 mx-4" alt=""></img>
                        </div>
                        <h1 class="text-1xl xl:text-xl font-bold pt-1">Mid Developer -  Ruby & Angular</h1>
                        <p class="pt-1">
                            Nexu
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}
