import React, {useEffect, useState} from 'react'
import './gallery-2.components.scss'
import GraphicLineBreak from '../../components/graphic-line-break/graphic-line-break.component'
import CollagesInfo from './gallery-2.data'
import Placard from '../../components/placard/placard.component'

const Gallery2 = () => {

    const [imgsLoaded, setImgsLoaded] = useState(false)

    useEffect(() => {
      const loadImage = image => {
        return new Promise((resolve, reject) => {
          const loadImg = new Image()
          loadImg.src = image
          loadImg.onload = () =>{
              resolve(image) }
          loadImg.onerror = err => reject(err)
        })
      }
  
      Promise.all(CollagesInfo.map(collage => loadImage(collage.image)))
        .then(() => setImgsLoaded(true))
        .catch(err => console.log("Failed to load images", err))
    }, [])

    return (
    <div id='gallery2'>
    <div className='gallery-title'>
        <h2 className='gallery-title'>
            The collages present the artists thoughts in a different form
        </h2>
    </div>
        {CollagesInfo.map(({title, link, className, image, alt, description, price }) => (
            <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                {imgsLoaded ? (
                    <img className={className} src={image} alt={alt}/> ) : (
                        <h1>
                            {alt}
                        </h1>
                    )
                }    
                    
            </a>
            <Placard title={title} link={link} description={description} price={price}/>
            <GraphicLineBreak/>
            </div>
            
        )) }


    </div>
    )
        }
export default Gallery2