"use client";

import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

// Note: Metadata export won't work in Client Component
// If you need metadata, you'll need to separate this into a layout or keep it server-side

const team = [
  { name: "Dr. BK Chaurasiya", role: "Kidney Specialist", exp: "Managing Director • 20+ years experience in treating cancer" },
  { name: "Dr. Shashi Chaurasiya", role: "Nephrologist", exp: "B.A.M.S • 15+ years in detoxification" },
  { name: "Dr. Ritesh Chaurasiya", role: "Pharmaceutical Expert", exp: "B.A.M.S • 8+ years in formulating personalised treatments" },
  { name: "Dr. Jitendra Tiwari", role: "Nephrologist", exp: "B.A.M.S • 12+ years guiding patients" },
];

const milestones = [
  { 
    year: "Mirzapur", 
    event: "4HVH+CHF, Tehseal Rd, Dhauru Pur, Mirzapur-cum-Vindhyachal, Mirzapur, Uttar Pradesh 231001" 
  },
  { 
    year: "Varanasi", 
    event: "Lahartara Rd, near Hori Lal Park/Lawn, Manduwadih, Shivdaspur, Varanasi, Uttar Pradesh 221103" 
  },
  { 
    year: "Delhi (Rohini)", 
    event: "Ho.no. D-10/8 1st Floor, Balaji Plaza Complex, Rohini East Metro Station, Rohini Sector 8, Delhi-110085" 
  },
  { 
    year: "Delhi (Shastri Nagar)", 
    event: "FIRST FLOOR, M-118, Block M, Shastri Nagar, Delhi, 110052" 
  },
  { 
    year: "Lucknow (Gomati Nagar)", 
    event: "Gomati Nagar, Lucknow, Uttar Pradesh" 
  },
];

// Support Programs Data - With Links
const supportPrograms = [
  { icon: "💊", title: "Chemo Support Program", desc: "Reduce side effects, protect healthy cells", href: "/programs/chemo-support" },
  { icon: "🛡️", title: "Immunity Restoration", desc: "Strengthen your immune system", href: "/programs/immunity-restoration" },
  { icon: "🏥", title: "Post Surgery Recovery", desc: "Faster healing, prevent recurrence", href: "/programs/post-surgery-recovery" },
  { icon: "❤️", title: "Advanced Stage Support", desc: "Palliative care, quality of life", href: "/programs/advanced-stage-support" },
  { icon: "⚡", title: "Radiation Support", desc: "Protect healthy tissues", href: "/programs/radiation-support" },
  { icon: "🌿", title: "Maintenance Program", desc: "Prevent recurrence", href: "/programs/maintenance-program" }
];

// Patient Resources Data - With Links
const patientResources = [
  { icon: "📘", title: "Downloadable Guides", desc: "Free PDF guides on diet, yoga, and treatment", href: "/downloadable-guides" },
  { icon: "🎥", title: "Educational Videos", desc: "Watch expert talks and patient stories", href: "/educational-videos" },
  { icon: "📖", title: "Articles & Insights", desc: "Latest research and health tips", href: "/anti-cancer-diet" },
  { icon: "❓", title: "FAQs", desc: "Answers to common questions", href: "/faqs" }
];

