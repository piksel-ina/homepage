import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Map } from "lucide-react";

export default function Kolaborasi() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout
      title="Kolaborasi"
      description="Memahami bumi Indonesia melalui piksel"
      wrapperClassName="layout-wrapper">
      
      {/* HERO SECTION dengan Icon */}
      <main className="main-wrapper">
      {/* MAIN CONTENT AREA - HTML Biasa */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem 1.5rem',
        color: 'var(--ifm-font-color-base)'
      }}>
        
        {/* Section 3: Kolaborasi */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            color: 'var(--ifm-color-primary)'
          }}>
            Kolaborasi
          </h2>
          
          <div style={{ 
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              <li style={{ 
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '1.5rem',
                fontSize: '1.05rem',
                lineHeight: '1.6'
              }}>
                <span style={{ 
                  marginRight: '1rem', 
                  fontSize: '1.5rem',
                  color: 'var(--ifm-color-primary)'
                }}>✓</span>
                <div><p className="text-justify">
                  Pengembangan platform ini merupakan hasil kerja sama antara berbagai instansi di Indonesia dan Australia, dengan peran utama dari Badan Informasi Geospasial (BIG) dan Geoscience Australia (GA). Kolaborasi ini memastikan integrasi pengetahuan, teknologi, dan kapasitas untuk kepentingan nasional dan regional.
                </p></div>
              </li>
              
              <li style={{ 
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '1.5rem',
                fontSize: '1.05rem',
                lineHeight: '1.6'
              }}>
                <span style={{ 
                  marginRight: '1rem', 
                  fontSize: '1.5rem',
                  color: 'var(--ifm-color-primary)'
                }}>✓</span>
                <div><p className="text-justify">
                  Melalui dukungan Badan Informasi Geospasial (BIG) dan Geoscience Australia (GA), teknologi dan pengetahuan bisa dibagikan untuk menjawab tantangan nyata di Indonesia.
                </p></div>
              </li>
              
              
              
            </ul>
          </div>
          </section>
      </div>    



      {/* TOMBOL SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button"
          aria-label="Kembali ke atas"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a1 1 0 01-1-1V5.414L5.707 8.707a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 01-1 1z" 
              clipRule="evenodd" 
            />
          </svg>
          <span style={{ marginLeft: '0.5rem' }}>Kembali ke Atas</span>
        </button>
      )}
      </main>
    </Layout>
  );
}