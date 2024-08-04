import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';

import './Header.css';
import { MdOutlineSpeed, MdOutlineHealthAndSafety } from "react-icons/md";
import { FaPaintRoller } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [currentText, setCurrentText] = useState('fast');

    useEffect(() => {
        const handleScroll = () => {
            const button = document.querySelector('.button');
            if (button) {
                const buttonRect = button.getBoundingClientRect();
                setShowNav(buttonRect.top <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(prev => {
                if (prev === 'fast') return 'secure';
                if (prev === 'secure') return 'safe';
                return 'fast';
            });
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const getTextStyle = () => {
        switch (currentText) {
            case 'fast':
                return { color: 'green' };
            case 'secure':
                return { color: 'red' };
            case 'safe':
                return { color: 'blue' };
            default:
                return {};
        }
    };

    const getDivStyles = () => {
        switch (currentText) {
            case 'fast':
                return { background: 'rgba(49, 245, 104, 0.56)' };
            case 'secure':
                return { background: 'rgba(245, 75, 49, 0.56)' };
            case 'safe':
                return { background: 'rgba(49, 129, 245, 0.56)' };
            default:
                return {};
        }
    };

    const getIcons = () => {
        switch (currentText) {
            case 'fast':
                return { color: 'green', logos: <MdOutlineSpeed /> };
            case 'secure':
                return { color: 'red', logos: <MdOutlineHealthAndSafety /> };
            case 'safe':
                return { color: 'blue', logos: <FaPaintRoller /> };
            default:
                return { color: 'black', logos: null }; // Fallback icon and color
        }
    };

    const { color, logos } = getIcons();

    return (
        <div className="header">
            <div className={`navigation ${showNav ? 'show' : ''}`}>
                <ul>
                    <li>Fast</li>
                    <li>Safe</li>
                    <li>Yours</li>
                    <li>By Google</li>
                    <li className='downloadbtn'>Download</li>
                </ul>
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="heading">
                <h1>The browser</h1>
            </div>
            <div className="heading-2">
                <h1>built to be</h1>
                <div className='icon-container' style={{ position: 'relative', width: '200px', height: '70px', overflow: 'hidden', borderRadius: '100px', display:'flex', alignItems:'center', justifyContent:'center',gap:'10px',...getDivStyles()}}>
                    <IconContext.Provider value={{ color }}>
                        {logos}
                    </IconContext.Provider>
                    <div style={{ position: 'absolute', width: 'fit-content', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={getTextStyle()}>{currentText}</span>
                    </div>
                </div>
            </div>
            <button className="button">Download Chrome</button>
            <div className="gap"></div>
            <div className="header-text">
                <input type="checkbox" className="custom-checkbox" />
                <p>
                    Help make Google Chrome better by automatically sending usage
                    statistics and crash reports to Google.{' '}
                    <a
                        href="https://support.google.com/chrome/answer/96817?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn more
                    </a>
                </p>
            </div>
            <div className="header-text2">
                <p>
                    By downloading Chrome, you agree to the{' '}
                    <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://www.google.com/intl/en_in/chrome/terms/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chrome and ChromeOS Additional Terms of Service
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Header;
