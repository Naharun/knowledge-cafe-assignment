import React from 'react';
import './Blog.css'
import logo from '../../image/programming-skills.png';


const Blog = (props) => {
    const {name,date,date2,img} = props.knowledge;
    console.log(props);
    return (
        <div>
            <img className='container-image' src={logo} alt="" />
            <div>
                <h3>Name :{name}</h3>
            </div>
        </div>
    );
};

export default Blog;