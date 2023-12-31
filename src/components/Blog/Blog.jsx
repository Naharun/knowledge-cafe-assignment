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
        <div className='container mt-4'>
            <img className='w-100 h-50' src={image} alt="" />
            <div className='author-details my-4'>
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