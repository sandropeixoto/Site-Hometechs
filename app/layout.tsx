import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hometechs | Segurança e Automação',
  description: 'Soluções inovadoras em Controle de Ponto, Acesso e Segurança Eletrônica no Pará.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`font-sans antialiased text-slate-800 bg-slate-50`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

