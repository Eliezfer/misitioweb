import React from 'react';
import { graphql, Link } from 'gatsby';

export default (props) =>{
    const pageData = props.data.educationJson
    return(
        <div>
            <header className="py-12 border-blue-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-gray-700">Inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul className="max-w-4xl mx-auto pb-8">
                {
                    pageData.items.map((item,index)=>(
                        <li className="bg-white shadow mt-4 flex" key={index}>
                            <p className="vertical-text">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span className="inline-block p-2 radius bg-blue-100 text-blue-500">{item.degree}</span>
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export const query = graphql`
    query($slug : String){
        educationJson(slug:{eq: $slug}){
            title
            description
            slug
            items{
                name
                degree
                score
            }
        }
    }
`;