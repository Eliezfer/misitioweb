import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Skill from "./skill";




export default () =>{

    const data = useStaticQuery(graphql`{

        skillsJson {
            data {
                devops {
                    name
                    percentage
                  }
                frontend {
                    name
                    percentage
                  }
                backend {
                    percentage
                    name
                  }
                softskills {
                    name
                    percentage
                  }
            }
          }

    }`);

    return (
        
        <div id='skills' className="container-center pt-20 px-12 mx-auto">
            <h1 className=" font-bold text-3xl flex justify-center items-center " >Skills</h1>
            <span className="font-bold bg-gray-900 text-1xl txt-color-primary flex justify-center items-center text-center w-48 mx-auto">What technologies have I learned?</span>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">

                <div className="skills__content">
                    <div className="skills__header ">
                        <div className="flex flex-row items-center bg-white px-5 rounded-md lg:px-1 " name="">
                        <svg class="fill-current w-10 h-10 " viewBox="0 -138 490.66667 490" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#17dae8" d="M388.179688 213.667969c-21.546876 0-42.238282-7.125-60.03125-20.652344-1.066407-.492187-2.070313-1.171875-2.941407-2.046875l-44.738281-44.417969c-4.179688-4.136719-4.203125-10.898437-.042969-15.082031 4.183594-4.179688 10.921875-4.160156 15.105469-.042969l42.921875 42.625c.320313.214844.640625.425781.9375.660157 14.402344 11.542968 31.277344 17.621093 48.789063 17.621093 44.757812 0 81.152343-38.269531 81.152343-85.332031s-36.414062-85.332031-81.152343-85.332031c-17.492188 0-34.367188 6.078125-48.789063 17.597656-.488281.40625-1.042969.746094-1.597656 1.066406l-172.84375 151.105469c-.789063.683594-1.640625 1.257812-2.558594 1.664062-17.75 13.460938-38.402344 20.566407-59.90625 20.566407-56.511719 0-102.484375-47.851563-102.484375-106.667969s45.972656-106.667969 102.484375-106.667969c21.546875 0 42.242187 7.125 60.03125 20.652344 1.070313.492187 2.070313 1.171875 2.945313 2.046875l44.738281 44.417969c4.179687 4.136719 4.199219 10.898437.039062 15.082031-4.160156 4.203125-10.898437 4.203125-15.101562.042969l-42.921875-42.644531c-.320313-.214844-.640625-.429688-.941406-.664063-14.398438-11.519531-31.273438-17.597656-48.789063-17.597656-44.734375 0-81.152344 38.269531-81.152344 85.332031s36.417969 85.332031 81.152344 85.332031c17.496094 0 34.367187-6.078125 48.789063-17.597656.492187-.40625 1.046874-.746094 1.601562-1.066406l172.84375-151.105469c.789062-.683594 1.640625-1.257812 2.558594-1.664062 17.75-13.460938 38.398437-20.566407 59.902344-20.566407 56.511718 0 102.488281 47.851563 102.488281 106.667969s-45.976563 106.667969-102.488281 106.667969zm0 0"/>
                            <path d="m202.667969 85.667969h-64c-5.890625 0-10.667969-4.78125-10.667969-10.667969s4.777344-10.667969 10.667969-10.667969h53.332031v-53.332031c0-5.886719 4.777344-10.667969 10.667969-10.667969 5.886719 0 10.664062 4.78125 10.664062 10.667969v64c0 5.886719-4.777343 10.667969-10.664062 10.667969zm0 0"/>
                            <path d="m288 213.667969c-5.886719 0-10.667969-4.78125-10.667969-10.667969v-64c0-5.886719 4.78125-10.667969 10.667969-10.667969h64c5.886719 0 10.667969 4.78125 10.667969 10.667969s-4.78125 10.667969-10.667969 10.667969h-53.332031v53.332031c0 5.886719-4.78125 10.667969-10.667969 10.667969zm0 0"/>
                        </svg>
                        <div className=" flex-grow items-start px-4 sm:px-10">
                            <h1 className="font-bold ">Devops</h1>
                            <span className="text-xs">CI/DC</span>
                        </div>        
                        <svg class="fill-current w-8 h-8 items-end row__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#17dae8" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/>
                        </svg>
                        
                        
                    </div>
                    </div>
                    <div className="skills__lists">
                    {
                        data.skillsJson.data.devops.map((item)=>{
                            return <Skill skill={item}/>
                        })
                    }
                    </div>

                </div>

                <div className="skills__content ">
                    <div className="skills__header ">
                        <div className="flex flex-row items-center bg-white px-5 rounded-md lg:px-1">
                        <svg className=" fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                            <path fill="#17dae8" d="M6,6A2,2,0,0,1,8,4,1,1,0,0,0,8,2,4,4,0,0,0,4,6V9a2,2,0,0,1-2,2,1,1,0,0,0,0,2,2,2,0,0,1,2,2v3a4,4,0,0,0,4,4,1,1,0,0,0,0-2,2,2,0,0,1-2-2V15a4,4,0,0,0-1.38-3A4,4,0,0,0,6,9Zm16,5a2,2,0,0,1-2-2V6a4,4,0,0,0-4-4,1,1,0,0,0,0,2,2,2,0,0,1,2,2V9a4,4,0,0,0,1.38,3A4,4,0,0,0,18,15v3a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4V15a2,2,0,0,1,2-2,1,1,0,0,0,0-2Z"/>
                        </svg>
                        
                        <div className=" flex-grow items-start px-4 sm:px-10">
                            <h1 className="font-bold ">Frontend</h1>
                            <span className="text-xs">Frontend</span>
                        </div>

                        <svg class="fill-current w-8 h-8 row__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#17dae8" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/>
                        </svg>
                    </div>
                    </div>
                    <div className="skills__lists">
                    {
                        data.skillsJson.data.frontend.map((item)=>{
                            return <Skill skill={item}/>
                        })
                    }
                    </div>

                </div>

                <div className="skills__content ">
                     <div className="skills__header ">
                        <div className="flex flex-row items-center bg-white px-5 rounded-md lg:px-3">

                        <svg class="fill-current w-8 h-8 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#17dae8"  d="M8,6A1,1,0,1,0,7,5,1,1,0,0,0,8,6ZM21,19H14.82A3,3,0,0,0,13,17.18V15h4a3,3,0,0,0,3-3V10a3,3,0,0,0-.78-2A3,3,0,0,0,20,6V4a3,3,0,0,0-3-3H7A3,3,0,0,0,4,4V6a3,3,0,0,0,.78,2A3,3,0,0,0,4,10v2a3,3,0,0,0,3,3h4v2.18A3,3,0,0,0,9.18,19H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM6,4A1,1,0,0,1,7,3H17a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H7A1,1,0,0,1,6,6Zm1,9a1,1,0,0,1-1-1V10A1,1,0,0,1,7,9H17a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1Zm5,8a1,1,0,1,1,1-1A1,1,0,0,1,12,21ZM8,10a1,1,0,1,0,1,1A1,1,0,0,0,8,10Z"/>
                            </svg>
                        <div className=" flex-grow items-start px-4 sm:px-10 ">
                            <h1 className="font-bold ">Backend</h1>
                            <span className="text-xs">Backend</span>
                        </div>
                        

                        <svg class="fill-current w-8 h-8 row__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#17dae8" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/>
                        </svg>
                    </div>
                    </div>
                    <div className="skills__lists">

                    {
                        data.skillsJson.data.backend.map((item)=>{
                            return <Skill skill={item}/>
                        })
                    }
                    </div>


                </div>

                <div className="skills__content ">
                    <div className="skills__header ">
                        <div className="flex flex-row items-center bg-white px-5 rounded-md lg:px-3">
                        <svg  className=" w-8" viewBox="0 0 270 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 160.677L1.00001 2.38081L162.462 160.677H1Z" stroke="#17DAE8" stroke-width="14"/>
                        <path d="M59.7081 159.464L130.958 4.01674L202.208 159.464H59.7081Z" stroke="#17DAE8" stroke-width="14"/>
                        <path d="M105.975 160.677L269 5.5653V160.677H105.975Z" stroke="#17DAE8" stroke-width="14"/>
                        <rect x="93.1556" y="120.641" width="90.1557" height="22.2515" fill="#1a202c" stroke="#17DAE8" stroke-width="2"/>
                        <circle cx="53.3533" cy="148.743" r="28.1018" fill="#1a202c" stroke="#17DAE8" stroke-width="2"/>
                        </svg>
                        <div className=" flex-grow items-start px-4 sm:px-10 lg:pr-5">
                            <h1 className="font-bold ">Soft Skills</h1>
                            <span className="text-xs">Soft skills</span>
                        </div>
                        

                        <svg class="fill-current w-8 h-8 row__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#17dae8" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/>
                        </svg>
                    </div>
                    </div>
                    <div className="skills__lists">
                    {
                        data.skillsJson.data.softskills.map((item)=>{
                            return <Skill skill={item}/>
                        })
                    }
                    </div>

                </div>
                        
               
            </div>
        </div>
    )
}