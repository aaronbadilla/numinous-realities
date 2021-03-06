import React from 'react'
import {Link} from 'react-router-dom'
import './drop-down-menu.styles.scss'

const DropDownMenu = ({handleClick}) => (
    <div className='dropdown-menu'>
        <Link className='menu-links' to='/' onClick={handleClick}>Page Gallery</Link>
        <Link className='menu-links' to='/gallery2' onClick={handleClick}>Collage Gallery</Link>
        <Link className='menu-links' to='/about' onClick={handleClick}>About</Link>
        <Link className='menu-links' to='/artist' onClick={handleClick}>Artist</Link>
    </div>
)

export default DropDownMenu