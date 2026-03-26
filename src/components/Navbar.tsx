import { motion } from 'framer-motion';
import { Menu, X, Shield, Cpu, Activity, Info } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Soluções', href: '#solucoes', icon: Cpu },
    { name: 'Segurança', href: '#seguranca', icon: Shield },
    { name: 'Sobre Nós', href: '#sobre', icon: Info },
    { name: 'Contato', href: '#contato', icon: Activity },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-emerald-500/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Shield className="text-slate-950 w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            HOMETECHS
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary py-2 px-5 text-sm"
          >
            Falar com Consultor
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 bg-[#0a0f1e]/fb backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 text-lg font-medium text-slate-200"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-5 h-5 text-emerald-400" />
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full py-4 text-lg">
              Falar com Consultor
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
