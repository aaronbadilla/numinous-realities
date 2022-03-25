import React from 'react'
import './footer.styles.scss'
import { HashLink as Link } from 'react-router-hash-link';
import UpdateDate from '../update-date/update-date.component';

const Footer = () => (
    <div className='footer'>

        <div className='footer-options'>
            <Link className='footer-option' to='/#gallery1'>Home</Link>
            <Link className='footer-option' to='/#gallery1'>Page Gallery</Link>
            <Link className='footer-option' to='/gallery2/#gallery2'>Collage Gallery</Link>
            <Link className='footer-option' to='/about/#about'>About</Link>
            <Link className='footer-option' to='/artist/#artist'>Artist</Link>
        </div>
        <p className='copyright'>Copyright {UpdateDate()}</p>
        <div className='copyright'>Social icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
)

export default Footer