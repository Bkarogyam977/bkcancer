// import Link from "next/link";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Us - BK Arogyam",
//   description: "Learn about BK Arogyam's mission, our expert doctors, and our holistic Ayurvedic approach to healing chronic diseases.",
// };

// const team = [
//   { name: "Dr. Arun Kumar", role: "Chief Ayurvedic Physician", exp: "20+ years experience in treating cancer & kidney disease" },
//   { name: "Dr. Priya Sharma", role: "Panchakarma Specialist", exp: "15+ years in detoxification & rejuvenation therapies" },
//   { name: "Dr. Rajesh Verma", role: "Herbal Medicine Expert", exp: "18+ years in formulating personalised herbal treatments" },
//   { name: "Dr. Sunita Yadav", role: "Diet & Lifestyle Consultant", exp: "12+ years guiding patients on Ayurvedic nutrition" },
// ];

// const milestones = [
//   { year: "2000", event: "BK Arogyam founded in New Delhi" },
//   { year: "2005", event: "Opened 2nd clinic in Lucknow" },
//   { year: "2010", event: "NABH Accreditation achieved" },
//   { year: "2015", event: "Expanded to 10 clinics across India" },
//   { year: "2020", event: "10,000+ patients successfully treated" },
//   { year: "2024", event: "17 locations — 6 hospitals & 11 clinics" },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       {/* Page Banner */}
//       <section style={{ backgroundColor: "#0D3B38" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             About <span style={{ color: "#F4A118" }}>BK Arogyam</span>
//           </h1>
//           <p className="text-white/70 max-w-2xl mx-auto text-lg">
//             A trusted name in Ayurvedic healthcare — healing lives through the ancient wisdom of India.
//           </p>
//           <div className="flex justify-center gap-2 mt-4 text-sm text-white/50">
//             <Link href="/" className="hover:text-white transition">Home</Link>
//             <span>/</span>
//             <span style={{ color: "#F4A118" }}>About Us</span>
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold mb-6">
//                 Our <span style={{ color: "#F4A118" }}>Story</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 BK Arogyam was founded with a single vision: to bring the ancient healing wisdom of Ayurveda to every corner of India. We believe that nature holds the cure for every ailment, and Ayurveda is the science that unlocks this potential.
//               </p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Over the past 25 years, BK Arogyam has grown from a single clinic in New Delhi to a network of 17 locations across India, including 6 full-fledged hospitals and 11 specialized clinics. Our team of experienced Ayurvedic doctors and therapists has helped more than 10,000 patients regain their health and vitality.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 We specialize in treating chronic conditions such as cancer, kidney disease, diabetes, liver disease, and more — through personalized Ayurvedic protocols that address the root cause rather than just managing symptoms.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { number: "25+", label: "Years of Experience" },
//                 { number: "10,000+", label: "Patients Treated" },
//                 { number: "17", label: "Clinic Locations" },
//                 { number: "50+", label: "Expert Doctors" },
//               ].map((stat) => (
//                 <div key={stat.label} style={{ backgroundColor: "#EEF7F4", borderLeft: "4px solid #F4A118" }} className="rounded-xl p-6">
//                   <p style={{ color: "#0D3B38" }} className="text-3xl font-bold">{stat.number}</p>
//                   <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Mission & Vision */}
//       <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Our <span style={{ color: "#F4A118" }}>Mission & Values</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🎯",
//                 title: "Our Mission",
//                 desc: "To provide accessible, affordable, and effective Ayurvedic healthcare that treats the root cause of disease and promotes long-term wellness.",
//               },
//               {
//                 icon: "🔭",
//                 title: "Our Vision",
//                 desc: "To be India's most trusted Ayurvedic healthcare network, spreading the benefits of holistic healing to every corner of the country.",
//               },
//               {
//                 icon: "💚",
//                 title: "Our Values",
//                 desc: "Compassion, integrity, and excellence — we treat every patient with respect and dedication, following the highest standards of Ayurvedic practice.",
//               },
//             ].map((item) => (
//               <div key={item.title} className="bg-white rounded-2xl p-8 text-center shadow-sm">
//                 <div className="text-5xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold mb-3" style={{ color: "#0D3B38" }}>{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Approach */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div style={{ backgroundColor: "#0D3B38" }} className="rounded-2xl p-8 text-white">
//               <h3 className="text-2xl font-bold mb-6" style={{ color: "#F4A118" }}>The BK Arogyam Approach</h3>
//               <ul className="space-y-4">
//                 {[
//                   "Personalized diagnosis based on your unique Dosha constitution",
//                   "Customized herbal formulations for your specific condition",
//                   "Panchakarma detoxification to cleanse the body of toxins",
//                   "Dietary and lifestyle guidance tailored to your needs",
//                   "Yoga and Pranayama recommendations for holistic healing",
//                   "Regular follow-up and continuous support throughout treatment",
//                 ].map((point) => (
//                   <li key={point} className="flex gap-3 items-start">
//                     <span style={{ color: "#F4A118" }} className="text-lg mt-0.5">✓</span>
//                     <span className="text-white/80">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h2 className="text-4xl font-bold mb-6">
//                 Why <span style={{ color: "#F4A118" }}>Ayurveda Works</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Unlike modern medicine that focuses on suppressing symptoms, Ayurveda identifies and eliminates the root cause of disease. This fundamental difference makes Ayurvedic treatment more effective for chronic conditions.
//               </p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Ayurveda recognizes that every person is unique and requires a personalized approach. Our doctors spend time understanding your complete health picture — physical, mental, and spiritual — before creating your treatment protocol.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 The result is a treatment plan that not only heals the current condition but also strengthens the body&apos;s natural immunity to prevent future disease.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Doctors */}
//       <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-3">
//             Our Expert <span style={{ color: "#F4A118" }}>Doctors</span>
//           </h2>
//           <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
//             Our team of highly experienced Ayurvedic physicians are dedicated to your healing journey.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {team.map((doc) => (
//               <div key={doc.name} className="bg-white rounded-2xl p-6 text-center shadow-sm">
//                 <div style={{ backgroundColor: "#0D3B38" }} className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
//                   {doc.name.split(" ").map((n) => n[0]).join("")}
//                 </div>
//                 <h3 className="font-bold text-gray-800 text-lg">{doc.name}</h3>
//                 <p style={{ color: "#F4A118" }} className="text-sm font-semibold my-1">{doc.role}</p>
//                 <p className="text-gray-500 text-xs leading-relaxed">{doc.exp}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Milestones */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Our <span style={{ color: "#F4A118" }}>Journey</span>
//           </h2>
//           <div className="relative">
//             <div style={{ backgroundColor: "#0D3B38" }} className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block" />
//             <div className="space-y-8">
//               {milestones.map((m, i) => (
//                 <div key={m.year} className={`flex flex-col md:flex-row items-center gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
//                   <div className="md:w-1/2 flex justify-end">
//                     <div style={{ backgroundColor: i % 2 === 0 ? "#EEF7F4" : "white", borderLeft: "4px solid #F4A118" }} className="rounded-xl p-4 max-w-xs w-full shadow-sm">
//                       <p style={{ color: "#F4A118" }} className="font-bold text-lg">{m.year}</p>
//                       <p className="text-gray-700 text-sm">{m.event}</p>
//                     </div>
//                   </div>
//                   <div style={{ backgroundColor: "#0D3B38" }} className="w-4 h-4 rounded-full flex-shrink-0 z-10 hidden md:block" />
//                   <div className="md:w-1/2" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{ backgroundColor: "#0D3B38" }} className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-3">
//             Ready to Begin Your <span style={{ color: "#F4A118" }}>Healing Journey?</span>
//           </h2>
//           <p className="text-white/70 mb-6">Consult with our expert doctors today and take the first step towards better health.</p>
//           <Link href="/contact" style={{ backgroundColor: "#F4A118" }} className="inline-block px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition">
//             Book Free Consultation
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }





