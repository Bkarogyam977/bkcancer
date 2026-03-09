// import Link from "next/link";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Services - BK Arogyam",
//   description: "Explore BK Arogyam's comprehensive Ayurvedic services including Panchakarma, herbal treatments, diet consultation, and more.",
// };

// const services = [
//   {
//     icon: "🌿",
//     title: "Herbal Medicine",
//     desc: "Customized herbal formulations using potent Ayurvedic herbs like Ashwagandha, Turmeric, Neem, and Guduchi to treat the root cause of disease.",
//     features: ["100% natural ingredients", "No harmful side effects", "Personalized formulations", "Scientifically validated herbs"],
//   },
//   {
//     icon: "🧘",
//     title: "Panchakarma Therapy",
//     desc: "A comprehensive detoxification and rejuvenation therapy that cleanses the body of accumulated toxins (ama) and restores natural energy flow.",
//     features: ["Vamana (Emesis therapy)", "Virechana (Purgation therapy)", "Basti (Enema therapy)", "Nasya (Nasal therapy)"],
//   },
//   {
//     icon: "🥗",
//     title: "Diet & Nutrition Counseling",
//     desc: "Personalized dietary guidance based on your unique Dosha constitution and specific health condition to accelerate healing.",
//     features: ["Dosha-specific meal plans", "Anti-cancer diet protocols", "Diabetes management diet", "Regular follow-up sessions"],
//   },
//   {
//     icon: "🧠",
//     title: "Yoga & Pranayama",
//     desc: "Therapeutic yoga and breathing exercises tailored to your health condition to reduce stress, improve immunity, and promote overall well-being.",
//     features: ["Therapeutic yoga asanas", "Pranayama breathing", "Meditation practices", "Online & offline sessions"],
//   },
//   {
//     icon: "💆",
//     title: "Ayurvedic Massage (Abhyanga)",
//     desc: "Traditional full-body oil massage using medicated herbal oils to improve circulation, relieve pain, and promote relaxation and healing.",
//     features: ["Medicated herbal oils", "Pain relief", "Improved circulation", "Stress reduction"],
//   },
//   {
//     icon: "🩺",
//     title: "Online Consultation",
//     desc: "Consult with our expert Ayurvedic doctors from the comfort of your home via video call or phone consultation.",
//     features: ["Available 7 days a week", "Video & phone consultation", "Medicines delivered home", "Follow-up included"],
//   },
// ];

// const process = [
//   { step: "1", title: "Initial Consultation", desc: "Detailed assessment of your health history, lifestyle, and dosha constitution." },
//   { step: "2", title: "Diagnosis & Planning", desc: "Our doctors create a personalized treatment plan tailored to your specific condition." },
//   { step: "3", title: "Treatment & Therapy", desc: "Begin your Ayurvedic treatment with herbal medicines and therapies." },
//   { step: "4", title: "Diet & Lifestyle Changes", desc: "Receive personalized diet and lifestyle guidance to accelerate healing." },
//   { step: "5", title: "Regular Follow-up", desc: "Ongoing monitoring and adjustment of your treatment plan for optimal results." },
// ];

