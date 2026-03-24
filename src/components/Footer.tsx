import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="pt-24 pb-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold tracking-tight text-white">HOMETECHS</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Excelência em tecnologia de segurança e automação para o mercado paraense. Controle total, segurança absoluta.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/hometechscomercio" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:contato@hometechs.com.br" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Soluções</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li>Controle de Ponto e Acesso</li>
            <li>Segurança Eletrônica</li>
            <li>Automação Predial</li>
            <li>Conectividade corporativa</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Institucional</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li>Sobre Nós</li>
            <li>Missão e Valores</li>
            <li>Suporte Técnico</li>
            <li>Fale Conosco</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Onde Estamos</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>Travessa do Chaco, 2528 - Marco<br />Belém, Pará - CEP: 66.093-543</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>(91) 98011-0110</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>contato@hometechs.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-xs text-center md:text-left">
          © 2024 Hometechs Comércio e Serviços Eireli. Todos os direitos reservados. CNPJ: 11.991.794/0001-19
        </p>
        <div className="flex gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
