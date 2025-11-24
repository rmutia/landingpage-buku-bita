import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Pricing: React.FC = () => {

  const handleBuy = (productName: string) => {
    // Replace with actual phone number
    const phoneNumber = "62895601009395"; 
    const message = `Halo Admin Kreabita, saya tertarik membeli *${productName}*. Mohon informasi cara pembayarannya.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <section id="beli" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Mulai Petualangan Sekarang</h2>
                <p className="text-slate-500">Pilih format buku yang paling cocok untuk kebutuhan belajar Ananda.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Digital */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all relative">
                    <h3 className="text-xl font-semibold text-slate-900">E-Book PDF</h3>
                    <p className="text-sm text-slate-500 mt-2 mb-6">Akses instan, bisa diprint sendiri.</p>
                    
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-bold text-slate-900">Rp 15.000</span>
                    </div>

                    <ul className="space-y-3 mb-8 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> File PDF High Resolution
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Print Friendly (A4)
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dikirim via Email Instan
                        </li>
                    </ul>

                    <button 
                      onClick={() => handleBuy('E-Book PDF Kreabita')}
                      className="w-full py-3 bg-slate-100 text-slate-900 font-medium rounded-xl hover:bg-slate-200 transition-colors"
                    >
                        Beli E-Book
                    </button>
                </div>

                {/* Physical */}
                <div className="bg-white p-8 rounded-3xl border-2 border-indigo-500 shadow-xl relative overflow-hidden transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULER</div>
                    
                    <h3 className="text-xl font-semibold text-slate-900">Buku Cetak</h3>
                    <p className="text-sm text-slate-500 mt-2 mb-6">Fisik buku berkualitas, siap pakai.</p>
                    
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-bold text-slate-900">Rp 45.000</span>
                        <span className="text-sm text-slate-400 line-through">Rp 80.000</span>
                    </div>

                    <ul className="space-y-3 mb-8 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Buku Fisik Full Color
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Kertas Tebal (Tidak Tembus Spidol)
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Bonus Stiker Karakter Bita
                        </li>
                    </ul>

                    <button 
                      onClick={() => handleBuy('Buku Cetak Kreabita')}
                      className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                    >
                        Beli Buku Cetak
                    </button>
                    
                    <div className="mt-4 text-center">
                        <button className="text-xs text-indigo-600 font-medium hover:underline">Coba Halaman Gratis</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};