import React from 'react';
import { BrainCircuit, Lightbulb, Palette, Rocket } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="manfaat" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-12 text-center">Mengapa Buku Ini Penting?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                                <BrainCircuit className="w-5 h-5 text-indigo-300" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Computational Thinking</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Meningkatkan kemampuan logika anak dalam memecahkan masalah secara sistematis.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 border border-pink-500/30">
                                <Lightbulb className="w-5 h-5 text-pink-300" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Memahami, Bukan Menghapal</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Konsep teknologi dijelaskan lewat cerita dan analogi, bukan definisi rumit.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                                <Palette className="w-5 h-5 text-emerald-300" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Melatih Kreativitas</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Aktivitas menggambar dan mewarnai yang terintegrasi dengan materi teknis.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                                <Rocket className="w-5 h-5 text-amber-300" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Pondasi STEM</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Membangun minat awal terhadap Science, Technology, Engineering, dan Math.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};