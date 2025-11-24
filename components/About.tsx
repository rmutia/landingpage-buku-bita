import React from 'react';
import { Pencil, Smile, Cpu, School } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Strip */}
        <div className="absolute top-0 left-0 w-full h-4 bg-brand-cyan border-b-4 border-black"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-4 border-black bg-[#fafafa] p-8 md:p-16 relative">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-black"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-black"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-black"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-black"></div>

                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-4xl lg:text-6xl font-black text-black mb-6 font-display uppercase tracking-tight">
                        Bukan Sekadar <span className="bg-brand-lime px-2 border-2 border-black shadow-[4px_4px_0px_black] transform rotate-1 inline-block">Buku Bacaan</span>
                    </h2>
                    <p className="text-xl text-black max-w-3xl mx-auto font-medium font-sans">
                        Kreabita dirancang khusus untuk menjembatani rasa ingin tahu anak tentang teknologi dengan aktivitas yang melatih logika tanpa harus selalu menatap layar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="p-6 bg-brand-yellow border-4 border-black shadow-neobrutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-neobrutal-sm group-hover:scale-110 transition-transform">
                                <Pencil className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl text-black mb-2 font-display uppercase">28 Halaman Aktivitas</h3>
                                <p className="text-black font-medium text-lg leading-snug">Lembar kerja penuh warna yang mengajak anak menggambar, menarik garis, dan memecahkan teka-teki.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 bg-brand-pink border-4 border-black shadow-neobrutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-neobrutal-sm group-hover:scale-110 transition-transform">
                                <Smile className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl text-black mb-2 font-display uppercase">Karakter Bita</h3>
                                <p className="text-black font-medium text-lg leading-snug">Ditemani Bita, komputer ceria yang memandu setiap konsep sulit menjadi cerita sederhana.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 bg-brand-cyan border-4 border-black shadow-neobrutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-neobrutal-sm group-hover:scale-110 transition-transform">
                                <Cpu className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl text-black mb-2 font-display uppercase">Dasar Teknologi</h3>
                                <p className="text-black font-medium text-lg leading-snug">Mengenalkan hardware dan software dengan analogi kehidupan sehari-hari yang mudah dipahami.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="p-6 bg-brand-lime border-4 border-black shadow-neobrutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-neobrutal-sm group-hover:scale-110 transition-transform">
                                <School className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl text-black mb-2 font-display uppercase">Fleksibel</h3>
                                <p className="text-black font-medium text-lg leading-snug">Cocok digunakan sebagai bahan ajar tambahan di sekolah atau kegiatan berkualitas di rumah.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};