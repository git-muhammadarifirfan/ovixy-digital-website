import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const waMessage = encodeURIComponent("Halo Ovixy Digital, saya ingin berkonsultasi mengenai format otomatis pembuatan platform digital bisnis saya.");
  const waLink = `https://wa.me/?text=${waMessage}`;

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    if (isHome) {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-white border-[3px] border-brand-navy rounded-full px-6 py-3 flex justify-between items-center shadow-[4px_4px_0px_0px_#0F172A]">
        <Link to="/" className="font-extrabold text-2xl tracking-tighter text-brand-navy">
          Ovixy <span className="text-brand-blue">Digital</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              <a href="#layanan" onClick={(e) => handleNavClick(e, '#layanan')} className="font-bold text-brand-navy/70 hover:text-brand-blue transition-colors">Layanan</a>
              <Link to="/projects" className="font-bold text-brand-navy/70 hover:text-brand-blue transition-colors">Portofolio</Link>
              <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="font-bold text-brand-navy/70 hover:text-brand-blue transition-colors">Harga</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="font-bold text-brand-navy/70 hover:text-brand-blue transition-colors">FAQ</a>
            </>
          ) : (
            <>
              <Link to="/" className="font-bold text-brand-navy/70 hover:text-brand-blue transition-colors">Beranda</Link>
              <Link to="/projects" className="font-bold border-b-2 border-brand-blue pb-1 text-brand-blue">Portofolio</Link>
            </>
          )}
        </div>

        <a href={waLink} target="_blank" rel="noreferrer" className="hidden md:block px-5 py-2.5 bg-brand-navy text-white text-sm font-extrabold rounded-full border-2 border-brand-navy hover:bg-brand-blue hover:border-brand-blue transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Hubungi Kami
        </a>

        <button className="md:hidden p-2" onClick={() => setIsOpen(true)}>
          <Menu size={24} strokeWidth={3} />
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-8 border-4 border-brand-navy">
          <button className="absolute top-8 right-8 p-2" onClick={() => setIsOpen(false)}><X size={32} /></button>
          <Link to="/" onClick={() => setIsOpen(false)} className="font-extrabold text-4xl text-brand-navy">Beranda</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="font-extrabold text-4xl text-brand-navy">Portofolio</Link>
          <a href={waLink} target="_blank" rel="noreferrer" className="neo-btn-blue px-8 py-3">Konsultasi WA</a>
        </div>
      )}
    </>
  );
}
