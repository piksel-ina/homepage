import React from 'react';
import styles from './styles.module.css';

// Data sections (sama seperti di PenggunaanLanding)
const SECTIONS_DATA = {
  "ketahanan-pangan": {
    id: "ketahanan-pangan",
    title: "Ketahanan Pangan",
    description: "Data satelit mendukung pertanian presisi dengan memantau kesehatan tanaman, stres akibat kekeringan atau hama, serta kelembapan tanah untuk mengestimasi produktivitas. Informasi ini membantu merencanakan waktu tanam, penggunaan pupuk dan air, serta memprediksi hasil panen. Pemantauan satelit juga mengidentifikasi potensi gagal panen dan dampak perubahan iklim, sehingga menjadi instrumen penting dalam memastikan ketersediaan pangan nasional.",
    image: "/img/penggunaan/pangan.jpg",
    bgGradient: "linear-gradient(135deg, #654321 0%, #7c5c3d 50%, #8b6f47 100%)",
  },
  "data-satelit": {
    id: "data-satelit",
    title: "Data Satelit untuk Pembangunan",
    description: "Data satelit menjadi elemen penting pembangunan nasional karena menyediakan informasi spasial cepat dan akurat untuk kebutuhan strategis seperti penanggulangan bencana, penggunaan lahan, lingkungan, pesisir, dan ketahanan pangan. Satelit juga mendukung pemantauan infrastruktur, kualitas udara, pola penyakit, serta perkembangan wilayah dan aktivitas ekonomi, sehingga meningkatkan efektivitas perencanaan dan pengambilan keputusan.",
    image: "/img/penggunaan/sat.jpg",
    bgGradient: "linear-gradient(135deg, #1e5f74 0%, #0d3f52 50%, #0a2f3d 100%)",
  },
  "kebencanaan": {
    id: "kebencanaan",
    title: "Kebencanaan",
    description: "Dalam penanggulangan bencana, data satelit menyediakan informasi cepat dan akurat untuk mendeteksi potensi banjir, longsor, kebakaran hutan, dan aktivitas gunung api. Informasi ini menjadi dasar sistem peringatan dini serta membantu pemetaan area terdampak secara real time untuk evakuasi, distribusi bantuan, dan perencanaan pemulihan. Dengan pemantauan berkelanjutan, satelit memberikan dukungan strategis dalam meminimalkan risiko dan mempercepat penanganan bencana.",
    image: "/img/penggunaan/bencana.jpg",
    bgGradient: "linear-gradient(135deg, #7c2d12 0%, #991b1b 50%, #7f1d1d 100%)",
  },
  "penggunaan-lahan": {
    id: "penggunaan-lahan",
    title: "Penggunaan Lahan",
    description: "Satelit memungkinkan pemantauan perubahan tutupan lahan secara konsisten, sehingga dinamika seperti deforestasi, alih fungsi lahan, dan perluasan permukiman dapat terdeteksi dengan jelas. Informasi ini menjadi dasar penting untuk rencana tata ruang, evaluasi kesesuaian lahan, dan pengendalian pemanfaatan ruang. Pemantauan satelit juga membantu mengidentifikasi potensi konflik penggunaan lahan dan mendukung keputusan yang lebih tepat bagi keberlanjutan pembangunan.",
    image: "/img/penggunaan/lahan.jpg",
    bgGradient: "linear-gradient(135deg, #854d0e 0%, #a16207 50%, #ca8a04 100%)",
  },
  "pemantauan-lingkungan": {
    id: "pemantauan-lingkungan",
    title: "Pemantauan Lingkungan",
    description: "Dalam pemantauan lingkungan, data satelit merekam kondisi ekosistem secara luas dan berkelanjutan, menilai kualitas vegetasi, perubahan ekosistem, serta parameter seperti suhu permukaan dan kekeruhan perairan. Informasi ini membantu mengidentifikasi degradasi lingkungan dan menilai dampak perubahan iklim maupun aktivitas manusia, sehingga menjadi dasar ilmiah bagi konservasi dan pengelolaan sumber daya alam yang berkelanjutan.",
    image: "/img/penggunaan/lingkungan.jpg",
    bgGradient: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
  },
  "pengelolaan-pesisir": {
    id: "pengelolaan-pesisir",
    title: "Pengelolaan Pesisir",
    description: "Dalam pengelolaan pesisir, data satelit memantau perubahan garis pantai, abrasi, sedimentasi, serta kondisi ekosistem seperti mangrove dan terumbu karang. Informasi ini membantu mengidentifikasi area rentan dan mendukung perencanaan pembangunan pesisir yang aman dan berkelanjutan, termasuk penentuan zona perlindungan dan pengawasan aktivitas manusia. Dengan pemantauan jangka panjang, satelit menjadi dasar penting bagi pengelolaan pesisir terpadu.",
    image: "/img/penggunaan/pesisir.jpg",
    bgGradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)",
  },
};

export default function DetailSection({ sectionId }) {
  const section = SECTIONS_DATA[sectionId];

  if (!section) {
    return (
      <div className={styles.errorContainer}>
        <h2>Section not found</h2>
        <p>Section ID "{sectionId}" tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      {/* Hero Section */}
      <div 
        className={styles.heroSection}
        style={{ background: section.bgGradient }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{section.title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.imageWrapper}>
          <img 
            src={section.image} 
            alt={section.title}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.sectionTitle}>Tentang {section.title}</h2>
          <p className={styles.description}>{section.description}</p>

          {/* Additional Content Area */}
          <div className={styles.additionalContent}>
            <h3>Manfaat Utama</h3>
            <ul>
              <li>Pemantauan real-time dengan data satelit terkini</li>
              <li>Analisis spasial untuk pengambilan keputusan strategis</li>
              <li>Integrasi dengan sistem informasi geografis (GIS)</li>
              <li>Dukungan untuk perencanaan dan evaluasi program</li>
            </ul>

            <h3>Teknologi yang Digunakan</h3>
            <p>
              Platform PIKSEL menggunakan teknologi penginderaan jauh terkini dengan 
              resolusi tinggi untuk memberikan informasi yang akurat dan tepat waktu.
            </p>
          </div>

          {/* Call to Action */}
          <div className={styles.ctaSection}>
            <a href="/penggunaan" className={styles.backButton}>
              ← Kembali ke Penggunaan
            </a>
            <a href="/docs" className={styles.docsButton}>
              Lihat Dokumentasi →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