// export default function ServicesPage() {
//   return (
//     <>
//       {/* Banner */}
//       <section style={{ backgroundColor: "#0D3B38" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Our <span style={{ color: "#F4A118" }}>Services</span>
//           </h1>
//           <p className="text-white/70 max-w-2xl mx-auto text-lg">
//             Comprehensive Ayurvedic healthcare services designed to heal, restore, and rejuvenate.
//           </p>
//           <div className="flex justify-center gap-2 mt-4 text-sm text-white/50">
//             <Link href="/" className="hover:text-white transition">Home</Link>
//             <span>/</span>
//             <span style={{ color: "#F4A118" }}>Services</span>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold">
//               What We <span style={{ color: "#F4A118" }}>Offer</span>
//             </h2>
//             <p className="text-gray-500 mt-3 max-w-xl mx-auto">
//               A full spectrum of Ayurvedic treatments to address your unique health needs.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((svc) => (
//               <div key={svc.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition group">
//                 <div style={{ backgroundColor: "#EEF7F4" }} className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
//                   {svc.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38" }}>{svc.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
//                 <ul className="space-y-1">
//                   {svc.features.map((f) => (
//                     <li key={f} className="flex gap-2 text-sm text-gray-500">
//                       <span style={{ color: "#F4A118" }}>✓</span> {f}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link href="/contact" style={{ color: "#0D3B38" }} className="inline-block mt-5 font-semibold text-sm hover:underline">
//                   Book This Service →
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Treatment Process */}
//       <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-3">
//             Our <span style={{ color: "#F4A118" }}>Treatment Process</span>
//           </h2>
//           <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
//             A structured, step-by-step approach to ensure the best possible health outcomes.
//           </p>
//           <div className="flex flex-col md:flex-row gap-0">
//             {process.map((p, i) => (
//               <div key={p.step} className="flex-1 relative">
//                 <div style={{ backgroundColor: "#0D3B38" }} className="rounded-t-xl p-6 text-center">
//                   <div style={{ backgroundColor: "#F4A118" }} className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
//                     {p.step}
//                   </div>
//                   <h3 className="text-white font-bold">{p.title}</h3>
//                 </div>
//                 <div className="bg-white p-5 rounded-b-xl shadow-sm">
//                   <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
//                 </div>
//                 {i < process.length - 1 && (
//                   <div className="hidden md:flex absolute top-6 -right-3 z-10 items-center justify-center w-6 h-6 bg-white rounded-full shadow text-gray-400 text-xs font-bold">
//                     →
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Specializations */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Our <span style={{ color: "#F4A118" }}>Specializations</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: "🎗️", title: "Cancer Treatment", desc: "Ayurvedic support alongside conventional cancer therapy to boost immunity and reduce side effects." },
//               { icon: "🫘", title: "Kidney Disease", desc: "Natural Ayurvedic protocols to improve kidney function and prevent further damage." },
//               { icon: "💉", title: "Diabetes Management", desc: "Holistic approach to manage blood sugar levels through herbs, diet, and lifestyle." },
//               { icon: "🫀", title: "Liver Disease", desc: "Detoxification and herbal treatment to restore liver health and improve function." },
//             ].map((spec) => (
//               <div key={spec.title} style={{ backgroundColor: "#EEF7F4", borderBottom: "4px solid #F4A118" }} className="rounded-xl p-6 text-center">
//                 <div className="text-4xl mb-3">{spec.icon}</div>
//                 <h3 className="font-bold text-gray-800 mb-2">{spec.title}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">{spec.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{ backgroundColor: "#F4A118" }} className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-3">Start Your Treatment Today</h2>
//           <p className="text-white/90 mb-6">Our experts are ready to create a personalized treatment plan for you.</p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link href="/contact" style={{ backgroundColor: "#0D3B38" }} className="px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition">
//               Book Consultation
//             </Link>
//             <a href="tel:+918081222333" className="px-8 py-3 rounded-lg bg-white font-bold hover:opacity-90 transition" style={{ color: "#0D3B38" }}>
//               📞 +91 8081222333
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }





import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services - BK Arogyam",
  description: "Explore BK Arogyam's comprehensive Ayurvedic services including Panchakarma, herbal treatments, diet consultation, and more.",
};

