import { themes as prismThemes } from "prism-react-renderer";

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

plugins: [
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
  ],

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap",
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
          items: [              // Array nested untuk dropdown
            {
              label: 'Ketahanan Pangan',
              to: '/page/ketahanan-pangan',
            },
            {
              label: 'Data Satelit untuk Pembangunan',
              to: '/page/data-satelit',
            },
            
            {
              label: 'Kebencanaan',
              to: '/page/kebencanaan',
            },
            {
              label: 'Penggunaan Lahan',
              to: '/page/penggunaan-lahan',
            },
            {
              label: 'Pemantauan Lingkungan',
              to: '/page/pemantauan-lingkungan',
            },
            {
              label: 'Pengelolaan Pesisir',
              to: '/page/pengelolaan-pesisir',
            },
          ],
        },
            // Menu PENGGUNAAN - BARU
          {
            type: 'docSidebar',
            sidebarId: 'penggunaanSidebar',
            docsPluginId: 'penggunaan',  // ← Link ke plugin penggunaan
            position: 'left',
            label: 'Penggunaan',
          },
         {
          label: 'Layanan',
          position: 'left',
          items: [              // Array nested untuk dropdown
              {
              label: 'Peta',
              to: '/layanan/peta',
            },
            {
              label: 'Analisis Spasial',
              to: '/layanan/analisis-spasial',
            },
          
            {
              label: 'Piksel Data API',
              to: '/layanan/api',
            },
            {
              label: 'Katalog Produk',
              to: '/layanan/katalog-produk',
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
              label: 'Tujuan',
              to: '/docs/katalog-produk',
            },
            {
              label: 'Blog',
              to: '/docs/analisis-spasial',
            },
            {
              label: 'Koalaborasi',
              to: '/docs/peta',
            },
            {
              label: 'Kontak',
              to: '/docs/api',
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
              to: '/page/ketahanan-pangan',
            },
              {
                label: "Data Satelit untuk Pembangunan",
                to: "/page/data-satelit",
              },
              {
                label: "Kebencanaan",
                to: "/page/kebencanaan",
              },
              {
                label: "Penggunaan Lahan",
                to: "/page/penggunaan-lahan",
              },
              {
                label: "Pemantauan Lingkungan",
                to: "/page/pemantauan-lingkungan",
              },
              {
                label: "Pengelolaan Pesisir",
                to: "/page/pengelolaan-pesisir",
              },
            ],
          },
          {
            title: "Layanan",
            items: [              // Array nested untuk dropdown
            {
              label: 'Katalog Produk',
              to: '/docs/katalog-produk',
            },
            {
              label: 'Analisis Spasial',
              to: '/docs/analisis-spasial',
            },
            {
              label: 'Peta',
              to: '/docs/peta',
            },
            {
              label: 'API',
              to: '/docs/api',
            },
          ],
          },
          {
            title: "Referensi Lainnya",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
              {
                label: "API Reference",
                to: "/docs/api",
              },
              {
                label: "Tutorials",
                to: "/docs/tutorials",
              },
              {
                label: "Blog",
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
            items: [
              {
                label: "Email: piksel@big.go.id",
                href: "mailto:piksel@big.go.id",
              },
              {
                label: "Phone: 021-8752062",
                href: "tel:+62218752062",
              },
              {
                label: "BIG Indonesia",
                href: "https://www.big.go.id",
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
