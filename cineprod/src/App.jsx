// src/App.jsx
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tournage from './components/tournage';


function App() {
  return (
    <>
      <Header />
      <main>
        {/* <h2>Bienvenue sur CinéProd</h2> */}
       <Tournage />
      </main>
     <Footer />
    </>
  );
}

export default App;
