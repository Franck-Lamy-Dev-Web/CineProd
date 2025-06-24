import React from "react";
import '../styles/Header.css';
import Logo from '../assets/LogoMinimalisteCineProd.png';

function Header(){
    return (
        <header className="header">
            <img src={Logo} alt="Logo" className="logo"/>
            <h1 className="TitreHeader">
                Gestion des tournages de nos productions cinématographiques
            </h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Tournages</a></li>
                    <li><a href="#">Films</a></li>
                    <li><a href="#">Acteurs</a></li>
                    <li><a href="#">Techniciens</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
