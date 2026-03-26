import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Solutions from './components/Solutions';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0f1e] text-slate-50 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Solutions />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
