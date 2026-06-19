/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGSAPAnimations(isReady: boolean, currentPath: string) {
  useEffect(() => {
    if (!isReady) return;

    // Register ScrollTrigger with GSAP globally
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Reveal text titles or section title animations automatically
      const sectionTitles = document.querySelectorAll("h2");
      sectionTitles.forEach((el) => {
        const targets: Element[] = [el];
        const siblingParagraph = el.nextElementSibling;
        if (siblingParagraph && siblingParagraph.tagName === "P") {
          targets.push(siblingParagraph);
        }

        gsap.fromTo(
          targets,
          {
            opacity: 1,
            scale: 0,
            y: 25,
            rotation: -2,
          },
          {
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Bento Grid services reveal
      const serviceCards = document.querySelectorAll(".service-card");
      if (serviceCards.length > 0) {
        gsap.fromTo(
          serviceCards,
          {
            opacity: 0,
            y: 50,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".services-area",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Staggered pricing package card reveal
      const pricingCards = document.querySelectorAll(".pricing-card");
      if (pricingCards.length > 0) {
        gsap.fromTo(
          pricingCards,
          {
            opacity: 0,
            y: 60,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".pricing-area",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 4. Showcase project listing cards reveal (only on home page where they scroll in)
      if (currentPath !== "/project") {
        const projectCards = document.querySelectorAll(".project-card");
        if (projectCards.length > 0) {
          gsap.fromTo(
            projectCards,
            {
              opacity: 0,
              y: 40,
              scale: 0.98,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".projects-area",
                start: "top 78%",
                toggleActions: "play none none none",
              },
            }
          );
        }
        
        const viewAllBtn = document.querySelector(".semua-proyek-btn");
        if (viewAllBtn) {
          gsap.fromTo(
            viewAllBtn,
            { opacity: 1, scale: 0, rotation: -5, x: 20 },
            {
              scale: 1, rotation: 0, x: 0, duration: 0.6, delay: 0.4, ease: "back.out(1.8)",
              scrollTrigger: {
                trigger: ".projects-area",
                start: "top 78%",
                toggleActions: "play none none none",
              }
            }
          );
        }
      }

      // 5. Customer feedbacks/testimonial cards reveal
      const testimonialCards = document.querySelectorAll(".testimonial-card");
      if (testimonialCards.length > 0) {
        gsap.fromTo(
          testimonialCards,
          {
            opacity: 0,
            y: 35,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".testimonials-area",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 6. FAQ Accordion cards stagger reveal
      const faqCards = document.querySelectorAll(".faq-card-item");
      if (faqCards.length > 0) {
        gsap.fromTo(
          faqCards,
          {
            opacity: 1,
            y: 20,
            scale: 0,
            x: -20,
          },
          {
            y: 0,
            scale: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: "#faq",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      ScrollTrigger.refresh();
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const timer2 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      ctx.revert();
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [isReady, currentPath]);
}
