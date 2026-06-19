export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-[3px] border-brand-navy">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12 w-full max-w-7xl mx-auto gap-6">
        <div className="text-3xl font-extrabold text-brand-navy tracking-tighter">
          Ovixy <span className="text-brand-blue">Digital</span>
        </div>
        <div className="font-bold text-brand-navy/60 text-sm">
          © {new Date().getFullYear()} Ovixy Digital. Built for Growth.
        </div>
        <div className="flex gap-6">
          <a className="font-bold text-brand-navy/60 hover:text-brand-purple transition-all" href="#">Instagram</a>
          <a className="font-bold text-brand-navy/60 hover:text-brand-blue transition-all" href="#">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
