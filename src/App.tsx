import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Partners from './components/Partners';
import Solutions from './components/Solutions';
import About from './components/About';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-[#0a0f1e] text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
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
