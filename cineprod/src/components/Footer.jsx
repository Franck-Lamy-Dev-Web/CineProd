import React from "react";
import '../styles/Footer.css';

function Footer(){
    return (
        <footer>
          <div className="footerContainer">
            <h2 className="titreFooter">CinéProd</h2>

                <div className="infoFooter">
                    <p className="footer">Mentions légales</p>
                    <p className="footer">Contacts</p>
                </div> 
            <p className="footer">Projet portefolio web service avec IBM i (AS400)</p>

        </div>

        </footer>
    );
}

export default Footer;
