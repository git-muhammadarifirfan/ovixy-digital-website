import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQSection() {
  const [openIndex, setOpenOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { q: "Apakah ada biaya langganan bulanan setelah website selesai?", a: "Tidak ada biaya wajib dari kami. Untuk website statik dan website berbasis Google Sheets, kami menggunakan infrastruktur cloud modern yang gratis selamanya untuk kapasitas UMKM. Anda hanya perlu memperpanjang domain murah Anda saja setiap tahun." },
    { q: "Apakah harga paket sudah termasuk domain .com?", a: "Demi menjaga harga jasa tetap ekonomis, paket awal kami menggunakan subdomain profesional gratis atau domain lokal super murah seperti .my.id atau .biz.id yang biayanya hanya berkisar Rp12.000 - Rp15.000 per tahun. Jika Anda menginginkan .com, Anda cukup membayar biaya tambahan lisensi domain tersebut." },
    { q: "Bagaimana jika di kemudian hari saya ingin mengubah harga atau menambah produk?", a: "Jika memilih Paket dengan Realtime Database, website Anda dihubungkan langsung ke Google Sheets. Anda tinggal mengubah data produk, harga, atau stok dari HP Anda melalui aplikasi Google Sheets, dan tampilan website akan otomatis ter-update seketika secara realtime." },
    { q: "Berapa kali saya bisa meminta revisi?", a: "Demi menjaga efisiensi waktu peluncuran bisnis Anda, kami menyediakan fasilitas maksimal 1-2 kali sesi revisi pada tahap preview sebelum website di-launching secara resmi." }
  ];

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-brand-navy mb-12">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border-[3px] border-brand-navy rounded-[16px] shadow-[4px_4px_0px_0px_#0F172A] overflow-hidden transition-all">
            <button 
              onClick={() => setOpenOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left font-extrabold text-lg text-brand-navy hover:bg-brand-bg/50 transition-colors"
            >
              <span>{faq.q}</span>
              {openIndex === index ? <ChevronUp size={20} strokeWidth={3} /> : <ChevronDown size={20} strokeWidth={3} />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 pt-2 text-brand-navy/70 font-medium border-t-2 border-brand-bg leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
