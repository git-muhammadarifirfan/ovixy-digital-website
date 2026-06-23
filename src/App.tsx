/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageSquare, Phone, Send, Info, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

// Components
import Preloader from "./components/PreloaderNeo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import PricingCard from "./components/PricingCard";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Inbox from "./components/Inbox";

// Hooks & Data
import { useLenis } from "./hooks/useLenis";
import { useGSAPAnimations } from "./hooks/useGSAPAnimations";
import { projectsData, pricingPlans, servicesData, testimonialsData } from "./data/siteData";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isRoutingLoading, setIsRoutingLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"All" | "Web Dev" | "Mobile App" | "Branding" | "UI/UX">("All");

  // Interactive contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initialize Lenis clean smooth scrolling and GSAP hook listeners
  const lenisRef = useLenis();
  useGSAPAnimations(isReady, currentPath);

  // Transition overlay refs
  const transitionOverlayRef = React.useRef<HTMLDivElement>(null);
  const panelLeftRef = React.useRef<HTMLDivElement>(null);
  const panelRightRef = React.useRef<HTMLDivElement>(null);
  const transitionTextRef = React.useRef<HTMLDivElement>(null);

  // Force scroll to top on refresh/mount
  React.useEffect(() => {
    if (window.history && window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // Ensure scroll is at top when preloader is completed
  React.useEffect(() => {
    if (isReady) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [isReady]);

  // Stagger entry & pop animation for project cards when filters/path change
  React.useEffect(() => {
    if (!isReady) return;

    // Only run this specific animation on the /project page for filter changes and entry
    if (currentPath === "/project") {
      const cards = document.querySelectorAll("#portofolio .project-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
            rotationX: 15,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.5)",
            overwrite: "auto"
          }
        );
      }
    }
  }, [activeFilter, currentPath, isReady]);

  // Animate category filters when loading the projects page
  React.useEffect(() => {
    if (currentPath === "/project" && isReady) {
      // Stagger entrance for headers
      gsap.fromTo(
        [".projects-area h2", ".projects-area p"],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );

      const filterButtons = document.querySelectorAll(".projects-area button");
      if (filterButtons.length > 0) {
        gsap.fromTo(
          filterButtons,
          { opacity: 0, scale: 0.8, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "back.out(1.5)", delay: 0.1 }
        );
      }
    }
  }, [currentPath, isReady]);

  // Scroll progress indicator update hook
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        const progressBar = document.getElementById("scroll-progress-bar");
        if (progressBar) {
          progressBar.style.width = `${progress}%`;
        }
      } else {
        const progressBar = document.getElementById("scroll-progress-bar");
        if (progressBar) {
          progressBar.style.width = "0%";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize immediately
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  // Reusable Neo-Brutalist transition swipe function
  const triggerTransition = (targetPath: string, onMidpoint: () => void) => {
    if (transitionOverlayRef.current && panelLeftRef.current && panelRightRef.current) {
      transitionOverlayRef.current.style.pointerEvents = "auto";

      const tl = gsap.timeline({
        onComplete: () => {
          if (transitionOverlayRef.current) {
            transitionOverlayRef.current.style.pointerEvents = "none";
          }
          ScrollTrigger.refresh();
        }
      });

      // Slide both blocks in to meet/swap
      tl.to(panelLeftRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power3.inOut"
      });
      tl.to(panelRightRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power3.inOut"
      }, "-=0.5");

      // Show transition message text
      tl.to(transitionTextRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.5)"
      }, "-=0.1");

      // Swap path state and scroll to top at the midpoint of transition
      tl.add(() => {
        onMidpoint();
        // instant scroll to top on path change
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      });

      // Pause briefly for dramatic effect
      tl.to({}, { duration: 0.25 });

      // Hide text
      tl.to(transitionTextRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.15
      });

      // Slide blocks away to opposite sides
      tl.to(panelLeftRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.inOut"
      });
      tl.to(panelRightRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut"
      }, "-=0.5");
    } else {
      // Fallback if elements are missing
      onMidpoint();
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  // Sync state with back/forward history actions with popstate
  React.useEffect(() => {
    const handlePopState = () => {
      const targetPath = window.location.pathname;
      triggerTransition(targetPath, () => {
        setCurrentPath(targetPath);
      });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (newPath: string) => {
    triggerTransition(newPath, () => {
      window.history.pushState({}, "", newPath);
      setCurrentPath(newPath);
    });
  };

  // Smooth scroll helper using Lenis
  const handleScrollTo = (selector: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(selector, { duration: 1.2 });
    } else {
      const element = document.querySelector(selector);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Smart Nav Click scroll and path coordinator
  const handleNavClick = (selector: string) => {
    if (selector.startsWith("/")) {
      navigate(selector);
      return;
    }

    const isHomePage = currentPath.replace(/\/$/, "") !== "/project";

    // If on /project page and clicking Portfolio, scroll to top of showcase
    if (selector === "#portofolio" && !isHomePage) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (!isHomePage) {
      // Travel back to Home path first, then scroll
      triggerTransition("/", () => {
        window.history.pushState({}, "", "/");
        setCurrentPath("/");
        // Execute scroll after React renders the home elements and transition overlay disappears
        setTimeout(() => {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(selector, { duration: 1.2 });
          } else {
            const element = document.querySelector(selector);
            element?.scrollIntoView({ behavior: "smooth" });
          }
        }, 600);
      });
    } else {
      // Scroll directly on Home
      if (lenisRef.current) {
        lenisRef.current.scrollTo(selector, { duration: 1.2 });
      } else {
        const element = document.querySelector(selector);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Prefill WA when choosing a package
  const handleSelectPackage = (packageName: string) => {
    const text =
      `Halo Ovixy Digital! 👋\n\nSaya tertarik dengan layanan Anda dan ingin memesan:\n\n` +
      `📌 *Paket:* ${packageName}\n\n` +
      `Boleh minta informasi lebih lanjut mengenai:\n` +
      `- Estimasi biaya & waktu pengerjaan\n` +
      `- Fitur yang bisa dikustom\n` +
      `- Alur kerja & pembayarannya\n\n` +
      `Terima kasih, saya tunggu responnya! 🙏`;
    window.open(`https://api.whatsapp.com/send/?phone=6285136563792&text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleConsultation = () => {
    const text =
      `Halo Ovixy Digital! 👋\n\n` +
      `Saya ingin berkonsultasi mengenai kebutuhan digital untuk bisnis/proyek saya.\n\n` +
      `Berikut sedikit gambaran kebutuhan saya:\n` +
      `- Jenis proyek: [Website / Aplikasi / POS / Akademik]\n` +
      `- Deskripsi singkat: [isi di sini]\n` +
      `- Target waktu: [isi di sini]\n\n` +
      `Mohon panduannya untuk langkah selanjutnya. Terima kasih! 🙏`;
    window.open(`https://api.whatsapp.com/send/?phone=6285136563792&text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      const res = await fetch("https://formsubmit.co/ajax/marifirfannn@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `💬 Pesan Baru dari ${name} — Ovixy Digital Website`,
          Nama: name,
          Email: email,
          Pesan: message || "(tidak ada pesan tambahan)",
          _template: "table",
          _captcha: "false"
        })
      });
      if (res.ok) {
        setFormSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        alert("Gagal mengirim pesan. Coba lagi atau hubungi via WhatsApp.");
      }
    } catch {
      alert("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  // Portfolio filters
  const filters: ("All" | "Web Dev" | "Mobile App" | "Branding" | "UI/UX")[] = [
    "All",
    "Web Dev",
    "Mobile App",
    "Branding",
    "UI/UX"
  ];

  const cleanPath = currentPath.replace(/\/$/, "") || "/";
  const isHomePage = cleanPath === "/";
  const isProjectPage = cleanPath === "/project";
  const isInboxPage = cleanPath === "/inbox";
  const isNotFound = !isHomePage && !isProjectPage && !isInboxPage;

  const displayedProjects = isProjectPage
    ? (activeFilter === "All" ? projectsData : projectsData.filter(proj => proj.filterCategory === activeFilter))
    : projectsData.slice(0, 3);

  const handleViewAllProjects = () => {
    navigate("/project");
  };

  // If on the inbox page, return the full screen app view directly
  if (isInboxPage) {
    return <Inbox />;
  }

  return (
    <div className="min-h-screen bg-background relative antialiased [background-size:24px_24px] bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)]">
      {/* Scroll Progress Bar at the top of viewport */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[95] pointer-events-none">
        <div
          id="scroll-progress-bar"
          className="h-full bg-black transition-all duration-75"
          style={{ width: "0%" }}
        />
      </div>

      {/* 1. Global minimalistic preloader overlay */}
      {!isReady && <Preloader onComplete={() => setIsReady(true)} />}

      {/* Routing transitions overlay */}
      {isRoutingLoading && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[90] flex items-center justify-center p-6 animate-fade-in select-none">
          <div className="bg-white border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center max-w-xs w-full flex flex-col items-center gap-4 animate-zoom-in">
            <svg className="animate-spin h-8 w-8 text-black" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <h3 className="font-sans text-lg font-black uppercase tracking-tight text-black">Memuat Portofolio</h3>
            <p className="font-sans text-xs text-text-muted font-bold uppercase">Menyiapkan karya transparan terbaik...</p>
          </div>
        </div>
      )}

      {/* 2. Sticky premium navigations bar */}
      <Navbar onNavClick={handleNavClick} onConsultClick={handleConsultation} />

      {/* 3. Hero Section Area (Home only) */}
      {isHomePage && (
        <Hero
          isReady={isReady}
          onStartClick={() => handleScrollTo("#portofolio")}
          onConsultClick={handleConsultation}
        />
      )}

      {/* Main container */}
      <main className="max-w-5xl mx-auto px-6 pb-20 relative">

        {isNotFound ? (
          <NotFound onGoHome={navigate} />
        ) : isProjectPage ? (
          /* ALL PROJECTS PAGE VIEW (/project) */
          <section id="portofolio" className="pt-28 pb-16 projects-area text-start">
            <div className="flex flex-col mb-10 max-w-xl">
              <h2
                style={{ opacity: 0 }}
                className="font-sans text-3xl md:text-5xl font-black text-black uppercase tracking-tight relative inline-block p-1 border-b-6 border-black w-fit"
              >
                Semua Proyek
              </h2>
              <p
                style={{ opacity: 0 }}
                className="font-sans text-sm md:text-base text-black mt-5 font-bold leading-relaxed"
              >
                Jejak digital UMKM yang telah kami transformasi. Kombinasi desain fungsional dan estetika modern yang berani untuk hasil yang nyata.
              </p>
            </div>

            {/* Category Filters Bar */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3.5 mb-10 select-none">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{ opacity: 0 }}
                  className={`px-5 py-2.5 rounded-full border-3 border-black font-sans text-xs md:text-sm font-black transition-all cursor-pointer ${activeFilter === filter
                    ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1"
                    : "bg-white text-black hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    }`}
                >
                  {filter === "All" ? "Semua" : filter}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[300px]">
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                  dataAlt={project.dataAlt}
                  features={project.features}
                  detailOverview={project.detailOverview}
                />
              ))}
            </div>
          </section>
        ) : (
          /* HOME PAGE VIEW (/) */
          <>
            {/* 4. Portfolio Grid Showcase Section */}
            <section id="portofolio" className="pt-24 pb-16 projects-area text-start">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-6">
                <div className="max-w-xl">
                  <h2 className="opacity-0 font-sans text-3xl md:text-5xl font-black text-black uppercase tracking-tight relative inline-block p-1 border-b-6 border-black">
                    Showcase Project
                  </h2>
                  <p className="opacity-0 font-sans text-sm md:text-base text-black mt-5 font-bold leading-relaxed">
                    Beberapa karya terbaik kami untuk bisnis lokal.
                  </p>
                </div>

                {/* Neo-brutalist black button placed above the 3rd card on desktop (on the right) */}
                <button
                  onClick={handleViewAllProjects}
                  className="semua-proyek-btn opacity-0 bg-black text-white px-7 py-4 rounded-full border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-xs md:text-sm font-black uppercase tracking-wider cursor-pointer font-sans shrink-0 hover:bg-neutral-800"
                >
                  Semua Proyek →
                </button>
              </div>

              {/* Structured Responsive Project Cards Grid Area (Showing Exactly 3 Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {displayedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    dataAlt={project.dataAlt}
                    features={project.features}
                    detailOverview={project.detailOverview}
                  />
                ))}
              </div>
            </section>

            {/* Divider lines representing traditional Neo-Brutalist design borders */}
            <div className="h-[4px] bg-black w-full" />

            {/* 5. Pricing Grid Section */}
            <section id="harga" className="pt-24 pb-16 pricing-area">
              <SectionTitle
                title="Investasi Layanan"
                subtitle="Paket transparan tanpa biaya tersembunyi. Investasi terbaik untuk kehadiran digital bisnis Anda."
                align="center"
              />

              {/* Redesigned 5-package pricing list layout */}
              <div className="flex flex-wrap gap-6 md:gap-8 pt-8 justify-center items-stretch max-w-6xl mx-auto">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] xl:w-[calc(33.333%-22px)] max-w-[340px] md:max-w-none flex"
                  >
                    <PricingCard
                      name={plan.name}
                      description={plan.description}
                      price={plan.price}
                      isPopular={plan.isPopular}
                      features={plan.features}
                      ctaText={plan.ctaText}
                      hasDottedBg={plan.hasDottedBg}
                      onSelect={() => handleSelectPackage(plan.name)}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Divider lines */}
            <div className="h-[4px] bg-black w-full" />

            {/* 6. Services Bento Grid Section */}
            <section id="layanan" className="pt-24 pb-16 services-area">
              <SectionTitle
                title="Layanan Unggulan"
                subtitle="Kami menggabungkan seni dan teknologi modern untuk memajukan bisnis Anda ke tingkat selanjutnya."
                align="left"
              />

              {/* Services bento structure */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
                {servicesData.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    type={service.type}
                    badges={service.badges}
                  />
                ))}
              </div>
            </section>

            {/* Divider lines */}
            <div className="h-[4px] bg-black w-full" />

            {/* 7. Client Testimonials Feedbacks Section */}
            <section id="testimoni" className="pt-24 pb-16 testimonials-area">
              <SectionTitle
                title="Kata Mereka"
                subtitle="Dipercaya oleh berbagai pemilik bisnis lokal dan UMKM berkembang."
                align="center"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonialsData.map((t) => (
                  <div
                    key={t.id}
                    className="opacity-0 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 testimonial-card text-start select-none"
                  >
                    {/* Visual quote indicator decoration */}
                    <div className="mb-4 text-black text-4xl font-serif">“</div>
                    <p className="font-sans text-xs md:text-sm italic mb-6 text-neutral-800 leading-relaxed font-semibold flex-grow">
                      "{t.quote}"
                    </p>

                    {/* Profile Card details */}
                    <div className="flex items-center gap-3.5 mt-auto border-t border-gray-100 pt-4">
                      <div className="w-11 h-11 rounded-full border-2 border-black overflow-hidden bg-neutral-100">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          width={44}
                          height={44}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                      <div>
                        <h4 className="font-sans text-sm font-black text-black tracking-tight">{t.name}</h4>
                        <p className="text-[10px] text-text-muted font-bold tracking-wide uppercase mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider lines */}
            <div className="h-[4px] bg-black w-full" />

            {/* 8. Contact Form & CTA Section */}
            <section id="kontak" className="pt-24 pb-8">
              <div className="flex flex-col lg:flex-row gap-12 pt-4 justify-between items-stretch">

                {/* Promo & Direct WhatsApp trigger link */}
                <div className="flex-1 flex flex-col justify-center text-start">
                  <h2 className="opacity-0 font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-none mb-6 uppercase tracking-tighter">
                    Siap Mengembangkan Bisnis Anda?
                  </h2>
                  <p className="opacity-0 font-sans text-sm sm:text-base text-text-muted mb-8 leading-relaxed font-semibold">
                    Hubungi kami untuk mendapatkan sesi konsultasi gratis. Kami siap membantu merumuskan strategi kehadiran digital terbaik yang relevan untuk target pasar UMKM Anda.
                  </p>

                  <button
                    onClick={handleConsultation}
                    className="bg-[#25D366] text-white text-sm font-black px-7 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none transition-all flex items-center gap-2.5 w-fit uppercase tracking-wider cursor-pointer font-sans"
                  >
                    <Phone className="w-4 h-4 fill-white text-white" /> Chat via WhatsApp
                  </button>
                </div>

                {/* Neo-brutalist message form */}
                <div className="flex-1 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 relative select-none">

                  {formSubmitted ? (
                    <div className="absolute inset-0 bg-white rounded-2xl p-6 flex flex-col justify-center items-center text-center animate-in scale-in-95 duration-200">
                      <div className="w-14 h-14 bg-green-100 border-2 border-green-600 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-sans text-xl font-black text-green-600 uppercase mb-2">Terima Kasih!</h3>
                      <p className="font-sans text-sm text-text-muted max-w-xs font-semibold leading-relaxed">
                        Pesan Anda telah berhasil terekam. Tim pengembang kami akan segera menghubungi Anda melalui email dalam waktu 1x24 jam.
                      </p>
                    </div>
                  ) : null}

                  <h3 className="font-sans text-lg md:text-xl font-black text-black mb-6 uppercase tracking-tight text-start">
                    Kirim Pesan
                  </h3>

                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-start">
                    <div>
                      <label className="block font-sans text-xs font-black uppercase text-black mb-1.5" htmlFor="form-name">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: John Doe"
                        className="w-full bg-white border-2 border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black font-sans text-sm font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-black uppercase text-black mb-1.5" htmlFor="form-email">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Contoh: john@domain.com"
                        className="w-full bg-white border-2 border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black font-sans text-sm font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-black uppercase text-black mb-1.5" htmlFor="form-message">
                        Detail Pesan / Paket Kebutuhan
                      </label>
                      <textarea
                        id="form-message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ceritakan gambaran singkat tentang bisnis Anda..."
                        className="w-full bg-white border-2 border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black font-sans text-sm font-semibold min-h-[110px] resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-black text-white text-xs font-black py-4 px-6 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:translate-y-0 active:shadow-none transition-all border-2 border-black mt-2 uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Kirim Sekarang <Send className="w-3.5 h-3.5 text-white" />
                    </button>
                  </form>
                </div>

              </div>
            </section>

            {/* Divider lines */}
            <div className="h-[4px] bg-black w-full" />

            {/* FAQ Section */}
            <FaqSection />
          </>
        )}

      </main>

      {/* 9. Global Footer section with smooth Scroll-to-Top triggers */}
      <Footer onScrollToTop={() => handleNavClick("#hero")} />

      {/* 10. Neo-Brutalist Swap Screen Wipes (Fixed overlays) */}
      <div
        ref={transitionOverlayRef}
        className="fixed inset-0 pointer-events-none z-[100] flex flex-col md:flex-row"
      >
        <div
          ref={panelLeftRef}
          className="flex-1 bg-black transform -translate-x-full md:-translate-x-full"
        />
        <div
          ref={panelRightRef}
          className="flex-1 bg-yellow-300 border-t-4 md:border-t-0 md:border-l-4 border-black transform translate-x-full md:translate-x-full flex items-center justify-center"
        >
          <div
            ref={transitionTextRef}
            className="opacity-0 scale-95 font-sans text-2xl md:text-4xl font-black uppercase text-black tracking-tight text-center p-6 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl"
          >
            Memuat Karya... ✦
          </div>
        </div>
      </div>
    </div>
  );
}
