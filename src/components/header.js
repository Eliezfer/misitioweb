import React from "react";
import illustration from '../imgs/undraw_web_developer_p3e.svg';
import Navbar from "./navbar";


export default () =>(
    <header className="bg-teal-500">
        <Navbar/>
        <div className="container mx-auto px-12 py-24 max-w-4xl">
            <div className="flex mb-4 justify-center items-center">
                <div>
                    <h1 className=" font-bold text-white text-6xl">¡Hola! Soy Eliezer </h1>
                    <p className="text-xl text-white font-light">
                    Un estudiante de 8° semestre de ingeniería de software, enfocado en el desarrollo web y el aseguramiento de la calidad de software.
                    </p>
                </div>
                <img src={illustration} style={{height:"300px"}} alt=""></img>
            </div>

        </div>
    </header>
)