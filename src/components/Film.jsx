// src/components/Film.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Film.css';

function Film() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch('http://178.255.128.61:2512/Franck_L/BackendCineProd/film.php')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur chargement des films');
        return res.json();
      })
      .then((data) => {
        setFilms(data);
        setLoading(false);
      })
      .catch((err) => {
        setErreur(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status-message">Chargement...</p>;
  if (erreur) return <p className="status-message">Erreur : {erreur}</p>;

  return (
    <div className="films-container">
      <h2 className="film-title">🎬 Liste des Films</h2>
      <div className="film-grid">
        {films.map((film) => (
          <div className="film-card" key={film.id}>
            <h3 className="film-name">{film.titre}</h3>
            <p><span>🎭 Genre :</span> {film.genre}</p>
            <p><span>⏱ Durée :</span> {film.duree} min</p>
            <p className={`statut ${film.statut.toLowerCase().replace(' ', '-')}`}>
              📌 Statut : {film.statut}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Film;
