import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import useCheckMobileScreen from '../mobile-checker/mobile-checker.component'
import MobileMenuIcon from '../mobile-menu-icon/mobile-menu-icon.component'
import DropDownMenu from '../drop-down-menu/drop-down-menu.component'

const Header = () => {

    // Dropdown State

    const [dropDown, setDropDown] = useState(false)

    const handleClick = () => {
    setDropDown(dropDown ? false : true)
    }

    const [header, setHeader] = useState('header')

    // Scroll Control

    var isScrolling

    const listenScrollEvent = (event) => {
        if (header === 'header') {
            setHeader('transparent-header')
        }
        window.clearTimeout(isScrolling)
        isScrolling = setTimeout(function(){
            setHeader('header')
        }, 500)
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
        window.removeEventListener('scroll', listenScrollEvent);
        }, []);



return (
    <div className={header}>
        <Link className='logo-container' to='/'> 
            <img className='logo' src='https://storage.googleapis.com/bekahs-assets/Walking%20Girl.png' alt='logo'/>
        </Link>
        <Link className='title-container' to='/'> 
            <h3>Numinous Realities</h3>
        </Link>

        {
            useCheckMobileScreen() ? (
                <>
                <MobileMenuIcon handleClick={handleClick}/>
                {dropDown ? <DropDownMenu handleClick={handleClick}/> : null}
                </>
            )
             : 
             <div className='options'>
                    <Link className='option' to='/numinous-realities/'>Page Gallery</Link>
                    <Link className='option' to='/gallery2'>Collage Gallery</Link>
                    <Link className='option' to='/about'>About</Link>
                    <Link className='option' to='/artist'>Artist</Link>
                </div>
        }
    </div>
    )
}

export default Header