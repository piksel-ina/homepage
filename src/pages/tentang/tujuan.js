import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Map } from "lucide-react";

export default function Tujuan() {
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
      title="Tujuan"
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
        
        {/* Section 1: tujuan */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            color: 'var(--ifm-color-primary)'
          }}>
            Tujuan
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              
              <p style={{ lineHeight: '1.6', textAlign: 'justify' }}>
Piksel adalah platform berbasis cloud yang dirancang untuk memanfaatkan data pengamatan bumi - khususnya citra satelit - untuk menjawab beragam tantangan di Indonesia. Platform ini menyediakan solusi yang terstandar, mudah diakses, dan dapat ditingkatkan skalanya untuk pemrosesan, analisis, serta visualisasi data satelit dalam skala besar. </p>
<p className="text-justify">Platform ini menyediakan layanan analisis berbasis cloud menggunakan citra satelit terbuka maupun yang disediakan oleh Badan Informasi Geospasial. Tujuannya adalah mendukung pemantauan lingkungan, pengelolaan sumber daya, dan pengambilan keputusan berbasis data yang dapat mendukung pembangunan berkelanjutan di Indonesia.
Platform ini juga membantu siapa saja melakukan analisis berbasis cloud dengan citra satelit, baik yang terbuka maupun yang disediakan oleh Badan Informasi Geospasial. Tujuannya sederhana: membuat data kebumian lebih mudah dipakai untuk menjaga lingkungan, mengelola sumber daya, dan mendukung keputusan sehari-hari.
</p><p className="text-justify">Itulah mengapa Piksel dengan tagline “Memahami bumi Indonesia melalui piksel” berusaha untuk menerjemahkan citra satelit menjadi wawasan yang dapat ditindaklanjuti, agar pembangunan berdaya saing berjalan selaras dengan keberlanjutan lingkungan dan ketahanan masyarakat.</p><p>


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