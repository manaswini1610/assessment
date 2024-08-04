
import React, { useState, useEffect } from 'react';
import './Scrolling.css';
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import video from '../../assets/video.mp4';
import { MdOutlineSpeed } from "react-icons/md";
import { gsap } from 'gsap';

const items = [
    {type: 'image', src:image1},
    {type: 'image', src:image2},
    {type: 'image', src:image3}
]
const Scrolling = () => {
    const [scrollY, setScrollY] = useState(0);
    const [videoReachedEnd, setVideoReachedEnd] = useState(false);

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

        setVideoReachedEnd(scrollY + videoHeight >= contentHeight + distanceFromTop);
    }, [scrollY]);

    useEffect(() => {
        if (videoReachedEnd) {
            gsap.to(".Scrolling-video .image-container", { display: 'block', opacity: 1, duration: 1, stagger: 0.3 });
        } else {
            gsap.to(".Scrolling-video .image-container", { display: 'none', opacity: 0, duration: 1 });
        }
    }, [videoReachedEnd]);

    return (
        <div className={`Scrolling-container ${videoReachedEnd ? 'scroll-option' : ''}`}>
            <div className="Scrolling-content">
                <h1>The <span className='fast'><span ><MdOutlineSpeed /></span><span className='fast-text'>fast</span></span> way to do</h1>
                <h1>things online</h1>
            </div>

            <div className="Scrolling-video">
                <video autoPlay loop muted width="500">
                    <source src={video} type="video/mp4" />
                </video>
                
                {items && items.map((item,key) => (
                    <img className='image-container' key={key} src={item.src} alt={item.alt} />
                ))}
            </div>
        </div>
    );
}

export default Scrolling;

