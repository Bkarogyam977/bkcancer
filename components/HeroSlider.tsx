// "use client";

// import Link from "next/link";
// import { useState, useEffect, useCallback } from "react";

// const slides = [
//   {
//     bg: "linear-gradient(135deg, #071e1c 0%, #0D3B38 45%, #1a5c57 100%)",
//     patternColor: "rgba(244,161,24,0.06)",
//     badge: "🌿 Advanced Ayurvedic Cancer Care",
//     headline: ["Advanced Ayurvedic", "Cancer Healing"],
//     accentWord: "Cancer Healing",
//     sub: "No Side Effects. Natural Immunity. Hope for Every Stage.",
//     cta1: { label: "📅 Book Free Consultation", href: "/contact" },
//     cta2: { label: "▶ Learn About Our Therapy", href: "/services" },
//     stat: { icon: "🎗️", text: "5000+ Cancer Cases Successfully Treated" },
//   },
//   {
//     bg: "linear-gradient(135deg, #2c1408 0%, #7a3a0a 45%, #b05a1a 100%)",
//     patternColor: "rgba(255,255,255,0.05)",
//     badge: "⭐ Trusted by 5 Million+ Patients",
//     headline: ["5 Million+ Lives Touched", "Through Ayurveda"],
//     accentWord: "Through Ayurveda",
//     sub: "24+ Years | 20+ Expert Doctors | 50,000+ Cancer Patients Treated",
//     cta1: { label: "🌟 See Success Stories", href: "/contact" },
//     cta2: { label: "📞 Call +91 8081222333", href: "tel:+918081222333" },
//     stat: { icon: "🏆", text: "15+ National Awards for Ayurvedic Excellence" },
//   },
//   {
//     bg: "linear-gradient(135deg, #0a1e0a 0%, #1B6B5A 45%, #2a8a70 100%)",
//     patternColor: "rgba(244,161,24,0.05)",
//     badge: "💚 Hope for Every Cancer Patient",
//     headline: ["Cancer is Not the End —", "It's a New Beginning"],
//     accentWord: "It's a New Beginning",
//     sub: "Personalized Treatment. Ancient Wisdom. Modern Results.",
//     cta1: { label: "🎗️ View Cancer Types", href: "/disease" },
//     cta2: { label: "📋 Our Treatments", href: "/services" },
//     stat: { icon: "🌿", text: "100% Natural — Zero Harmful Side Effects" },
//   },
// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);
//   const [fading, setFading] = useState(false);

//   const goTo = useCallback((index: number) => {
//     if (fading) return;
//     setFading(true);
//     setTimeout(() => {
//       setCurrent(index);
//       setFading(false);
//     }, 400);
//   }, [fading]);

//   const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
//   const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

//   useEffect(() => {
//     const t = setInterval(next, 5500);
//     return () => clearInterval(t);
//   }, [next]);

//   const slide = slides[current];

//   return (
//     <div className="relative overflow-hidden" style={{ minHeight: "88vh" }}>
//       {/* Animated background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: slide.bg,
//           transition: "background 0.6s ease",
//           opacity: fading ? 0 : 1,
//         }}
//       />

//       {/* Mandala/pattern overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `radial-gradient(circle, ${slide.patternColor} 1px, transparent 1px)`,
//           backgroundSize: "48px 48px",
//         }}
//       />

//       {/* Lotus watermark top-right */}
//       <div
//         className="absolute -top-10 -right-10 text-[300px] select-none pointer-events-none"
//         style={{ opacity: 0.04, filter: "blur(2px)" }}
//       >
//         🌸
//       </div>

//       {/* Content */}
//       <div
//         className="relative z-10 flex items-center"
//         style={{ minHeight: "88vh", transition: "opacity 0.4s", opacity: fading ? 0 : 1 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//             {/* Left – Text */}
//             <div>
//               <span
//                 className="inline-block text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-wide"
//                 style={{
//                   backgroundColor: "rgba(255,255,255,0.12)",
//                   color: "white",
//                   border: "1px solid rgba(255,255,255,0.25)",
//                   backdropFilter: "blur(8px)",
//                 }}
//               >
//                 {slide.badge}
//               </span>

