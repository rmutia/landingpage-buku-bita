import React from 'react';
import { Music, ArrowLeftRight, Cpu, Binary, Type, Home } from 'lucide-react';

interface PreviewCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  patternColor: string;
  iconColor: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ icon, title, description, colorClass, patternColor, iconColor }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
    <div className={`h-40 ${colorClass} flex items-center justify-center relative overflow-hidden`}>
      <div 
        className="absolute inset-0 opacity-50"
        style={{
            backgroundImage: `radial-gradient(${patternColor} 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
        }}
      ></div>
      <div className={`${iconColor} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const BookPreview: React.FC = () => {
  return (
    <section id="isi-buku" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Mengintip Isi Petualangan</h2>
                    <p className="text-lg text-slate-500">
                        Setiap halaman didesain untuk memicu rasa ingin tahu dan logika. Berikut beberapa topik seru yang akan dipelajari:
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <PreviewCard 
                  icon={<Music className="w-12 h-12" />}
                  title="Algoritma Menari"
                  description="Belajar urutan perintah (algoritma) melalui gerakan tarian yang menyenangkan."
                  colorClass="bg-indigo-50"
                  patternColor="#c7d2fe"
                  iconColor="text-indigo-400"
                />
                <PreviewCard 
                  icon={<ArrowLeftRight className="w-12 h-12" />}
                  title="Input – Proses – Output"
                  description="Memahami bagaimana komputer menerima data, berpikir, dan menghasilkan sesuatu."
                  colorClass="bg-pink-50"
                  patternColor="#fbcfe8"
                  iconColor="text-pink-400"
                />
                 <PreviewCard 
                  icon={<Cpu className="w-12 h-12" />}
                  title="Isi Kepala Komputer"
                  description='Berkenalan dengan RAM, CPU, dan GPU sebagai "organ tubuh" komputer.'
                  colorClass="bg-sky-50"
                  patternColor="#bae6fd"
                  iconColor="text-sky-400"
                />
                 <PreviewCard 
                  icon={<Binary className="w-12 h-12" />}
                  title="Bit dan Byte"
                  description="Pengenalan bahasa mesin 0 dan 1 dengan cara visual yang mudah dicerna."
                  colorClass="bg-emerald-50"
                  patternColor="#a7f3d0"
                  iconColor="text-emerald-400"
                />
                 <PreviewCard 
                  icon={<Type className="w-12 h-12" />}
                  title="Kode Rahasia ASCII"
                  description="Aktivitas memecahkan kode rahasia untuk memahami bagaimana huruf disimpan."
                  colorClass="bg-orange-50"
                  patternColor="#fed7aa"
                  iconColor="text-orange-400"
                />
                 <PreviewCard 
                  icon={<Home className="w-12 h-12" />}
                  title="Komputer di Sekitarku"
                  description="Menyadari bahwa teknologi ada di mana-mana, dari mesin cuci hingga lampu lalu lintas."
                  colorClass="bg-purple-50"
                  patternColor="#e9d5ff"
                  iconColor="text-purple-400"
                />
            </div>
        </div>
    </section>
  );
};