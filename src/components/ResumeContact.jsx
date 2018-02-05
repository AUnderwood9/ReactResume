import React from 'react';
import './../styles/ResumeContact.css';

function ResumeContact (props) {
    return (
        <section>
            {/* <div className=""></div>
            <div className=""></div> */}
            <span className="left-contact-text">Lets Talk!</span>
            <span className="right-contact-text-top">Let's Work Together!</span>
            <span className="right-contact-text-btm">{props.resumeInfo[0].email}</span>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <footer>
                <span className="footer-border"></span>
                <span className="footer-img"></span>
                <span className="footer-text">Thanks for visiting!</span>
                <span className="footer-img"></span>
            </footer>
            
        </section>
    );
}

export default ResumeContact;