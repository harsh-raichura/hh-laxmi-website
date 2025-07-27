'use client';

import React from 'react';
import MobileNav from '../components/MobileNav';

export default function AboutUs() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Main Content with mobile padding for fixed header */}
      <div style={{ paddingTop: '70px', padding: '70px 15px 20px' }}>
        
        {/* Page Header */}
        <section style={{ 
          background: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)', 
          padding: '40px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '30px',
          color: 'white'
        }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            marginBottom: '10px',
            lineHeight: '1.2'
          }}>
            About H.H. Laxmi
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.9 }}>
            A Legacy of Quality Since 1957
          </p>
        </section>

        {/* Our Heritage Section */}
        <section style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '25px 20px',
          marginBottom: '25px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            color: '#8B4513',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center'
          }}>
            🏛️ Our Heritage
          </h2>
          <p style={{ 
            fontSize: '14px', 
            color: '#333', 
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>
            For nearly <strong>70 years</strong>, H.H. Laxmi has been a trusted name in providing premium quality farali items, traditional millets, and authentic spices & herbs. Since our establishment in <strong>1957</strong>, we have been committed to preserving the traditional methods of processing and delivering the finest products to our valued customers.
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#333', 
            lineHeight: '1.6'
          }}>
            What started as a small family business has grown into a legacy of trust, quality, and authenticity that spans three generations. Our dedication to maintaining traditional values while embracing modern quality standards has made us a household name in Gujarat and beyond.
          </p>
        </section>

        {/* Our Story Section */}
        <section style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '25px 20px',
          marginBottom: '25px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            color: '#8B4513',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center'
          }}>
            📖 Our Story
          </h2>
          <p style={{ 
            fontSize: '14px', 
            color: '#333', 
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>
            H.H. Laxmi began its journey in 1957 with a simple mission: to provide pure, authentic, and high-quality traditional food products to families across Gujarat. Our founders understood the importance of maintaining the nutritional value and authentic taste of traditional Indian grains and spices.
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#333', 
            lineHeight: '1.6'
          }}>
            Over the decades, we have specialized in farali (fasting) items, premium millets, and traditional spices that have been an integral part of Indian culture and cuisine. Our commitment to quality has remained unwavering, ensuring that every product that bears the H.H. Laxmi name meets the highest standards of purity and authenticity.
          </p>
        </section>

        {/* Our Values Section */}
        <section style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '25px 20px',
          marginBottom: '25px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            color: '#8B4513',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center'
          }}>
            💝 Our Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '15px',
            textAlign: 'center'
          }}>
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏆</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#8B4513', marginBottom: '5px' }}>Quality First</div>
              <div style={{ fontSize: '12px', color: '#666' }}>70 years of uncompromising quality standards</div>
            </div>
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🌿</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#8B4513', marginBottom: '5px' }}>100% Pure</div>
              <div style={{ fontSize: '12px', color: '#666' }}>No additives, no preservatives, just pure goodness</div>
            </div>
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏛️</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#8B4513', marginBottom: '5px' }}>Traditional</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Preserving age-old processing methods</div>
            </div>
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>👨‍👩‍👧‍👦</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#8B4513', marginBottom: '5px' }}>Family Trust</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Three generations of customer trust</div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '25px 20px',
          marginBottom: '25px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            color: '#8B4513',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center'
          }}>
            ⭐ Why Choose H.H. Laxmi?
          </h2>
          <ul style={{ 
            fontSize: '14px', 
            color: '#333', 
            lineHeight: '1.8',
            paddingLeft: '20px'
          }}>
            <li style={{ marginBottom: '8px' }}><strong>Heritage of Excellence:</strong> Nearly 70 years of experience in traditional food processing</li>
            <li style={{ marginBottom: '8px' }}><strong>Authentic Products:</strong> Maintaining traditional processing methods for authentic taste and nutrition</li>
            <li style={{ marginBottom: '8px' }}><strong>Quality Assurance:</strong> Rigorous quality checks ensure only the finest products reach you</li>
            <li style={{ marginBottom: '8px' }}><strong>Customer Trust:</strong> Thousands of satisfied families across Gujarat and beyond</li>
            <li style={{ marginBottom: '8px' }}><strong>Cultural Values:</strong> Supporting traditional Indian dietary practices and festivals</li>
            <li><strong>Family Business:</strong> Personal care and attention that only a family business can provide</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section style={{
          background: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
          borderRadius: '12px',
          padding: '30px 20px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>
            🤝 Join Our Family of Satisfied Customers
          </h3>
          <p style={{ fontSize: '14px', marginBottom: '20px', opacity: 0.9 }}>
            Experience the difference that 70 years of tradition and quality makes
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
            📞 Get in Touch
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
    </div>
  );
} 