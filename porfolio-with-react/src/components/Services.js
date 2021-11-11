import React from 'react'

const Services = () => {
    return (
        <div id="skills" className="services container">
            <h1 className="content-header">My Skills</h1>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                        <div className="circle">
                        <i className="bi bi-pencil-square icon"></i>
                        </div>
                        <h4>Web Designer</h4>
                        <p>I provide creative and innovative UX/UI solutions.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                        <div className="circle">
                        <i className="bi bi-pc-display-horizontal icon"></i>
                        </div>
                        <h4>Web Developer</h4>
                        <p>I build creative and functional full stack web apps using the latest technologies.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                        <div className="circle">
                        <i className="bi bi-palette-fill icon"></i>
                        </div>
                        <h4>Artist</h4>
                        <p>I am the owner of a small handmade business that specialies in fiber arts.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                        <div className="circle">
                        <i className="bi bi-people-fill icon"></i>
                        </div>
                        <h4>Teacher</h4>
                        <p>I have taught thousands of children Art for the past 6 years.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
