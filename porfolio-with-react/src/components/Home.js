import React from 'react'
import pic from '../images/profile-pic2.jpg'; 
import Typed from 'react-typed';  

const Home = () => {
    const text = "Amanda Morgan"
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <img  id="profile-pic" src={pic} alt="My profile picture"></img>
                <div className="overlay"> 
                  <div className="overlay-text">      
                      <p>"We don't make mistakes, just happy accidents."</p>
                      <p>~ Bob Ross</p>
                  </div>
                </div>
                <h1 className="content-header">{text}</h1>
                <div className="fake-input container">
                    <Typed 
                        className="typed-text"
                        strings={["Artist", "Designer", "Full Stack Developer", "Front End Focused", "Art Teacher"]}
                        typeSpeed={100}
                        backSpeed={60}
                        loop
                    />
                </div>
                {/* <div className="col text-center">
                    <button href="#" className="btn btn-light">Contact Me</button>
                </div> */}
            </div>
        </div>
    )
}

export default Home
