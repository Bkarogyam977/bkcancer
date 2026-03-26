"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    bgGradient: "linear-gradient(135deg, #0B4F3A 0%, #1C6E52 50%, #2D8A6A 100%)",
    patternColor: "rgba(255,215,0,0.08)",
    badge: "🌿 Advanced Ayurvedic Cancer Care",
    headline: ["Why Cancer Healer", "Therapy Works"],
    accentWord: "Therapy Works",
    sub: "Research-based medicines | Painless therapy | Affordable | Natural procedure",
    description: "No side effects like hair loss, infections, pain, nausea, vomiting. Normal cells are protected while targeting cancer cells.",
    cta1: { label: "📞 Book Consultation", href: "/contact" },
    cta2: { label: "Learn More", href: "/therapy" },
    statBoxes: [
      { value: "5M+", label: "Lives Touched" },
      { value: "50+", label: "Centers" },
      { value: "25+", label: "Years Exp" }
    ],
    features: [
      "No Side Effects",
      "Painless Therapy",
      "Affordable",
      "Natural Procedure"
    ],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/22/Gemini_Generated_Image_7l8fup7l8fup7l8f1.png",
    imageAlt: "Doctor consulting with cancer patient"
  },
  {
    id: 2,
    bgGradient: "linear-gradient(135deg, #8B4513 0%, #B45F2A 50%, #D97845 100%)",
    patternColor: "rgba(255,215,0,0.08)",
    badge: "⭐ Trusted by 5 Million+ Patients",
    headline: ["Cutting-Edge", "Cancer Healer Therapy"],
    accentWord: "Cancer Healer",
    sub: "Holistic Approach | Aiming for Better Well-being",
    description: "Trains immune system to recognize and target cancer cells. Quick improvement even in advanced stages with better quality of life.",
    cta1: { label: "🌟 Success Stories", href: "/testimonials" },
    cta2: { label: "📞 +91-9810006264", href: "tel:+919810006264" },
    statBoxes: [
      { value: "5000+", label: "Testimonials" },
      { value: "15+", label: "Awards" },
      { value: "50K+", label: "Deaths Averted" }
    ],
    features: [
      "Secures Immunity",
      "Quick Improvement",
      "Painless",
      "Research-based"
    ],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/8/close-up-hands-holding-purple-ribbon-with-stethoscope.jpg",
    imageAlt: "Purple ribbon cancer awareness with stethoscope"
  },
  {
    id: 3,
    bgGradient: "linear-gradient(135deg, #1A4D3E 0%, #2C6B56 50%, #3E886E 100%)",
    patternColor: "rgba(255,215,0,0.08)",
    badge: "💚 Hope for Every Cancer Patient",
    headline: ["Your Journey", "with Us"],
    accentWord: "with Us",
    sub: "Simple 4-Step Process | Personalized Care",
    description: "From appointment booking to regular follow-ups - we're with you every step of the way.",
    cta1: { label: "Book Appointment", href: "/appointment" },
    cta2: { label: "View Cancer Types", href: "/cancer-types" },
    statBoxes: [
      { value: "100%", label: "Natural" },
      { value: "24/7", label: "Support" },
      { value: "50+", label: "Cancer Types" }
    ],
    features: [
      "Appointment Booking",
      "Doctor Consultation",
      "Treatment Starts",
      "Regular Follow-up"
    ],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/22/hqdefault.jpeg",
    imageAlt: "Advanced Cancer Care"
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 400);
  }, [fading]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="relative overflow-hidden min-h-[600px] md:min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${slide.patternColor} 2px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-4 min-h-[600px] md:min-h-screen flex items-center transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center py-12 md:py-16">
          
          {/* Left Content - Text */}
          <div className="text-white max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-500/30 mb-3 md:mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs font-medium">{slide.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 md:mb-3">
              {slide.headline[0]}<br />
              <span className="text-yellow-500 relative">
                {slide.headline[1]}
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-yellow-500/50 rounded-full"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-white/80 mb-3 md:mb-4">{slide.sub}</p>

            {/* Description */}
            <p className="text-xs md:text-sm text-white/70 mb-4 md:mb-5 leading-relaxed">{slide.description}</p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              {slide.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-1 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] md:text-xs border border-white/20 hover:bg-yellow-500/20 hover:border-yellow-500/30 transition-all"
                >
                  ✓ {feature}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
              <Link
                href={slide.cta1.href}
                className="group relative px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg text-white font-semibold text-xs md:text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25"
              >
                <span className="relative z-10">{slide.cta1.label}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </Link>
              <Link
                href={slide.cta2.href}
                className="px-4 md:px-6 py-2 md:py-3 border-2 border-white/30 rounded-lg text-white font-semibold text-xs md:text-sm backdrop-blur-sm hover:bg-white/10 hover:border-yellow-500/50 transition-all hover:scale-105"
              >
                {slide.cta2.label}
              </Link>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {slide.statBoxes.map((stat, index) => (
                <div key={index} className="text-center p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="text-sm md:text-xl lg:text-2xl font-bold text-yellow-500">{stat.value}</div>
                  <div className="text-[8px] md:text-[10px] text-white/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image (Mobile/Tablet/Desktop all visible now) */}
          <div className="block lg:block">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  width={700}
                  height={800}
                  className="object-cover w-full h-auto"
                  priority
                  unoptimized
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-2 md:p-4 border border-white/20">
                      <div className="text-yellow-500 text-sm md:text-2xl font-bold">98%</div>
                      <div className="text-white/60 md:text-white/80 text-[8px] md:text-sm">Success Rate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-2 md:p-4 border border-white/20">
                      <div className="text-yellow-500 text-sm md:text-2xl font-bold">24/7</div>
                      <div className="text-white/60 md:text-white/80 text-[8px] md:text-sm">Patient Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 md:-top-8 -right-4 md:-right-8 w-12 md:w-24 h-12 md:h-24 bg-yellow-500/20 rounded-full blur-xl md:blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-12 md:w-24 h-12 md:h-24 bg-green-500/20 rounded-full blur-xl md:blur-2xl animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet/desktop */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 md:w-10 h-8 md:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white text-lg md:text-xl hover:bg-yellow-500/20 hover:border-yellow-500/30 transition-all hover:scale-110"
      >
        ←
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 md:w-10 h-8 md:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white text-lg md:text-xl hover:bg-yellow-500/20 hover:border-yellow-500/30 transition-all hover:scale-110"
      >
        →
      </button>

      {/* Mobile Swipe Hint */}
      <div className="flex md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/30 text-xs">
        ← Swipe →
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1 md:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="group relative"
          >
            <div className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
              index === current 
                ? "w-4 md:w-6 bg-yellow-500" 
                : "w-1 md:w-1.5 bg-white/50 group-hover:bg-white/80"
            }`}></div>
            {index === current && (
              <div className="absolute inset-0 w-4 md:w-6 h-1 md:h-1.5 rounded-full bg-yellow-500/30 animate-ping"></div>
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20 text-white/30 text-[10px] md:text-xs">
        0{current + 1} / 0{slides.length}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}