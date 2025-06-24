// src/components/TournageCards.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Tournage.css';

function TournageCards() {
  const [tournages, setTournages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(null);

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
    <div className="cards-container">
      {tournages.map((tournage) => (
        <div className="card" key={tournage.id}>
          <h3>{tournage.titre_film}</h3>
          <p><strong>Lieu :</strong> {tournage.lieu}</p>
          <p><strong>Début :</strong> {tournage.date_debut}</p>
          <p><strong>Fin :</strong> {tournage.date_fin}</p>
        </div>
      ))}
    </div>
  );
}

export default TournageCards;
