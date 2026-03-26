import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Sobre a <span className="text-emerald-500">Hometechs</span></h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Baseada em Belém do Pará, a história da Hometechs é construída sobre valores sólidos e um compromisso inabalável com a excelência.
            </p>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Nosso objetivo é crescer com solidez e ser a referência número um em Controle de Ponto, Acesso e Segurança Eletrônica no mercado paraense.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Target, title: 'Missão', text: 'Proporcionar controle, segurança e economia através de tecnologia inovadora.' },
                { icon: Eye, title: 'Visão', text: 'Ser reconhecida entre as melhores empresas de automação e segurança do Pará.' },
                { icon: Heart, title: 'Valores', text: 'Profissionalismo, Ética, Respeito e Responsabilidade Socioambiental.' },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-3xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Escritório Hometechs" 
                className="w-full h-[500px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 group max-w-xs border-emerald-500/20 shadow-emerald-500/10 shadow-2xl">
              <div className="text-3xl font-bold text-emerald-500 mb-2">+1000</div>
              <div className="text-sm font-medium text-slate-300">Clientes atendidos com excelência em todo o Pará.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
