
import React, { useState, useEffect } from 'react';
import './Scrolling.css';
import video from '../assets/video.mp4';
import { MdOutlineSpeed } from "react-icons/md";

const Scrolling = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Scrolling-container">
            <div className="Scrolling-content">
                <h1>The <span className='fast'><span><MdOutlineSpeed/></span>fast</span> way to do</h1>
                <h1>things online</h1>
            </div>
            <div className="Scrolling-video" style={{ top: `${scrollY}px` }}>
                <video autoPlay loop muted width="500">
                    <source src={video} type="video/mp4" />
                </video>
            
            </div>
            
        </div>
    );
}

export default Scrolling;






