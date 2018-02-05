import React from 'react';
import './../styles/ResumeHeader.css';

function ResumeHeader(props){
    return (
        <div className="header">
            <span className="name-headline">{props.resumeInfo[0].profileName}</span>
            <nav className="nav-bar-container">
                <ul>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default ResumeHeader;