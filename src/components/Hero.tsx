import { motion } from 'framer-motion';
import heroImg from '../assets/hero-main.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-slate-600/20 blur-[100px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Líder em Segurança Eletrônica no Pará
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Inovação e <span className="text-indigo-500">Confiança</span> Absoluta
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Combinamos tecnologia de ponta com atendimento especializado para oferecer controle eficiente e segurança total para sua empresa ou residência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary py-4 px-8 text-lg">Explorar Soluções</button>
            <button className="btn-secondary py-4 px-8 text-lg">Nossa História</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10">
            <img 
              src={heroImg} 
              alt="Hometechs Security Tech" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-600/30 blur-3xl -z-10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-slate-600/30 blur-3xl -z-10 rounded-full animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
