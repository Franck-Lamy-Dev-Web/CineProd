// src/components/DetailTournage.jsx
import React, { useEffect, useState } from 'react';
import '../styles/DetailTournage.css';

function DetailTournage({ id }) {
  const [tournage, setTournage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch(`http://178.255.128.61:2512/Franck_L/BackendCineProd/detailTournage.php?id=${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Erreur lors du chargement");
        return res.json();
      })
      .then(data => {
        setTournage(data);
        setLoading(false);
      })
      .catch(err => {
        setErreur(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;
  if (!tournage) return <p>Aucune donnée trouvée</p>;

  return (
    <div className="detail-container">
      <h2>Détails du Tournage</h2>

      <div className="section">
        <h3>🎬 Film</h3>
        <p><strong>Titre :</strong> {tournage.film.titre}</p>
        <p><strong>Genre :</strong> {tournage.film.genre}</p>
      </div>

      <div className="section">
        <h3>📍 Infos Tournage</h3>
        <p><strong>Lieu :</strong> {tournage.lieu}</p>
        <p><strong>Début :</strong> {tournage.dateDebut}</p>
        <p><strong>Fin :</strong> {tournage.dateFin}</p>
      </div>

      <div className="section">
        <h3>🎭 Acteurs</h3>
        <ul>
          {tournage.acteurs.map((acteur, index) => (
            <li key={index}>
              {acteur.prenom} {acteur.nom} — <em>{acteur.personnage}</em>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>🎥 Techniciens</h3>
        <ul>
          {tournage.techniciens.map((tech, index) => (
            <li key={index}>
              {tech.prenom} {tech.nom} — <em>{tech.specialite}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailTournage;
