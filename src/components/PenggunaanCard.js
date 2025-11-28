import React from 'react';

export default function PenggunaanCard({ title, description, image, bgGradient }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '2rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        flex: '0 0 300px',
        minHeight: '200px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      
      <div style={{
        flex: '1',
        minWidth: '300px',
        padding: '2rem',
        background: bgGradient,
        color: 'white'
      }}>
        <h2 style={{ marginTop: 0, color: 'white' }}>{title}</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