const services = [
  {
    icon: "🌿",
    title: "Herbal Medicine",
    desc: "Customized herbal formulations using potent Ayurvedic herbs like Ashwagandha, Turmeric, Neem, and Guduchi to treat the root cause of disease.",
    features: ["100% natural ingredients", "No harmful side effects", "Personalized formulations", "Scientifically validated herbs"],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/65265.png",
    imageAlt: "Herbal Medicine - Ayurvedic herbs"
  },
  {
    icon: "🧘",
    title: "Panchakarma Therapy",
    desc: "A comprehensive detoxification and rejuvenation therapy that cleanses the body of accumulated toxins (ama) and restores natural energy flow.",
    features: ["Vamana (Emesis therapy)", "Virechana (Purgation therapy)", "Basti (Enema therapy)", "Nasya (Nasal therapy)"],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/p2.png",
    imageAlt: "Panchakarma Therapy - Ayurvedic detoxification"
  },
  {
    icon: "🥗",
    title: "Diet & Nutrition Counseling",
    desc: "Personalized dietary guidance based on your unique Dosha constitution and specific health condition to accelerate healing.",
    features: ["Dosha-specific meal plans", "Anti-cancer diet protocols", "Diabetes management diet", "Regular follow-up sessions"],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/d3.png",
    imageAlt: "Diet & Nutrition Counseling - Ayurvedic meal planning"
  },
  {
    icon: "🧠",
    title: "Yoga & Pranayama",
    desc: "Therapeutic yoga and breathing exercises tailored to your health condition to reduce stress, improve immunity, and promote overall well-being.",
    features: ["Therapeutic yoga asanas", "Pranayama breathing", "Meditation practices", "Online & offline sessions"],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_ntjdtantjdtantjd1.png",
    imageAlt: "Yoga & Pranayama - Ayurvedic breathing exercises"
  },
  {
    icon: "💆",
    title: "Ayurvedic Massage (Abhyanga)",
    desc: "Traditional full-body oil massage using medicated herbal oils to improve circulation, relieve pain, and promote relaxation and healing.",
    features: ["Medicated herbal oils", "Pain relief", "Improved circulation", "Stress reduction"],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_3rlpjs3rlpjs3rlp1.png",
    imageAlt: "Ayurvedic Massage - Abhyanga therapy"
  },
  {
    icon: "🩺",
    title: "Online Consultation",
    desc: "Consult with our expert Ayurvedic doctors from the comfort of your home via video call or phone consultation.",
    features: ["Available 7 days a week", "Video & phone consultation", "Medicines delivered home", "Follow-up included"],
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_iw0z8wiw0z8wiw0z1.png",
    imageAlt: "Online Consultation - Ayurvedic doctor video call"
  },
];

