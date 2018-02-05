import React from "react";
import './../styles/ResumeExperience.css';
let partClassName;

function ResumeExperience(props){
    return (
        <section className="experience">
            {/* Abstract away exp-part-index */}
            {/* <div className="exp-group exp-part-1">
                <span className="exp-company">{props.experienceList[0][0].companyName}</span><span className="link-img"></span>
                <p className="exp-description">{props.experienceList[0][0].jobDescription} </p>
            </div>
            <div className="exp-group exp-part-1">
                <span className="exp-company">{props.experienceList[0][1].companyName}</span><span className="link-img"></span>
                <p className="exp-description">{props.experienceList[0][1].jobDescription}</p>
            </div> */}
            {props.experienceList[0].map(
                (item, index)=>{
                    console.log(item);
                        if(index === 0 || index % 2 === 0){
                            partClassName = "exp-group exp-part-1";
                        }
                        else {
                            partClassName = "exp-group exp-part-2";
                        }
                        return (
                             <div className="exp-group exp-part-1">
                                <span className="exp-company">{item.companyName}</span><span className="link-img"></span>
                                <p className="exp-description">{item.jobDescription} </p>
                            </div>
                    );
                }
            )};
        </section>
    );
}

export default ResumeExperience;