//               <h1
//                 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
//                 style={{ fontFamily: "Georgia, 'Times New Roman', serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
//               >
//                 {slide.headline[0]}<br />
//                 <span style={{ color: "#F4A118" }}>{slide.headline[1]}</span>
//               </h1>

//               <p className="text-white/80 text-lg mb-8 max-w-xl leading-relaxed">{slide.sub}</p>

//               <div className="flex flex-wrap gap-4 mb-7">
//                 <Link
//                   href={slide.cta1.href}
//                   style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
//                   className="px-8 py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition shadow-xl"
//                 >
//                   {slide.cta1.label}
//                 </Link>
//                 <Link
//                   href={slide.cta2.href}
//                   className="px-8 py-4 rounded-xl font-bold text-base transition"
//                   style={{ border: "2px solid rgba(255,255,255,0.55)", color: "white", backdropFilter: "blur(4px)" }}
//                 >
//                   {slide.cta2.label}
//                 </Link>
//               </div>

//               {/* Trust pills */}
//               <div className="flex flex-wrap gap-2">
//                 {["✅ 24+ Years", "✅ 5000+ Cancer Cases", "✅ 20+ Doctors", "✅ 50K+ Lives Changed"].map((b) => (
//                   <span
//                     key={b}
//                     className="text-xs font-semibold px-3 py-1.5 rounded-full"
//                     style={{
//                       backgroundColor: "rgba(255,255,255,0.10)",
//                       color: "white",
//                       border: "1px solid rgba(255,255,255,0.2)",
//                     }}
//                   >
//                     {b}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Right – Floating info card */}
//             <div className="hidden lg:flex justify-center">
//               <div
//                 className="rounded-3xl p-8 text-center shadow-2xl"
//                 style={{
//                   background: "rgba(255,255,255,0.10)",
//                   backdropFilter: "blur(16px)",
//                   border: "1.5px solid rgba(255,255,255,0.22)",
//                   width: 380,
//                 }}
//               >
//                 <div className="text-6xl mb-4">🌿</div>
//                 <p className="text-white font-extrabold text-xl mb-1" style={{ fontFamily: "Georgia, serif" }}>
//                   BK Cancer Care
//                 </p>
//                 <p className="text-white/60 text-sm mb-6">by Arogyadham — Varanasi</p>
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                   {[
//                     { v: "5M+", l: "Patients" },
//                     { v: "24+", l: "Years" },
//                     { v: "20+", l: "Doctors" },
//                   ].map((s) => (
//                     <div key={s.l} className="text-center">
//                       <p className="text-2xl font-extrabold" style={{ color: "#F4A118" }}>{s.v}</p>
//                       <p className="text-white/60 text-xs mt-0.5">{s.l}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div
//                   className="rounded-xl px-4 py-3 text-sm text-white/80 font-medium"
//                   style={{ backgroundColor: "rgba(244,161,24,0.15)", border: "1px solid rgba(244,161,24,0.3)" }}
//                 >
//                   {slide.stat.icon} {slide.stat.text}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Prev Arrow */}
//       <button
//         onClick={prev}
//         aria-label="Previous slide"
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition hover:scale-110"
//         style={{ backgroundColor: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
//       >
//         ‹
//       </button>

//       {/* Next Arrow */}
//       <button
//         onClick={next}
//         aria-label="Next slide"
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition hover:scale-110"
//         style={{ backgroundColor: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
//       >
//         ›
//       </button>

//       {/* Dot indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => goTo(i)}
//             aria-label={`Slide ${i + 1}`}
//             className="rounded-full transition-all duration-300"
//             style={{
//               width: i === current ? 36 : 10,
//               height: 10,
//               backgroundColor: i === current ? "#F4A118" : "rgba(255,255,255,0.45)",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




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
    cta1: { label: "📞 Free Consultation", href: "/contact" },
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
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/8/woman-with-skin-cancer-talking-with-her-doctor.jpg",
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
    image: "https://regalhospital.com/wp-content/uploads/2023/11/Combating-Cancer-with-Awareness-and-Advanced-Care-in-Bangalore-Regal-Hospital.png",
    imageAlt: "Advanced Cancer Care"
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
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
                {/* FIXED: Added unoptimized prop to bypass hostname error */}
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