import { themes as prismThemes } from "prism-react-renderer";
import { MapPin } from "lucide-react";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Piksel",
  tagline:
    "Piksel brings together satellite imagery and cloud computing technology to enable digital earth observation across the Indonesian region",
  favicon: "img/piksel-logo.ico",
  url: "https://staging.pik-sel.id",
  baseUrl: "/",
  organizationName: "piksel-ina",
  projectName: "piksel-documentation",
  trailingSlash: false,

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    localeConfigs: {
      id: {
        label: "Indonesia",
        direction: "ltr",
        htmlLang: "id-ID",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/piksel-ina/piksel-documentation",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/piksel-ina/piksel-documentation",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

/* plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'penggunaan',                    // ← ID plugin
        path: 'penggunaan',                  // ← Path ke folder penggunaan/
        routeBasePath: 'penggunaan',         // ← URL base path
        sidebarPath: require.resolve('./sidebars.js'),
        // Optional: editUrl
        // editUrl: 'https://github.com/your-org/piksel/tree/main/',
      },
    ],
  ], */

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap",
      type: "text/css",
    },
  {
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
    type: "text/css",
  },

  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/piksel-logo.svg",

    // TAMBAHKAN KONFIGURASI COLOR MODE DI SINI
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

      navbar: {
        title: "PIKSEL",
        logo: {
          alt: "Piksel Logo",
          src: "img/piksel-logo.svg",
        },
        items: [
           {
          label: 'Penggunaan',
          position: 'left',
          to: '/penggunaan',  // ← Tambahkan ini!
          items: [              // Array nested untuk dropdown
            {
              label: 'Ketahanan Pangan',
              to: '/penggunaan/ketahanan-pangan',
            },
            {
              label: 'Data Satelit untuk Pembangunan',
              to: '/penggunaan/data-satelit',
            },
            
            {
              label: 'Kebencanaan',
              to: '/penggunaan/kebencanaan',
            },
            {
              label: 'Penggunaan Lahan',
              to: '/penggunaan/penggunaan-lahan',
            },
            {
              label: 'Pemantauan Lingkungan',
              to: '/penggunaan/pemantauan-lingkungan',
            },
            {
              label: 'Pengelolaan Pesisir',
              to: '/penggunaan/pengelolaan-pesisir',
            },
          ],
        },
            /* // Menu PENGGUNAAN - BARU
          {
            type: 'docSidebar',
            sidebarId: 'penggunaanSidebar',
            docsPluginId: 'penggunaan',  // ← Link ke plugin penggunaan
            position: 'left',
            label: 'Penggunaan',
          }, */
         {
          label: 'Layanan',
          position: 'left',
          to: '/layanan',  // ← Tambahkan ini!
          items: [              // Array nested untuk dropdown
              {
              label: 'Peta',
              to: '/layanan/peta',
            },
            {
              label: 'Analisis Spasial',
              href: 'https://sandbox.staging.pik-sel.id/',
            },
          
            {
              label: 'Piksel Data API',
              href: 'https://github.com/piksel-ina/homepage',
            },
            {
              label: 'Katalog Produk',
              href: 'https://explorer.staging.pik-sel.id/products',
            },
          ],
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Dokumentasi",
        },
        {
          
          label: 'Tentang',
          position: 'left',
          items: [              // Array nested untuk dropdown
            {
              label: 'Latar Belakang',
              to: '/tentang/latar-belakang',
            },
            {
              label: 'Tujuan',
              to: '/tentang/tujuan',
            },
            {
              label: 'Artikel',
              to: '/blog',
            },
            {
              label: 'Kolaborasi',
              to: '/tentang/kolaborasi',
            },
             {
              label: 'Kontributor',
              to: '/tentang/kontributor',
            },
            {
              label: 'Kontak Kami',
              to: '/tentang/kontak',
            },

          ],
        },
  
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Penggunaan",
            items: [
              {
              label: 'Ketahanan Pangan',
              to: '/penggunaan/ketahanan-pangan',
            },
              {
                label: "Data Satelit untuk Pembangunan",
                to: "/penggunaan/data-satelit",
              },
              {
                label: "Kebencanaan",
                to: "/penggunaan/kebencanaan",
              },
              {
                label: "Penggunaan Lahan",
                to: "/penggunaan/penggunaan-lahan",
              },
              {
                label: "Pemantauan Lingkungan",
                to: "/penggunaan/pemantauan-lingkungan",
              },
              {
                label: "Pengelolaan Pesisir",
                to: "/penggunaan/pengelolaan-pesisir",
              },
            ],
          },
          {
            title: "Layanan",
            items: [              // Array nested untuk dropdown
              {
              label: 'Peta',
              to: '/layanan/peta',
            },
            {
              label: 'Analisis Spasial',
              href: 'https://sandbox.staging.pik-sel.id/',
            },
          
            {
              label: 'Piksel Data API',
              href: 'https://github.com/piksel-ina/homepage',
            },
            {
              label: 'Katalog Produk',
              href: 'https://explorer.staging.pik-sel.id/products',
            },
          ],
          },
          {
            title: "Referensi Lainnya",
            items: [
              {
                label: "Dokumentasi",
                to: "/docs",
              },
              {
                label: "API Reference",
                to: "/docs/api",
              },
              {
                label: "Tutorial",
                to: "/docs/tutorials",
              },
              {
                label: "Artikel",
                to: "/blog",
              },
              {
                label: "Github",
                href: "https://github.com/piksel-ina",
              },
            ],
          },
          {
            title: "Kontak Kami",
            items: [{
      label: "piksel@big.go.id",
      href: "mailto:piksel@big.go.id",
      className: "footer-email", // Tambahkan class
    },
    {
      label: "021-8752062",
      href: "tel:+62218752062",
      className: "footer-phone", // Tambahkan class
    },
    {
      label: "Badan Informasi Geospasial",
      href: "https://www.big.go.id",
      className: "footer-website", // Tambahkan class
    },
{
  label: "Jl. Raya Jakarta - Bogor KM. 46.\nCibinong 16911. Indonesia.",
  href: "https://www.google.com/maps/place/-6.490857746585234,106.84939063522785",
  className: "footer-location-wrapper", // Tambahkan class
},


            ],
          },
        ],
        copyright: `
    <div style="text-align: left; margin-top: 35px;">
      <div>Copyright © ${new Date().getFullYear()} Piksel Indonesia - Badan Informasi Geospasial (BIG)</div>
      <div style="font-size: 0.8em; margin-top: 8px; color: #888;">
        Jl. Raya Jakarta - Bogor KM. 46 Cibinong 16911, Indonesia<br/>
        Tel: 021-8752062 ext.3608/3611/3103
      </div>
    </div>
  `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
