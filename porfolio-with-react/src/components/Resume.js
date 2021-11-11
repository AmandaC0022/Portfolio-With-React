import React from 'react'; 
import resume from '../images/2021 Web Development Resume.pdf'; 

const Resume = () => {
    return (
        <div id="resume" className="container">
            <h1 className="content-header">My Resume</h1>
            <section id="resume-page" >
              <embed src={resume} type="application/pdf" width="100%" height="700px"/>
            </section>
        </div>
    )
}

export default Resume
