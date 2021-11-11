import React from 'react'

const Project = (props) => {
    return (
        <div className="portfolio-image-box" 
            onClick={ props.openPopupBox }>
            <div className="overflow"></div>
            <img className="portfolio-image" src={ props.image } alt={ props.alt }></img>
            <i className="bi bi-search project-icon" data-name={ props.data }></i>
        </div>
    )
}

export default Project
