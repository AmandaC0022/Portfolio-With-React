import React from 'react'
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon
  } from "react-share";
  
const Footer = () => {
    return (
        <footer className="footer d-flex">
            <div className="col-lg-4">
                <p>@2021</p>
                <p>Email: AmandaC0022@gmail.com</p>
                <p>Phone: (205) 902-3708</p>
            </div>
            <div className="col-lg-4">
                <p>Profiles</p>
                <div className="">
                    <a 
                    className="footer-link" 
                    href="https://github.com/AmandaC0022" 
                    target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                    <a 
                    className="footer-link" 
                    href="https://www.linkedin.com/in/amanda-morgan-0b8512210/" 
                    target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a 
                    className="footer-link" 
                    href="https://stackexchange.com/users/23297484/amanda-morgan" 
                    target="_blank">
                        <i className="bi bi-stack-overflow"></i>
                    </a>
                </div>
            </div>
                {/* <a className="footer-link col" target="_blank">Etsy</a> */}
            <div className="col-lg-4">
                <p>Share</p>
                <FacebookShareButton url="#">
                    <FacebookIcon className="m-2" size={36}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton url="#">
                    <TwitterIcon className="m-2" size={36}></TwitterIcon>
                </TwitterShareButton>
                <EmailShareButton url="#">
                    <EmailIcon className="m-2" size={36}></EmailIcon>
                </EmailShareButton>
                <LinkedinShareButton url="#">
                    <LinkedinIcon className="m-2" size={36}></LinkedinIcon>
                </LinkedinShareButton>
                <RedditShareButton url="#">
                    <RedditIcon className="m-2" size={36}></RedditIcon>
                </RedditShareButton>
            </div>
        </footer>
    )
}

export default Footer
