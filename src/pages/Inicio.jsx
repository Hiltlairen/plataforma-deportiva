import React from 'react';
import '../styles/Inicio.css'; // Importamos su CSS específico

// Componente Inicio
import Carousel from '../components/Carousel/Carousel';
const Inicio = () => {
  return (
    
    <div className="inicio-container">
        
      <h1 className="inicio-title">ALISPORT</h1>
       <Carousel />
    </div>
  );
};

export default Inicio;