import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Map } from "lucide-react";

export default function LatarBelakang() {
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
      title="Latar Belakang"
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
        
        {/* Section 1: latar-belakang */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            color: 'var(--ifm-color-primary)'
          }}>
            Latar Belakang
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              
              <p style={{ lineHeight: '1.6', textAlign: 'justify' }} className='text-justify'>
                Indonesia berdiri di persimpangan besar: kekayaan sumber daya alam yang melimpah bertemu dengan laju pembangunan yang cepat, sementara perubahan iklim, degradasi lingkungan, dan tekanan terhadap ruang hidup terus meningkat. Dari hutan yang terfragmentasi, pesisir yang rentan abrasi, hingga kawasan perkotaan yang tumbuh pesat, tantangannya bukan sekadar merancang kebijakan — melainkan memastikan keputusan diambil dengan informasi yang akurat, terkini, dan menyeluruh sehingga mendapatkan visibilitas yang tinggi: memahami pola, tren, dan risikonya. 

              </p>
            </div>

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