import React from 'react';
import './../styles/ResumeHeader.css';

function ResumeHeader(props){
    return (
        <div className="header">
            <span className="name-headline">{props.resumeInfo[0].profileName}</span>
            <nav className="nav-bar-container">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
        
        
        
        
        
    );
}

export default ResumeHeader;