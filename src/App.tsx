import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Solutions from './components/Solutions';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
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
