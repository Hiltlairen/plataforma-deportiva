import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { novedades } from '../../data/novedades';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div className="product-carousel">
      
      
      <Slider {...settings}>
        {/* Slide de presentación fijo */}
        <div className="presentation-slide">
          <div className="presentation-card">
            <div className="presentation-info">
              <h2 className="brand-name">ALISPORT</h2>
              <h3 className="about-title">¿Quienes Somos?</h3>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
              </p>
            </div>
            
            <div className="presentation-image-container">
              <img 
                src="/logo-alisport.png" 
                alt="Logo ALISPORT" 
                className="presentation-image"
                onError={(e) => e.target.src = '/logo.png'}
              />
            </div>
          </div>
        </div>

        {/* Slides normales de productos */}
        {novedades.map((product) => (
          <div key={product.id} className="product-slide">
            <div className="product-card">
              <div className="product-info">
                <h2 className="section-title">NOVEDADES</h2>
                <h3 className="product-name">{product.nombreProducto}</h3>
                <p className="product-price">{product.precio} Bs.</p>
                <h2 className="store-name">{product.nombreTienda}</h2>
                <div className="store-rating">
                  {'⭐'.repeat(Math.floor(product.calificacionTienda))}
                  <span>({product.calificacionTienda})</span>
                </div>
              </div>
              
              <div className="product-image-container">
                <img 
                  src={product.imagen} 
                  alt={product.nombreProducto} 
                  className="product-image"
                  onError={(e) => e.target.src = '/placeholder-product.png'}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;