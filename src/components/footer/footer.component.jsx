import React from 'react'
import './footer.styles.scss'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => (
    <div className='footer'>

            <div className='footer-options'>
            <Link className='footer-option' to='/numinous-realities/#gallery1'>Home</Link>
            <Link className='footer-option' to='/numinous-realities/#gallery1'>Page Gallery</Link>
            <Link className='footer-option' to='/gallery2/#gallery2'>Collage Gallery</Link>
            <Link className='footer-option' to='/numinous-realities/artist/#artist'>Artist</Link>
            <Link className='footer-option' to='/numinous-realities/about/#about'>About</Link>
        </div>
        <p className='copyright'>Copyright 2021</p>
    </div>
)

export default Footer