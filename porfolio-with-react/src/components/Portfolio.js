import React from 'react'; 
import Project from './Project'; 

//Project Images
import BBImage from '../images/brain-breaks-pic.png'; 
import CTImage from '../images/cachetag-screenshot.png'; 
import WAImage from '../images/weather-app-pic.png'; 
import WTImage from '../images/WorkoutTracker-Screenshot.png'; 
import BTImage from '../images/BudgetTracker-Screenshot.png'; 
import CQImage from '../images/code-quiz-pic.png'; 

//Popup Box
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"; 

const Portfolio = () => {
    let content; 

    //Conditionally render popups based on what image gets clicked using data-name attribute
    const openPopupBox = (e) => {
        // console.log(e.target.dataset.name); 

        //Brain Breaks Popup Content
        if (e.target.dataset.name === "BB") {
            content = ( <div>
            <h5 className="content-header">Brain Breaks Project</h5>
            <img className="portfolio-image-popupbox" src={ BBImage } alt="Brain Breaks Project Image"></img>
            <p className="popup-text">Are you bad at working long hours and not taking a break, which in turn causes you to burn out? </p>
            <p className="popup-text">Brain Breaks comes to your rescue by solving that problem. Just enter how long you would like to work, then Brain Breaks calculates your break time with a helpful timer. While you work, listen to lo-fi beats that helps boost productivity. Then, after your focus time is up, enjoy your break. You deserve it!</p>
            <h5 className="content-header">List of Technologies Used:</h5>
            <ul className="popup-list"> 
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>JQUERY</li>
                <li>NPM</li>
                <li>MOMENTJS</li>
                <li>NODEJS</li>
            </ul>
            <div className="links-wrapper">
                <a className="hyper-link" onClick={() => window.open("https://github.com/AmandaC0022/07-Project-Brain_Breaks")}>See the Code</a>
                <a className="hyper-link" onClick={() => window.open("https://genius2k21.github.io/07-Project-Brain_Breaks/")}>Tour the App</a>
            </div>
                </div>
            ); 
        }
        //CacheTag Popup Content
        if (e.target.dataset.name === "CT") {
            content = (<div>
                <h5 className="content-header">Cache Tag Project </h5>
                <img className="portfolio-image-popupbox" src={CTImage} alt="Cache Tag Project Image"></img>
                <p className="popup-text">Want an easy and conventent way to save hashtags?</p>
                <p className="popup-text">CacheTags is a great full stack application that allows you to create a user profile where you can save and organize your hashtags.</p>
                <h5 className="content-header">List of Technologies Used:</h5>
                <ul className="popup-list"> 
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>MATERIALIZE</li>
                    <li>EXPRESS</li>
                    <li>NPM</li>
                    <li>AJAX</li>
                    <li>MySQL</li>
                    <li>HEROKU</li>
                </ul>
                <div className="links-wrapper">
                    <a className="hyper-link" onClick={() => window.open("https://github.com/AmandaC0022/cachetag")}>See the Code</a>
                    <a className="hyper-link" onClick={() => window.open("https://cachetag2.herokuapp.com/")}>Tour the App</a>
                </div>
            </div>
            )
        }
        //Weather App Popup Content
        if(e.target.dataset.name === "WA") {
            content = ( <div>
            <h5 className="content-header">Weather Web App </h5>
            <img className="portfolio-image-popupbox" src={WAImage} alt="Weather App Image"></img>
            <p className="popup-text">Want a simple to use Weather App that doesn't take forever to load?</p>
            <p className="popup-text">I have designed a beautiful and functional online weather application. Simply put in your city name, and watch as your local weather populates the page. You can see the current weather as well as a 5 day forcast.</p>
            <h5 className="content-header">List of Technologies Used:</h5>
            <ul className="popup-list"> 
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>BOOTSTRAP</li>
                <li>AJAX</li>
            </ul>
            <div className="links-wrapper">
                <a className="hyper-link" onClick={() => window.open("https://github.com/AmandaC0022/Weather-App-AMM")}>See the Code</a>
                <a className="hyper-link" onClick={() => window.open("https://amandac0022.github.io/Weather-App-AMM/")}>Tour the App</a>
            </div>
        </div>
        )
        }
        //Workout Tracker Popup Content
        if(e.target.dataset.name === "WT") {
            content = ( <div>
            <h5 className="content-header">Workout Tracker Web App </h5>
            <img className="portfolio-image-popupbox" src={ WTImage } alt="Workout Tracker Image"></img>
            <p className="popup-text">Are you a personal trainer who needs an easy way to keep up with your client's workouts?</p>
            <p className="popup-text">Use this convience and intoative workout tracker. You can easily add new workouts and then see the combined stats displayed in easy-to-read charts.</p>
            <h5 className="content-header">List of Technologies Used:</h5>
            <ul className="popup-list"> 
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Express</li>
                <li>Nodemon</li>
            </ul>
            <div className="links-wrapper">
                <a className="hyper-link" onClick={() => window.open("https://github.com/AmandaC0022/Workout-Tracker")}>See the Code</a>
                <a className="hyper-link" onClick={() => window.open("https://morning-savannah-35599.herokuapp.com/?id=61859830a204d200233ddbd9")}>Tour the App</a>
            </div>
        </div>
        )
        }
        //Budget Tracker Popup Content
        if(e.target.dataset.name === "BT") {
            content = ( <div>
            <h5 className="content-header">Budget Tracker PWA </h5>
            <img className="portfolio-image-popupbox" src={BTImage} alt="Budget Tracker Image"></img>
            <p className="popup-text">Need some help keeping up with your expenses?</p>
            <p className="popup-text">Use this simple budget tracker. Just plug in your expenses or paychecks and watch the magic happen below.</p>
            <h5 className="content-header">List of Technologies Used:</h5>
            <ul className="popup-list"> 
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Express</li>
                <li>Service Workers</li>
                <li>Manifest Webpack</li>
            </ul>
            <div className="links-wrapper">
                <a className="hyper-link" onClick={() => window.open("https://github.com/AmandaC0022/Budget-Tracker")}>See the Code</a>
                <a className="hyper-link" onClick={() => window.open("https://best-budget-tracker-ever.herokuapp.com/")}>Tour the App</a>
            </div>
        </div>
        )
        }
        //Coding Quiz Popup Content 
        if(e.target.dataset.name === "CQ") {
            content = ( <div>
            <h5 className="content-header">Coding Quiz Game </h5>
            <img className="portfolio-image-popupbox" src={CQImage} alt="Code Quiz Project Image"></img>
            <p className="popup-text">Are you a coding master?</p>
            <p className="popup-text">Prove it by playing this fun simple coding quiz game. See if you can wind up on the high scores list.</p>
            <h5 className="content-header">List of Technologies Used:</h5>
            <ul className="popup-list"> 
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>
            <div className="links-wrapper">
                <a className="hyper-link" onClick={() => window.open("https://github.com/AmandaC0022/Code-Quiz-AMM")}>See the Code</a>
                <a className="hyper-link" onClick={() => window.open("https://amandac0022.github.io/Code-Quiz-AMM/")}>Tour the App</a>
            </div>
        </div>
        )
        }

        PopupboxManager.open({
            content, 
            config: {
                titleBar: {
                    enable: true,
                },
                fadeIn: true,
                fadeInSpeed: 500
                }
        })
    }
    return (
        <div id="projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="content-header">My Projects</h1>
                <div className="image-box-wrapper">
                    <Project image={ BBImage } alt="Brain Breaks Screenshot" openPopupBox= { openPopupBox } data= "BB"/>
                    <Project image={ CTImage } alt="Cache Tag Screenshot" openPopupBox= { openPopupBox } data= "CT"/>
                    <Project image={ WAImage } alt="Weather Web App Screenshot" openPopupBox= { openPopupBox } data= "WA"/>
                    <Project image={ WTImage } alt="Workout Tracker App Screenshot" openPopupBox= { openPopupBox } data= "WT"/>
                    <Project image={ BTImage } alt="Budget Tracker Screenshot" openPopupBox= { openPopupBox } data= "BT"/>
                    <Project image={ CQImage } alt="Coding Quiz Game Screenshot" openPopupBox= { openPopupBox } data= "CQ"/>
                    <PopupboxContainer />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
