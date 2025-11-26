import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

interface PreviewCardProps {
  image: string;
  title: string;
  description: string;
  tag: string;
  color: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ image, title, description, tag, color }) => (
  <div className="relative group">
      {/* Background Shadow Block */}
      <div className={`absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-4 group-hover:translate-y-4`}></div>
      
      {/* Main Card */}
      <div className="relative h-full bg-white border-4 border-black flex flex-col transition-transform group-hover:-translate-y-1">
        {/* Browser Header */}
        <div className="h-10 border-b-4 border-black bg-white flex items-center px-4 justify-between">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-black bg-brand-pink"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black bg-brand-yellow"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black bg-brand-lime"></div>
            </div>
            <div className="font-mono text-xs font-bold uppercase truncate max-w-[150px]">{tag}</div>
        </div>

        {/* Image Container */}
        <div className={`relative aspect-[4/3] border-b-4 border-black overflow-hidden bg-slate-100 ${color}`}>
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
            />
            {/* Overlay Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col bg-white">
            <h3 className="font-display font-bold text-2xl text-black mb-3 uppercase leading-tight group-hover:text-brand-purple transition-colors">
                {title}
            </h3>
            <p className="text-black font-sans font-medium leading-relaxed mb-4">
                {description}
            </p>
            <div className="mt-auto flex justify-end">
                <button className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <ArrowUpRight className="w-6 h-6" />
                </button>
            </div>
        </div>
      </div>
  </div>
);

export const BookPreview: React.FC = () => {
    const [isTocOpen, setIsTocOpen] = useState(false);

    // Using Placehold.co for generated book page-like images
    const generateImage = (text: string, bgColor: string) => 
        `https://placehold.co/600x450/${bgColor.replace('#','')}/121212.png?text=${encodeURIComponent(text)}&font=montserrat`;

    const toggleToc = () => setIsTocOpen(!isTocOpen);

  return (
    <section id="isi-buku" className="py-24 bg-brand-yellow border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <div className="inline-block bg-black text-white px-4 py-2 font-mono font-bold text-sm mb-4 transform -rotate-2">
                        CHAPTER LIST
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black text-black font-display uppercase leading-[0.9]">
                        Mengintip Isi <span className="text-white text-stroke-sm">Petualangan</span>
                    </h2>
                </div>
                <div className="w-full md:w-auto">
                    <p className="font-bold font-sans text-xl border-l-4 border-black pl-4">
                        Setiap halaman didesain untuk memicu rasa ingin tahu dan logika.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                <PreviewCard 
                  image={generateImage("ALGORITMA\nMENARI", "#f472b6")}
                  title="Algoritma Menari"
                  description="Belajar urutan perintah (algoritma) melalui gerakan tarian yang menyenangkan."
                  tag="Logic & Sequence"
                  color="bg-brand-pink"
                />
                <PreviewCard 
                  image={generateImage("INPUT\nPROSES\nOUTPUT", "#22d3ee")}
                  title="Input – Proses – Output"
                  description="Memahami bagaimana komputer menerima data, berpikir, dan menghasilkan sesuatu."
                  tag="System Thinking"
                  color="bg-brand-cyan"
                />
                 <PreviewCard 
                  image={generateImage("ISI KEPALA\nKOMPUTER", "#a3e635")}
                  title="Isi Kepala Komputer"
                  description='Berkenalan dengan RAM, CPU, dan GPU sebagai "organ tubuh" komputer.'
                  tag="Hardware Intro"
                  color="bg-brand-lime"
                />
                 <PreviewCard 
                  image={generateImage("BIT\nDAN\nBYTE", "#A855F7")}
                  title="Bit dan Byte"
                  description="Pengenalan bahasa mesin 0 dan 1 dengan cara visual yang mudah dicerna."
                  tag="Data Representation"
                  color="bg-brand-purple"
                />
                 <PreviewCard 
                  image={generateImage("KODE\nRAHASIA", "#FBbf24")}
                  title="Kode Rahasia ASCII"
                  description="Aktivitas memecahkan kode rahasia untuk memahami bagaimana huruf disimpan."
                  tag="Data Storage"
                  color="bg-brand-yellow"
                />
                 <PreviewCard 
                  image={generateImage("KOMPUTER\nDI SEKITARKU", "#ffffff")}
                  title="Komputer di Sekitarku"
                  description="Menyadari bahwa teknologi ada di mana-mana, dari mesin cuci hingga lampu lalu lintas."
                  tag="Tech Awareness"
                  color="bg-white"
                />
            </div>
            
            <div className="mt-16 text-center">
                <button 
                    onClick={toggleToc}
                    className="px-10 py-5 bg-black text-white text-xl font-bold font-display uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black shadow-neobrutal hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                    Lihat Daftar Isi Lengkap
                </button>
            </div>
        </div>

        {/* Table of Contents Modal */}
        {isTocOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={toggleToc}></div>
                <div className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-hidden border-4 border-black shadow-neobrutal-lg flex flex-col animate-in fade-in zoom-in duration-300">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between border-b-4 border-black p-4 bg-brand-cyan">
                        <h3 className="font-display font-black text-2xl uppercase">DAFTAR ISI</h3>
                        <button onClick={toggleToc} className="bg-black text-white p-2 hover:bg-white hover:text-black border-2 border-black transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Modal Content - Scrollable */}
                    <div className="overflow-y-auto p-6 md:p-8 font-medium">
                        <div className="space-y-8 font-sans text-black">
                            
                            {/* Section 1 */}
                            <div>
                                <h4 className="font-display font-bold text-xl uppercase mb-3 bg-brand-lime inline-block px-2 border-2 border-black shadow-[4px_4px_0px_black]">Pendahuluan dan Aktivitas Awal</h4>
                                <ul className="list-disc pl-5 space-y-2 marker:text-black">
                                    <li>Berkenalan dengan Bita</li>
                                    <li>Dansa Algoritma</li>
                                    <li>Apa itu Komputer?</li>
                                </ul>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h4 className="font-display font-bold text-xl uppercase mb-3 bg-brand-purple text-white inline-block px-2 border-2 border-black shadow-[4px_4px_0px_black]">Bagaimana Komputer Bekerja</h4>
                                <ul className="list-disc pl-5 space-y-2 marker:text-black">
                                    <li>
                                        <strong>Input</strong>
                                        <ul className="list-circle pl-5 mt-1 text-slate-600">
                                            <li>Papan Ketik (Keyboard)</li>
                                            <li>Tetikus (Mouse)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Proses</strong>
                                        <ul className="list-circle pl-5 mt-1 text-slate-600">
                                            <li>CPU</li>
                                            <li>RAM dan ROM</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Output</strong>
                                        <ul className="list-circle pl-5 mt-1 text-slate-600">
                                            <li>GPU</li>
                                        </ul>
                                    </li>
                                    <li>Bit dan Byte</li>
                                    <li>Biner: Kode Rahasia Komputer (ASCII)</li>
                                    <li>Sistem Operasi</li>
                                    <li>Perangkat Lunak (Software) dan Perangkat Keras (Hardware)</li>
                                    <li>Amati Apa yang Terjadi Pada Komputer Saat Kita Klik Video!</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h4 className="font-display font-bold text-xl uppercase mb-3 bg-brand-yellow inline-block px-2 border-2 border-black shadow-[4px_4px_0px_black]">Sejarah & Perkembangan Modern</h4>
                                <ul className="list-disc pl-5 space-y-2 marker:text-black">
                                    <li>Sejarah Komputer (Masa Abad ke-9 hingga 1990-an)</li>
                                    <li>Komputer Masa Kini</li>
                                    <li>Cek Pengetahuan Sejarahmu!</li>
                                    <li>Komputer Ada di Mana-Mana!</li>
                                </ul>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h4 className="font-display font-bold text-xl uppercase mb-3 bg-white inline-block px-2 border-2 border-black shadow-[4px_4px_0px_black]">Penutup dan Tips</h4>
                                <ul className="list-disc pl-5 space-y-2 marker:text-black">
                                    <li>Rancang Komputermu Sendiri</li>
                                    <li>Aman Berkomputer</li>
                                    <li>Teka-Teki Silang</li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h4 className="font-display font-bold text-xl uppercase mb-3 bg-black text-white inline-block px-2 border-2 border-white shadow-[4px_4px_0px_black]">Sertifikat</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )}
    </section>
  );
};