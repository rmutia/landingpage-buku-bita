import React from 'react';
import { ArrowRight, BookOpen, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('beli')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToPreview = () => {
    document.getElementById('isi-buku')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        
        {/* Abstract Blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 -translate-y-12 -translate-x-12 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-medium tracking-wide uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    Baru Rilis 2025
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Belajar Komputer Jadi <span className="text-gradient">Seru</span> Bersama Bita!
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Buku aktivitas interaktif untuk anak usia 7–10 tahun yang mengenalkan cara kerja komputer, berpikir komputasi, dan literasi digital dengan cara paling mudah dan menyenangkan.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <button onClick={scrollToPricing} className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-medium text-base shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                        Beli Sekarang
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button onClick={scrollToPreview} className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-medium text-base hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Lihat Isi Buku
                    </button>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border-2 border-white bg-yellow-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        <img className="w-10 h-10 rounded-full border-2 border-white bg-blue-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="User" />
                        <img className="w-10 h-10 rounded-full border-2 border-white bg-purple-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mimi" alt="User" />
                    </div>
                    <p className="text-sm text-slate-500 font-medium">Disukai oleh <span className="text-slate-800">500+</span> Orang Tua & Guru</p>
                </div>
            </div>

            <div className="lg:w-1/2 relative">
                {/* Book Mockup */}
                <div className="relative mx-auto w-[280px] sm:w-[350px] aspect-[3/4] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-r-2xl rounded-l-sm book-shadow transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                    {/* Spine effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-white/20 rounded-l-sm"></div>
                    
                    {/* Cover Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-white">
                        <div className="w-full flex justify-between items-start">
                            <span className="font-bold tracking-widest text-xs opacity-80">EDISI PERTAMA</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                            </div>
                        </div>
                        
                        <div className="text-center space-y-4">
                            {/* Character Bita Illustration CSS */}
                            <div className="w-32 h-32 bg-white rounded-2xl mx-auto relative border-4 border-slate-900 flex items-center justify-center shadow-lg">
                                <div className="w-24 h-20 bg-blue-100 rounded-lg border-2 border-slate-900 relative overflow-hidden">
                                    {/* Screen Face */}
                                    <div className="absolute top-6 left-5 w-3 h-3 bg-slate-900 rounded-full"></div>
                                    <div className="absolute top-6 right-5 w-3 h-3 bg-slate-900 rounded-full"></div>
                                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-6 h-3 border-b-4 border-slate-900 rounded-full"></div>
                                </div>
                                {/* Antenna */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-slate-900"></div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full border-2 border-slate-900"></div>
                            </div>
                            
                            <h2 className="text-4xl font-bold tracking-tight drop-shadow-md font-sans">KREABITA</h2>
                            <p className="text-sm font-medium opacity-90 bg-white/10 px-3 py-1 rounded-full inline-block">Berpetualang di Dunia Komputer</p>
                        </div>

                        <div className="w-full pt-8 border-t border-white/20">
                            <div className="flex justify-between items-center text-xs font-medium">
                                <span>Untuk Usia 7-10</span>
                                <span>Aktivitas & Cerita</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Decorative Elements behind book */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
            </div>
        </div>
    </section>
  );
};