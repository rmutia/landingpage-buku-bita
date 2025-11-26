import React from 'react';
import { Check, ShoppingCart, Zap, Download } from 'lucide-react';

export const Pricing: React.FC = () => {

  const handleBuy = (productName: string) => {
    // Replace with actual phone number
    const phoneNumber = "6285221288378"; 
    const message = `Halo Admin Kreabita, saya tertarik membeli *${productName}*. Mohon informasi cara pembayarannya.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <section id="beli" className="py-24 bg-brand-purple relative">
         <div className="absolute inset-0 diagonal-stripes opacity-20"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 font-display uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    Mulai <span className="text-brand-yellow">Petualangan</span> Sekarang
                </h2>
                <p className="text-white font-bold text-xl font-sans bg-black inline-block px-4 py-2 border-2 border-white">
                    Pilih format buku yang paling cocok untuk kebutuhan belajar Ananda.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                {/* Digital Ticket */}
                <div className="bg-white border-4 border-black shadow-neobrutal p-0 flex flex-col h-full transform hover:-rotate-1 transition-transform duration-300 relative">
                    {/* Top Tear */}
                    <div className="h-4 bg-brand-cyan border-b-4 border-black"></div>
                    
                    <div className="p-8 flex-1">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl font-black text-black font-display uppercase">E-Book PDF</h3>
                            <div className="bg-black text-white px-2 py-1 font-mono text-sm font-bold">DIGITAL</div>
                        </div>
                        <p className="text-black font-medium mb-4">Akses instan, bisa diprint sendiri.</p>
                        
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-6xl font-black text-black font-display">Rp45<span className="text-3xl">.000</span></span>
                        </div>

                        <ul className="space-y-4 mb-8 text-black font-medium">
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-brand-cyan border-2 border-black flex items-center justify-center shrink-0"><Check className="w-5 h-5 text-black" /></div>
                                <span className="text-lg">File PDF High Resolution</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-brand-cyan border-2 border-black flex items-center justify-center shrink-0"><Check className="w-5 h-5 text-black" /></div>
                                <span className="text-lg">Print Friendly (A4)</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-brand-cyan border-2 border-black flex items-center justify-center shrink-0"><Check className="w-5 h-5 text-black" /></div>
                                <span className="text-lg">Dikirim via Email Instan</span>
                            </li>
                        </ul>

                        <button 
                          onClick={() => handleBuy('E-Book PDF')}
                          className="w-full py-4 bg-white border-4 border-black text-black font-black text-xl uppercase font-display hover:bg-brand-cyan transition-colors shadow-[4px_4px_0px_black] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2"
                        >
                            <Download className="w-6 h-6" />
                            Beli E-Book
                        </button>
                    </div>
                </div>

                {/* Physical Ticket */}
                <div className="bg-brand-yellow border-4 border-black shadow-neobrutal-lg p-0 flex flex-col transform md:scale-105 hover:rotate-1 transition-transform duration-300 relative z-10">
                    <div className="absolute -top-6 -right-6 bg-brand-pink text-black font-black text-lg px-6 py-3 border-4 border-black shadow-neobrutal rotate-12 animate-pulse">
                        POPULER
                    </div>
                    
                    {/* Top Tear */}
                    <div className="h-4 bg-black"></div>
                    
                    <div className="p-8 flex-1">
                         <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl font-black text-black font-display uppercase">Buku Cetak</h3>
                            <div className="bg-black text-brand-yellow px-2 py-1 font-mono text-sm font-bold">FISIK</div>
                        </div>
                        <p className="text-black font-medium mb-4">Fisik buku berkualitas, siap pakai.</p>
                        
                        <div className="flex items-baseline gap-3 mb-8">
                            <span className="text-6xl font-black text-black font-display">Rp85<span className="text-3xl">.000</span></span>
                            <span className="text-2xl text-black/50 line-through font-bold font-mono">Rp99.000</span>
                        </div>

                        <div className="bg-white border-4 border-black p-4 mb-8">
                            <ul className="space-y-4 text-black font-medium">
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-black flex items-center justify-center shrink-0"><Zap className="w-5 h-5 text-brand-yellow" /></div>
                                    <span className="text-lg font-bold">Buku Fisik Full Color</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-black flex items-center justify-center shrink-0"><Zap className="w-5 h-5 text-brand-yellow" /></div>
                                    <span className="text-lg font-bold">Kertas Tebal (Tidak Tembus Spidol)</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-black flex items-center justify-center shrink-0"><Zap className="w-5 h-5 text-brand-yellow" /></div>
                                    <span className="text-lg font-bold">Bonus Stiker Karakter Bita</span>
                                </li>
                            </ul>
                        </div>

                        <button 
                          onClick={() => handleBuy('Buku Cetak')}
                          className="w-full py-5 bg-black border-4 border-transparent text-white font-black text-xl uppercase font-display hover:bg-white hover:text-black hover:border-black transition-colors shadow-neobrutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] flex items-center justify-center gap-2"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            Beli Buku Cetak
                        </button>
                        
                         <p className="text-center mt-4 font-mono text-xs font-bold text-black opacity-60">
                             <a href="#" className="hover:underline">Coba Halaman Gratis</a>
                         </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};