import React from 'react';
import './../styles/ResumeWork.css';
// import './../styles/ResumeContainer.css';

function ResumeWork(props) {
    return (
        <section className="work">
            {/* <span className="work-img">Placeholder</span>
            <span className="work-img">Placeholder</span>
            <span className="work-img">Placeholder</span>
            <span className="work-img">Placeholder</span>
            <span className="work-img">Placeholder</span>
            <span className="work-img">Placeholder</span> */}
            {props.imageList[0].map(
                (item) => {
                    return <span><img src={item} alt="Work"/></span>
                }
            )};
        </section>
    );
}

export default ResumeWork;