import React from "react"; 
import { Link } from 'react-scroll'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-wrapper-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><i className="bi bi-house-door-fill home-icon"></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list home-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link smooth={true} to="about" className="nav-link-custom nav-link" aria-current="page" href="#">About Me</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="skills" className="nav-link nav-link-custom" href="#">Skills</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="projects" className="nav-link nav-link-custom" href="#">Projects</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="resume" className="nav-link-custom nav-link" href="#">Resume</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contact" className="nav-link nav-link-custom" href="#">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ); 
}

export default Navbar
