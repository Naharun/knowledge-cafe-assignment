import React from 'react';
import './Cart.css';
import SingleData from '../SingleData/SingleData';

const Cart = (props) => {
    const carts= props.carts;
    const times = props.times;
    let totalTimes = 0;
    for(const time of times){
        const newTime = totalTimes + parseInt(time);
        totalTimes = newTime;
    }
    return (
        <div className='side-container'>
            <h6 className='timer-title'>Spent time on read : {totalTimes} min</h6>
            <div className='bookmark-section'>
                <h3 className='bookmark-title'>Bookmarked Blogs: {carts.length}</h3>
                {
                    carts.map(cart=> <SingleData
                        cart={cart}
                        key={cart.id}
                    ></SingleData>)
                }
            </div>
        </div>
    );
};

export default Cart;