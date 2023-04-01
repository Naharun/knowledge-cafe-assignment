import React, { useEffect, useState } from 'react';
import './Knowledge.css';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';

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
                        <Blog 
                        key={knowledge.id} 
                        knowledge={knowledge}>
                        </Blog>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Knowledge;