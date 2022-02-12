import React from "react";

export default () =>(
    <div id='contact' className="container-center pt-20 sm:px-12 mx-auto">
        <h1 className=" font-bold text-3xl flex justify-center items-center " >Contact Me</h1>
        <span className="font-bold bg-gray-900 text-1xl txt-color-primary flex justify-center items-center w-48 mx-auto">Nos comunicamos?</span>

        <div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
                <div className="flex flex-row items-center p-5 rounded-md lg:px-1">
                    <svg className=" fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#17DAE8" d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/>
                    </svg>
                    <div className=" flex-grow items-start px-4 sm:px-10">
                        <h3 className="font-bold "> Correo</h3>
                        <span  className="text-xs">eliezer.couoh.balam@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-row items-center p-5 rounded-md lg:px-1">
                    <svg className=" fill-current w-8 h-8"  viewBox="0 0 24 24">
                        <path fill="#17DAE8" d="M16.37,12.79a1,1,0,0,0-.74,1.86C17.09,15.23,18,16.13,18,17c0,1.42-2.46,3-6,3s-6-1.58-6-3c0-.87.91-1.77,2.37-2.35a1,1,0,0,0-.74-1.86C5.36,13.69,4,15.26,4,17c0,2.8,3.51,5,8,5s8-2.2,8-5C20,15.26,18.64,13.69,16.37,12.79ZM11,9.86V17a1,1,0,0,0,2,0V9.86a4,4,0,1,0-2,0ZM12,4a2,2,0,1,1-2,2A2,2,0,0,1,12,4Z"/>
                    </svg>
                    <div className=" flex-grow items-start px-4 sm:px-10">
                        <h3 className="font-bold "> Ubicación</h3>
                        <span  className="text-xs">México - Mérida, Yucatán</span>
                    </div>
                </div>
            </div>
        </div>
        <form className="mt-16 mx-5 " name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/">
            <div className="rounded grid grid-cols-5 gap-4 border p-4">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div class="col-span-5 mt-4">
                    <label class="block font-bold text-sm text-gray-900 align-baseline ">Nombre completo</label>
                    <input required  type="text" name="fullname" class="mt-1 focus:ring-indigo-500 focus:border-blue-500/50 block w-full md:w-1/2 shadow-sm sm:text-sm border-gray-300 rounded" />
                </div>

                <div class="col-span-5  mt-4">
                    <label class="block font-bold text-sm text-gray-900 align-baseline ">Email</label>
                    <input required type="email" name="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-blue-500/50 block w-full md:w-1/2 shadow-sm sm:text-sm border-gray-300 rounded"  placeholder="you@example.com"/>
                </div>

                <div class="col-span-5 mt-4">
                    <label class="block font-bold text-sm text-gray-900 align-baseline ">Asunto</label>
                    <input required type="text" name="subject" class="mt-1 focus:ring-indigo-500 focus:border-blue-500/50 block w-full md:w-1/2 shadow-sm sm:text-sm border-gray-300 rounded" />
                </div>

                <div class="col-span-5  mt-4 ">
                    <label class="block font-bold text-sm text-gray-900 align-baseline ">
                        Mensaje
                    </label>
                    <div class="mt-1">
                        <textarea required name="message" rows="6" class="shadow-sm focus:ring-indigo-500 focus:border-blue-500/50 mt-1 block w-full sm:text-sm border border-gray-300 rounded" ></textarea>
                    </div>
                </div>
                <div class="col-start-3 md:col-start-5 mt-4">
                <button type="submit" class="bg-color-primary hover:bg-blue-700 text-white font-bold py-2 my-6 px-4 rounded inline-flex items-center">
                    <span>Enviar</span>
                    <svg class="fill-current w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"/>
                    </svg>
                </button>
                </div>
            </div>
        </form>
    </div>
)