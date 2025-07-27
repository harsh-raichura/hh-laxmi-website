'use client';

import React, { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About Us', href: '/about', icon: '🏛️' },
    { name: 'Farali Items', href: '/#farali', icon: '🌾' },
    { name: 'Millets', href: '/#millets', icon: '🌱' },
    { name: 'Rajgira Atta', href: '/#rajgira', icon: '🌾' },
    { name: 'Sabudana', href: '/#sabudana', icon: '⚪' },
    { name: 'Contact Us', href: '/contact', icon: '📞' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 15px',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '8px',
            transition: 'background-color 0.3s',
            width: '44px'
          }}
          onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#f5f5f5'}
          onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Logo - Centered */}
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#8B4513'
        }}>
          H.H. Laxmi
        </div>

        {/* Right Placeholder to maintain balance */}
        <div style={{ width: '44px' }}></div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1001,
          }}
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: isOpen ? 0 : '-280px',
        width: '280px',
        height: '100vh',
        backgroundColor: '#fff',
        zIndex: 1002,
        transition: 'left 0.3s ease-in-out',
        overflowY: 'auto',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
      }}>
        {/* Menu Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '15px 20px',
          borderBottom: '1px solid #eee',
          backgroundColor: '#8B4513'
        }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: 'white', fontWeight: 'bold' }}>H.H. Laxmi</h3>
            <p style={{ margin: 0, fontSize: '12px', color: 'white', opacity: 0.9 }}>Farali, Premium Millets, Spices & Herbs</p>
          </div>
          <button
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '8px',
              transition: 'background-color 0.3s',
              color: 'white'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div style={{ padding: '20px 0' }}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px 20px',
                textDecoration: 'none',
                color: '#333',
                borderBottom: '1px solid #f0f0f0',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#f8f8f8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
              onClick={toggleMenu}
            >
              <span style={{ fontSize: '20px', marginRight: '15px' }}>
                {item.icon}
              </span>
              <span style={{ fontSize: '16px' }}>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav; 