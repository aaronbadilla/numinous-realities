import React from 'react'
import './art-pages.styles.scss'

const ArtPages = ({page :{link, image, className, alt}}, imgsLoaded) => (

        <a href={link} target="_blank" rel="noopener noreferrer" >
            { imgsLoaded ? (
                <img className={className} src={image} alt={alt}/>) : (
                <h1>
                    {alt}
                </h1>)
            }
        </a>
)




export default ArtPages