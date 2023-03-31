import React, { useEffect, useState } from 'react';
import './Knowledge.css'
import Blog from '../Blog/Blog';

const Knowledge = () => {
    const [knowledges, setKnowledges] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setKnowledges(data));
    }, [])
    return (
        <div className='knowlegecafe-container'>
            <div className="knowledge-container">
                {
                    knowledges.map(knowledge =>
                        <Blog key={knowledge.id} knowledge={knowledge}>
                        </Blog>)
                }
            </div>
            <div className="time-container">
                <div className='spent-time'>
                    <h6>Spent time on read : 177 min</h6>
                </div>
            </div>
        </div>
    );
};

export default Knowledge;