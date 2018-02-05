import React from 'react';
import './../styles/ResumeFooter.css';

function ResumeFooter(props){
    // console.log(props.footerInfo);
    return(
        <footer>
            <div className="footer-img left-footer-img"><img src={props.footerInfo[0].leftFooterImg} alt=""/></div>
            <div className="footer-text">{props.footerInfo[0].footerText}</div>
            <div className="footer-img right-footer-img"><img src={props.footerInfo[0].rightFooterImg} alt=""/></div>
        </footer> 
    );
}

export default ResumeFooter;