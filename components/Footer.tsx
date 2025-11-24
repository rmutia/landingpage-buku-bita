import React from 'react';
import { Terminal, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t-4 border-black text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center text-white">
                            <Terminal className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-3xl tracking-tight font-display uppercase">
                           KREA<span className="text-brand-purple">BITA</span>
                        </span>
                    </div>
                    <p className="text-lg text-black font-medium leading-relaxed max-w-sm">
                        Kreabita adalah platform edukasi literasi digital untuk anak, menghadirkan worksheet, buku, dan aktivitas kreatif untuk memahami teknologi dengan cara menyenangkan.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-black text-black mb-6 font-display text-xl tracking-wide uppercase border-b-4 border-brand-cyan inline-block">Menu</h4>
                    <ul className="space-y-3 text-lg font-bold">
                        <li><a href="#tentang" className="hover:bg-brand-yellow hover:px-2 border-2 border-transparent hover:border-black transition-all inline-block">Tentang Buku</a></li>
                        <li><a href="#isi-buku" className="hover:bg-brand-cyan hover:px-2 border-2 border-transparent hover:border-black transition-all inline-block">Isi Materi</a></li>
                        <li><a href="#beli" className="hover:bg-brand-pink hover:px-2 border-2 border-transparent hover:border-black transition-all inline-block">Pembelian</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black text-black mb-6 font-display text-xl tracking-wide uppercase border-b-4 border-brand-pink inline-block">Bantuan</h4>
                    <ul className="space-y-3 text-lg font-bold">
                        <li><button className="hover:translate-x-2 transition-transform inline-block text-left">Hubungi Kami</button></li>
                        <li><button className="hover:translate-x-2 transition-transform inline-block text-left">Kebijakan Privasi</button></li>
                        <li><button className="hover:translate-x-2 transition-transform inline-block text-left">Syarat & Ketentuan</button></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-black font-bold uppercase tracking-wider font-mono">Copyright © 2025 Kreabita. All rights reserved.</p>
                <div className="flex space-x-4">
                    <button className="text-black bg-brand-cyan p-2 border-2 border-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transition-all"><Instagram className="w-5 h-5" /></button>
                    <button className="text-black bg-brand-lime p-2 border-2 border-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transition-all"><Twitter className="w-5 h-5" /></button>
                </div>
            </div>
        </div>
    </footer>
  );
};