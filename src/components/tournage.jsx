// src/components/TournageCards.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Tournage.css';
import Camera from '../assets/camera.png';
import { useNavigate } from 'react-router-dom';

function TournageCards() {
  const [tournages, setTournages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://178.255.128.61:2512/Franck_L/BackendCineProd/tournage.php')
      .then((response) => {
        if (!response.ok) throw new Error('Erreur lors du chargement des tournages');
        return response.json();
      })
      .then((data) => {
        setTournages(data);
        setLoading(false);
      })
      .catch((error) => {
        setErreur(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <div className="horizontal-cards-container">
        <h2 className='titreTourn'>Liste des tournages</h2>
      {tournages.map((tournage) => (
        <div className="horizontal-card" key={tournage.id}>
          <div className="card-content">
            <img src={Camera} alt="Caméra" />
            <h3 className='titreTourn2'>{tournage.titre_film}</h3>
            <div className='blocFilm'>
            <p className='pTourn'><strong>Lieu :</strong> {tournage.lieu}</p>
            <div className='infoFilm'>
            <p className='pTourn'><strong>Début :</strong> {tournage.date_debut}</p>
            <p className='pTourn'><strong>Fin :</strong> {tournage.date_fin}</p>
            </div>
            </div>
          </div>
          <button
            className="details-btn"
            onClick={() => navigate(`/tournage/${tournage.id}`)} 
          > Détails
          </button>
          </div>
      ))}
    </div>
  );
}

export default TournageCards;
