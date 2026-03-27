import React from 'react';
import { Shield, Phone, Mail, Instagram, Clock, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050811] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">HOMETECHS</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Líder em segurança eletrônica e automação no Pará. Inovação e confiança absoluta para sua empresa ou residência.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Soluções</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Relógios de Ponto</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Controle de Acesso</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">CFTV & Alarmes</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Automação Predial</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-6">Empresa</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Parceiros</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contato</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
              <span>(91) 98011-0110</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
              <span>contato@hometechs.com.br</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
              <span>Seg - Sex: 08:00 - 18:00</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
              <span>Belém - Pará</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
        <p>© {new Date().getFullYear()} Hometechs Comércio e Serviços. Todos os direitos reservados.</p>
        <p>CNPJ: 11.991.794/0001-19</p>
      </div>
    </footer>
  );
};

export default Footer;
