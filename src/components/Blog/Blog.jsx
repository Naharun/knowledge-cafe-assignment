import React from 'react';
import './Blog.css'
import logo from '../../image/programming-skills.png';
import '../../../public/data.json';


const Blog = (props) => {
    const {name,date,date2,img} = props.knowledge;
    return (
        <div>
            <h1>this is me</h1>
            <img className='container-image' src={logo} alt="" />
        </div>
    );
};

export default Blog;