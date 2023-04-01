import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../image/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.avif';

const Header = () => {
    return (
        <div className='header'>
            <h2>Knowledge Cafe</h2>
            <img className='nav-image' src={logo} alt="" />
        </div>
    );
};

export default Header;