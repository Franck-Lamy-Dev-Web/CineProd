// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Tournage from './components/tournage';
import Film from './components/Film';
import Acteurs from './components/Acteurs';
import Techniciens from './components/Techniciens';
import Accueil from './components/Accueil';
import DetailTournage from './components/DetailTournage';
import DetailTournageWrapper from './components/DetailTournageWrapper';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/tournage" element={<Tournage />} />
          <Route path="/tournage/:id" element={<DetailTournageWrapper />} />
          <Route path="/film" element={<Film />} />
          <Route path="/acteurs" element={<Acteurs />} />
          <Route path="/techniciens" element={<Techniciens />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
