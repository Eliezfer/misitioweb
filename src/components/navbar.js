import React from "react";
import { Link } from "gatsby";
import illustration from '../imgs/crown.svg';


export default () =>(
    <div className=" fixed inset-x-0 top-0  z-50 outline-none focus:outline-none">
        <nav class="flex items-center justify-between flex-wrap bg-gray-900 px-3 pt-3">
            <div class="flex items-center flex-shrink-0 pl-12 pt-3">
            <a href="https://www.eliezfer.com/">
                <img src={illustration} class="h-12" alt=""></img>
            </a>
            </div>
            <div class="block sm:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-300 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="hidden sm:visible w-full block sm:flex sm:items-center sm:w-auto">
                <div class="text-sm sm:flex-grow txt-color-primary">
                <Link to="/" className="block mt-4 mr-12 py-3  sm:inline-block sm:mt-0  hover:text-white " >
                    Home
                </Link>
                <Link to="#aboutMe" className="block mt-4 mr-12 py-3 sm:inline-block sm:mt-0 hover:text-white ">
                    About
                </Link>
                <Link to="#skills" className="block mt-4 mr-12 py-3 sm:inline-block sm:mt-0 hover:text-white">
                    Skills
                </Link>
                <Link to="#qualification" className="block mt-4 mr-12 py-3 sm:inline-block sm:mt-0 hover:text-white">
                    Qualifications
                </Link>
                <Link to="#projects" className="block mt-4 mr-12 py-3 sm:inline-block sm:mt-0 hover:text-white">
                    Projects
                </Link>
                </div>
                
            </div>
        </nav>
    </div>
)