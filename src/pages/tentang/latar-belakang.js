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

      <main className="main-wrapper">

        {/* HERO TITLE - Large Bold Typography (SAMA DENGAN KONTRIBUTOR) */}
        <div style={{
          width: '100%',
          backgroundColor: 'var(--ifm-background-color)',
          borderBottom: '1px solid var(--ifm-color-emphasis-200)', // ← GARIS BAWAH
          padding: '4rem 1.5rem 2rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)', // Responsive: 48px - 96px
              fontWeight: '800',
              lineHeight: '1.1',
              margin: '0',
              color: 'var(--ifm-font-color-base)',
              fontFamily: 'var(--ifm-font-family-base)',
              letterSpacing: '-0.02em'
            }}>
              <span style={{
                color: 'var(--ifm-color-primary)',
                marginRight: '0.2em'
              }}>/</span>
              Latar Belakang
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginTop: '1rem',
              maxWidth: '600px'
            }}>
              Memahami tantangan dan solusi pengamatan bumi Indonesia.
            </p>
          </div>
        </div>
<p></p>
        {/* MAIN CONTENT AREA */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '3rem 1.5rem',
                                            backgroundColor: 'var(--ifm-color-emphasis-100)',

          color: 'var(--ifm-font-color-base)'
        }}>

          {/* Section: Konteks Indonesia */}
          <section style={{ marginBottom: '3rem' }}>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: 'var(--ifm-font-color-base)',
              marginBottom: '1.5rem',
                backgroundColor: 'var(--ifm-color-emphasis-100)',

              textAlign: 'justify'
            }}>
              Indonesia berdiri di persimpangan besar: kekayaan sumber daya alam yang melimpah bertemu dengan laju pembangunan yang cepat, sementara perubahan iklim, degradasi lingkungan, dan tekanan terhadap ruang hidup terus meningkat. Dari hutan yang terfragmentasi, pesisir yang rentan abrasi, hingga kawasan perkotaan yang tumbuh pesat, tantangannya bukan sekadar merancang kebijakan — melainkan memastikan keputusan diambil dengan informasi yang akurat, terkini, dan menyeluruh sehingga mendapatkan visibilitas yang tinggi: memahami pola, tren, dan risikonya.
            </p>

            
          </section>

        </div>
<p></p>
        {/* SCROLL TO TOP */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="scroll-to-top-button"
            aria-label="Kembali ke atas"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-1-1V5.414L5.707 8.707a1 1 0 01-1.414-1.414l5-5a1 1 0 
                011.414 0l5 5a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 01-1 1z"
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