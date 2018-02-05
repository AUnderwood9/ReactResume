import React from 'react';
import './../styles/ResumeAbout.css';

function ResumeAbout(props){
    console.log(props.aboutContent[0].avatarUrl);
    return (
        <section className="about">
        
            {/* <span className="about-img">Here is some more stuff</span>
            <span className="about-description">Stuff is right here!</span>
            <span className="summary">I do stuff for a living</span> */}

            

            <span><img src={props.aboutContent[0].avatarUrl} alt="My Avatar"/></span>
            <span className="about-description">
                <h1 className="about-description-top">{props.aboutContent[0].profileHeadline}</h1>
                <h2 className="about-description-btm">{props.aboutContent[0].currentCity}, {props.aboutContent[0].currentState}</h2>
            </span>
            <span className="summary">
             <h2>Hello</h2>
             <h3>{props.resumeInfo[0].profileName}</h3>
             <h3>{props.aboutContent[0].university}</h3>
             <h3>{props.aboutContent[0].major}</h3>
             <h4>{props.aboutContent[0].aboutSummary}</h4>
            </span>
            
        </section>
    );
}

export default ResumeAbout;