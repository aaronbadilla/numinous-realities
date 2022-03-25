import React, {useEffect, useState} from 'react'
import './gallery-2.components.scss'
import GraphicLineBreak from '../../components/graphic-line-break/graphic-line-break.component'
import CollagesInfo from './gallery-2.data'
import Placard from '../../components/placard/placard.component'
import ArtPages from '../../components/art-pages/art-pages.component'

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
        {CollagesInfo.map((page) => {
            
            const {title, link, description, price} = page
            
            return (
                <div>
                    <ArtPages page={page} imgsLoaded={imgsLoaded}/>
                    <Placard title={title} link={link} description={description} price={price}/>
                    <GraphicLineBreak/>
                </div>
            )
            
        }) }


    </div>
    )
        }
export default Gallery2