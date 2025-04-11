// src/Views/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="prof-homepage">
            <h1>Welcome to ProFinance AI</h1>
            <p>Your go-to solution for Financial Independence.</p>
            <div className={`prof-color-box ${isBlue ? 'prof-blue' : 'prof-red'}`}></div>
            <button className="prof-button" onClick={toggleColor}>Change Color</button>
        </div>
    );
};

export default HomePage;