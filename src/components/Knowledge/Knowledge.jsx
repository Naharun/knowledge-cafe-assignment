import React, { useEffect, useState } from 'react';
import './Knowledge.css';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Knowledge = () => {
    const [knowledges, setKnowledges] = useState([]);
    const [carts, setCarts] = useState([]);
    const [times, setTimes] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setKnowledges(data));
    }, []);
    const handleBookmark = (knowledge) => {
        const exists = carts.find(pb => pb.id === knowledge.id);
        if (!exists) {
            const newCart = [...carts, knowledge];
            setCarts(newCart);
        }
        else {
            toast("Already Bookmarked")
        }
    }
    const markAsRead = (time) => {
        const newTimes = [...times, time];
        setTimes(newTimes);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className="col col-md-8">
                    {
                        knowledges.map(knowledge =>
                            <Blog
                                key={knowledge.id}
                                handleBookmark={handleBookmark}
                                markAsRead={markAsRead}
                                knowledge={knowledge}>
                            </Blog>)
                    }
                </div>
                <div className='col col-md-4'>
                    <Cart times={times} carts={carts}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Knowledge;