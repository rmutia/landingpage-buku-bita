import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
            
            <div className="absolute bottom-0 right-0 bg-black text-white px-3 py-1 font-mono text-xs font-bold border-t-4 border-l-4 border-black">
                PAGE PREVIEW
            </div>
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
    // Using Placehold.co for generated book page-like images
    const generateImage = (text: string, bgColor: string) => 
        `https://placehold.co/600x450/${bgColor.replace('#','')}/121212.png?text=${encodeURIComponent(text)}&font=montserrat`;

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
                <button className="px-10 py-5 bg-black text-white text-xl font-bold font-display uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black shadow-neobrutal hover:translate-x-1 hover:translate-y-1 transition-all">
                    Lihat Daftar Isi Lengkap
                </button>
            </div>
        </div>
    </section>
  );
};