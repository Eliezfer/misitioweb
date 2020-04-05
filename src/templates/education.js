import React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/navbar';

export default (props) =>{
    const pageData = props.data.educationJson
    return(
        <div>
            <Navbar/>
            
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