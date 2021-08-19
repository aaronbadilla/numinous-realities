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

        <div className='section-title'>
            <h1>Recent Works</h1>
        </div>

        <div className='artist-banner'>
            <img className='banner-image' alt='Babaylan Mural' src='https://storage.googleapis.com/bekahs-assets/200910_Muralshot%20cropped.jpeg'/>
            <div className='photo-title'>
                <h2>Born Again Babaylan</h2>
                <h3>Mural, Bend, OR </h3>
            </div>
            <div className='wide-quote'>
                <h3>"To question "progress," is to strike a chord at the center of our belief system as US Americans. Within the context of progressivism, progress is the idea that the human condition will inevitably evolve and improve through advancements in technology, science, and social organization.  It assumes that progress has been made through these means, and therefore will inevitably continue to be made. But historically speaking, progress is a relatively new idea... What if we aren’t evolving but merely adapting? How does our hyper-focus on the future, affect our reflection on the present and our reconciliation of the past? How is the idea of progress
                    violent and oppressive? How is it liberating?" - Bekah Badilla 
                </h3>
            </div>
        </div>
        <div className='photo-title'>
            <h2>The Myth Of Progress</h2>
            <h3>Mural, Bend, OR </h3>
        </div>
        <div className='photo-quote-container'>
            <img className='photo' alt='The Myth Of Progress' src='https://storage.googleapis.com/bekahs-assets/IMG_9570.jpg'/>
            <div className='quote-container'>
                <h3>"Justice begins with healing. Re-membering the histories of our families (the good and the bad), especially how patriarchy, white supremacy and capitalism have manifested throughout history and have deeply wounded us and mother earth. We have to reconcile these on a deeper more multi-faceted level—with our families, our ancestors, our communities, our bodies, minds, spirits, and the land." Bekah Badilla
                </h3>
            </div>

        </div>
        <div className='section-title'>
            <h1>About Bekah</h1>
        </div>
        <div className='photo-quote-container'>

            <div className='quote-container'>
            <h3>Artist, designer and illustrator Bekah Badilla, explores ideas at the intersection of earth, history, embodiment, mysticism, ancestry and spirituality. Raised in Juneau, Alaska, Badilla draws on place through connection with her home and the earth, seeking wisdom held in natural elements such as ice and rock.  From a Filipina/Euro American heritage, her work seeks to liberate, re-member history and facilitate growth through navigating and examining decolonization, resilience and the complexities of a mixed-race experience. 
            </h3>
            </div>
            <img className='photo' alt='Bekah Painting' src='https://storage.googleapis.com/bekahs-assets/IMG_9557.jpeg'/>
        </div>
        <div className='section-title'>
            <h1>Socials</h1>
        </div>
        <div className='socials'>
            <div className='socials-info'>
                <h3 >
                    To see more of Bekah's work or for a deeper analysis on her most recent works above check out her instagram and website
                </h3> 
            </div>

            <div className='socials-links'>
                <a  href='https://www.instagram.com/bekahbad/' target="_blank" rel="noopener noreferrer">
                    <img className='link' src='https://storage.googleapis.com/bekahs-assets/instagram%20(1).png' alt='instagram'></img>
                </a>
                <a className='link' href='https://www.bekahbad.com/' target="_blank" rel="noopener noreferrer">
                    <img className='link' src='https://storage.googleapis.com/bekahs-assets/08062020_BekahDesign_BrandLogo_001d-22.png' alt='website'></img>
                </a>


            </div>
        </div>


    </div>
)

export default Artist