import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const setActive = (index) => {
        setActiveIndex(index);
    };

    return (
        <header>
            <div className="navbar">
                <div className="navbar-left">
                    <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="Chrome Logo" />
                    <a href="#" className="navbar-logo">Chrome</a>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-list">
                        <li>
                            <a 
                                href="#" 
                                className={activeIndex === 0 ? 'active' : ''}
                                onClick={() => setActive(0)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className={activeIndex === 1 ? 'active' : ''}
                                onClick={() => setActive(1)}
                            >
                                The Browser by Google
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                onClick={() => {
                                    toggleDropdown(0);
                                    setActive(2);
                                }}
                                className={activeIndex === 2 ? 'active' : ''}
                            >
                                Features <span style={{marginLeft: '5px'}}>&#9660;</span>
                            </a>
                            {dropdownOpen === 0 && (
                                <ul className="dropdown-menu">
                                    <li><a href="#">Overview</a></li>
                                    <li><a href="#">Google Address bar</a></li>
                                    <li><a href="#">Password check</a></li>
                                    <li><a href="#">Use across devices</a></li>
                                    <li><a href="#">Dark Mode</a></li>
                                    <li><a href="#">Tabs</a></li>
                                    <li><a href="#">Articles for you</a></li>
                                    <li><a href="#">Extensions</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a 
                                href="#" 
                                onClick={() => {
                                    toggleDropdown(1);
                                    setActive(3);
                                }}
                                className={activeIndex === 3 ? 'active' : ''}
                            >
                                Support <span style={{marginLeft: '5px'}}>&#9660;</span>
                            </a>
                            {dropdownOpen === 1 && (
                                <ul className="dropdown-menu">
                                    <li><a href="#">Helpful tips for Chrome</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Nav;
