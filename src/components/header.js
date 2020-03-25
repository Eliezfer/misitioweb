import React from "react";
import illustration from '../imgs/undraw_feeling_proud_qne.svg';
import Form from "./contact.form";

export default () =>(
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="font-bold text-blue-400 text-6xl">¡Hola! Soy Eliezer</h1>
                    <p className="text-xl text-gray-800 font-light">Estudiante en ingenieria de software</p>
                </div>
                <img src={illustration} style={{height:"300px"}}></img>
            </div>
            <div>
                <Form/>
            </div>
        </div>
    </header>
)