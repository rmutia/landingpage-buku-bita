import React from 'react';
import { Cpu, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
                            <Cpu className="w-3 h-3" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-slate-900">KREABITA</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                        Kreabita adalah platform edukasi literasi digital untuk anak, menghadirkan worksheet, buku, dan aktivitas kreatif untuk memahami teknologi dengan cara menyenangkan.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Menu</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><a href="#tentang" className="hover:text-indigo-600 transition-colors">Tentang Buku</a></li>
                        <li><a href="#isi-buku" className="hover:text-indigo-600 transition-colors">Isi Materi</a></li>
                        <li><a href="#beli" className="hover:text-indigo-600 transition-colors">Pembelian</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Bantuan</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><button className="hover:text-indigo-600 transition-colors">Hubungi Kami</button></li>
                        <li><button className="hover:text-indigo-600 transition-colors">Kebijakan Privasi</button></li>
                        <li><button className="hover:text-indigo-600 transition-colors">Syarat & Ketentuan</button></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-400">Copyright © 2025 Kreabita. All rights reserved.</p>
                <div className="flex space-x-4">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors"><Instagram className="w-4 h-4" /></button>
                    <button className="text-slate-400 hover:text-slate-600 transition-colors"><Twitter className="w-4 h-4" /></button>
                </div>
            </div>
        </div>
    </footer>
  );
};