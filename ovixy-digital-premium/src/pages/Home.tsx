import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Check, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData, ProjectType } from '../data/projectsData';
import ProjectModal from '../components/ProjectModal';
import FAQSection from '../components/FAQSection';

export default function Home({ isLoading }: { isLoading: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const parallaxImgRef = useRef<HTMLImageElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Auto-formatted WhatsApp actions
  const waConsultMessage = encodeURIComponent("Halo Ovixy Digital, saya ingin berkonsultasi mengenai format otomatis pembuatan platform digital bisnis saya.");
  const waLink = `https://wa.me/?text=${waConsultMessage}`;

  useGSAP(() => {
    if (isLoading) return;
    gsap.from('.hero-word', { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
    gsap.to(parallaxImgRef.current, { yPercent: 15, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } });
  }, [isLoading]);

  const handleEmailSubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    window.location.href = `mailto:marifirfannn@gmail.com?subject=Inquiry Website UMKM - ${fd.get('name')}&body=${fd.get('message')}`;
  };

  return (
    <>
      {/* HERO SECTION - PREMIUM COLOR COMBINATION */}
      <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-36 pb-16 max-w-7xl mx-auto relative">
        <h1 className="text-5xl md:text-7xl lg:text-[76px] font-extrabold text-brand-navy leading-[1.1] mb-6 tracking-tight">
          <span className="hero-word block">Halaman Online Profesional</span>
          <span className="hero-word block text-brand-blue relative inline-block">
            Untuk UMKM Indonesia
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-brand-purple" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="5" viewBox="0 0 100 20">
              <path d="M0,15 Q25,25 50,10 T100,15" strokeLinecap="round"></path>
            </svg>
          </span>
        </h1>
        
        <p className="hero-word text-lg md:text-xl text-brand-navy/70 max-w-2xl mb-12 font-medium">
          Kami membantu bisnis kecil memiliki halaman online dan katalog interaktif profesional yang siap dibagikan ke calon pembeli Anda.
        </p>
        
        {/* Buttons converted into the requested premium light/dark contrast schema */}
        <div className="hero-word flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10">
          <button
            onClick={() => window.location.href = '#pricing'}
            className="w-full sm:w-auto bg-black text-white text-sm font-black px-8 py-4 rounded-full border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[6px_6px_0px_0px_#ffffff] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            Mulai Sekarang <ArrowRight className="w-4 h-4 text-white" />
          </button>
          
          <button
            onClick={() => window.open(waLink, '_blank')}
            className="w-full sm:w-auto bg-white text-black text-sm font-black px-8 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            Konsultasi Gratis <MessageSquare className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Support background image layout containing the loaded public canvas placeholder structure */}
        <div className="hero-word mt-16 w-full max-w-4xl h-[350px] md:h-[420px] rounded-[24px] border-[3px] border-brand-navy shadow-[8px_8px_0px_0px_#0F172A] relative overflow-hidden bg-white">
          <img ref={parallaxImgRef} className="absolute top-[-15%] left-0 w-full h-[130%] object-cover filter grayscale" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" />
        </div>
      </section>

      {/* PRICING SECTION - 5 PACKAGES SCHEMATIC */}
      <section id="pricing" className="px-6 py-24 bg-white border-t-[3px] border-brand-navy">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">Pilihan Paket Jasa Awal</h2>
            <p class="text-brand-navy/60 font-medium">Investasi transparan tanpa biaya hosting tersembunyi bulanan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
            {/* Paket 1 */}
            <div className="neo-card p-6 flex flex-col bg-brand-bg/30">
              <h3 className="text-xl font-extrabold text-brand-navy mb-2">Basic Static</h3>
              <div className="text-lg font-bold text-brand-blue mb-4">Rp300rb - Rp850rb</div>
              <hr className="border-brand-navy mb-4 border-t-2" />
              <ul className="text-sm space-y-3 mb-6 flex-grow font-medium">
                <li className="flex gap-2"><Check size={16} className="text-brand-blue" /> 1 Halaman Web</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-blue" /> Profil Bisnis & Layanan</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-blue" /> Google Maps & WA</li>
              </ul>
              <a href={waLink} target="_blank" rel="noreferrer" className="w-full neo-btn-blue text-center py-2.5 text-sm">Pilih Paket</a>
            </div>

            {/* Paket 2 */}
            <div className="neo-card p-6 flex flex-col bg-brand-bg/30">
              <h3 className="text-xl font-extrabold text-brand-navy mb-2">Katalog Online</h3>
              <div className="text-lg font-bold text-brand-purple mb-4">Rp500rb - Rp1.5Jt</div>
              <hr className="border-brand-navy mb-4 border-t-2" />
              <ul className="text-sm space-y-3 mb-6 flex-grow font-medium">
                <li className="flex gap-2"><Check size={16} className="text-brand-purple" /> 5 - 30 Produk</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-purple" /> Kategori & Harga</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-purple" /> Tombol Order WA per Produk</li>
              </ul>
              <a href={waLink} target="_blank" rel="noreferrer" className="w-full neo-btn-purple text-center py-2.5 text-sm">Pilih Paket</a>
            </div>

            {/* Paket 3 */}
            <div className="neo-card p-6 flex flex-col relative border-brand-blue shadow-[6px_6px_0px_0px_#2563EB]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white font-extrabold px-4 py-0.5 rounded-full text-[10px] uppercase border-2 border-brand-navy">DATABASE</div>
              <h3 className="text-xl font-extrabold text-brand-navy mb-2 mt-2">Realtime DB</h3>
              <div className="text-lg font-bold text-brand-navy mb-4">Rp800rb - Rp2Jt</div>
              <hr className="border-brand-navy mb-4 border-t-2" />
              <ul className="text-sm space-y-3 mb-6 flex-grow font-medium">
                <li className="flex gap-2"><Check size={16} className="text-brand-blue" /> Realtime Google Sheets</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-blue" /> Galeri & Testimoni</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-blue" /> CMS Mandiri dari HP</li>
              </ul>
              <a href={waLink} target="_blank" rel="noreferrer" className="w-full neo-btn-blue text-center py-2.5 text-sm">Pilih Paket</a>
            </div>

            {/* Paket 4 */}
            <div className="neo-card p-6 flex flex-col bg-brand-bg/30">
              <h3 className="text-xl font-extrabold text-brand-navy mb-2">Aplikasi POS</h3>
              <div className="text-lg font-bold text-brand-purple mb-4">Rp800rb - Rp2Jt</div>
              <hr className="border-brand-navy mb-4 border-t-2" />
              <ul className="text-sm space-y-3 mb-6 flex-grow font-medium">
                <li className="flex gap-2"><Check size={16} className="text-brand-purple" /> Login Admin</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-purple" /> Riwayat Transaksi</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-purple" /> Export Laporan</li>
              </ul>
              <a href={waLink} target="_blank" rel="noreferrer" className="w-full neo-btn-purple text-center py-2.5 text-sm">Pilih Paket</a>
            </div>

            {/* Paket 5 */}
            <div className="neo-card p-6 flex flex-col bg-brand-bg/30">
              <h3 className="text-xl font-extrabold text-brand-navy mb-2">Custom App</h3>
              <div className="text-lg font-bold text-brand-navy mb-4">Mulai Rp800rb</div>
              <hr className="border-brand-navy mb-4 border-t-2" />
              <ul className="text-sm space-y-3 mb-6 flex-grow font-medium">
                <li className="flex gap-2"><Check size={16} className="text-brand-navy" /> Sistem Kompleks</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-navy" /> Full Custom UI/UX</li>
                <li className="flex gap-2"><Check size={16} className="text-brand-navy" /> Web / Android App</li>
              </ul>
              <a href={waLink} target="_blank" rel="noreferrer" className="w-full neo-btn-white text-center py-2.5 text-sm">Hubungi Kami</a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO LAYANAN SHOWCASE */}
      <section id="layanan" className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-brand-navy mb-12 tracking-tight">Showcase Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map(p => (
            <div key={p.id} onClick={() => setSelectedProject(p)} className="neo-card cursor-pointer group flex flex-col">
              <div className="h-56 bg-brand-bg border-b-3 border-brand-navy overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-extrabold text-brand-navy">{p.title}</h4>
                  <span className="text-[10px] font-bold border-2 border-brand-navy bg-brand-bg px-2 py-0.5 rounded-full">{p.category}</span>
                </div>
                <span className="text-sm font-bold text-brand-blue flex items-center gap-1">Detail Proyek <ArrowRight size={14} /></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDION SECTION - INTEGRATED NATIVELY */}
      <FAQSection />

      {/* TOUCH ME CONTACT FORM */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="bg-white border-[3px] border-brand-navy shadow-[8px_8px_0px_0px_#0F172A] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-brand-navy mb-4">Mari Mulai Kolaborasi.</h2>
            <p className="text-brand-navy/70 font-medium">Isi form di samping untuk mengirimkan kebutuhan langsung ke email utama kami di marifirfannn@gmail.com.</p>
          </div>
          <div className="flex-1">
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
              <input required name="name" type="text" className="w-full bg-brand-bg border-[3px] border-brand-navy px-4 py-3 font-bold focus:bg-white rounded-xl" placeholder="Nama Lengkap Bisnis Anda" />
              <textarea required name="message" className="w-full bg-brand-bg border-[3px] border-brand-navy px-4 py-3 font-bold min-h-[120px] focus:bg-white rounded-xl" placeholder="Deskripsikan fitur atau menu yang ingin Anda buat..."></textarea>
              <button type="submit" className="neo-btn-blue py-3.5 text-sm w-full">Kirim Pesan Ke Email</button>
            </form>
          </div>
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
