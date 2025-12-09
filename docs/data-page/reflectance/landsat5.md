---
sidebar_position: 1
---

# Landsat 5 Surface Reflectance

Citra satelit Landsat 5 Surface Reflectance

- **ID Produk:** [ls5_c2l2_sr](https://explorer.staging.pik-sel.id/products/ls5_c2l2_sr)
- **Tipe:** Baseline, Raster
- **Resolusi:** 30 m
- **Cakupan Waktu:** 16 Agustus 1986 – 17 November 2011
- **Pembaruan Data:** Tidak ada pembaruan lanjutan (sebelumnya: harian)

![Landsat5 preview](/img/docu/landsat5-prev.jpg)

## Spesifikasi
Spesifikasi lengkap dari **Landsat 5 Surface Reflectance** adalah sebagai berikut:

- **Technical Name:** Landsat 5 TM Analysis Ready Data 
- **Band:** 10 band  
- **Catalogue ID:** [ls5_c2l2_sr](https://explorer.staging.pik-sel.id/products/ls5_c2l2_sr)  
- **Collection:** [Landsat 5 SR](https://explorer.staging.pik-sel.id/products/ls5_c2l2_sr)  
- **Licence:** [Creative Commons Attribution 4.0 International Licence](https://creativecommons.org/licenses/by/4.0/)

| Band         | Tipe  | Unit | Resolusi | No-data | Alias               | Deskripsi                                                                 |
|--------------|-------|--------|------------|---------|------------------------|------------------------------------------------------------------------------|
| blue   | uint16 | -      | 30         | 0    | SR_B1, band_1     | Surface reflectance untuk band spektral biru. Wavelength: 0.45–0.52 µm. |
| green  | uint16 | -      | 30         | 0    | SR_B2, band_2    | Surface reflectance untuk band spektral hijau. Wavelength: 0.52–0.60 µm. |
| red    | uint16 | -      | 30         | 0    | SR_B3, band_3      | Surface reflectance untuk band spektral merah. Wavelength: 0.63–0.69 µm. |
| nir08    | uint16 | -      | 30         | 0    | SR_B4, band_4, nir      | Surface reflectance untuk band spektral inframerah dekat. Wavelength: 0.76–0.90 µm. |
| swir16    | uint16 | -      | 30         | 0    | SR_B5, band_5, swir_1      | Surface reflectance untuk band spektral inframerah gelombang pendek 1. Wavelength: 1.55–1.75 µm. |
| swir22    | uint16 | -      | 30         | 0    | SR_B7, band_7, swir_2      | Surface reflectance untuk band spektral inframerah gelombang pendek 2. Wavelength: 2.08–2.35 µm. |
| qa_pixel    | uint16 | -      | 30         | 1    | QA_PIXEL, pq, pixel_quality      | Penilaian kualitas piksel. Menandai kondisi seperti awan, bayangan awan, air, dan salju. Tidak memiliki panjang gelombang. |
| qa_radsat    | uint16 | -      | 30         | 0    | QA_RADSAT, radsat, radiometric_saturation      | Penilaian saturasi radiometrik. Menandai piksel yang mengalami saturasi sensor. Tidak memiliki panjang gelombang. |
| atmos_opacity    | int16 | -      | 30         | -9999    | SR_ATMOS_OPACITY, atmos_opacity      | Opasitas atmosfer. Menyediakan informasi tentang tingkat transparansi atmosfer saat akuisisi citra. Tidak memiliki panjang gelombang. |
| cloud_qa    | uint16 | -      | 30         | 0    | SR_CLOUD_QA      | Penilaian awan. Menandai keberadaan awan dan bayangan awan dalam citra. Tidak memiliki panjang gelombang. |

## Aplikasi
Bagian ini berisi contoh aplikasi apa saja yang dapat menggunakan data tersebut
Buat link yang mengarah ke contoh penggunaan
- Environment
- Disaster
- Dll

## Akses data
Akan dimasukkan link untuk mengakses data ini baik dalam piksel map dan explorer. kemudian masukkan juga link menuju contoh memanggil dalam notebook.
- Piksel Map
- Piksel Explorer
- Contoh memanggil data dalam manual atau panduan pengguna

## Citation
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
