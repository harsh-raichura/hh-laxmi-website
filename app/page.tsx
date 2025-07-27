'use client';

import React, { useState, useEffect } from 'react'
import MobileNav from './components/MobileNav'
import MobileProductCard from './components/MobileProductCard'
import { products } from './data/products'

export default function Home() {
  // Get all products from data file
  const allProducts = products;
  
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove # from hash
      if (hash && ['farali', 'millets', 'spices', 'rajgira', 'sabudana'].includes(hash)) {
        setSelectedCategory(hash);
        // Smooth scroll to products section
        setTimeout(() => {
          const productsSection = document.getElementById('products-section');
          if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (!hash) {
        setSelectedCategory('all');
      }
    };

    // Check hash on component mount
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup listener
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => 
        product.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'farali' && product.category === 'Farali Items') ||
        (selectedCategory === 'millets' && product.category === 'Millets') ||
        (selectedCategory === 'spices' && product.category === 'Spices & Herbs') ||
        (selectedCategory === 'rajgira' && (
          product.name.toLowerCase().includes('rajgira') || 
          product.name.toLowerCase().includes('rajgara') ||
          product.id.toLowerCase().includes('rajgira') ||
          product.id.toLowerCase().includes('rajgara')
        )) ||
        (selectedCategory === 'sabudana' && (
          product.name.toLowerCase().includes('sabudana') ||
          product.id.toLowerCase().includes('sabudana')
        ))
      );

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    
    // Update URL hash
    if (category === 'all') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/#${category}`);
    }
    
    // Smooth scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = '919427064742'; // H.H. Laxmi WhatsApp number
    const message = encodeURIComponent('Hi! I\'m interested in H.H. Laxmi products.\n\nCan you help me with product information and pricing?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Main Content with mobile padding for fixed header */}
      <div style={{ paddingTop: '70px', padding: '70px 15px 20px' }}>
        
        {/* Mobile Hero Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 
          padding: '40px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '10px', 
            color: '#8B4513',
            lineHeight: '1.2'
          }}>
            H.H. Laxmi
          </h1>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
            Farali, Premium Millets, Spices & Herbs
          </p>
          <h2 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>
            Authentic Traditional Products
          </h2>
          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            marginBottom: '0px', 
            lineHeight: '1.5'
          }}>
            Discover our premium collection of farali items, nutritious millets, and traditional spices & herbs. 
            Perfect for your upvas, festivals, and healthy living.
          </p>
        </section>

        {/* All Products Section */}
        <section id="products-section" style={{ marginBottom: '40px' }}>
          <h3 style={{ 
            fontSize: '20px', 
            textAlign: 'center', 
            marginBottom: '20px', 
            color: '#333' 
          }}>
            🌾 {selectedCategory === 'all' ? 'Our Product Range' :
                selectedCategory === 'farali' ? 'Farali Items' :
                selectedCategory === 'millets' ? 'Millets' :
                selectedCategory === 'spices' ? 'Spices & Herbs' :
                selectedCategory === 'rajgira' ? 'Rajgira Products' : 
                selectedCategory === 'sabudana' ? 'Sabudana' : 'Our Products'}
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '12px',
            marginBottom: '30px'
          }}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <MobileProductCard 
                  key={product.id} 
                  product={{
                    name: product.name,
                    description: product.description,
                    image: product.images.front, 
                    badge: product.badge
                  }} 
                />
              ))
            ) : (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '40px 20px',
                color: '#666',
                fontSize: '16px'
              }}>
                No products found in this category.
              </div>
            )}
          </div>
          {selectedCategory !== 'all' && (
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <button
                onClick={() => handleCategoryClick('all')}
                style={{
                  backgroundColor: '#8B4513',
                  color: 'white',
                  padding: '10px 20px',
                  fontSize: '14px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#CD853F'}
                onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = '#8B4513'}
              >
                📂 Show All Products
              </button>
            </div>
          )}
        </section>

        {/* Mobile Quick Actions */}
        <section style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ 
            fontSize: '18px', 
            textAlign: 'center', 
            marginBottom: '20px', 
            color: '#333' 
          }}>
            🌟 Why Choose H.H. Laxmi?
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '16px',
            textAlign: 'center'
          }}>
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🌾</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Premium Quality</div>
            </div>
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🚚</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Fast Delivery</div>
            </div>
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>✅</div>
              <div style={{ fontSize: '12px', color: '#666' }}>100% Pure</div>
            </div>
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>💰</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Best Prices</div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section style={{ marginBottom: '40px' }}>
          <h4 style={{ 
            fontSize: '18px', 
            textAlign: 'center', 
            marginBottom: '20px', 
            color: '#333' 
          }}>
            📂 Browse by Category
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '12px'
          }}>
            <div style={{
              backgroundColor: selectedCategory === 'all' ? '#8B4513' : '#fff',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s, background-color 0.3s'
            }} onClick={() => handleCategoryClick('all')}
            onMouseOver={(e) => {
              if (selectedCategory !== 'all') {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (selectedCategory !== 'all') {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>🌾</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: selectedCategory === 'all' ? 'white' : '#333' }}>All Products</div>
              <div style={{ fontSize: '10px', color: selectedCategory === 'all' ? 'white' : '#666' }}>View All</div>
            </div>
            <div style={{
              backgroundColor: selectedCategory === 'farali' ? '#8B4513' : '#fff',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s, background-color 0.3s'
            }} onClick={() => handleCategoryClick('farali')}
            onMouseOver={(e) => {
              if (selectedCategory !== 'farali') {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (selectedCategory !== 'farali') {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>🌾</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: selectedCategory === 'farali' ? 'white' : '#333' }}>Farali</div>
              <div style={{ fontSize: '10px', color: selectedCategory === 'farali' ? 'white' : '#666' }}>5 items</div>
            </div>
            <div style={{
              backgroundColor: selectedCategory === 'millets' ? '#8B4513' : '#fff',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s, background-color 0.3s'
            }} onClick={() => handleCategoryClick('millets')}
            onMouseOver={(e) => {
              if (selectedCategory !== 'millets') {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (selectedCategory !== 'millets') {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>🌱</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: selectedCategory === 'millets' ? 'white' : '#333' }}>Millets</div>
              <div style={{ fontSize: '10px', color: selectedCategory === 'millets' ? 'white' : '#666' }}>1 item</div>
            </div>
            <div style={{
              backgroundColor: selectedCategory === 'spices' ? '#8B4513' : '#fff',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s, background-color 0.3s'
            }} onClick={() => handleCategoryClick('spices')}
            onMouseOver={(e) => {
              if (selectedCategory !== 'spices') {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (selectedCategory !== 'spices') {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>🌿</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: selectedCategory === 'spices' ? 'white' : '#333' }}>Spices & Herbs</div>
              <div style={{ fontSize: '10px', color: selectedCategory === 'spices' ? 'white' : '#666' }}>2 items</div>
            </div>
          </div>
        </section>

        {/* Mobile CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
          borderRadius: '12px',
          padding: '30px 20px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>
            📞 Get in Touch!
          </h3>
          <p style={{ fontSize: '14px', marginBottom: '20px', opacity: 0.9 }}>
            Contact us for product information, availability, and pricing details
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            style={{
            backgroundColor: 'white',
            color: '#8B4513',
            padding: '12px 25px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            💬 Contact Us
          </button>
        </section>
      </div>

      {/* Copyright Footer */}
      <footer style={{
        backgroundColor: '#f8f8f8',
        padding: '20px 15px',
        textAlign: 'center',
        borderTop: '1px solid #eee',
        marginTop: '40px'
      }}>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#666',
          lineHeight: '1.5'
        }}>
          © 1957-2024 H.H. Laxmi. All Rights Reserved.<br/>
          A Legacy of Quality Since 1957 | Gujarat, India
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <div 
        onClick={handleWhatsAppClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite'
        }}
        onMouseOver={(e) => {
          (e.target as HTMLElement).style.transform = 'scale(1.1)';
          (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
        }}
        onMouseOut={(e) => {
          (e.target as HTMLElement).style.transform = 'scale(1)';
          (e.target as HTMLElement).style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
        }}
      >
        {/* WhatsApp Logo SVG */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="white"
          style={{ pointerEvents: 'none' }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
        </svg>
      </div>

      {/* CSS Animation for pulse effect */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.6), 0 0 0 10px rgba(37, 211, 102, 0.1);
          }
          100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
        }
      `}</style>
    </div>
  )
} 