import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Activity, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Tecnologia em Segurança</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Protegendo o que é <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Mais Importante</span> para Você.
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
            Soluções inovadoras e personalizadas em segurança eletrônica e automação. Tecnologia de ponta para sua residência ou empresa com a confiança da Hometechs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary group flex items-center justify-center gap-2">
              Ver Soluções
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">Falar com Consultor</button>
          </div>

          {/* Stats/Badges */}
          <div className="mt-16 grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
            {[
              { icon: ShieldCheck, text: "Segurança 24/7" },
              { icon: Activity, text: "Monitoramento" },
              { icon: Zap, text: "Automação" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <item.icon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Glass Card Interface Mockup */}
          <div className="relative z-20 glass-card p-1 animate-float">
            <div className="rounded-xl overflow-hidden shadow-2xl">
               <img 
                 src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/6dpnife8tjs3dtw/67d8f2feef2e4272888316bdc471ebb8/original/cih-0CC3UZAdvJGVLIkrQ.png" 
                 alt="Hometechs Security Display"
                 className="w-full h-auto object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
