import React from 'react'
import './about.styles.scss'
import '../gallery-1/gallery-1.data'
import PagesInfo from '../gallery-1/gallery-1.data'
import GraphicLineBreak from '../../components/graphic-line-break/graphic-line-break.component'

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
        <GraphicLineBreak/>

        <div className='about-section-1'>
            <p className='about-text-1'>
            &emsp; &emsp; I wrote this comic as a creative exercise after graduating art school. I believe it’s important to detach ourselves as artists to standards that are imposed upon us by the art world, or teachers, and our audiences. I think it helps us gain perspective and tap into parts of our creative selves that can get boxed in by outside opinions or assumptions we may have about our work. I often found myself so concerned about the “right way” to do art, and lost a lot of the childlike wonder that I used to have. 
            </p>
            <img className='example' src='https://storage.googleapis.com/numinous-realities/Numinous%20Realities%20-%20Page%202.jpg' alt='forgot yourself'/>
        </div>

        <div className='about-section-1'>
            <img className='example' src='https://storage.googleapis.com/numinous-realities/Numinous%20Realities%20-%20Page%206.jpg' alt='my thoughts are interesting again'/>
            <p className='about-text-1'>
                I sat down, and just drew on Adobe Illustrator and wrote words that came to mind instantly. I just let it flow and didn’t try to think too much in order to capture abstract feelings I’d been having. When I showed my friends, they were blown away at how unique it was and captivating. For them it seemed to tap into that stream-of-consciousness, somewhat disturbed in-between space where our brains often reside. 
            </p>
        </div>

        <div className='about-section-1'>
            <p className='about-text-1'>
                I remembered through this process that some of our most brilliant ideas are sitting right there at the top and just need to be released without all the presumptions and structure attached. It’s a great little exercise to do and I encourage it for any artist. Give it a try and I’d love to see what you come up with! - Bekah Badilla
            </p>  
            <img className='example' src='https://storage.googleapis.com/numinous-realities/Numinous%20Realities%20-%20Page%2010.jpg' alt='celebrate'/>
        </div>

        <GraphicLineBreak/>

        

        {/* <div className='title-section'>
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

        </div> */}

 


        {/* <h1 className='line4'>
            In Numinous Realities not only does Bekah reveal her own mundane, beautiful, insecure, and often comically absurd thoughts but in doing so she reveals the intricacies of the artistic process, the desires of the subconcious mind, and the elevation of thought through relationships.
        </h1> */}


    </div>
)

export default About