const process = [
  { step: "1", title: "Initial Consultation", desc: "Detailed assessment of your health history, lifestyle, and dosha constitution." },
  { step: "2", title: "Diagnosis & Planning", desc: "Our doctors create a personalized treatment plan tailored to your specific condition." },
  { step: "3", title: "Treatment & Therapy", desc: "Begin your Ayurvedic treatment with herbal medicines and therapies." },
  { step: "4", title: "Diet & Lifestyle Changes", desc: "Receive personalized diet and lifestyle guidance to accelerate healing." },
  { step: "5", title: "Regular Follow-up", desc: "Ongoing monitoring and adjustment of your treatment plan for optimal results." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Banner with Image - Fully Responsive */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/8/Gemini_Generated_Image_3h93oq3h93oq3h931.png"
            alt="BK Arogyam Services - Ayurvedic Healing"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>

        {/* Content - Responsive Text */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Our <span style={{ color: "#F4A118" }}>Services</span>
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-4 sm:mb-5 md:mb-6">
                Comprehensive Ayurvedic healthcare services designed to heal, restore, and rejuvenate.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span style={{ color: "#F4A118" }}>Services</span>
              </div>
              
              {/* Optional: Add a quick stats or CTA - Responsive Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href="/contact" 
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#F4A118] to-[#d4600a] rounded-lg text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg text-center text-sm sm:text-base"
                >
                  Book Consultation
                </Link>
                <a 
                  href="tel:+918081222333" 
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold border border-white/30 hover:bg-white/20 transition-all text-center text-sm sm:text-base"
                >
                  📞 Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave - Hidden on mobile for better performance */}
        <div className="hidden sm:block absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="0.95" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid - Fully Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              What We <span style={{ color: "#F4A118" }}>Offer</span>
            </h2>
            <p className="text-gray-500 mt-2 sm:mt-3 max-w-xl mx-auto text-sm sm:text-base px-4">
              A full spectrum of Ayurvedic treatments to address your unique health needs.
            </p>
          </div>
          
          {/* Responsive Grid: 1 column mobile, 2 columns tablet, 3 columns desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition group">
                {/* Image Container - Responsive height */}
                <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Overlay with icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl sm:text-2xl shadow-lg">
                    {svc.icon}
                  </div>
                </div>
                
                {/* Content - Responsive padding and text */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2" style={{ color: "#0D3B38" }}>{svc.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {svc.desc}
                  </p>
                  
                  {/* Features - Using Tailwind's built-in line-clamp */}
                  <ul className="space-y-0.5 sm:space-y-1 mb-3 sm:mb-4">
                    {svc.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
                        <span style={{ color: "#F4A118" }} className="flex-shrink-0">✓</span> 
                        <span className="line-clamp-1 sm:line-clamp-none">{f}</span>
                      </li>
                    ))}
                    {svc.features.length > 3 && (
                      <li className="text-xs sm:text-sm text-gray-400 mt-1">
                        +{svc.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    style={{ color: "#0D3B38" }} 
                    className="inline-block mt-2 sm:mt-3 md:mt-5 font-semibold text-xs sm:text-sm hover:underline"
                  >
                    Book This Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process - Fully Responsive */}
      <section style={{ backgroundColor: "#EEF7F4" }} className="py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3">
            Our <span style={{ color: "#F4A118" }}>Treatment Process</span>
          </h2>
          <p className="text-center text-gray-500 mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto text-sm sm:text-base px-4">
            A structured, step-by-step approach to ensure the best possible health outcomes.
          </p>
          
          {/* Responsive: Stack on mobile, horizontal on tablet/desktop */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex-1 relative">
                <div style={{ backgroundColor: "#0D3B38" }} className="rounded-t-xl p-4 sm:p-5 md:p-6 text-center">
                  <div style={{ backgroundColor: "#F4A118" }} className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-1.5 sm:mb-2">
                    {p.step}
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base">{p.title}</h3>
                </div>
                <div className="bg-white p-4 sm:p-5 rounded-b-xl shadow-sm min-h-[100px] sm:min-h-[120px]">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10 items-center justify-center w-6 h-6 bg-white rounded-full shadow text-gray-400 text-xs font-bold transform -translate-y-1/2">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Process Indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-xs text-gray-500">Swipe for more steps →</p>
          </div>
        </div>
      </section>

      {/* Specializations - Fully Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
            Our <span style={{ color: "#F4A118" }}>Specializations</span>
          </h2>
          
          {/* Responsive Grid: 1 column mobile, 2 columns tablet, 4 columns desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {[
              { icon: "🎗️", title: "Cancer Treatment", desc: "Ayurvedic support alongside conventional cancer therapy to boost immunity and reduce side effects." },
              { icon: "🫘", title: "Kidney Disease", desc: "Natural Ayurvedic protocols to improve kidney function and prevent further damage." },
              { icon: "💉", title: "Diabetes Management", desc: "Holistic approach to manage blood sugar levels through herbs, diet, and lifestyle." },
              { icon: "🫀", title: "Liver Disease", desc: "Detoxification and herbal treatment to restore liver health and improve function." },
            ].map((spec) => (
              <div key={spec.title} style={{ backgroundColor: "#EEF7F4", borderBottom: "4px solid #F4A118" }} className="rounded-xl p-4 sm:p-5 md:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{spec.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1.5 sm:mb-2 text-base sm:text-lg">{spec.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Fully Responsive */}
      <section style={{ backgroundColor: "#F4A118" }} className="py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">Start Your Treatment Today</h2>
          <p className="text-white/90 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base px-4">
            Our experts are ready to create a personalized treatment plan for you.
          </p>
          
          {/* Responsive Buttons - Stack on mobile, row on tablet/desktop */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link 
              href="/contact" 
              style={{ backgroundColor: "#0D3B38" }} 
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-white font-bold hover:opacity-90 transition text-sm sm:text-base"
            >
              Book Consultation
            </Link>
            <a 
              href="tel:+918081222333" 
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-white font-bold hover:opacity-90 transition text-sm sm:text-base" 
              style={{ color: "#0D3B38" }}
            >
              📞 +91 8081222333
            </a>
          </div>
        </div>
      </section>
    </>
  );
}