import React from 'react';
import './../styles/ResumeContact.css';

function ResumeContact (props) {
    return (
        <section>
            <span className="left-contact-text">Lets Talk!</span>
            <span className="right-contact-text-top">Let's Work Together!</span>
            <span className="right-contact-text-btm">{props.resumeInfo[0].email}</span>
            <input type="text"/>
            <input type="text"/>
            <input className="message-box" type="text"/>
            <div><button>Send</button></div>
            
        </section>
    );
}

export default ResumeContact;