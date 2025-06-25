import React from "react";
import '../styles/Header.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/LogoMinimalisteCineProd.png';
import connexion from '../assets/profilUtilisateur.png';

function Header(){
    const location = useLocation();

    return (
        <header className="header">
            <Link to="/">
                <img src={Logo} alt="Logo" className="logo" />
            </Link>

            <h1 className="TitreHeader">
                Gestion des tournages de nos productions cinématographiques
            </h1>

            <nav>
                <ul className="nav-links">
                    <li>
                       <Link to="/tournage" className={location.pathname === '/tournage' ? 'active' : ''}>Tournages</Link>
                    </li>
                    <li>
                        <Link to="/film" className={location.pathname === '/film' ? 'active' : ''}>Films</Link>
                    </li>
                    <li>
                        <Link to="/acteurs" className={location.pathname === '/acteurs' ? 'active' : ''}>Acteurs</Link>
                    </li>
                    <li>
                         <Link to="/techniciens" className={location.pathname === '/techniciens' ? 'active' : ''}>Techniciens</Link>
                    </li>
                </ul>
            </nav>

            <img src={connexion} alt="logo connexion" className="profil" />
        </header>
    );
}

export default Header;
