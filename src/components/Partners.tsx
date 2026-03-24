import { motion } from 'framer-motion';

const partners = ['Control iD', 'RWTECH', 'Secullum', 'Intelbras'];

const Partners = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-sm">Empresas que confiam em nossa tecnologia</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60">
          {partners.map((partner) => (
            <div key={partner} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-2xl md:text-3xl font-bold text-slate-400 hover:text-white cursor-default">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
