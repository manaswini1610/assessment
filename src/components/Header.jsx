
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import './Header.css';

const Header = () => {
    const [showNav, setShowNav] = useState(false);

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
                <h1>built to be yours</h1>
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
