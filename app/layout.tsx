import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hometechs | Segurança e Automação',
  description: 'Soluções inovadoras em Controle de Ponto, Acesso e Segurança Eletrônica no Pará. Relógios de Ponto, Catracas, CFTV e Alarmes.',
  metadataBase: new URL('https://hometechs.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hometechs | Segurança e Automação',
    description: 'Soluções inovadoras em Controle de Ponto, Acesso e Segurança Eletrônica no Pará.',
    url: 'https://hometechs.com.br',
    siteName: 'Hometechs',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
        alt: 'Hometechs | Segurança e Automação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hometechs | Segurança e Automação',
    description: 'Soluções inovadoras em Controle de Ponto, Acesso e Segurança Eletrônica no Pará.',
    images: ['/image.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Hometechs",
    "description": "Soluções inovadoras em Controle de Ponto, Acesso e Segurança Eletrônica no Pará.",
    "url": "https://hometechs.com.br/",
    "telephone": "+5591980110110",
    "email": "contato@hometechs.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Travessa do Chaco, 2528 - Marco",
      "addressLocality": "Belém",
      "addressRegion": "PA",
      "postalCode": "66093-543",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased text-slate-800 bg-slate-50`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

