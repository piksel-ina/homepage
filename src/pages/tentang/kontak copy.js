import React, { useEffect, useState, useRef } from 'react';
import Layout from '@theme/Layout';
import { Mail, Phone, Globe, MapPin, Maximize2 } from "lucide-react";

export default function Kontak() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const bigCoordinatesRef = useRef([-6.490857746585234, 106.84939063522785]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // ✅ FUNGSI ZOOM TO EXTENT
  const zoomToExtent = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(bigCoordinatesRef.current, 15, {
        animate: true,
        duration: 1
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Leaflet CSS and JS
  useEffect(() => {
    // Load Leaflet CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    linkElement.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    linkElement.crossOrigin = '';
    document.head.appendChild(linkElement);

    // Load Leaflet JS
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    scriptElement.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    scriptElement.crossOrigin = '';
    scriptElement.async = true;

    scriptElement.onload = () => {
      setMapLoaded(true);
    };

    document.body.appendChild(scriptElement);

    return () => {
      if (linkElement.parentNode) {
        document.head.removeChild(linkElement);
      }
      if (scriptElement.parentNode) {
        document.body.removeChild(scriptElement);
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Initialize map when Leaflet is loaded
useEffect(() => {
  if (mapLoaded && mapRef.current && !mapInstanceRef.current) {
    const bigCoordinates = bigCoordinatesRef.current;

    // Initialize map
    const map = window.L.map(mapRef.current).setView(bigCoordinates, 15);

    // ✅ CUSTOM ZOOM TO EXTENT CONTROL - DENGAN SVG ICON
const ZoomToExtentControl = window.L.Control.extend({
  options: {
    position: 'topleft'
  },

  onAdd: function (map) {
    const container = window.L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    
    const button = window.L.DomUtil.create('a', 'leaflet-control-zoom-extent', container);
    
    // SVG Icon (Maximize/Fullscreen)
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
      </svg>
    `;
    
    button.href = '#';
    button.title = 'Zoom to Extent';
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', 'Zoom to extent');
    
    // Style button
    button.style.width = '30px';
    button.style.height = '30px';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.textDecoration = 'none';
    button.style.color = '#333';
    button.style.backgroundColor = '#fff';
    button.style.cursor = 'pointer';

    // Prevent map drag when clicking button
    window.L.DomEvent.disableClickPropagation(button);
    window.L.DomEvent.disableScrollPropagation(button);

    // Click event
    window.L.DomEvent.on(button, 'click', function (e) {
      window.L.DomEvent.preventDefault(e);
      map.setView(bigCoordinates, 15, {
        animate: true,
        duration: 1
      });
    });

    // Hover effects
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = '#f4f4f4';
    });
    
    button.addEventListener('mouseleave', function() {
      button.style.backgroundColor = '#fff';
    });

    return container;
  }
});

// Add custom control to map
map.addControl(new ZoomToExtentControl());


    // TAMBAHKAN GOOGLE MAPS LAYER
    const baseLayers = {
      "Google Satellite": window.L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        attribution: '&copy; Google',
        maxZoom: 20
      }),
      "Google Hybrid": window.L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        attribution: '&copy; Google',
        maxZoom: 20
      }),
      "Google Streets": window.L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        attribution: '&copy; Google',
        maxZoom: 20
      }),
      "Esri Satellite": window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 19
      }),
      "OpenStreetMap": window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      })
    };

    // Add default layer (Google Satellite)
    baseLayers["Google Satellite"].addTo(map);

    // Add layer control
    window.L.control.layers(baseLayers).addTo(map);

    // Custom icon for marker
    const customIcon = window.L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add marker
    const marker = window.L.marker(bigCoordinates, { icon: customIcon }).addTo(map);

    // Add popup
    marker.bindPopup(`
      <div style="font-family: sans-serif;">
        <strong style="font-size: 16px; color: #1f2937;">Badan Informasi Geospasial (BIG)</strong><br/>
        <span style="color: #6b7280; font-size: 14px;">
          Jl. Raya Jakarta - Bogor KM. 46<br/>
          Cibinong 16911, Indonesia
        </span><br/>
        <a 
          href="https://www.google.com/maps/place/-6.490857746585234,106.84939063522785" 
          target="_blank" 
          rel="noopener noreferrer"
          style="color: #2563eb; text-decoration: none; font-size: 14px; margin-top: 8px; display: inline-block;"
        >
          Buka di Google Maps →
        </a>
      </div>
    `).openPopup();

    mapInstanceRef.current = map;

    // Fix map display issues
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }
}, [mapLoaded]);


  const iconStyle = {
    marginRight: '1rem',
    color: 'var(--ifm-color-primary)',
    flexShrink: 0
  };

  return (
    <Layout
      title="Kontak"
      description="Memahami bumi Indonesia melalui piksel"
      wrapperClassName="layout-wrapper"
    >
      <main className="main-wrapper">

        {/* HERO TITLE */}
        <div style={{
          width: '100%',
          backgroundColor: 'var(--ifm-background-color)',
          borderBottom: '1px solid var(--ifm-color-emphasis-200)',
          padding: '4rem 1.5rem 2rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
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
              Kontak Kami
            </h1>

            <p style={{
                fontSize: '1.25rem',
                color: 'var(--ifm-color-emphasis-700)',
                marginTop: '1rem'
              }}>
              Anda dapat menghubungi kami melalui informasi berikut untuk memberikan masukan, kontribusi, ataupun pertanyaan.
            </p>
          </div>
        </div>

        {/* INFORMASI KONTAK */}
        <section style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.5rem' }}>
          <div className="kontak-card">
            <ul className="kontak-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              
              <li>
                <Mail style={iconStyle} />
                <a href="mailto:piksel@big.go.id">piksel@big.go.id</a>
              </li>

              <li>
                <Phone style={iconStyle} />
                <a href="tel:+62218752062">021-8752062</a>
              </li>

              <li>
                <Globe style={iconStyle} />
                <a
                  href="https://www.big.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Badan Informasi Geospasial (BIG)
                </a>
              </li>

              <li>
                <MapPin style={iconStyle} />    
                <a
                  href="https://www.google.com/maps/place/-6.490857746585234,106.84939063522785"
                  target="_blank"
                  rel="noopener noreferrer"
                >       
                  Jl. Raya Jakarta - Bogor KM. 46<br/>
                  Cibinong 16911, Indonesia
                </a>
              </li>

            </ul>
          </div>
        </section>

        {/* PETA LOKASI */}
        <section style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.5rem' }}>
          
          

          <div style={{
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            {/* Map Container */}
            <div 
              ref={mapRef}
              id="map"
              style={{ 
                height: '450px',
                maxWidth: '1200px',
                borderRadius: '12px'
              }}
            >
              {!mapLoaded && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  backgroundColor: 'var(--ifm-color-emphasis-200)',
                  color: 'var(--ifm-color-emphasis-700)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '0.5rem' 
                    }}>
                      📍
                    </div>
                    <div>Memuat peta...</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* TOMBOL SCROLL TO TOP */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="scroll-to-top-button"
            aria-label="Kembali ke atas"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
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
