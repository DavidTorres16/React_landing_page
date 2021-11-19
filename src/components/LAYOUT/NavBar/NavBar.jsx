import React from 'react'
import './NavBarStyles.css'
import { Link } from 'react-router-dom'
import Links from '../../UI/Links/Links'
import Logo from '../../../assets/images/Logo.jpg'

export default function NavBar() {
    return (
        <div className="HeaderContainer">
            <Link to="/" className="imageLink">
                <img src={Logo} alt="" className="NavBarImage"/>
                <div className="PageName" >My Card Space</div>
            </Link>
            <nav className="NavBarContainer">
                <ul className="NavBar">
                    <Links URL="" Name="Home"/>
                    <Links URL="" Name="Products"/>
                    <Links URL="" Name="About"/>
                    <Links URL="" Name="Contact"/>
                </ul>
            </nav>
        </div>
    )
}
