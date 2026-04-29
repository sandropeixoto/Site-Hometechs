"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
const logoImg = "/image.png";
const parceiro1Img = "/parceiro-1.png";
const parceiro2Img = "/parceiro-2.png";
const parceiro3Img = "/parceiro-3.png";
const parceiro4Img = "/parceiro-4.png";
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
  ArrowUpRight
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Contato", href: "#contato" },
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
            <Image src={logoImg} alt="Hometechs Logo" width={200} height={48} className="h-10 md:h-12 w-auto object-contain" />
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
              Solicitar Orçamento
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
              <Image src={logoImg} alt="Hometechs Logo" width={160} height={32} className="h-8 w-auto object-contain" />
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
                  Tecnologia paraense de ponta
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
                  Relógios de Ponto, Catracas, Controle de Acesso, Alarmes, CFTV e Cerca Elétrica. Serviços e instalamos produtos inovadores com segurança.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center space-x-3">
                    <span className="text-blue-600 text-2xl font-bold">+10</span>
                    <span className="text-xs text-slate-500 font-medium uppercase leading-tight">Anos de<br />Experiência</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center space-x-3">
                    <span className="text-blue-600 text-2xl font-bold">100%</span>
                    <span className="text-xs text-slate-500 font-medium uppercase leading-tight">Suporte<br />Autorizado</span>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="relative z-10 flex-1 flex justify-center w-full"
              >
                 <Image src={logoImg} alt="Hometechs Logo Hero" width={400} height={200} className="w-[80%] max-w-md object-contain drop-shadow-xl" priority />
              </motion.div>
            </div>
          </div>
        </section>

        {/* INTRO / ABOUT SUMMARY */}
        <section id="sobre" className="py-8 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeUp} className="bg-blue-700 p-8 rounded-3xl text-white shadow-lg shadow-blue-200/50 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-bold mb-3 text-xl italic relative z-10">Missão</h3>
                <p className="text-sm leading-relaxed opacity-90 relative z-10">Comercializar e instalar produtos com tecnologia inovadora que proporcionem controle, segurança e economia para nossos clientes.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900 mb-3 text-xl italic">Visão</h3>
                <p className="text-sm leading-relaxed text-slate-500">Ser reconhecida no mercado paraense entre as melhores empresas de Controle de Ponto, Acesso, Automação e Segurança Eletrônica.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900 mb-3 text-xl italic">Valores</h3>
                <p className="text-sm leading-relaxed text-slate-500">Profissionalismo, ética, respeito, preço competitivo, lucratividade responsável e responsabilidade socioambiental.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SOLUTIONS MAIN CATEGORIES */}
        <section id="solucoes" className="py-8 relative">
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
                    title: "Controle de Acesso e Ponto",
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
                    className="group bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-2xl p-6 transition-colors shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-white text-blue-700 rounded-lg flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform origin-left">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* DETAILED PORTFOLIO */}
        <section id="portfolio" className="py-8 relative">
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

        {/* ABOUT / MISSION / VISION / VALUES */}
        <section className="py-24 bg-white border-y border-slate-100">
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
                    Estamos estabelecidos em Belém do Pará e nosso compromisso é crescer com solidez e nos estabilizar como referência no mercado local.
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
                <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Missão</h3>
                  <p className="text-sm text-slate-600">Comercializar e instalar produtos com tecnologia inovadora que proporcionem controle, segurança e economia.</p>
                </motion.div>
                
                <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-4">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Visão</h3>
                  <p className="text-sm text-slate-600">Ser reconhecida no mercado paraense entre as melhores empresas do nosso setor.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="sm:col-span-2 bg-blue-600 text-white rounded-3xl p-8 shadow-xl shadow-blue-600/20">
                  <h3 className="font-bold mb-6 text-lg">Nossos Valores</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-300" />
                      Profissionalismo, Ética e Respeito
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-300" />
                      Preço competitivo e lucratividade responsável
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-300" />
                      Responsabilidade Socioambiental
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="parceiros" className="py-20 bg-slate-50">
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
                { name: "CONTROL ID", desc: "Acesso e biometria", img: parceiro1Img },
                { name: "RWTECH", desc: "Ponto e acesso", img: parceiro2Img },
                { name: "SECULLUM", desc: "Software de controle", img: parceiro3Img },
                { name: "INTELBRAS", desc: "Alarmes e CFTV", img: parceiro4Img }
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-white border text-center border-slate-200 rounded-2xl py-8 px-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-center justify-center"
                >
                  <Image src={partner.img} alt={partner.name} width={120} height={40} className="h-10 w-auto mb-4 object-contain" />
                  <div className="font-extrabold text-lg tracking-tighter text-slate-800 mb-1">{partner.name}</div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{partner.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-8 relative">
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
                
                <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Seu nome" />
                  </div>
                  <div>
                    <input type="tel" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Telefone / WhatsApp" />
                  </div>
                  <div>
                    <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Como podemos ajudar?" />
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] mt-2">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 pb-6 mt-12">
        <div className="bg-white px-8 py-6 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image src={logoImg} alt="Hometechs Logo" width={160} height={40} className="h-10 w-auto object-contain shrink-0" />
            <div className="flex items-center space-x-6 w-full md:w-auto overflow-x-auto whitespace-nowrap hidden lg:flex">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter shrink-0">Parceiros:</span>
              <div className="flex space-x-6 grayscale opacity-60 items-center">
                <Image src={parceiro1Img} alt="CONTROL ID" width={80} height={20} className="h-5 w-auto object-contain" />
                <Image src={parceiro2Img} alt="RWTECH" width={80} height={20} className="h-5 w-auto object-contain" />
                <Image src={parceiro3Img} alt="SECULLUM" width={80} height={20} className="h-5 w-auto object-contain" />
                <Image src={parceiro4Img} alt="INTELBRAS" width={80} height={20} className="h-5 w-auto object-contain" />
              </div>
            </div>
            
            <div className="text-[10px] text-slate-400 text-center md:text-right">
              CNPJ: 11.991.794/0001-19 <br className="md:hidden" />© {new Date().getFullYear()} Hometechs. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
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
          <div key={idx} className="flex items-start p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-3 shadow-sm shrink-0">
              <CheckCircle2 className="w-3 h-3 text-blue-600" />
            </div>
            <p className="text-xs font-bold text-slate-800 leading-tight">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
