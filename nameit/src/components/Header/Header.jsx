import React from 'react';
import './Header.css';



const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/68010704/122605238-ce4fb700-d094-11eb-9594-d1b3f2b3eef0.png"
                className={`head-image ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`} alt="image" />

            <h1 className="{`head-text ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}">{headTitle}</h1>
        </div>
    );
};

export default Header;