export default function AboutPage() {
  // Handle download click
  const handleDownloadGuide = () => {
    window.open("https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/Gemini_Generated_Image_qr3smaqr3smaqr3s1.png", "_blank");
  };

  return (
    <>
      {/* Page Banner with NEW Image - Fully Responsive */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/8/Gemini_Generated_Image_rgdsk2rgdsk2rgds.png"
            alt="BK Cancer Care Ayurvedic Healing"
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-[8000ms]"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        </div>

        {/* Content - Responsive Text Sizes */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl lg:max-w-4xl">
              {/* Main Heading - Responsive */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                <span className="block text-[#F4A118] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-3 md:mb-4 font-normal tracking-wider">
                  COMPREHENSIVE CANCER CARE
                </span>
                <span className="block text-white">
                  आपका विश्वसनीय
                </span>
                <span className="block text-white">
                  केंद्र उपचार केंद्र
                </span>
              </h1>
              
              {/* Description - Responsive */}
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                भारतीय आयुर्वेद की प्राचीन पद्धति से कैंसर का समग्र उपचार | 
                Holistic cancer treatment through ancient Indian Ayurveda
              </p>

              {/* CTA Buttons - Responsive */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <span className="">
                 
                </span>
                <span className="">
                 
                </span>
              </div>

              {/* Simple Stats Line - Responsive */}
              <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-white">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-[#F4A118] text-xl sm:text-2xl">✦</span>
                  <span className="font-semibold text-xs sm:text-sm">25+ Years</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-[#F4A118] text-xl sm:text-2xl">✦</span>
                  <span className="font-semibold text-xs sm:text-sm">10,000+ Patients</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-[#F4A118] text-xl sm:text-2xl">✦</span>
                  <span className="font-semibold text-xs sm:text-sm">5 Centers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="0.95" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Story - With Image - Responsive Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text Content */}
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 tracking-wide bg-[#EEF7F4] text-[#0D3B38]">
                Our Legacy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6">
                Our <span className="text-[#F4A118]">Story</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                BK Cancer Care was founded with a single vision: to bring the ancient healing wisdom of Ayurveda to every corner of India. We believe that nature holds the cure for every ailment, and Ayurveda is the science that unlocks this potential.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Over the past 25 years, BK Cancer Care has grown from a single clinic in New Delhi to a network of 5 locations across India. Our team of experienced Ayurvedic doctors and therapists has helped more than 10,000 patients regain their health and vitality.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We specialize in treating chronic conditions such as cancer, kidney disease, diabetes, liver disease, and more — through personalized Ayurvedic protocols that address the root cause rather than just managing symptoms.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-[#F4A118] font-semibold text-sm cursor-pointer">
                  Learn How We Work →
                </span>
                <span className="text-[#0D3B38] font-semibold text-sm cursor-pointer">
                  View Support Programs →
                </span>
              </div>
            </div>
            
            {/* Right side - Image - Responsive height */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/8/Gemini_Generated_Image_j2ejjfj2ejjfj2ej1.png"
                alt="BK Cancer Care Our Story - Ayurvedic Healing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision with Images - Responsive Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide bg-white text-[#0D3B38]">
              Our Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our <span className="text-[#F4A118]">Mission & Values</span>
            </h2>
          </div>
          
          {/* Responsive Grid: 1 column mobile, 3 columns desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative h-40 sm:h-44 md:h-48 w-full">
                <Image
                  src="https://ccmorg.in/wp-content/uploads/2025/02/cancer_care-1-1024x678-4.jpg"
                  alt="Our Mission - Cancer Care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-2xl sm:text-3xl mx-auto -mt-8 sm:-mt-10 md:-mt-12 mb-3 sm:mb-4 text-white border-4 border-white shadow-lg">
                  🎯
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0D3B38]">Our Mission</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  To provide accessible, affordable, and effective Ayurvedic healthcare that treats the root cause of disease and promotes long-term wellness.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative h-40 sm:h-44 md:h-48 w-full">
                <Image
                  src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/8/44.png"
                  alt="Our Vision - Ayurvedic Healing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-2xl sm:text-3xl mx-auto -mt-8 sm:-mt-10 md:-mt-12 mb-3 sm:mb-4 text-white border-4 border-white shadow-lg">
                  🔭
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0D3B38]">Our Vision</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  To be India's most trusted Ayurvedic healthcare network, spreading the benefits of holistic healing to every corner of the country.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="relative h-40 sm:h-44 md:h-48 w-full">
                <Image
                  src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/8/551.png"
                  alt="Our Values - Holistic Care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl sm:text-3xl mx-auto -mt-8 sm:-mt-10 md:-mt-12 mb-3 sm:mb-4 text-white border-4 border-white shadow-lg">
                  💚
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0D3B38]">Our Values</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Compassion, integrity, and excellence — we treat every patient with respect and dedication, following the highest standards of Ayurvedic practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="bg-gradient-to-br from-[#0D3B38] to-[#1a5c57] rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🌿</span>
                <span className="text-[#F4A118] text-lg sm:text-xl md:text-2xl">The BK Cancer Care Approach</span>
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Personalized diagnosis based on your unique Dosha constitution",
                  "Customized herbal formulations for your specific condition",
                  "Panchakarma detoxification to cleanse the body of toxins",
                  "Dietary and lifestyle guidance tailored to your needs",
                  "Yoga and Pranayama recommendations for holistic healing",
                  "Regular follow-up and continuous support throughout treatment",
                ].map((point) => (
                  <li key={point} className="flex gap-2 sm:gap-3 items-start group hover:translate-x-2 transition-transform">
                    <span className="text-[#F4A118] text-base sm:text-lg mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/80 group-hover:text-white text-xs sm:text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/20">
                <span className="text-[#F4A118] hover:text-white transition text-sm font-semibold cursor-pointer">
                  Learn About Our Process →
                </span>
              </div>
            </div>
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 tracking-wide bg-[#EEF7F4] text-[#0D3B38]">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6">
                Why <span className="text-[#F4A118]">Ayurveda Works</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Unlike modern medicine that focuses on suppressing symptoms, Ayurveda identifies and eliminates the root cause of disease. This fundamental difference makes Ayurvedic treatment more effective for chronic conditions.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Ayurveda recognizes that every person is unique and requires a personalized approach. Our doctors spend time understanding your complete health picture — physical, mental, and spiritual — before creating your treatment protocol.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The result is a treatment plan that not only heals the current condition but also strengthens the body's natural immunity to prevent future disease.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="text-[#F4A118] font-semibold text-sm cursor-pointer">
                  View Our Research →
                </span>
                <span className="text-[#0D3B38] font-semibold text-sm cursor-pointer">
                  Anti-Cancer Diet Guide →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Programs Section - All 6 Programs with Links */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide bg-white text-[#0D3B38]">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Cancer <span className="text-[#F4A118]">Support Programs</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3 max-w-xl mx-auto px-4">
              Specialized programs for every stage of your cancer journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {supportPrograms.map((program, i) => (
              <Link 
                key={i} 
                href={program.href}
                className="bg-white rounded-xl p-5 sm:p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer block"
                style={{ border: "1px solid #e5f0ec" }}
              >
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">{program.icon}</div>
                <h3 className="font-bold text-base sm:text-lg mb-2 text-[#0D3B38]">{program.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{program.desc}</p>
                <span className="inline-block mt-3 text-[#F4A118] text-xs font-semibold group-hover:underline">Learn More →</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <span className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-white font-semibold text-sm sm:text-base cursor-pointer" style={{ background: "" }}>
             
            </span>
          </div>
        </div>
      </section>

      {/* Our Doctors - Responsive Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide bg-[#EEF7F4] text-[#0D3B38]">
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Expert <span className="text-[#F4A118]">Doctors</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3 max-w-xl mx-auto px-4">
              Our team of highly experienced Ayurvedic physicians are dedicated to your healing journey.
            </p>
          </div>
          
          {/* Responsive Grid: 1 column mobile, 2 columns tablet, 4 columns desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {team.map((doc, index) => (
              <div 
                key={doc.name} 
                className="bg-[#EEF7F4] rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#0D3B38] to-[#1a5c57] flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4 shadow-xl">
                  {doc.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-bold text-gray-800 text-base sm:text-lg">{doc.name}</h3>
                <p className="text-[#F4A118] text-xs sm:text-sm font-semibold my-1 sm:my-2">{doc.role}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed px-1 sm:px-2">{doc.exp}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <span className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-white font-semibold text-sm sm:text-base cursor-pointer" style={{ background: "linear-gradient(135deg, #0D3B38, #1a5c57)" }}>
              Meet All Doctors →
            </span>
          </div>
        </div>
      </section>

      {/* Anti-Cancer Diet Section - With Image and Download Link */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 tracking-wide bg-white text-[#0D3B38]">
                Food as Medicine
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6">
                Anti-Cancer <span className="text-[#F4A118]">Diet Guide</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Get personalized diet plans to boost immunity, reduce treatment side effects, and support your body's natural healing process.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Ayurvedic nutrition principles",
                  "Foods that boost immunity",
                  "Recipes for cancer patients",
                  "Foods to avoid during treatment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#F4A118]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleDownloadGuide}
                className="inline-block px-6 sm:px-8 py-3 rounded-lg text-white font-semibold text-sm sm:text-base cursor-pointer transition hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Download Free Diet Guide →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xl" style={{ border: "1px solid #e5f0ec" }}>
              <img
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/Fazlani-Authentic-Ayurveda.jpeg"
                alt="Anti-Cancer Diet Guide"
                className="w-full h-auto rounded-xl mb-4"
              />
              <p className="font-semibold text-lg sm:text-xl text-[#0D3B38] mb-2">"Food is the first medicine"</p>
              <p className="text-gray-500 text-sm">- Ayurveda</p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <span className="text-[#F4A118] font-semibold text-sm cursor-pointer">
                  More Patient Resources →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Centers - Responsive Timeline */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide bg-[#EEF7F4] text-[#0D3B38]">
              Our Network
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our <span className="text-[#F4A118]">Centers</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3 max-w-xl mx-auto px-4">
              Visit us at any of our 5 convenient locations across India
            </p>
          </div>
          
          {/* Timeline - Hidden line on mobile */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0D3B38] via-[#F4A118] to-[#0D3B38] -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row items-center gap-3 sm:gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 flex justify-end w-full">
                    <div 
                      className="bg-[#EEF7F4] rounded-xl p-4 sm:p-5 w-full md:max-w-xs shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                      style={{ borderLeft: "4px solid #F4A118" }}
                    >
                      <p className="font-bold text-lg sm:text-xl text-[#F4A118] mb-1 sm:mb-2">{m.year}</p>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{m.event}</p>
                      <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs bg-[#0D3B38] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg inline-block cursor-pointer">
                        Get Directions
                      </span>
                    </div>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-[#0D3B38] to-[#1a5c57] flex-shrink-0 z-10 hidden md:flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F4A118]"></div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <span className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-white font-semibold text-sm sm:text-base cursor-pointer" style={{ background: "linear-gradient(135deg, #0D3B38, #1a5c57)" }}>
              View All Centers →
            </span>
          </div>
        </div>
      </section>

      {/* Patient Resources Section - All 4 Resources with Links */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide bg-white text-[#0D3B38]">
              Helpful Resources
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Patient <span className="text-[#F4A118]">Resources</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3 max-w-xl mx-auto px-4">
              Educational materials, guides, and support for your healing journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {patientResources.map((resource, i) => (
              <Link 
                key={i} 
                href={resource.href}
                className="bg-white rounded-xl p-5 sm:p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer block"
                style={{ border: "1px solid #e5f0ec" }}
              >
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">{resource.icon}</div>
                <h3 className="font-bold text-base sm:text-lg mb-2 text-[#0D3B38]">{resource.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{resource.desc}</p>
                <span className="inline-block mt-3 text-[#F4A118] text-xs font-semibold group-hover:underline">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Program Works - Simple Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide bg-[#EEF7F4] text-[#0D3B38]">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              How Our <span className="text-[#F4A118]">Program Works</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3 max-w-xl mx-auto px-4">
              Simple 6-step journey to better health
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            {[
              { step: "1", title: "Submit Reports" },
              { step: "2", title: "Doctor Review" },
              { step: "3", title: "Personalized Plan" },
              { step: "4", title: "Start Program" },
              { step: "5", title: "Regular Monitoring" },
              { step: "6", title: "Long-term Support" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F4A118] text-white flex items-center justify-center mx-auto mb-2 font-bold text-sm sm:text-base">
                  {step.step}
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-700">{step.title}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <span className="text-[#F4A118] font-semibold text-sm cursor-pointer">
              View Complete Process →
            </span>
          </div>
        </div>
      </section>

      {/* CTA - Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-[#0D3B38] to-[#1a5c57] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#F4A118]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Begin Your <span className="text-[#F4A118]">Healing Journey?</span>
          </h2>
          <p className="text-white/80 text-xs sm:text-sm md:text-base mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Consult with our expert doctors today and take the first step towards better health with personalized Ayurvedic care.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <span className="">
             
            </span>
            <span className="">
             
            </span>
          </div>
        </div>
      </section>
    </>
  );
}