import React from "react";
export default (props) =>(
    <div className="relative pt-1 w-48 md:w-56">
    <div className="flex mb-2 items-center justify-between">
        <div>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-800">
            {props.skill.name}
        </span>
        </div>
        <div className="text-right">
        <span className="text-xs font-semibold inline-block text-lightBlue-600">
            {props.skill.percentage}
        </span>
        </div>
    </div>
    <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-teal-200 ">
        <div style={{ width: props.skill.percentage }} className="  shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-color-primary"></div>
    </div>
    </div>
)