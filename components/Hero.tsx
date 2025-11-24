import React from 'react';
import { ArrowRight, BookOpen, Star, Zap, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('beli')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToPreview = () => {
    document.getElementById('isi-buku')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#e0f2fe]">
        <div className="absolute inset-0 halftone-pattern"></div>
        
        {/* Abstract Geo Shapes */}
        <div className="absolute top-40 right-[10%] w-24 h-24 bg-brand-yellow border-4 border-black shadow-neobrutal rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-20 left-[5%] w-32 h-32 bg-brand-purple rounded-full border-4 border-black shadow-neobrutal -rotate-6 hidden lg:block"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left space-y-8 z-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-lime border-4 border-black shadow-neobrutal-sm text-black text-sm font-bold font-display uppercase tracking-wider transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                    <Zap className="w-5 h-5 fill-black" />
                    Baru Rilis 2025
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-black leading-[0.9] font-display">
                    BELAJAR KOMPUTER JADI <br/>
                    <span className="text-transparent text-stroke-sm hover:text-brand-cyan transition-colors duration-300">SERU</span> BERSAMA BITA!
                </h1>
                
                <p className="text-xl text-black max-w-2xl mx-auto lg:mx-0 font-medium font-sans border-l-8 border-brand-purple pl-6 py-2 bg-white/50 backdrop-blur-sm">
                    Buku aktivitas interaktif untuk anak usia 7–10 tahun yang mengenalkan cara kerja komputer, berpikir komputasi, dan literasi digital dengan cara paling mudah dan menyenangkan.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                    <button onClick={scrollToPricing} className="w-full sm:w-auto px-8 py-4 bg-black text-white border-4 border-transparent hover:bg-brand-lime hover:text-black hover:border-black shadow-neobrutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-bold text-xl flex items-center justify-center gap-3 uppercase font-display">
                        Beli Sekarang
                        <ArrowRight className="w-6 h-6" />
                    </button>
                    <button onClick={scrollToPreview} className="w-full sm:w-auto px-8 py-4 bg-white text-black border-4 border-black shadow-neobrutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-bold text-xl flex items-center justify-center gap-3 uppercase font-display group">
                        <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        Lihat Isi Buku
                    </button>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-5 pt-6">
                    <div className="flex -space-x-6 hover:space-x-1 transition-all duration-300">
                        <div className="w-14 h-14 border-4 border-black bg-brand-cyan rounded-full z-30 overflow-hidden">
                           <img className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                        <div className="w-14 h-14 border-4 border-black bg-brand-pink rounded-full z-20 overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="User" />
                        </div>
                        <div className="w-14 h-14 border-4 border-black bg-brand-lime rounded-full z-10 overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mimi" alt="User" />
                        </div>
                    </div>
                    <div className="text-left bg-white px-4 py-2 border-2 border-black shadow-neobrutal-sm">
                         <p className="text-sm text-black font-bold uppercase font-display">Disukai oleh 500+ Orang Tua & Guru</p>
                         <div className="flex gap-1">
                             {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-brand-yellow text-black" />)}
                         </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 relative flex justify-center perspective-1000 mt-12 lg:mt-0">
                {/* Neo Brutalist Book Mockup */}
                <div className="relative w-[340px] sm:w-[420px] aspect-[3/4] bg-white border-4 border-black shadow-neobrutal-lg transform rotate-3 hover:rotate-0 transition-all duration-500 z-10 group">
                    
                    {/* Cover Art */}
                    <div className="absolute inset-0 flex flex-col bg-brand-cyan">
                        {/* Top Bar */}
                        <div className="h-12 border-b-4 border-black bg-white flex items-center justify-between px-4">
                             <div className="flex gap-2">
                                 <div className="w-3 h-3 rounded-full bg-black"></div>
                                 <div className="w-3 h-3 rounded-full bg-black"></div>
                             </div>
                             <span className="font-mono text-sm font-bold">VOL. 01</span>
                        </div>

                        <div className="flex-1 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Background Pattern on Book */}
                            <div className="absolute inset-0 halftone-pattern opacity-20"></div>
                            
                            {/* Sticker */}
                            <div className="absolute top-4 right-4 bg-brand-yellow text-black text-xs font-bold px-3 py-2 border-2 border-black rotate-12 shadow-[2px_2px_0px_black]">
                                BEST SELLER!
                            </div>

                            {/* Main Title */}
                            <div className="relative z-10 text-center border-4 border-black bg-white p-6 shadow-neobrutal mb-6">
                                <h2 className="text-6xl font-black font-display tracking-tighter text-black uppercase leading-none">
                                    KREA<br/>BITA
                                </h2>
                                <div className="w-full h-2 bg-black my-2"></div>
                                <p className="font-mono text-lg font-bold">COMPUTER SCIENCE FOR KIDS</p>
                            </div>

                            {/* Character Illustration Placeholder */}
                            <div className="relative">
                                <div className="w-24 h-24 bg-brand-pink border-4 border-black rounded-full flex items-center justify-center animate-bounce-slow">
                                    <MousePointer2 className="w-12 h-12 text-black" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-white border-2 border-black px-2 py-1 font-bold text-xs">BITA</div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="h-16 border-t-4 border-black bg-brand-lime flex items-center justify-between px-6">
                            <span className="font-display font-bold text-xl uppercase">Edisi Pertama</span>
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                                <span className="font-mono text-xs">ID</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Background Decor */}
                <div className="absolute top-10 left-10 w-full h-full border-4 border-black bg-transparent -z-10"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple border-4 border-black rounded-full mix-blend-multiply animate-pulse"></div>
            </div>
        </div>
    </section>
  );
};