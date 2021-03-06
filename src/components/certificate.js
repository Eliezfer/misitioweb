import React from 'react';

export default (props) => {
    const certificate = props.element;
    return (
        <div className="shadow p-8 bg-white rounded text-center">
            <h4 className="font-bold">
                <a href={certificate.href} target="_blank" rel="noopener noreferrer">
                {certificate.title}
                </a>
            </h4>
            <div className="text-center">
                <span className="inline-block bg-blue-200 text-blue-700 p-2 mt-2 radius">
                    Calificación: {certificate.score}
                </span>
            </div>
        </div>
    );
}