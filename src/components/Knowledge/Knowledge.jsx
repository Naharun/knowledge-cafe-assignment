import React, { useEffect, useState } from 'react';
import './Knowledge.css'

const Knowledge = () => {
    const [knowledge,setKnowledge] =useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setKnowledge(data))
    },[])
    return (
        <div className='knowlegecafe-container'>
            {/* <div className="knowledge-container">
                <h2>this is knowledge{knowledge.length}</h2>
            </div>
            <div className="time-container">
                <h2>this is time</h2>
            </div> */}
        </div>
    );
};

export default Knowledge;