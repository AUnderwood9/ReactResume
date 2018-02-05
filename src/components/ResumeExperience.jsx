import React from "react";
import './../styles/ResumeExperience.css';
let partClassName;

function ResumeExperience(props){
    return (
        <section className="experience">
            {props.experienceList[0].map(
                (item, index)=>{
                    // console.log(item);
                        if(index === 0 || index % 2 === 0){
                            partClassName = "exp-group exp-part-1";
                        }
                        else {
                            partClassName = "exp-group exp-part-2";
                        }
                        return (
                             <div className={partClassName}>
                                <div className="exp-company">{item.companyName} <img src="/img/linkgray.svg" alt=""/></div>{/*<span className="link-img"><img src="/img/linkgray.svg" alt=""/></span> */}
                                <p className="exp-description">{item.jobDescription} </p>
                            </div>
                    );
                }
            )}
        </section>
    );
}

export default ResumeExperience;