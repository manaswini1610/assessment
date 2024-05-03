
import React, { useState, useEffect } from 'react';
import './Scrolling.css';
import video from '../assets/video.mp4';
import { MdOutlineSpeed } from "react-icons/md";

const Scrolling = () => {
    const [scrollY, setScrollY] = useState(0);
    const [videoReachedBottom, setVideoReachedBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const contentHeight = document.querySelector('.Scrolling-content').offsetHeight;
        const videoHeight = document.querySelector('.Scrolling-video').offsetHeight;
        const distanceFromTop = document.querySelector('.Scrolling-video').getBoundingClientRect().top;
        setVideoReachedBottom(scrollY + videoHeight >= contentHeight + distanceFromTop);
    }, [scrollY]);

    const videoStyle = videoReachedBottom ? { position: 'static', margin: 'auto', top: 'auto' } : { top: `${scrollY}px` };

    return (
        <div className="Scrolling-container">
            <div className="Scrolling-content">
                <h1>The <span className='fast'><span><MdOutlineSpeed/></span>fast</span> way to do</h1>
                <h1>things online</h1>
            </div>
            <div className="Scrolling-video" style={videoStyle}>
                <video autoPlay loop muted width="500">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
export default Scrolling;
