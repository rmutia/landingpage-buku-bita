import React from 'react';
import { BrainCircuit, Lightbulb, Palette, Rocket } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="manfaat" className="py-24 bg-black border-t-4 border-b-4 border-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
                {/* Background Grid on Black */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                <div className="relative z-10">
                    <div className="text-center mb-16">
                         <span className="bg-white text-black font-mono font-bold px-3 py-1 text-sm uppercase mb-4 inline-block">Why it matters</span>
                         <h2 className="text-4xl lg:text-6xl font-black font-display tracking-wide text-white uppercase">
                            Mengapa <span className="text-brand-lime underline decoration-4 underline-offset-8">Buku Ini Penting?</span>
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-zinc-900 border-4 border-white p-8 hover:bg-zinc-800 transition-colors shadow-[8px_8px_0px_white] hover:shadow-[4px_4px_0px_white] hover:translate-x-1 hover:translate-y-1">
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-brand-yellow border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_black]">
                                    <BrainCircuit className="w-8 h-8 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-black text-2xl mb-2 text-brand-yellow font-display uppercase">Computational Thinking</h3>
                                    <p className="text-white text-base font-medium leading-relaxed">Meningkatkan kemampuan logika anak dalam memecahkan masalah secara sistematis.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-zinc-900 border-4 border-white p-8 hover:bg-zinc-800 transition-colors shadow-[8px_8px_0px_white] hover:shadow-[4px_4px_0px_white] hover:translate-x-1 hover:translate-y-1">
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-brand-pink border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_black]">
                                    <Lightbulb className="w-8 h-8 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-black text-2xl mb-2 text-brand-pink font-display uppercase">Memahami, Bukan Menghapal</h3>
                                    <p className="text-white text-base font-medium leading-relaxed">Konsep teknologi dijelaskan lewat cerita dan analogi, bukan definisi rumit.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-zinc-900 border-4 border-white p-8 hover:bg-zinc-800 transition-colors shadow-[8px_8px_0px_white] hover:shadow-[4px_4px_0px_white] hover:translate-x-1 hover:translate-y-1">
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-brand-cyan border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_black]">
                                    <Palette className="w-8 h-8 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-black text-2xl mb-2 text-brand-cyan font-display uppercase">Melatih Kreativitas</h3>
                                    <p className="text-white text-base font-medium leading-relaxed">Aktivitas menggambar dan mewarnai yang terintegrasi dengan materi teknis.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-zinc-900 border-4 border-white p-8 hover:bg-zinc-800 transition-colors shadow-[8px_8px_0px_white] hover:shadow-[4px_4px_0px_white] hover:translate-x-1 hover:translate-y-1">
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-brand-lime border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_black]">
                                    <Rocket className="w-8 h-8 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-black text-2xl mb-2 text-brand-lime font-display uppercase">Pondasi STEM</h3>
                                    <p className="text-white text-base font-medium leading-relaxed">Membangun minat awal terhadap Science, Technology, Engineering, dan Math.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};