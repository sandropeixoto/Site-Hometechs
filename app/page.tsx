"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import {
  ShieldCheck,
  Clock,
  Camera,
  Zap,
  Wifi,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Building2,
  Clock4,
  ArrowRight,
  Fingerprint,
  Lock,
  Cable,
  CheckCircle2,
  Lightbulb,
  Shield,
  Cpu,
  ArrowUpRight,
  MessageCircle
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length <= 10) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://mail-proxy-has46dauxa-rj.a.run.app/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar mensagem');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Parceiros", href: "#parceiros" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans overflow-hidden">
      {/* Navbar */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border border-slate-200 py-4 px-6 md:px-8 rounded-2xl" : "bg-white py-4 px-6 md:px-8 rounded-2xl shadow-sm border border-slate-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center shrink-0">
            <Image src={getAssetPath("/image.png")} alt="Hometechs Logo" width={200} height={48} className="h-10 md:h-12 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              Contato
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col bg-white px-6 py-6"
          >
            <div className="flex items-center justify-between mb-8">
              <Image src={getAssetPath("/image.png")} alt="Hometechs Logo" width={160} height={32} className="h-8 w-auto object-contain" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 bg-slate-100 rounded-full hover:text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-slate-800 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
                <a
                  href="tel:+5591980110110"
                  className="flex items-center gap-3 text-slate-600"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  (91) 98011-0110
                </a>
                <a
                  href="mailto:contato@hometechs.com.br"
                  className="flex items-center gap-3 text-slate-600"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  contato@hometechs.com.br
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* HERO SECTION */}
        <section
          id="inicio"
          className="relative pt-32 pb-8 lg:pt-36 lg:pb-8"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              <div className="absolute -right-12 -bottom-12 w-96 h-96 bg-blue-50 rounded-full opacity-50 pointer-events-none" />
              
              <div className="relative z-10 flex-1 max-w-2xl">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-full mb-6 uppercase tracking-wider"
                >
                  Equipe Técnica Certificada
                </motion.span>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
                >
                  Protegendo e Otimizando sua Empresa.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
                >
                  Relógios de Ponto, Catracas, Controle de Acesso, Alarmes, CFTV e Cerca Elétrica. Produtos inovadores, Serviços com segurança e garantia.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center space-x-3">
                    <span className="text-blue-600 text-2xl font-bold">+16</span>
                    <span className="text-xs text-slate-500 font-medium uppercase leading-tight">Anos de<br />Experiência</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center space-x-3">
                    <span className="text-blue-600 text-2xl font-bold">100%</span>
                    <span className="text-xs text-slate-500 font-medium uppercase leading-tight">Suporte<br />Certificado</span>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="relative z-10 flex-1 flex justify-center w-full"
              >
                 <Image src={getAssetPath("/image.png")} alt="Hometechs Logo Hero" width={400} height={200} className="w-[80%] max-w-md object-contain drop-shadow-xl" priority />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT / MISSION / VISION / VALUES */}
        <section id="sobre" className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
                  Sobre a Hometechs
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Nossa história é construída sobre valores sólidos e compromisso inabalável com a excelência.
                </h2>
                <div className="space-y-6 text-lg text-slate-600 mb-8">
                  <p>
                    A Hometechs nasceu com a missão de comercializar e instalar produtos com tecnologia inovadora, que proporcionem controle, segurança e economia nas empresas e residências de nossos clientes.
                  </p>
                  <p>
                    Estamos estabelecidos em Belém do Pará e o nosso compromisso é crescer com solidez e nos estabilizar como referência no mercado local.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid sm:grid-cols-2 gap-4"
              >
                <motion.div variants={fadeUp} className="bg-blue-600 text-white rounded-3xl p-6 shadow-xl shadow-blue-600/20">
                  <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-xl mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-2">Missão</h3>
                  <p className="text-sm text-blue-100">Comercializar e Instalar produtos com tecnologia inovadora que proporcionem controle, segurança e economia nas empresas e residências dos seus clientes. Se estabilizar no mercado e crescer com solidez e transparência.</p>
                </motion.div>
                
                <motion.div variants={fadeUp} className="bg-blue-600 text-white rounded-3xl p-6 shadow-xl shadow-blue-600/20">
                  <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-xl mb-4">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-2">Visão</h3>
                  <p className="text-sm text-blue-100">Ser reconhecida no mercado paraense entre as melhores empresas do nosso setor.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="sm:col-span-2 bg-blue-600 text-white rounded-3xl p-8 shadow-xl shadow-blue-600/20">
                  <h3 className="font-bold mb-6 text-lg">Nossos Valores</h3>
                  <div className="space-y-4 text-blue-100 text-sm">
                    <p>Profissionalismo, Ética, Respeito aos Clientes e aos Colaboradores. Fornecer produtos e serviços com preço competitivo e lucratividade responsável.<br />
                    Ser uma empresa com Responsabilidade Sócio Ambiental.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS MAIN CATEGORIES */}
        <section id="solucoes" className="py-8 relative scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="max-w-2xl"
                >
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-full mb-4 uppercase tracking-wider">
                    O que fazemos
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                    Soluções Completas para Todas as Necessidades
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Oferecemos um portfólio abrangente de produtos e serviços de alta tecnologia para garantir a segurança e eficiência dos seus espaços.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    icon: <Fingerprint className="w-6 h-6" />,
                    title: "Controle de Ponto e Acesso",
                    desc: "Relógios de ponto, catracas, softwares e sistemas completos para gestão eficiente de pessoas e ambientes."
                  },
                  {
                    icon: <Camera className="w-6 h-6" />,
                    title: "Segurança Eletrônica",
                    desc: "Sistemas de CFTV online, cercas elétricas, concertinas e alarmes para proteção total."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Automação",
                    desc: "Fechaduras eletrônicas, portões automáticos, totens de estacionamento e painéis."
                  },
                  {
                    icon: <Wifi className="w-6 h-6" />,
                    title: "Conectividade",
                    desc: "Execução e manutenção em redes de microcomputadores e redes wireless."
                  }
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group bg-blue-600 text-white rounded-3xl p-6 shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-transform"
                  >
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform origin-left">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{service.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* DETAILED PORTFOLIO */}
        <section id="portfolio" className="py-8 relative scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Nosso Portfólio Detalhado</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Oferecemos uma gama completa de produtos e serviços. Todos são instalados por técnicos certificados, garantindo qualidade e confiabilidade.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <PortfolioCard
                title="Controle de Ponto e Acesso"
                icon={<Clock />}
                items={[
                  "Relógios de ponto biométricos",
                  "Catracas para diversos ambientes",
                  "Fechaduras eletrônicas",
                  "Controle de estacionamento"
                ]}
              />
              <PortfolioCard
                title="Segurança Eletrônica"
                icon={<ShieldCheck />}
                items={[
                  "CFTV com monitoramento via internet",
                  "Alarmes monitorados",
                  "Cercas elétricas e concertinas",
                  "Portões eletrônicos e interfones"
                ]}
              />
              <PortfolioCard
                title="Automação"
                icon={<Cpu />}
                items={[
                  "Impressoras e leitores comerciais",
                  "Painéis de guichê/senha",
                  "Controle de iluminação",
                  "Sistemas de economia de energia"
                ]}
              />
              <PortfolioCard
                title="Infraestrutura"
                icon={<Cable />}
                items={[
                  "Redes de microcomputadores",
                  "Sistemas wireless",
                  "Soluções de identificação",
                  "Crachás e acessórios"
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="parceiros" className="py-20 bg-slate-50 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Parceiros Tecnológicos</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                Somos revenda autorizada e assistência técnica certificada das principais marcas do setor, garantindo a qualidade e a confiabilidade de nossos produtos e serviços.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { name: "CONTROL ID", desc: "Acesso e biometria", img: "/parceiro-1.png" },
                { name: "RWTECH", desc: "Ponto e acesso", img: "/parceiro-2.png" },
                { name: "SECULLUM", desc: "Software de controle", img: "/parceiro-3.png" },
                { name: "INTELBRAS", desc: "Alarmes e CFTV", img: "/parceiro-4.png" }
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-white border text-center border-slate-200 rounded-2xl py-8 px-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-center justify-center"
                >
                  <Image src={getAssetPath(partner.img)} alt={partner.name} width={120} height={40} className="h-10 w-auto mb-4 object-contain" />
                  <div className="font-extrabold text-lg tracking-tighter text-slate-800 mb-1">{partner.name}</div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{partner.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-8 relative scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden flex flex-col md:flex-row gap-12">
              <div className="flex-1 z-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Contato & Localização</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para aumentar sua segurança?</h2>
                <p className="text-slate-400 mb-10 leading-relaxed max-w-sm">
                  Entre em contato conosco hoje mesmo. Nossa equipe de consultores está pronta para analisar suas necessidades e desenhar o projeto ideal.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-xl">📞</span>
                    <span className="text-sm font-semibold opacity-90">(91) 98011-0110</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xl">📧</span>
                    <span className="text-sm opacity-80">contato@hometechs.com.br</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xl">📍</span>
                    <p className="text-sm opacity-80">Travessa do Chaco, 2528 - Marco<br />Belém, Pará - CEP: 66.093-543</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full relative z-10 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
                <h3 className="text-xl font-bold mb-6 text-white text-center md:text-left">Solicite um Orçamento</h3>
                
                <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
                  <div>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="Seu nome" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="Seu e-mail" 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={handlePhoneChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="Telefone / WhatsApp (opcional)" 
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={4} 
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="Como podemos ajudar?" 
                    />
                  </div>
                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-70 disabled:hover:bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] disabled:hover:scale-100 mt-2 flex items-center justify-center"
                  >
                    {status === 'loading' ? (
                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                    ) : null}
                    {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                  {status === 'success' && (
                    <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm mt-4 text-center">
                      Mensagem enviada com sucesso! Em breve entraremos em contato.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm mt-4 text-center">
                      Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 pb-6 mt-8">
        <div className="bg-white px-8 py-5 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
          <Image src={getAssetPath("/image.png")} alt="Hometechs Logo" width={240} height={60} className="h-14 w-auto object-contain mb-4" />
          
          <div className="text-xs text-slate-500 space-y-1">
            <p>© {new Date().getFullYear() || 2026} Hometechs. Todos os direitos reservados. Desenvolvido por <a href="https://nano.net.br" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 hover:text-slate-900 transition-colors">NANO</a></p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/5591980110110?text=Olá, Hometechs! Gostaria de mais informações sobre suas soluções."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl transition-all flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale conosco no WhatsApp
        </span>
      </a>
    </div>
  );
}

function PortfolioCard({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) {
  return (
    <motion.div 
      variants={fadeUp}
      className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex-1 flex flex-col"
    >
      <div className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
      <div className="space-y-3 mt-auto">
        {items.map((item, idx) => (
          <div key={idx} className="group flex items-start p-3 bg-slate-50 rounded-xl hover:bg-blue-600 transition-colors cursor-default">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-3 shadow-sm shrink-0">
              <CheckCircle2 className="w-3 h-3 text-blue-600" />
            </div>
            <p className="text-xs font-bold text-slate-800 group-hover:text-white leading-tight transition-colors">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
