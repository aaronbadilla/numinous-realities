import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'> 
            <img className='logo' src='https://gateway.pinata.cloud/ipfs/QmcAQvruszzX6gb82cA4gDrccv9LLbcS4Sgfh1Pq8VxgZN' alt='logo'/>
        </Link>
        <Link className='title-container' to='/'> 
            <h3>Numinous Realities</h3>
        </Link>


        <div className='options'>
            <Link className='option' to='/numinous-realities/'>Page Gallery</Link>
            <Link className='option' to='/gallery2'>Collage Gallery</Link>
            <Link className='option' to='/artist'>Artist</Link>
            <Link className='option' to='/about'>About</Link>
        </div>
    </div>
)

export default Header