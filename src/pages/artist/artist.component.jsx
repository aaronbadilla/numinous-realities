import React from 'react'
import './artist.styles.scss'

const Artist = () => (
    <div id='artist'>
        <div className='artist-banner'>
            <img className='banner-image' alt='Bekah Logo' src='https://storage.googleapis.com/bekahs-assets/08062020_BekahDesign_BrandLogo_001d-22.png'/>
        </div>
        <div className='about'>
            <img className='about-image' src='https://www.apu.edu/feature_images/dct/27746dl_photo.jpg' alt='bekah'/>
                <div className='about-artist'>
                    <h3>
                    "At the intersection of digital phenomena and real-world experience, my work centers around the idea of immersion. As technological advancements create a reality where digital and physical worlds draw nearer and cross boundaries, I hope to create work that meets this head-on, and is both real-life and otherworldly." - Bekah Badilla
                    </h3>  
                </div>
        </div>
        <div className='artist-banner'>
            <img className='banner-image' alt='Babaylan Mural' src='https://storage.googleapis.com/bekahs-assets/200910_Muralshot%20cropped.jpeg'/>
        </div>

 
        <div className='photo-quote-container'>
            <div className='quote-container'>
            <h3>"Justice begins with healing. Re-membering the histories of our families (the good and the bad), especially how patriarchy, white supremacy and capitalism have manifested throughout history and have deeply wounded us and mother earth. We have to reconcile these on a deeper more multi-faceted level—with our families, our ancestors, our communities, our bodies, minds, spirits, and the land." Bekah Badilla
            </h3>
            </div>
                <img className='photo-left' alt='The Myth Of Progress' src='https://storage.googleapis.com/bekahs-assets/IMG_9570.jpg'/>


        </div>

    </div>
)

export default Artist