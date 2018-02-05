import React from 'react';
import ResumeHeader from './ResumeHeader';
import ResumeAbout from './ResumeAbout';
import ResumeExperience from './ResumeExperience';
import ResumeWork from './ResumeWork';
import ResumeContact from './ResumeContact';
import AboutContent from './AboutContent';
import ResumeInfo from './ResumeInfo';
import ExperienceDescription from './ExperienceDescription';
import WorkImages from './WorkImages';
import './../styles/ResumeContainer.css';

function ResumeContainer(props){
    return(
        <div className="resume-container">
            <ResumeHeader />
            <ResumeAbout aboutContent = {AboutContent} resumeInfo = {ResumeInfo}/>
            <ResumeExperience experienceList = {ExperienceDescription}/>
            <ResumeWork imageList = {WorkImages} />
            <ResumeContact resumeInfo = {ResumeInfo}/>
        </div>     
    )
}

export default ResumeContainer;