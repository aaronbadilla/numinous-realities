import React, { useState, useEffect } from 'react'

import './gallery-1.styles.scss'
import PagesInfo from './gallery-1.data'
import Placard from '../../components/placard/placard.component'
import GraphicLineBreak from '../../components/graphic-line-break/graphic-line-break.component';



const Gallery1 = () => {

    const [imgsLoaded, setImgsLoaded] = useState(false)

    useEffect(() => {
      const loadImage = image => {
        return new Promise((resolve, reject) => {
          const loadImg = new Image()
          loadImg.src = image
          loadImg.onload = () => {
              resolve(image)
            }
          loadImg.onerror = err => reject(err)
        })
      }
  
      Promise.all(PagesInfo.map(page => loadImage(page.image)))
        .then(() => setImgsLoaded(true))
        .catch(err => console.log("Failed to load images", err))
    }, [])

    return (

    <div id='gallery1'>
        <div id='home-title'>
            <a href='https://ab2.gallery/listing/291996642'>
                <img className='title-page' src='https://storage.googleapis.com/numinous-realities/Numinous%20Realities%20-%20Title%20Page.jpg' alt='Numinous Realities'/>
            </a>
        </div>

        <div className='title-plaque'>
            <h3>"Numinous Realities"</h3>
            <p>1 Algo at <span><a href='https://ab2.gallery/listing/291996642'>AB2 Gallery</a></span></p>
            <p>"Numinous Realities" is a 13-page stream of consciousness mini-book created by Bekah Badilla</p>
        </div>
        
        {PagesInfo.map(({title, link, className, image, alt, description, price}) => (
            
            <div>
                <GraphicLineBreak/>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {
                        imgsLoaded ? (
                            <img className={className} src={image} alt={alt}/>) : (
                        <h1>
                            {alt}
                        </h1>
                    )
                    }
                </a>
                <Placard title={title} link={link} description={description} price={price}/>
            </div>

        ))
        }
        <GraphicLineBreak/>
    </div>
    )
    }

export default Gallery1