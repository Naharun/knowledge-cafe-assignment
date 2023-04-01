import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// import logo from '../../image/programming-skills.png';


const Blog = (props) => {
    const { name, date, time, image, author,info,category } = props.knowledge;
    const handleBookmark = props.handleBookmark;
    const markAsRead = props.markAsRead;
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
                <p>{time} min read<button onClick={()=>handleBookmark(props.knowledge)}> <FontAwesomeIcon icon={faBookmark} /></button></p>
            </div>
            <h4>{info}</h4>
            <p>{category}</p>
            <a onClick={()=>markAsRead(time)}>Mark As Read</a>
        </div>
    );
};

export default Blog;