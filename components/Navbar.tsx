import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

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
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">KREABITA</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('tentang')} className="hover:text-indigo-600 transition-colors">Tentang</button>
            <button onClick={() => scrollToSection('isi-buku')} className="hover:text-indigo-600 transition-colors">Isi Buku</button>
            <button onClick={() => scrollToSection('manfaat')} className="hover:text-indigo-600 transition-colors">Manfaat</button>
          </div>
          
          <button 
            onClick={() => scrollToSection('beli')}
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          >
            Beli Sekarang
          </button>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-slate-500 hover:text-slate-700 transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <button 
              onClick={() => scrollToSection('tentang')} 
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('isi-buku')} 
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
            >
              Isi Buku
            </button>
            <button 
              onClick={() => scrollToSection('manfaat')} 
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
            >
              Manfaat
            </button>
            <button 
              onClick={() => scrollToSection('beli')} 
              className="w-full mt-4 text-center px-5 py-3 text-base font-medium text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200"
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};