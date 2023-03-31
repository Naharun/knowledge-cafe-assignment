import React, { useEffect, useState } from 'react';
import './Knowledge.css'
import Blog from '../Blog/Blog';

const Knowledge = () => {
    const [knowledges,setKnowledge] =useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setKnowledge(data))
    },[])
    return (
        <div className='knowlegecafe-container'>
            <div className="knowledge-container">
                {
                    knowledges.map(knowledge =>
                    <Blog key ={knowledge.id} knowledge ={knowledge}>
                    </Blog>)
                }
            </div>
            <div className="time-container">
                <h2>this is time</h2>
            </div>
        </div>
    );
};

export default Knowledge;