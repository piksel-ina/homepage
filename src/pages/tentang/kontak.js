import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Mail, Phone, Globe } from "lucide-react";

export default function kontak() {
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

  // Style untuk ikon agar konsisten
  const iconStyle = {
    marginRight: '1rem',
    color: 'var(--ifm-color-primary)', // Menggunakan warna tema utama
    flexShrink: 0 // Mencegah ikon mengecil jika teks panjang
  };

  return (
    <Layout
      title="Kontak PIKSEL"
      description="Memahami bumi Indonesia melalui piksel"
      wrapperClassName="layout-wrapper">
      
      <main className="main-wrapper">
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '2rem 1.5rem',
          color: 'var(--ifm-font-color-base)'
        }}>
          
          {/* Section 1: kontak */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: 'var(--ifm-color-primary)'
            }}>
              Kontak Kami
            </h2>
            Anda dapat menghubungi kami melalui informasi berikut:
            <div style={{ 
              backgroundColor: 'var(--ifm-color-emphasis-100)',
              padding: '2rem',
              borderRadius: '12px'
            }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem' }}>
                
                {/* PERUBAHAN 2: Menggunakan Ikon Mail */}
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <Mail style={iconStyle} /> 
                  <a href="mailto:piksel@big.go.id" style={{ color: 'var(--ifm-link-color)' }}>
                    piksel@big.go.id
                  </a>
                </li>

                 {/* PERUBAHAN 3: Menggunakan Ikon Phone untuk konsistensi */}
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <Phone style={iconStyle} />
                  <a href="tel:+62218752062" style={{ color: 'var(--ifm-link-color)' }}>
                    021-8752062
                  </a>
                </li>

                 {/* PERUBAHAN 4: Menggunakan Ikon Globe untuk website */}
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <Globe style={iconStyle} />
                  <a 
                    href="https://www.big.go.id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--ifm-link-color)' }}
                  >
                    Badan Informasi Geospasial (BIG)
                  </a>
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1V5.414L5.707 8.707a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 01-1 1z" clipRule="evenodd" />
            </svg>
            <span style={{ marginLeft: '0.5rem' }}>Kembali ke Atas</span>
          </button>
        )}
      </main>
    </Layout>
  );
}