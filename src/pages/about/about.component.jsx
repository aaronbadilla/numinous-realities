import React from 'react'
import './about.styles.scss'
import '../gallery-1/gallery-1.data'
import PagesInfo from '../gallery-1/gallery-1.data'

const About = () => (
    <div id='about'>
        <div className='text-font'>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/What%20happened%3F.png' alt='what happened'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/forgot%20yourself%3F.png' alt='forgot yourself?'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/Yawn.png' alt='yawn'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/HELLO.png' alt='HELLO'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/ahm%20comfy.png' alt='ahm comfy'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/and%20then%20i%20woke%20up%20a%20beetle.png' alt='and then I woke up a beetle'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/what%20you%20are%20looking%20for%20BE.png' alt='What you are looking for BE'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/YOU%20LEECH.png' alt='YOU LEECH'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/HOW%20COULD%20YOU%20LET%20US%20DOWN%3F.png' alt='HOW COULD YOU LET US DOWN'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/my%20thoughts%20are%20interesting%20again.png' alt='my thoughts are interesting again'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/youre%20my%20anam%20cara.png' alt='youre my anam cara'/>
            <img className='fonts' src='https://storage.googleapis.com/numinous-realities/celebrate.png' alt='celebrate'/>
        </div>
        <div className='title-section'>
            <div className='intro-text'>
                <h1 className='line1'>
                    Numinous Realities is an attempt to capture the fleeting nature of our thoughts.
                </h1> 
                <h1 className='line2'>
                    Through graphics, font and text, it asks the questions: 
                </h1>
                <h1 className='line3'>
                    What do our thoughts look like? Sound like? Feel like? Are they loud? Soft? Small? Big?
                </h1>
            </div>
            <img className='title-page' src='https://storage.googleapis.com/numinous-realities/Numinous%20Realities%20-%20Title%20Page.jpg' alt='Numinous Realities Title Page'/>

        </div>

        {/* <div className='image-block'>
            {PagesInfo.map(({image, alt}) => (
            
            <img className='images' src={image} alt={alt}/>
            ) )}
        </div> */}


        <h1 className='line4'>
            In Numinous Realities not only does Bekah reveal her own mundane, beautiful, insecure, and often comically absurd thoughts but in doing so she reveals the intricacies of the artistic process, the desires of the subconcious mind, and the elevation of thought through relationships.
        </h1>


    </div>
)

export default About