import React from 'react';
import logo from './logo.svg';
//import './App.css';
import BootstrapCard from './component/BootstrapCard';
import card1 from './images/elijah-boisvert-H0grsrvgsBo-unsplash.jpg';
import card2 from './images/joshua-oluwagbemiga-8W3Vo59vziw-unsplash.jpg';
import card3 from './images/juliana-malta-fWMH08cUvyw-unsplash.jpg';
import card4 from './images/juliana-malta-h_k7RPxv3yI-unsplash.jpg';
import card5 from './images/nik-shuliahin-aHpb9_GkpiQ-unsplash.jpg';
import card6 from './images/person-holding-barbell-841130.jpg';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">React Bootstrap</a>
      </nav>
      <div className="container mt-3">
        <div className = "row">
          <div className = "col-md-4">
          <BootstrapCard image={card1}></BootstrapCard>
          </div>
          <div className = "col-md-4">
          <BootstrapCard image={card2}></BootstrapCard>
          </div>
          <div className = "col-md-4">
          <BootstrapCard image={card3}></BootstrapCard>
          </div>
          <div className = "col-md-4">
          <BootstrapCard image={card4}></BootstrapCard>
          </div>
          <div className = "col-md-4">
          <BootstrapCard image={card5}></BootstrapCard>
          </div>
          <div className = "col-md-4">
          <BootstrapCard image={card6}></BootstrapCard>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
