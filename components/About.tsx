import React from 'react';
import { Pencil, Smile, Cpu, School } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Bukan Sekadar Buku Bacaan</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    Kreabita dirancang khusus untuk menjembatani rasa ingin tahu anak tentang teknologi dengan aktivitas yang melatih logika tanpa harus selalu menatap layar.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-start gap-4 hover:bg-blue-50 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Pencil className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">28 Halaman Aktivitas</h3>
                        <p className="text-sm text-slate-600">Lembar kerja penuh warna yang mengajak anak menggambar, menarik garis, dan memecahkan teka-teki.</p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-4 hover:bg-purple-50 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                        <Smile className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Karakter Bita</h3>
                        <p className="text-sm text-slate-600">Ditemani Bita, komputer ceria yang memandu setiap konsep sulit menjadi cerita sederhana.</p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-start gap-4 hover:bg-amber-50 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                        <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Dasar Teknologi</h3>
                        <p className="text-sm text-slate-600">Mengenalkan hardware dan software dengan analogi kehidupan sehari-hari yang mudah dipahami.</p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-4 hover:bg-emerald-50 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <School className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Fleksibel</h3>
                        <p className="text-sm text-slate-600">Cocok digunakan sebagai bahan ajar tambahan di sekolah atau kegiatan berkualitas di rumah.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};