import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - BK Cancer Care",
  description: "Learn about BK Cancer Care's mission, our expert doctors, and our holistic Ayurvedic approach to healing chronic diseases.",
};

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

export default function AboutPage() {
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
                <Link 
                  href="/contact" 
                  className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#F4A118] to-[#d4600a] rounded-xl text-white font-bold text-sm sm:text-base md:text-lg hover:opacity-90 transition-all hover:scale-105 shadow-2xl text-center"
                >
                  Free Consultation
                </Link>
                <Link 
                  href="/disease" 
                  className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-bold text-sm sm:text-base md:text-lg border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105 text-center"
                >
                  View Treatments
                </Link>
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
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctors - Responsive Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide bg-white text-[#0D3B38]">
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
                className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
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
                      className="bg-[#EEF7F4] rounded-xl p-4 sm:p-5 w-full md:max-w-xs shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                      style={{ borderLeft: "4px solid #F4A118" }}
                    >
                      <p className="font-bold text-lg sm:text-xl text-[#F4A118] mb-1 sm:mb-2">{m.year}</p>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{m.event}</p>
                      <button className="mt-2 sm:mt-3 text-[10px] sm:text-xs bg-[#0D3B38] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-[#1a5c57] transition">
                        Get Directions
                      </button>
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
          <Link 
            href="/contact" 
            className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl text-white font-bold text-sm sm:text-base md:text-lg shadow-2xl bg-gradient-to-r from-[#F4A118] to-[#d4600a] hover:from-[#d4600a] hover:to-[#F4A118] transition-all hover:scale-105"
          >
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}