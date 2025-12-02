import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Map } from "lucide-react";

export default function Kontributor() {
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
      title="Kontributor PIKSEL"
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
        
        {/* Section 1: Kontributor PIKSEL */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            color: 'var(--ifm-color-primary)'
          }}>
            Kontributor PIKSEL
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <img 
                src="/img/kontributor/anton.jpg" 
                alt="Dr. Antonius Bambang Wijanarto"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ 
                  width: '100%', 
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  userSelect: 'none',
                  WebkitUserDrag: 'none'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ 
                display: 'none',
                width: '100%', 
                height: '250px', 
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: '#666'
              }}>
                <span>Gambar tidak tersedia</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Dr. Antonius Bambang Wijanarto
              </h3>
              <p style={{ lineHeight: '1.6', textAlign: 'justify' }}>
              Deputi Bidang Infrastruktur Geospasial Tematik<br/> Badan Informasi Geospasial
              
              </p>
            </div>

            <div>
              <img 
                src="/img/kontributor/gatot.jpg" 
                alt="Dr. Gatot Haryo Pramono, B.Sc, M.App.Sc"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ 
                  width: '100%', 
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  userSelect: 'none',
                  WebkitUserDrag: 'none'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ 
                display: 'none',
                width: '100%', 
                height: '250px', 
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: '#666'
              }}>
                <span>Gambar tidak tersedia</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Dr. Gatot Haryo Pramono, B.Sc, M.App.Sc
              </h3>
              <p style={{ lineHeight: '1.6', textAlign: 'justify' }}>
                Direktur Pemetaan Tematik<br/> Badan Informasi Geospasial
              </p>
            </div>

            <div>
              <img 
                src="/img/tentang/urban.jpg" 
                alt="Kawasan Perkotaan"
                style={{ 
                  width: '100%', 
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ 
                display: 'none',
                width: '100%', 
                height: '250px', 
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: '#666'
              }}>
                <span>Gambar tidak tersedia</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Pertumbuhan Perkotaan
              </h3>
              <p style={{ lineHeight: '1.6', textAlign: 'justify' }}>
                Ekspansi kawasan perkotaan yang pesat memerlukan perencanaan tata 
                ruang yang cermat. Teknologi satelit memberikan data objektif untuk 
                pembangunan kota yang berkelanjutan.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Solusi PIKSEL */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            color: 'var(--ifm-color-primary)'
          }}>
            Solusi PIKSEL
          </h2>
          
          <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                textAlign: 'justify',
                marginBottom: '1rem'
              }}>
                PIKSEL hadir untuk mendapatkan <strong>visibilitas yang tinggi</strong>: 
                memahami pola, tren, dan risikonya. Dengan tagline{' '}
                <em>"Memahami bumi Indonesia melalui piksel"</em>, kami berusaha 
                menerjemahkan citra satelit menjadi wawasan yang dapat ditindaklanjuti.
              </p>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                textAlign: 'justify',
                marginBottom: '1rem'
              }}>
                Platform ini dirancang agar pembangunan berdaya saing berjalan selaras 
                dengan keberlanjutan lingkungan dan ketahanan masyarakat. PIKSEL adalah 
                platform berbasis <strong>cloud</strong> yang memanfaatkan data pengamatan 
                bumi untuk menjawab beragam tantangan di Indonesia.
              </p>
            </div>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <img 
                src="/img/tentang/satelit.jpg" 
                alt="Satelit"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ 
                display: 'none',
                width: '100%', 
                height: '300px', 
                backgroundColor: '#f0f0f0',
                borderRadius: '12px',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
              }}>
                <span>Gambar satelit tidak tersedia</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Keunggulan Platform */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            color: 'var(--ifm-color-primary)'
          }}>
            Keunggulan Platform
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
                <div>
                  <strong>Terstandar:</strong> Protokol dan metodologi yang konsisten 
                  memastikan kualitas dan komparabilitas data
                </div>
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
                <div>
                  <strong>Mudah Diakses:</strong> Antarmuka intuitif dan dokumentasi 
                  lengkap memudahkan pengguna dari berbagai latar belakang
                </div>
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
                <div>
                  <strong>Skalabel:</strong> Infrastruktur cloud memungkinkan pemrosesan 
                  data dalam skala besar dengan efisien
                </div>
              </li>
              
              <li style={{ 
                display: 'flex',
                alignItems: 'flex-start',
                fontSize: '1.05rem',
                lineHeight: '1.6'
              }}>
                <span style={{ 
                  marginRight: '1rem', 
                  fontSize: '1.5rem',
                  color: 'var(--ifm-color-primary)'
                }}>✓</span>
                <div>
                  <strong>Komprehensif:</strong> Menyediakan solusi end-to-end dari 
                  pemrosesan, analisis, hingga visualisasi data satelit
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, var(--ifm-color-primary-light) 0%, var(--ifm-color-primary) 100%)',
          borderRadius: '12px',
          color: 'white'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Siap Memanfaatkan Data Satelit?
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            Mulai eksplorasi data geospasial Indonesia dengan platform PIKSEL
          </p>
          <a 
            href="/docs" 
            className="button button--secondary button--lg"
            style={{
              backgroundColor: 'white',
              color: 'var(--ifm-color-primary)',
              marginRight: '1rem'
            }}
          >
            Lihat Dokumentasi
          </a>
          <a 
            href="/layanan" 
            className="button button--outline button--lg"
            style={{
              borderColor: 'white',
              color: 'white'
            }}
          >
            Jelajahi Layanan
          </a>
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