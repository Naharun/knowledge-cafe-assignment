import React from 'react';
import './Blog.css'
// import logo from '../../image/programming-skills.png';


const Blog = (props) => {
    const { name, date, time, image, author,info } = props.knowledge;
    console.log(name);
    return (
        <div className='blog-container'>
            <img className='container-image' src={image} alt="" />
            <div className='author-details'>
                <div className='author-info'>
                    <img src={author} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <p>{time}</p>
            </div>
            <h4>{info}</h4>
            <a href="">Mark As Read</a>
        </div>
    );
};

export default Blog;