'use client';

import React, { useState } from 'react'
import MobileNav from '../components/MobileNav'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll redirect to WhatsApp with the form data
    const message = `Hi! I'm contacting H H Works:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Thank you!`;
    
    const phoneNumber = '919427064742';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Main Content with mobile padding for fixed header */}
      <div style={{ paddingTop: '70px', padding: '70px 15px 20px' }}>
        
        {/* Page Header */}
        <section style={{ 
          background: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
          padding: '30px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '30px',
          color: 'white'
        }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            marginBottom: '10px'
          }}>
            Contact H H Works
          </h1>
          <p style={{ fontSize: '14px', opacity: 0.9, margin: 0 }}>
            Get in touch with us for product information, orders, and inquiries
          </p>
        </section>

        {/* Contact Form Section */}
        <section style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '25px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            marginBottom: '20px', 
            color: '#333',
            textAlign: 'center'
          }}>
            📝 Drop Us A Line
          </h2>
          
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                marginBottom: '8px', 
                color: '#333' 
              }}>
                Your Name (required)
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#8B4513'}
                onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                marginBottom: '8px', 
                color: '#333' 
              }}>
                Your Email (required)
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#8B4513'}
                onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* Phone Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                marginBottom: '8px', 
                color: '#333' 
              }}>
                Your Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#8B4513'}
                onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                marginBottom: '8px', 
                color: '#333' 
              }}>
                Your Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  resize: 'vertical',
                  minHeight: '100px'
                }}
                onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = '#8B4513'}
                onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#8B4513',
                color: 'white',
                padding: '15px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#CD853F'}
              onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#8B4513'}
            >
              💬 Send via WhatsApp
            </button>
          </form>
        </section>

        {/* Contact Information Section */}
        <section style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            marginBottom: '20px', 
            color: '#333',
            textAlign: 'center'
          }}>
            📞 Contact Information
          </h2>
          
          {/* Business Address */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginBottom: '8px', 
              color: '#8B4513' 
            }}>
              📍 Business Address:
            </h3>
            <div style={{ 
              fontSize: '14px', 
              color: '#666', 
              lineHeight: '1.5',
              marginBottom: '15px',
              padding: '15px',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              border: '2px solid #e0e0e0'
            }}>
              <strong style={{ color: '#8B4513' }}>H H Works</strong><br/>
              53/2 Phase, 3<br/>
              GIDC Naroda<br/>
              Ahmedabad, Gujarat 382330
            </div>
            
            {/* Google Maps CTA Button */}
            <a 
              href="https://maps.app.goo.gl/isaAQL2Fze7uBTPJ7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block',
                padding: '12px 20px',
                backgroundColor: '#8B4513',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
                boxShadow: '0 2px 4px rgba(139, 69, 19, 0.3)'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#CD853F'}
              onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = '#8B4513'}
            >
              🗺️ Open in Google Maps
            </a>
          </div>

          {/* Contact Details */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginBottom: '15px', 
              color: '#8B4513' 
            }}>
              📱 Get In Touch:
            </h3>
            
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                📞 Talk to us at: 
              </span>
              <a 
                href="tel:+919427064742" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B4513', 
                  textDecoration: 'none' 
                }}
              >
                94270 64742
              </a>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                💬 WhatsApp us at: 
              </span>
              <a 
                href="https://wa.me/919427064742" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '14px', 
                  color: '#25D366', 
                  textDecoration: 'none' 
                }}
              >
                94270 64742
              </a>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                📧 Email us at: 
              </span>
              <a 
                href="mailto:hhworksindia@gmail.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B4513', 
                  textDecoration: 'none' 
                }}
              >
                hhworksindia@gmail.com
              </a>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                📸 Follow us on Instagram: 
              </span>
              <a 
                href="https://instagram.com/hhlaxmi1957" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '14px', 
                  color: '#E4405F', 
                  textDecoration: 'none' 
                }}
              >
                @hhlaxmi1957
              </a>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                ⏰ Business Hours: 
              </span>
              <span style={{ fontSize: '14px', color: '#666' }}>
                Monday to Saturday 9 AM - 7 PM
              </span>
            </div>
          </div>


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
  )
} 