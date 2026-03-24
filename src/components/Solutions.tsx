import { motion } from 'framer-motion';
import { Clock, Lock, ShieldCheck, Zap, Wifi, Smartphone } from 'lucide-react';

const solutions = [
  {
    title: 'Controle de Ponto e Acesso',
    desc: 'Relógios biométricos, catracas e fechaduras eletrônicas com gestão completa em tempo real.',
    icon: Clock,
    color: 'bg-blue-500',
  },
  {
    title: 'Segurança Eletrônica',
    desc: 'CFTV com monitoramento online, alarmes cercas elétricas e proteção total do patrimônio.',
    icon: ShieldCheck,
    color: 'bg-indigo-500',
  },
  {
    title: 'Automação Predial',
    desc: 'Controle de iluminação, economia de energia e sistemas inteligentes para residências e empresas.',
    icon: Zap,
    color: 'bg-amber-500',
  },
  {
    title: 'Conectividade e Infra',
    desc: 'Manutenção em redes, sistemas wireless e projetos completos de conectividade corporativa.',
    icon: Wifi,
    color: 'bg-emerald-500',
  },
];

const Solutions = () => {
  return (
    <section id="solucoes" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Portfólio de <span className="text-indigo-500">Soluções</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Oferecemos um leque abrangente de tecnologias para garantir que seu ambiente seja seguro, inteligente e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group"
            >
              <div className={`w-14 h-14 ${item.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
