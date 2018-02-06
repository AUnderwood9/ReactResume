import React from 'react';
import './../styles/ResumeContact.css';

function ResumeContact (props) {
    return (
        <section>
            <div className="contact-text">
                <h4 className="left-contact-text">Lets Talk!</h4>
                <div className="right-contact-text">
                    <h3 className="right-contact-text-top">Let's Work Together!</h3>
                    <h4 className="right-contact-text-btm">{props.resumeInfo[0].email}</h4>
                </div>
            </div>
            
            <form action="">
                <input type="text"/>
                <input type="text"/>
                <input className="message-box" type="text"/>
                <input type="submit" className="btn" value="Send"/>
            </form>
            
            {/* <div><button>Send</button></div> */}
            
        </section>
    );
}

export default ResumeContact;