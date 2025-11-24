import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 bg-brand-lime border-4 border-black flex items-center justify-center text-black shadow-neobrutal-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
              <Terminal className="w-7 h-7" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-black font-display uppercase">
              Krea<span className="text-brand-purple">bita</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 text-lg font-bold text-black font-display">
            <button onClick={() => scrollToSection('tentang')} className="px-4 py-2 hover:bg-brand-yellow border-2 border-transparent hover:border-black transition-all uppercase">Tentang</button>
            <button onClick={() => scrollToSection('isi-buku')} className="px-4 py-2 hover:bg-brand-cyan border-2 border-transparent hover:border-black transition-all uppercase">Isi Buku</button>
            <button onClick={() => scrollToSection('manfaat')} className="px-4 py-2 hover:bg-brand-pink border-2 border-transparent hover:border-black transition-all uppercase">Manfaat</button>
          </div>
          
          <button 
            onClick={() => scrollToSection('beli')}
            className="hidden md:inline-flex items-center justify-center px-6 py-2 text-base font-bold text-black transition-all bg-brand-lime border-4 border-black hover:bg-brand-yellow shadow-neobrutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none font-display uppercase tracking-wider"
          >
            Beli Sekarang
          </button>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-black bg-white border-4 border-black shadow-neobrutal-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b-4 border-black animate-in slide-in-from-top-2">
          <div className="p-4 space-y-4 font-display text-xl">
            <button 
              onClick={() => scrollToSection('tentang')} 
              className="block w-full text-left px-4 py-3 border-4 border-black bg-brand-yellow text-black font-bold shadow-neobrutal-sm active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              TENTANG
            </button>
            <button 
              onClick={() => scrollToSection('isi-buku')} 
              className="block w-full text-left px-4 py-3 border-4 border-black bg-brand-cyan text-black font-bold shadow-neobrutal-sm active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              ISI BUKU
            </button>
            <button 
              onClick={() => scrollToSection('manfaat')} 
              className="block w-full text-left px-4 py-3 border-4 border-black bg-brand-pink text-black font-bold shadow-neobrutal-sm active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              MANFAAT
            </button>
            <button 
              onClick={() => scrollToSection('beli')} 
              className="w-full mt-4 text-center px-5 py-4 text-xl font-bold text-black bg-brand-lime border-4 border-black shadow-neobrutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase"
            >
              BELI SEKARANG
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};