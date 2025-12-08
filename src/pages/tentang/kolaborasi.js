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

      <main className="main-wrapper">

        {/* HERO TITLE - Large Bold Typography   */}
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
              Kolaborasi
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginTop: '1rem',
              maxWidth: '600px'
            }}>
Sinergi bersama meningkatkan akses data geospasial.            </p>
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
              textAlign: 'justify'
            }}>
Pengembangan platform Piksel merupakan hasil kerja sama strategis antara Badan Informasi Geospasial (BIG) dan Geoscience Australia (GA), dengan dukungan dari berbagai institusi serta kontributor yang berdedikasi. Kolaborasi ini menggabungkan peran vital berbagai instansi di Indonesia dan Australia untuk membangun fondasi yang kokoh dalam penyediaan dan pengelolaan data geospasial.            </p>
              <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: 'var(--ifm-font-color-base)',
              textAlign: 'justify'
            }}>
Kolaborasi ini bertujuan memastikan terjadinya integrasi pengetahuan, teknologi, dan peningkatan kapasitas demi kepentingan nasional maupun regional. Melalui dukungan penuh dari BIG dan GA, teknologi mutakhir dan wawasan ahli dapat dibagikan secara efektif untuk meningkatkan aksesibilitas data, sekaligus menjawab berbagai tantangan nyata pembangunan yang dihadapi oleh Indonesia.          </p>
              <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: 'var(--ifm-font-color-base)',
              textAlign: 'justify'
            }}>
Sebagai bentuk komitmen berkelanjutan, kami terus bekerja untuk menghadirkan solusi inovatif dalam pemrosesan, analisis, dan visualisasi data satelit. Upaya ini difokuskan untuk menyediakan informasi yang akurat guna mendukung agenda pembangunan berkelanjutan di masa depan.</p>
          </section>

<div className="section-card" style={{ 
                flex: '1', 
                minWidth: '300px',
                backgroundColor: 'var(--card-bg-primary)',
                padding: '2rem',
                borderRadius: '12px'
              }}>
                <h3 style={{ 
                  fontSize: '2.5rem',
                  fontWeight: '700', 
                  marginBottom: '1rem',
                  color: 'white',
                  letterSpacing: '-0.01em'
                }}>
                  Ingin Berkontribusi?
                </h3>
                <p style={{ 
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  color: 'white',
                  textAlign: 'justify'
                }}>
                  Kami selalu terbuka untuk berkolaborasi dan menerima kontribusi baik dari komunitas maupun institusi. 
                  Hubungi kami untuk informasi lebih lanjut.
                </p>
                <a 
                  href="mailto:piksel@big.go.id" 
                  className="section-button"
                >
                  Hubungi Kami
                </a>
              </div>

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