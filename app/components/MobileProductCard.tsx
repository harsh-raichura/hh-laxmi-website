'use client';

import React from 'react';

interface Product {
  name: string;
  description: string;
  image: string; 
  badge?: string;
}

interface MobileProductCardProps {
  product: Product;
}

const MobileProductCard: React.FC<MobileProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    console.log('Image failed to load:', product.image);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', product.image);
    setImageError(false);
  };

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      marginBottom: '16px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}
    onMouseOver={(e) => {
      const target = e.target as HTMLElement;
      target.style.transform = 'translateY(-2px)';
      target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
    }}
    onMouseOut={(e) => {
      const target = e.target as HTMLElement;
      target.style.transform = 'translateY(0)';
      target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }}>
      {/* Product Image */}
      <div style={{
        position: 'relative',
        height: '180px',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {product.badge && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '10px',
            fontWeight: 'bold',
            zIndex: 1
          }}>
            {product.badge}
          </div>
        )}
        
        {/* Product Image with Fallback */}
        {!imageError ? (
          <img 
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              backgroundColor: '#ffffff'
            }}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : (
          <div style={{
            fontSize: '60px',
            opacity: 0.3,
            textAlign: 'center'
          }}>
            {/* Fallback icon based on product type */}
            {product.name.toLowerCase().includes('rajgira') ? '🌾' :
             product.name.toLowerCase().includes('moraiyo') ? '🌱' :
             product.name.toLowerCase().includes('sabudana') ? '⚪' :
             product.name.toLowerCase().includes('methi') ? '🌿' :
             product.name.toLowerCase().includes('kodari') || product.name.toLowerCase().includes('ragi') ? '🌾' :
             product.name.toLowerCase().includes('singhare') ? '🥥' : '🌾'}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div style={{ padding: '16px' }}>
        {/* Product Name */}
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          margin: '0 0 8px 0',
          color: '#333',
          lineHeight: '1.3'
        }}>
          {product.name}
        </h3>

        {/* Product Description */}
        <p style={{
          fontSize: '13px',
          color: '#666',
          margin: '0 0 0px 0', // Removed margin since no button below
          lineHeight: '1.4'
        }}>
          {product.description}
        </p>
        {/* Removed Contact for Orders Button */}
      </div>
    </div>
  );
};

export default MobileProductCard; 