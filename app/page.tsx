// import Link from "next/link";
// import HeroSlider from "@/components/HeroSlider";
// import StatsCounter from "@/components/StatsCounter";

// /* ─── Heading font helper ───────────────────────────────── */
// const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
// const body    = { fontFamily: "'Open Sans', Arial, sans-serif" };

// /* ─── DATA ─────────────────────────────────────────────── */

// const whyCards = [
//   {
//     icon: "🧪",
//     title: "Research-Based Herbal Medicines",
//     desc: "No side effects like hair loss, nausea, vomiting, or weight loss. Pure Ayurvedic formulations validated by modern research.",
//   },
//   {
//     icon: "😌",
//     title: "Painless Ayurvedic Therapy",
//     desc: "No damage to taste buds. Prevents Osteoradionecrosis (bone death) that is common in radiation therapy.",
//   },
//   {
//     icon: "💰",
//     title: "Affordable Treatment",
//     desc: "Economical and accessible Ayurvedic cancer care for every family — a fraction of the cost of conventional methods.",
//   },
//   {
//     icon: "🌿",
//     title: "100% Natural Procedure",
//     desc: "Normal healthy cells are fully protected. Only cancer cells are targeted through precise Ayurvedic protocols.",
//   },
//   {
//     icon: "🛡️",
//     title: "Immunity Strengthening",
//     desc: "Panchakarma and herbal rasayanas train the immune system to fight cancer systematically throughout the body.",
//   },
//   {
//     icon: "⚡",
//     title: "Quick Improvement",
//     desc: "Significant relief even in advanced cancer stages. Better quality of life from the very first week of treatment.",
//   },
// ];

// const journeySteps = [
//   {
//     num: "01",
//     icon: "📅",
//     title: "Appointment Booking",
//     desc: "Call, WhatsApp, or book online. Available 7 days a week for your convenience.",
//   },
//   {
//     num: "02",
//     icon: "👨‍⚕️",
//     title: "Doctor's Consultation",
//     desc: "Free initial consultation with our senior Ayurvedic cancer specialist.",
//   },
//   {
//     num: "03",
//     icon: "🌿",
//     title: "Treatment Starts",
//     desc: "Personalized Ayurvedic protocol begins — herbs, Panchakarma & diet plan.",
//   },
//   {
//     num: "04",
//     icon: "📊",
//     title: "Regular Follow-up",
//     desc: "Ongoing monitoring and treatment adjustment for optimal lasting results.",
//   },
// ];

// const cancerTypes = [
//   { name: "Lung Cancer Treatment",             emoji: "🫁",  href: "/disease" },
//   { name: "Throat Cancer Treatment",           emoji: "🗣️", href: "/disease" },
//   { name: "Blood / Leukemia Treatment",        emoji: "🩸",  href: "/disease" },
//   { name: "Liver Cancer Treatment",            emoji: "🟤",  href: "/disease" },
//   { name: "Breast Cancer Treatment",           emoji: "🎗️",  href: "/disease" },
//   { name: "Kidney Cancer Treatment",           emoji: "🫘",  href: "/disease" },
//   { name: "Cervical Cancer Treatment",         emoji: "🌸",  href: "/disease" },
//   { name: "Brain Tumor Treatment",             emoji: "🧠",  href: "/disease" },
//   { name: "Prostate Cancer Treatment",         emoji: "🔵",  href: "/disease" },
//   { name: "Oral Cancer Treatment",             emoji: "👄",  href: "/disease" },
//   { name: "Colon Cancer Treatment",            emoji: "🌀",  href: "/disease" },
//   { name: "Stomach Cancer Treatment",          emoji: "🫃",  href: "/disease" },
// ];

// const reviews = [
//   {
//     name: "Ramesh Kumar",
//     time: "2 weeks ago",
//     cancerType: "Kidney Cancer – Stage 3",
//     text: "My father had kidney cancer stage 3. After 3 months of BK Cancer Healer Therapy, his tumor size reduced significantly. No side effects whatsoever. We are very hopeful now. Thank you Dr. BK Chaurasia and the entire Varanasi team.",
//   },
//   {
//     name: "Sunita Devi",
//     time: "1 month ago",
//     cancerType: "Breast Cancer – Stage 2",
//     text: "My mother was diagnosed with breast cancer. We were scared to try anything other than chemotherapy. After consulting BK Arogyam, she started the herbal treatment alongside. Her immunity improved and she completed her journey with much less suffering.",
//   },
//   {
//     name: "Mohit Sharma",
//     time: "3 weeks ago",
//     cancerType: "Blood Cancer – Leukemia",
//     text: "Blood cancer treatment through Ayurveda felt impossible but BK Cancer Care proved us wrong. The Panchakarma detox helped my brother recover faster. The doctors are very knowledgeable and caring.",
//   },
//   {
//     name: "Priya Singh",
//     time: "2 months ago",
//     cancerType: "Lung Cancer – Stage 3",
//     text: "Came to BK Arogyadham after failed chemo for lung cancer. Dr. Chaurasia gave us hope when no one else did. 6 months later, quality of life has improved dramatically. Highly recommended for anyone seeking natural cancer care.",
//   },
// ];

// const awards = [
//   "Best Ayurvedic Cancer Center 2023",
//   "National Healthcare Excellence Award",
//   "India's Top Vaidya Recognition",
//   "Ayush Ministry Certified Center",
//   "Cancer Care Innovation Award",
//   "Patient's Choice Award 2024",
// ];

// const videoTestimonials = [
//   { name: "Suresh Patel",   cancerType: "Liver Cancer",   bg: "#e8f5ee" },
//   { name: "Kavita Rao",     cancerType: "Breast Cancer",  bg: "#fde8e8" },
//   { name: "Arjun Singh",    cancerType: "Brain Tumor",    bg: "#e8eeff" },
// ];

// const consultationBonusSteps = [
//   { num: "1", icon: "☏",  title: "Call / WhatsApp / Chat",          desc: "Reach us via phone, WhatsApp or our website chat anytime." },
//   { num: "2", icon: "📲", title: "Install ArogyamTalk App",         desc: "Download our app for seamless doctor communication." },
//   { num: "3", icon: "💰", title: "Register & Get ₹201 Bonus",       desc: "Complete registration and receive your consultation bonus." },
//   { num: "4", icon: "💳", title: "Make Payment",                    desc: "Secure and easy online payment options available." },
//   { num: "5", icon: "👨‍⚕️", title: "Select Cancer Specialist",       desc: "Choose your preferred Ayurvedic oncology expert." },
//   { num: "6", icon: "🩺", title: "Begin Cancer Treatment",          desc: "Start your personalised Ayurvedic healing journey." },
// ];

// /* ─── PAGE ─────────────────────────────────────────────── */

// export default function HomePage() {
//   return (
//     <>
//       {/* ══════════════════════════════════════════════════
//           HERO SLIDER
//       ══════════════════════════════════════════════════ */}
//       <HeroSlider />

//       {/* ══════════════════════════════════════════════════
//           QUICK ACTION BAR
//       ══════════════════════════════════════════════════ */}
//       <section className="bg-white" style={{ borderBottom: "1px solid #e5f0ec" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
//             {[
//               { icon: "📅", title: "Book Appointment",   sub: "Free first consultation",          href: "/contact",  bg: "#0D3B38" },
//               { icon: "📍", title: "Locate Clinic",      sub: "20+ centres across India",         href: "/about",    bg: "#1B6B5A" },
//               { icon: "💉", title: "Immunotherapy Info", sub: "Ayurvedic immunology protocols",   href: "/services", bg: "#F4A118" },
//               { icon: "🎗️", title: "Cancer Types",       sub: "All 20+ cancer types covered",    href: "/disease",  bg: "#c0392b" },
//             ].map((item) => (
//               <Link
//                 key={item.title}
//                 href={item.href}
//                 className="group flex flex-col items-center gap-3 py-7 px-4 text-center hover:bg-gray-50 transition"
//               >
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform"
//                   style={{ backgroundColor: item.bg }}
//                 >
//                   <span>{item.icon}</span>
//                 </div>
//                 <div>
//                   <p className="font-bold text-sm" style={{ color: "#0D3B38", ...heading }}>{item.title}</p>
//                   <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           APPOINTMENT BOOKING FORM – 2 COLUMN
//       ══════════════════════════════════════════════════ */}
//       <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

//             {/* Left – Info */}
//             <div className="lg:col-span-3">
//               <span
//                 className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide"
//                 style={{ backgroundColor: "#0D3B38", color: "white" }}
//               >
//                 Free Consultation
//               </span>
//               <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#0D3B38", ...heading }}>
//                 Book Your Appointment Today!
//               </h2>
//               <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg" style={body}>
//                 Our friendly cancer care team will help you find a convenient time. Get expert Ayurvedic guidance
//                 within 1 hour of booking your slot.
//               </p>

//               {/* Feature list */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {[
//                   { icon: "🌿", text: "100% Natural Treatment" },
//                   { icon: "👨‍⚕️", text: "20+ Cancer Specialists" },
//                   { icon: "🆓", text: "Free Initial Consultation" },
//                   { icon: "📍", text: "20+ Clinics Pan India" },
//                   { icon: "📋", text: "Free Report Second Opinion" },
//                   { icon: "💊", text: "Personalised Herb Protocol" },
//                 ].map((f) => (
//                   <div key={f.text} className="flex items-center gap-3">
//                     <span className="text-xl">{f.icon}</span>
//                     <span className="text-sm font-semibold" style={{ color: "#0D3B38" }}>{f.text}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Phone CTA */}
//               <div
//                 className="mt-8 flex items-center gap-4 rounded-2xl p-5"
//                 style={{ backgroundColor: "#0D3B38" }}
//               >
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
//                   style={{ backgroundColor: "#F4A118" }}
//                 >
//                   📞
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-xs mb-0.5">Call Us Now — Mon–Sat, 10 AM–7 PM</p>
//                   <a
//                     href="tel:+918081222333"
//                     className="text-2xl font-extrabold hover:underline"
//                     style={{ color: "#F4A118" }}
//                   >
//                     +91 8081222333
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right – Form */}
//             <div
//               className="lg:col-span-2 rounded-2xl shadow-lg p-7"
//               style={{ backgroundColor: "white", border: "1px solid #c8e8e0" }}
//             >
//               <h3 className="text-lg font-extrabold mb-1" style={{ color: "#0D3B38", ...heading }}>
//                 Book An Appointment
//               </h3>
//               <p className="text-gray-400 text-xs mb-5">Fill the form — our team calls back within 1 hour.</p>
//               <form className="space-y-3">
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-700"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-700"
//                   />
//                 </div>
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-700"
//                 />
//                 <input
//                   type="date"
//                   className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-500"
//                 />
//                 <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-500">
//                   <option value="">Type of Cancer</option>
//                   <option>Breast Cancer</option>
//                   <option>Lung Cancer</option>
//                   <option>Blood Cancer / Leukemia</option>
//                   <option>Liver Cancer</option>
//                   <option>Kidney Cancer</option>
//                   <option>Cervical Cancer</option>
//                   <option>Prostate Cancer</option>
//                   <option>Brain Tumor</option>
//                   <option>Oral Cancer</option>
//                   <option>Colon Cancer</option>
//                   <option>Throat Cancer</option>
//                   <option>Stomach Cancer</option>
//                   <option>Other</option>
//                 </select>
//                 <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-500">
//                   <option value="">Select State</option>
//                   {["Uttar Pradesh","Delhi","Maharashtra","Gujarat","Rajasthan","Madhya Pradesh",
//                     "Bihar","West Bengal","Karnataka","Tamil Nadu","Kerala","Andhra Pradesh",
//                     "Telangana","Punjab","Haryana","Jharkhand","Odisha","Assam","Other"].map(s => (
//                     <option key={s}>{s}</option>
//                   ))}
//                 </select>
//                 <button
//                   type="submit"
//                   style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
//                   className="w-full py-3 rounded-xl text-white font-extrabold text-base hover:opacity-90 transition shadow-sm"
//                 >
//                   Book An Appointment →
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           WHY BK CANCER HEALER THERAPY
//       ══════════════════════════════════════════════════ */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <span
//               className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide"
//               style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
//             >
//               Our Advantage
//             </span>
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#0D3B38", ...heading }}>
//               Why BK Cancer Healer Therapy?
//             </h2>
//             <p className="text-gray-500 text-sm max-w-xl mx-auto" style={body}>
//               The Ayurvedic Way to Fight Cancer — Naturally, Safely, Effectively
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {whyCards.map((card) => (
//               <div
//                 key={card.title}
//                 className="bg-white rounded-2xl p-6 hover:shadow-xl transition group"
//                 style={{
//                   border: "1px solid #e5f0ec",
//                   borderTop: "3px solid #0D3B38",
//                 }}
//               >
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform"
//                   style={{ backgroundColor: "#EEF7F4" }}
//                 >
//                   {card.icon}
//                 </div>
//                 <h3 className="font-extrabold text-gray-800 text-base mb-2" style={heading}>{card.title}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed" style={body}>{card.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           STATS COUNTER
//       ══════════════════════════════════════════════════ */}
//       <StatsCounter />

//       {/* ══════════════════════════════════════════════════
//           CUTTING-EDGE THERAPY SECTION – 2 COLUMN
//       ══════════════════════════════════════════════════ */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

//             {/* Left – Text */}
//             <div>
//               <p className="text-xs font-extrabold tracking-widest uppercase mb-2" style={{ color: "#F4A118" }}>
//                 Cutting-Edge
//               </p>
//               <h2 className="text-3xl md:text-4xl font-extrabold mb-1 leading-tight" style={{ color: "#0D3B38", ...heading }}>
//                 BK Cancer Healer Therapy
//               </h2>
//               <p className="text-gray-400 text-sm mb-7" style={body}>
//                 A Holistic Ayurvedic Approach | Aiming for Complete Well-being
//               </p>

//               {[
//                 {
//                   heading: "How Does BK Cancer Healer Therapy Work?",
//                   points: [
//                     "Strengthens immune system to recognize and fight abnormal cancer cells",
//                     "Balances Tridosha (Vata, Pitta, Kapha) to restore body's natural defence",
//                     "Supports mind-body healing simultaneously through Yoga and Meditation",
//                     "Detoxifies accumulated toxins (Ama) using targeted Panchakarma procedures",
//                   ],
//                 },
//                 {
//                   heading: "What BK Cancer Healer Therapy Does:",
//                   points: [
//                     "Terminates or halts cancer cell growth depending on individual case",
//                     "Prevents metastasis — stops cancer from spreading to other organs",
//                     "Enhances immunity and improves quality of life significantly",
//                     "Can be combined with modern oncology for synergistic benefit",
//                   ],
//                 },
//                 {
//                   heading: "Key Benefits Over Conventional Treatment:",
//                   points: [
//                     "Zero side effects — no hair loss, no nausea, no bone damage",
//                     "Normal healthy cells are completely unaffected throughout treatment",
//                     "Faster recovery with long-term wellness and disease prevention",
//                   ],
//                 },
//               ].map((section) => (
//                 <div key={section.heading} className="mb-6">
//                   <h3 className="font-bold text-sm mb-3" style={{ color: "#F4A118", ...heading }}>
//                     {section.heading}
//                   </h3>
//                   <ul className="space-y-2">
//                     {section.points.map((p) => (
//                       <li key={p} className="flex gap-2 items-start text-sm text-gray-500" style={body}>
//                         <span style={{ color: "#F4A118" }} className="mt-0.5 flex-shrink-0">•</span>
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* Right – Visual card */}
//             <div>
//               {/* Doctor dummy image placeholder */}
//               <div
//                 className="rounded-3xl flex items-center justify-center mb-5 shadow-lg overflow-hidden"
//                 style={{
//                   background: "linear-gradient(135deg, #0D3B38, #1a5c57)",
//                   height: 340,
//                   border: "3px solid #EEF7F4",
//                 }}
//               >
//                 <div className="text-center text-white px-8">
//                   <div className="text-8xl mb-4">👨‍⚕️</div>
//                   <p className="font-bold text-lg" style={heading}>Dr. BK Chaurasia</p>
//                   <p className="text-white/60 text-sm mt-1">Founder & Chief Vaidya</p>
//                   <p className="text-white/50 text-xs mt-1">24+ Years in Ayurvedic Oncology</p>
//                 </div>
//               </div>

//               {/* Panchakarma info card */}
//               <div
//                 className="rounded-2xl p-5"
//                 style={{ backgroundColor: "#EEF7F4", border: "1px solid #c8e8e0" }}
//               >
//                 <p className="font-extrabold text-sm mb-3" style={{ color: "#0D3B38", ...heading }}>
//                   🌿 Panchakarma Therapies Included:
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {["Abhyanga", "Shirodhara", "Nasya", "Basti", "Virechana", "Raktamokshana"].map((t) => (
//                     <span
//                       key={t}
//                       className="text-xs font-semibold px-3 py-1.5 rounded-full"
//                       style={{ backgroundColor: "#0D3B38", color: "white" }}
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-gray-500 text-xs mt-3 leading-relaxed" style={body}>
//                   All therapies are customised based on the patient&apos;s Prakriti (constitution),
//                   cancer type, and current treatment stage.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           YOUR JOURNEY WITH US – 4 STEPS
//       ══════════════════════════════════════════════════ */}
//       <section style={{ backgroundColor: "#F8F9FA" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <span
//               className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide"
//               style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
//             >
//               Simple Process
//             </span>
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#0D3B38", ...heading }}>
//               Your Journey With Us
//             </h2>
//             <p className="text-gray-500 text-sm max-w-xl mx-auto" style={body}>
//               Simple steps to begin your Ayurvedic Cancer Healing journey
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//             {journeySteps.map((step, i) => (
//               <div key={step.num} className="relative">
//                 <div
//                   className="bg-white rounded-2xl p-7 text-center shadow-sm h-full relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
//                   style={{ border: "1px solid #e5f0ec" }}
//                 >
//                   {/* Watermark number */}
//                   <p
//                     className="absolute top-3 left-4 text-7xl font-extrabold leading-none select-none"
//                     style={{ color: "#0D3B38", opacity: 0.05 }}
//                   >
//                     {step.num}
//                   </p>
//                   {/* Icon */}
//                   <div
//                     className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 relative z-10"
//                     style={{ backgroundColor: "#F4A118" }}
//                   >
//                     {step.icon}
//                   </div>
//                   <h3 className="font-extrabold text-gray-800 text-base mb-2 relative z-10" style={heading}>
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm leading-relaxed relative z-10" style={body}>
//                     {step.desc}
//                   </p>
//                 </div>
//                 {/* Arrow connector */}
//                 {i < journeySteps.length - 1 && (
//                   <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 -translate-y-1/2 items-center gap-[3px]">
//                     {[0,1,2].map((d) => (
//                       <div key={d} style={{ width: 5, height: 2, backgroundColor: "#F4A118" }} className="rounded-full" />
//                     ))}
//                     <span style={{ color: "#F4A118" }} className="font-bold text-xs">▶</span>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link
//               href="/contact"
//               style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
//               className="inline-block px-10 py-4 rounded-xl text-white font-extrabold text-lg hover:opacity-90 transition shadow-lg"
//             >
//               Book Your First Consultation →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           CANCER TYPES GRID
//       ══════════════════════════════════════════════════ */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
//             <div>
//               <span
//                 className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide"
//                 style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
//               >
//                 What We Treat
//               </span>
//               <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#0D3B38", ...heading }}>
//                 Cancer Types &amp; Our Ayurvedic Treatment
//               </h2>
//             </div>
//             <Link
//               href="/disease"
//               style={{ border: "2px solid #0D3B38", color: "#0D3B38" }}
//               className="inline-block px-6 py-2.5 rounded-xl font-bold hover:bg-green-50 transition text-sm whitespace-nowrap flex-shrink-0"
//             >
//               View All Cancer Types →
//             </Link>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
//             {cancerTypes.map((c) => (
//               <Link
//                 key={c.name}
//                 href={c.href}
//                 className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white text-center hover:shadow-xl transition hover:-translate-y-1"
//                 style={{ border: "1px solid #e5f0ec", borderTop: "3px solid #0D3B38" }}
//               >
//                 <div
//                   className="w-16 h-16 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
//                   style={{ backgroundColor: "#EEF7F4" }}
//                 >
//                   {c.emoji}
//                 </div>
//                 <p className="text-gray-700 font-bold text-sm leading-tight" style={heading}>{c.name}</p>
//                 <p className="text-xs font-semibold" style={{ color: "#F4A118" }}>Learn More →</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           HOW TO CONSULT US – 6 STEPS
//       ══════════════════════════════════════════════════ */}
//       <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <span
//               className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide"
//               style={{ backgroundColor: "#0D3B38", color: "white" }}
//             >
//               Easy Process
//             </span>
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#0D3B38", ...heading }}>
//               How to Consult Us
//             </h2>
//             <p className="text-gray-500 text-sm max-w-xl mx-auto" style={body}>
//               Starting your Ayurvedic cancer treatment is simple. Follow these 6 easy steps.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
//             {consultationBonusSteps.map((step) => (
//               <div
//                 key={step.num}
//                 className="bg-white rounded-2xl p-6 flex gap-5 items-start hover:shadow-lg transition"
//                 style={{ border: "1px solid #c8e8e0" }}
//               >
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
//                   style={{ backgroundColor: "#0D3B38" }}
//                 >
//                   {step.icon}
//                 </div>
//                 <div>
//                   <p className="text-xs font-extrabold mb-1" style={{ color: "#F4A118" }}>Step {step.num}</p>
//                   <h3 className="font-bold text-gray-800 text-sm mb-1" style={heading}>{step.title}</h3>
//                   <p className="text-gray-400 text-xs leading-relaxed" style={body}>{step.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link
//               href="/contact"
//               style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
//               className="inline-block px-10 py-4 rounded-xl text-white font-extrabold text-lg hover:opacity-90 transition shadow-lg"
//             >
//               Book an Appointment →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           SECOND APPOINTMENT / PHONE CTA – 2 COLUMN
//       ══════════════════════════════════════════════════ */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//             {/* Left */}
//             <div>
//               <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#0D3B38", ...heading }}>
//                 Book Your Appointment Today!
//               </h2>
//               <p className="text-gray-500 text-base leading-relaxed mb-6" style={body}>
//                 Our friendly cancer care staff will help you find a convenient time for your visit
//                 and provide all necessary information about your treatment plan.
//               </p>
//               <div
//                 className="rounded-2xl p-6 flex items-center gap-5"
//                 style={{ backgroundColor: "#EEF7F4", border: "1px solid #c8e8e0" }}
//               >
//                 <div className="text-6xl">🌿</div>
//                 <div>
//                   <p className="font-bold text-lg" style={{ color: "#0D3B38", ...heading }}>Varanasi Head Centre</p>
//                   <p className="text-gray-500 text-sm mt-1" style={body}>
//                     Shivdaspur, Manduadih, Varanasi, UP 221107
//                   </p>
//                   <p className="text-xs mt-2 font-semibold" style={{ color: "#F4A118" }}>
//                     Mon–Sat: 10:00 AM – 7:00 PM
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right */}
//             <div className="flex flex-col gap-4">
//               {/* Call CTA */}
//               <div
//                 className="rounded-2xl p-6"
//                 style={{ backgroundColor: "#0D3B38" }}
//               >
//                 <p className="text-white/70 text-sm mb-2">Call Us Now</p>
//                 <a
//                   href="tel:+918081222333"
//                   className="text-3xl font-extrabold block mb-4 hover:underline"
//                   style={{ color: "#F4A118" }}
//                 >
//                   +91 8081222333
//                 </a>
//                 <Link
//                   href="/contact"
//                   style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
//                   className="inline-block w-full text-center py-3 rounded-xl text-white font-extrabold hover:opacity-90 transition text-sm"
//                 >
//                   📞 Book Your First Consultation
//                 </Link>
//               </div>

//               {/* WhatsApp CTA */}
//               <a
//                 href="https://wa.me/918081222333"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-2xl p-5 flex items-center gap-4 hover:opacity-90 transition"
//                 style={{ backgroundColor: "#25D366" }}
//               >
//                 <div className="text-4xl">💬</div>
//                 <div>
//                   <p className="text-white font-extrabold text-base">Chat on WhatsApp</p>
//                   <p className="text-white/80 text-xs mt-0.5">Usually replies within minutes</p>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           VIDEO TESTIMONIALS
//       ══════════════════════════════════════════════════ */}
//       <section style={{ backgroundColor: "#F8F9FA" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <span
//               className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide"
//               style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
//             >
//               Patient Stories
//             </span>
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: "#0D3B38", ...heading }}>
//               Heartfelt Testimonials of Patients
//             </h2>
//             <p className="text-gray-400 text-sm" style={body}>
//               Who Experienced BK Cancer Care&apos;s Exceptional Ayurvedic Treatment
//             </p>
//           </div>

//           {/* Featured video */}
//           <div
//             className="relative rounded-3xl overflow-hidden mb-6 flex items-center justify-center cursor-pointer group hover:shadow-2xl transition"
//             style={{
//               background: "linear-gradient(135deg, #071e1c, #0D3B38)",
//               height: 380,
//               border: "2px solid #c8e8e0",
//             }}
//           >
//             <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 text-center px-8">
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
//                 style={{ backgroundColor: "#F4A118" }}
//               >
//                 <span className="text-white text-3xl ml-1">▶</span>
//               </div>
//               <p className="text-white font-extrabold text-xl mt-2" style={heading}>
//                 Watch Our Patient Success Stories
//               </p>
//               <p className="text-white/60 text-sm">
//                 Introduction to BK Cancer Care — by Dr. BK Chaurasia
//               </p>
//               <span
//                 className="mt-2 text-xs font-bold px-3 py-1.5 rounded-full"
//                 style={{ backgroundColor: "rgba(244,161,24,0.2)", color: "#F4A118", border: "1px solid rgba(244,161,24,0.3)" }}
//               >
//                 5 Million+ Lives Touched
//               </span>
//             </div>
//           </div>

//           {/* 3 smaller video thumbnails */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
//             {videoTestimonials.map((v) => (
//               <div
//                 key={v.name}
//                 className="relative rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg transition"
//                 style={{ height: 200, border: "1px solid #e5f0ec", backgroundColor: v.bg }}
//               >
//                 <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
//                   <div
//                     className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
//                     style={{ backgroundColor: "#0D3B38" }}
//                   >
//                     <span className="text-white text-xl ml-1">▶</span>
//                   </div>
//                   <p className="text-gray-700 font-bold text-sm mt-1" style={heading}>{v.name}</p>
//                   <p className="text-gray-500 text-xs">{v.cancerType}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link
//               href="/contact"
//               style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
//               className="inline-block px-8 py-3 rounded-xl text-white font-extrabold hover:opacity-90 transition shadow-md"
//             >
//               See More Success Stories →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           GOOGLE REVIEWS – 4 CARDS
//       ══════════════════════════════════════════════════ */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
//             <div>
//               <span
//                 className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide"
//                 style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
//               >
//                 Patient Reviews
//               </span>
//               <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#0D3B38", ...heading }}>
//                 Patient Reviews About Us
//               </h2>
//             </div>
//             <Link
//               href="/contact"
//               style={{ backgroundColor: "#0D3B38" }}
//               className="inline-block px-6 py-2.5 rounded-xl text-white font-bold hover:opacity-90 transition text-sm whitespace-nowrap"
//             >
//               See More
//             </Link>
//           </div>
//           <p className="text-gray-400 text-sm mb-7" style={body}>
//             Who Experienced BK Cancer Care&apos;s Exceptional Ayurvedic Treatment
//           </p>

//           {/* Google rating bar */}
//           <div
//             className="bg-white rounded-2xl px-6 py-4 flex flex-wrap items-center gap-5 mb-8 shadow-sm"
//             style={{ border: "1px solid #e0e0e0" }}
//           >
//             <div className="flex gap-0.5">
//               {["#4285F4","#EA4335","#FBBC05","#4285F4","#34A853","#EA4335"].map((c, i) => (
//                 <span key={i} style={{ color: c, fontSize: 20, fontWeight: 700 }}>{"Google"[i]}</span>
//               ))}
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-2xl font-extrabold" style={{ color: "#0D3B38" }}>4.9</span>
//               <div className="flex">
//                 {[1,2,3,4,5].map((s) => (
//                   <span key={s} style={{ color: "#F4A118" }} className="text-xl">★</span>
//                 ))}
//               </div>
//               <span className="text-gray-400 text-sm" style={body}>rating out of 5,000+ reviews</span>
//             </div>
//           </div>

//           {/* Review cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {reviews.map((r) => (
//               <div
//                 key={r.name}
//                 className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
//                 style={{ border: "1px solid #e5f0ec" }}
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   {/* Avatar */}
//                   <div
//                     className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-lg flex-shrink-0"
//                     style={{ backgroundColor: "#EEF7F4", border: "2px solid #0D3B38", color: "#0D3B38" }}
//                   >
//                     {r.name[0]}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-800 text-sm" style={heading}>{r.name}</p>
//                     <p className="text-gray-400 text-xs">{r.time}</p>
//                   </div>
//                   <div className="ml-auto">
//                     <span className="text-4xl font-serif leading-none" style={{ color: "#0D3B38", opacity: 0.15 }}>&ldquo;</span>
//                   </div>
//                 </div>
//                 <p className="text-xs font-semibold mb-2" style={{ color: "#F4A118" }}>{r.cancerType}</p>
//                 <div className="flex mb-3">
//                   {[1,2,3,4,5].map((s) => (
//                     <span key={s} style={{ color: "#F4A118" }}>★</span>
//                   ))}
//                 </div>
//                 <p className="text-gray-500 text-xs leading-relaxed" style={body}>{r.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           AWARDS & RECOGNITION
//       ══════════════════════════════════════════════════ */}
//       <section style={{ backgroundColor: "#F8F9FA" }} className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#0D3B38", ...heading }}>
//               Awards &amp; Recognition
//             </h2>
//             <p className="text-gray-400 text-sm mt-2" style={body}>
//               Nationally recognized for excellence in Ayurvedic cancer care
//             </p>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//             {awards.map((award, i) => (
//               <div
//                 key={i}
//                 className="rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition"
//                 style={{
//                   backgroundColor: "white",
//                   border: "1px solid #e5f0ec",
//                   minHeight: 110,
//                 }}
//               >
//                 <div
//                   className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2"
//                   style={{ backgroundColor: "#EEF7F4" }}
//                 >
//                   🏆
//                 </div>
//                 <p className="text-gray-600 text-xs font-semibold leading-snug" style={body}>{award}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           PHILOSOPHY SECTION – DARK GREEN
//       ══════════════════════════════════════════════════ */}
//       <section style={{ backgroundColor: "#0D3B38" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//             {/* Left – Philosophy */}
//             <div>
//               <p className="text-xs font-extrabold tracking-widest uppercase mb-3" style={{ color: "#F4A118" }}>
//                 Our Philosophy
//               </p>
//               <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 leading-snug" style={heading}>
//                 At Arogyadham, Health is Intrinsic —<br />Not the Opposite of Sickness
//               </h2>
//               <p
//                 className="text-white/75 text-lg leading-relaxed mb-4"
//                 style={{ fontStyle: "italic", fontFamily: "Georgia, serif" }}
//               >
//                 &ldquo;At Arogyadham, we believe cancer is not a death sentence — it is a call to restore balance.
//                 Our ancient Ayurvedic wisdom, combined with modern understanding, empowers patients to heal from within.&rdquo;
//               </p>
//               <div className="flex items-center gap-4 mb-8">
//                 <div
//                   className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-white flex-shrink-0"
//                   style={{ backgroundColor: "#F4A118" }}
//                 >
//                   BK
//                 </div>
//                 <div>
//                   <p className="text-white font-bold text-sm" style={heading}>Dr. BK Chaurasia</p>
//                   <p className="text-white/60 text-xs">Founder, Arogyadham Cancer Care — Varanasi</p>
//                 </div>
//               </div>
//               <a
//                 href="https://www.youtube.com/@bkarogyam"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
//                 className="inline-block px-7 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition shadow-lg"
//               >
//                 ▶ Watch Our Story
//               </a>
//             </div>

//             {/* Right – YouTube placeholder */}
//             <div>
//               <div
//                 className="relative rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer group hover:shadow-2xl transition"
//                 style={{
//                   background: "linear-gradient(135deg, #071e1c, #1a5c57)",
//                   height: 320,
//                   border: "2px solid rgba(244,161,24,0.3)",
//                 }}
//               >
//                 <div className="text-center">
//                   <div
//                     className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform"
//                     style={{ backgroundColor: "#F4A118" }}
//                   >
//                     <span className="text-white text-3xl ml-1">▶</span>
//                   </div>
//                   <p className="text-white font-extrabold text-lg" style={heading}>Introduction to BK Cancer Care</p>
//                   <p className="text-white/60 text-sm mt-1">by Dr. BK Chaurasia, Founder</p>
//                 </div>
//               </div>
//               <p className="text-white/40 text-xs text-center mt-3">
//                 YouTube video — Subscribe to our channel for more healing stories
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           FREE CONSULTATION CTA BANNER
//       ══════════════════════════════════════════════════ */}
//       <section style={{ background: "linear-gradient(135deg, #F4A118 0%, #d4600a 100%)" }} className="py-14">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3" style={heading}>
//             Get Your FREE Cancer Consultation Today
//           </h2>
//           <p className="text-white/90 mb-8 text-base max-w-2xl mx-auto" style={body}>
//             Don&apos;t wait. Talk to our Ayurvedic cancer specialists now and take the first step towards healing.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="tel:+918081222333"
//               style={{ backgroundColor: "#0D3B38" }}
//               className="px-8 py-4 rounded-xl text-white font-extrabold text-base hover:opacity-90 transition shadow-md"
//             >
//               📞 Call Now
//             </a>
//             <a
//               href="https://wa.me/918081222333"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-4 rounded-xl bg-white font-extrabold text-base hover:opacity-90 transition shadow-md"
//               style={{ color: "#25D366" }}
//             >
//               💬 WhatsApp Us
//             </a>
//             <Link
//               href="/contact"
//               className="px-8 py-4 rounded-xl font-extrabold text-base hover:opacity-90 transition shadow-md"
//               style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "white", border: "2px solid rgba(255,255,255,0.4)" }}
//             >
//               📅 Book Online
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════
//           FLOATING BUTTONS (always visible)
//       ══════════════════════════════════════════════════ */}

//       {/* Call – bottom left */}
//       <a
//         href="tel:+918081222333"
//         style={{ backgroundColor: "#0D3B38" }}
//         className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition"
//         aria-label="Call us"
//       >
//         📞
//       </a>

//       {/* WhatsApp – bottom right */}
//       <a
//         href="https://wa.me/918081222333"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{ backgroundColor: "#25D366" }}
//         className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition"
//         aria-label="WhatsApp us"
//       >
//         💬
//       </a>

//       {/* Free Consultation – right edge vertical */}
//       <Link
//         href="/contact"
//         style={{
//           background: "linear-gradient(180deg, #F4A118, #d4600a)",
//           writingMode: "vertical-rl",
//         }}
//         className="fixed top-1/2 right-0 z-50 -translate-y-1/2 px-3 py-5 rounded-l-xl text-white font-bold text-xs shadow-xl hover:opacity-90 transition select-none"
//         aria-label="Free Consultation"
//       >
//         Free Consultation
//       </Link>
//     </>
//   );
// }




"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";
import Image from "next/image";

/* ─── Heading font helper ───────────────────────────────── */
const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body    = { fontFamily: "'Open Sans', Arial, sans-serif" };

/* ─── YOUTUBE VIDEO DATA ───────────────────────────────── */
const youtubeVideos = [
  {
    id: "utvjqTPRm3Y",
    title: "BK Cancer Care - Patient Success Story",
    description: "Cancer Treatment Success Story"
  },
  {
    id: "BJ5fIySdUbg",
    title: "BK Cancer Care - Treatment Approach",
    description: "Ayurvedic Cancer Treatment Approach"
  },
  {
    id: "cZvwbo6MTjo",
    title: "BK Cancer Care - Patient Journey",
    description: "Patient Healing Journey"
  },
  {
    id: "I7NhABARuvU",
    title: "BK Cancer Care - Expert Talk",
    description: "Dr. BK Chaurasia on Cancer Care"
  },
  {
    id: "yHWJ8pX2l6o",
    title: "BK Cancer Care - Success Story",
    description: "Another Patient Success Story"
  }
];

/* ─── SUCCESS POPUP COMPONENT ──────────────────────────── */
function SuccessPopup({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
          <p className="text-gray-600 mb-4">{message}</p>
          
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-green-700">
              Our team will contact you within 1 hour to confirm your appointment.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Closing in 5 seconds...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── DATA ─────────────────────────────────────────────── */
const whyCards = [
  {
    icon: "🧪",
    title: "Research-Based Herbal Medicines",
    desc: "No side effects like hair loss, nausea. Pure Ayurvedic formulations validated by modern research.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_o25k8uo25k8uo25k.png",
    imageAlt: "Research-Based Herbal Medicines"
  },
  {
    icon: "😌",
    title: "Painless Ayurvedic Therapy",
    desc: "No damage to taste buds. Prevents Osteoradionecrosis common in radiation therapy.",
    image: "https://healdiway.bkarogyam.com/media/clinic-image%2Fblogimage%2F2024%2F8%2F13%2F2024-08-13%2012%3A39%3A15.993421%2005%3A30%2Fabhyanga.jpg",
    imageAlt: "Painless Ayurvedic Therapy"
  },
  {
    icon: "💰",
    title: "Affordable Treatment",
    desc: "Economical Ayurvedic cancer care for every family — fraction of conventional costs.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_g3mmhag3mmhag3mm1.png",
    imageAlt: "Affordable Treatment"
  },
  {
    icon: "🌿",
    title: "100% Natural Procedure",
    desc: "Normal healthy cells protected. Only cancer cells targeted through Ayurvedic protocols.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/991.png",
    imageAlt: "100% Natural Procedure"
  },
  {
    icon: "🛡️",
    title: "Immunity Strengthening",
    desc: "Panchakarma trains immune system to fight cancer systematically throughout the body.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_obfryrobfryrobfr1.png",
    imageAlt: "Immunity Strengthening"
  },
  {
    icon: "⚡",
    title: "Quick Improvement",
    desc: "Significant relief even in advanced stages. Better quality of life from first week.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_k9cvqpk9cvqpk9cv1.png",
    imageAlt: "Quick Improvement"
  },
];

const journeySteps = [
  {
    num: "01",
    icon: "📅",
    title: "Appointment Booking",
    desc: "Call, WhatsApp, or book online. Available 7 days a week.",
  },
  {
    num: "02",
    icon: "👨‍⚕️",
    title: "Doctor's Consultation",
    desc: "Free initial consultation with our senior Ayurvedic cancer specialist.",
  },
  {
    num: "03",
    icon: "🌿",
    title: "Treatment Starts",
    desc: "Personalized Ayurvedic protocol begins — herbs, Panchakarma & diet plan.",
  },
  {
    num: "04",
    icon: "📊",
    title: "Regular Follow-up",
    desc: "Ongoing monitoring and treatment adjustment for optimal results.",
  },
];

const cancerTypes = [
  { name: "Lung Cancer",             emoji: "🫁",  href: "/disease" },
  { name: "Throat Cancer",           emoji: "🗣️", href: "/disease" },
  { name: "Blood / Leukemia",        emoji: "🩸",  href: "/disease" },
  { name: "Liver Cancer",            emoji: "🟤",  href: "/disease" },
  { name: "Breast Cancer",           emoji: "🎗️",  href: "/disease" },
  { name: "Kidney Cancer",           emoji: "🫘",  href: "/disease" },
  { name: "Cervical Cancer",         emoji: "🌸",  href: "/disease" },
  { name: "Brain Tumor",             emoji: "🧠",  href: "/disease" },
  { name: "Prostate Cancer",         emoji: "🔵",  href: "/disease" },
  { name: "Oral Cancer",             emoji: "👄",  href: "/disease" },
  { name: "Colon Cancer",            emoji: "🌀",  href: "/disease" },
  { name: "Stomach Cancer",          emoji: "🫃",  href: "/disease" },
];

const reviews = [
  {
    name: "Ramesh Kumar",
    time: "2 weeks ago",
    cancerType: "Kidney Cancer – Stage 3",
    text: "My father's kidney cancer tumor reduced significantly after 3 months. No side effects. Thank you Dr. BK Chaurasia.",
  },
  {
    name: "Sunita Devi",
    time: "1 month ago",
    cancerType: "Breast Cancer – Stage 2",
    text: "My mother's immunity improved greatly with herbal treatment alongside chemo. Much less suffering.",
  },
  {
    name: "Mohit Sharma",
    time: "3 weeks ago",
    cancerType: "Blood Cancer – Leukemia",
    text: "Panchakarma detox helped my brother recover faster. Doctors are very knowledgeable.",
  },
  {
    name: "Priya Singh",
    time: "2 months ago",
    cancerType: "Lung Cancer – Stage 3",
    text: "Quality of life improved dramatically after 6 months. Highly recommended for natural cancer care.",
  },
];

const awards = [
  "Best Ayurvedic Cancer Center 2023",
  "National Healthcare Excellence Award",
  "India's Top Vaidya Recognition",
  "Ayush Ministry Certified Center",
  "Cancer Care Innovation Award",
  "Patient's Choice Award 2024",
];

const consultationBonusSteps = [
  { num: "1", icon: "☏",  title: "Call / WhatsApp / Chat",          desc: "Reach us via phone, WhatsApp or chat." },
  { num: "2", icon: "📲", title: "Install ArogyamTalk App",         desc: "Download app for seamless doctor communication." },
  { num: "3", icon: "💰", title: "Register & Get ₹201 Bonus",       desc: "Complete registration and receive bonus." },
  { num: "4", icon: "💳", title: "Make Payment",                    desc: "Secure online payment options available." },
  { num: "5", icon: "👨‍⚕️", title: "Select Cancer Specialist",       desc: "Choose your preferred Ayurvedic expert." },
  { num: "6", icon: "🩺", title: "Begin Cancer Treatment",          desc: "Start your personalised healing journey." },
];

/* ─── PAGE ─────────────────────────────────────────────── */
export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    date: '',
    cancerType: '',
    state: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { firstName, lastName, phone, date, cancerType, state } = formData;

    if (!firstName || !lastName || !phone || !date || !cancerType || !state) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }

    try {
      // Format date to ISO string
      const appointmentDate = new Date(date);
      appointmentDate.setHours(10, 0, 0, 0); // Set to 10:00 AM
      const schedule_at = appointmentDate.toISOString();

      const dataToSubmit = {
        schedule_at,
        slot: 20,
        doctor: 1, // Default doctor ID
        category: 1, // Default category ID
        notes: `Patient: ${firstName} ${lastName}, Cancer Type: ${cancerType}, State: ${state}`,
        patient: {
          user: {
            first_name: firstName,
            last_name: lastName,
            email: "patient@example.com",
            mobile: phone,
          }
        },
        practice: 1,
        applyonweb: true
      };

      const response = await fetch('https://healdiway.bkarogyam.com/erp-api/appointment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit)
      });

      const result = await response.json();

      if (response.ok) {
        // Show success popup
        setShowSuccessPopup(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          date: '',
          cancerType: '',
          state: ''
        });
        
        // Auto hide popup after 5 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 5000);
      } else {
        setError(result.message || 'Failed to book appointment. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const openYouTubeVideo = (videoId) => {
    window.open(`https://youtu.be/${videoId}`, '_blank');
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO SLIDER
      ══════════════════════════════════════════════════ */}
      <HeroSlider />

      {/* ══════════════════════════════════════════════════
          QUICK ACTION BAR
      ══════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ borderBottom: "1px solid #e5f0ec" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: "📅", title: "Book Appointment",   sub: "Free consultation",          href: "/contact",  bg: "#0D3B38" },
              { icon: "📍", title: "Locate Clinic",      sub: "20+ centres India",         href: "/about",    bg: "#1B6B5A" },
              { icon: "💉", title: "Immunotherapy Info", sub: "Ayurvedic protocols",   href: "/services", bg: "#F4A118" },
              { icon: "🎗️", title: "Cancer Types",       sub: "All 20+ types",    href: "/disease",  bg: "#c0392b" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col items-center gap-3 py-7 px-4 text-center hover:bg-gray-50 transition"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.bg }}
                >
                  <span>{item.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0D3B38", ...heading }}>{item.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          APPOINTMENT BOOKING FORM – 2 COLUMN WITH API
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#EEF7F4" }} className="py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Left – Info */}
            <div className="lg:col-span-3">
              <span
                className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 tracking-wide"
                style={{ backgroundColor: "#0D3B38", color: "white" }}
              >
                Free Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4" style={{ color: "#0D3B38", ...heading }}>
                Book Your Appointment Today!
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg" style={body}>
                Get expert Ayurvedic guidance within 1 hour of booking your slot.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: "🌿", text: "100% Natural Treatment" },
                  { icon: "👨‍⚕️", text: "20+ Cancer Specialists" },
                  { icon: "🆓", text: "Free Initial Consultation" },
                  { icon: "📍", text: "20+ Clinics Pan India" },
                  { icon: "📋", text: "Free Report Second Opinion" },
                  { icon: "💊", text: "Personalised Herb Protocol" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl">{f.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold" style={{ color: "#0D3B38" }}>{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <div
                className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 rounded-2xl p-4 sm:p-5"
                style={{ backgroundColor: "#0D3B38" }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                  style={{ backgroundColor: "#F4A118" }}
                >
                  📞
                </div>
                <div>
                  <p className="text-white/70 text-[10px] sm:text-xs mb-0.5">Call Us Now — Mon–Sat, 10 AM–7 PM</p>
                  <a
                    href="tel:+918081222333"
                    className="text-lg sm:text-xl md:text-2xl font-extrabold hover:underline"
                    style={{ color: "#F4A118" }}
                  >
                    +91 8081222333
                  </a>
                </div>
              </div>
            </div>

            {/* Right – Form with API Integration */}
            <div
              className="lg:col-span-2 rounded-2xl shadow-lg p-5 sm:p-6 md:p-7"
              style={{ backgroundColor: "white", border: "1px solid #c8e8e0" }}
            >
              <h3 className="text-base sm:text-lg font-extrabold mb-1" style={{ color: "#0D3B38", ...heading }}>
                Book An Appointment
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs mb-4 sm:mb-5">Fill the form — our team calls back within 1 hour.</p>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-3 sm:px-4 py-2 rounded-lg mb-3 sm:mb-4 text-xs sm:text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-green-700"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-green-700"
                    required
                  />
                </div>
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-green-700"
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
                
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none text-gray-500"
                  required
                />
                
                <select 
                  name="cancerType"
                  value={formData.cancerType}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none text-gray-500"
                  required
                >
                  <option value="">Type of Cancer</option>
                  <option value="breast">Breast Cancer</option>
                  <option value="lung">Lung Cancer</option>
                  <option value="blood">Blood Cancer / Leukemia</option>
                  <option value="liver">Liver Cancer</option>
                  <option value="kidney">Kidney Cancer</option>
                  <option value="cervical">Cervical Cancer</option>
                  <option value="prostate">Prostate Cancer</option>
                  <option value="brain">Brain Tumor</option>
                  <option value="oral">Oral Cancer</option>
                  <option value="colon">Colon Cancer</option>
                  <option value="throat">Throat Cancer</option>
                  <option value="stomach">Stomach Cancer</option>
                  <option value="other">Other</option>
                </select>
                
                <select 
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none text-gray-500"
                  required
                >
                  <option value="">Select State</option>
                  {["Uttar Pradesh","Delhi","Maharashtra","Gujarat","Rajasthan","Madhya Pradesh",
                    "Bihar","West Bengal","Karnataka","Tamil Nadu","Kerala","Andhra Pradesh",
                    "Telangana","Punjab","Haryana","Jharkhand","Odisha","Assam","Other"].map(s => (
                    <option key={s} value={s.toLowerCase().replace(' ', '_')}>{s}</option>
                  ))}
                </select>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                  className="w-full py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-bold text-xs sm:text-base hover:opacity-90 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-xs sm:text-sm">Processing...</span>
                    </>
                  ) : (
                    'Book An Appointment →'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY BK CANCER HEALER THERAPY - WITH IMAGES - MOBILE SCROLL
      ══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span
              className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide"
              style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
            >
              Our Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3" style={{ color: "#0D3B38", ...heading }}>
              Why BK Cancer Healer Therapy?
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto px-4" style={body}>
              The Ayurvedic Way to Fight Cancer — Naturally, Safely, Effectively
            </p>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden w-full overflow-x-auto pb-6 -mb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4 px-2 min-w-max">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition group"
                  style={{ border: "1px solid #e5f0ec" }}
                >
                  {/* Image Container */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    {/* Icon Overlay */}
                    <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-base sm:text-lg shadow-lg">
                      {card.icon}
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-1 line-clamp-2" style={heading}>{card.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3" style={body}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-3 gap-1">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-4 h-1 bg-[#F4A118] rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] text-gray-400">← Swipe →</span>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition group"
                style={{ border: "1px solid #e5f0ec" }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
                    {card.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-gray-800 text-base mb-2" style={heading}>{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={body}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS COUNTER
      ══════════════════════════════════════════════════ */}
      <StatsCounter />

      {/* ══════════════════════════════════════════════════
          CUTTING-EDGE THERAPY SECTION – 2 COLUMN
      ══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* Left – Text */}
            <div>
              <p className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-2" style={{ color: "#F4A118" }}>
                Cutting-Edge
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 leading-tight" style={{ color: "#0D3B38", ...heading }}>
                BK Cancer Healer Therapy
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-7" style={body}>
                A Holistic Ayurvedic Approach | Aiming for Complete Well-being
              </p>

              {[
                {
                  heading: "How Does It Work?",
                  points: [
                    "Strengthens immune system to fight abnormal cancer cells",
                    "Balances Tridosha to restore body's natural defence",
                    "Detoxifies toxins using targeted Panchakarma procedures",
                  ],
                },
                {
                  heading: "What It Does:",
                  points: [
                    "Terminates or halts cancer cell growth",
                    "Prevents metastasis to other organs",
                    "Enhances immunity & improves quality of life",
                  ],
                },
                {
                  heading: "Key Benefits:",
                  points: [
                    "Zero side effects — no hair loss, no nausea",
                    "Normal healthy cells completely unaffected",
                    "Faster recovery & long-term wellness",
                  ],
                },
              ].map((section) => (
                <div key={section.heading} className="mb-4 sm:mb-6">
                  <h3 className="font-bold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: "#F4A118", ...heading }}>
                    {section.heading}
                  </h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {section.points.map((p) => (
                      <li key={p} className="flex gap-1 sm:gap-2 items-start text-xs sm:text-sm text-gray-500" style={body}>
                        <span style={{ color: "#F4A118" }} className="mt-0.5 flex-shrink-0">•</span>
                        <span className="text-xs sm:text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right – Doctor image and info */}
            <div>
              {/* Doctor image */}
              <div
                className="rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg overflow-hidden relative"
                style={{
                  height: 300,
                  border: "3px solid #EEF7F4",
                }}
              >
                <Image
                  src="https://main.bkarogyam.com/media/founder_images/directorbk.jpg"
                  alt="Dr. BK Chaurasia - Founder & Chief Vaidya"
                  fill
                  className="object-cover object-center"
                  priority
                  unoptimized
                />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-5 pt-8 sm:pt-12">
                  <p className="font-bold text-base sm:text-xl text-white" style={heading}>Dr. BK Chaurasia</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-1">Founder & Chief Vaidya</p>
                  <p className="text-white/60 text-[10px] sm:text-xs mt-0.5 sm:mt-1">24+ Years in Ayurvedic Oncology</p>
                </div>
              </div>

              {/* Panchakarma info card */}
              <div
                className="rounded-xl sm:rounded-2xl p-3 sm:p-5"
                style={{ backgroundColor: "#EEF7F4", border: "1px solid #c8e8e0" }}
              >
                <p className="font-extrabold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: "#0D3B38", ...heading }}>
                  🌿 Panchakarma Therapies:
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {["Abhyanga", "Shirodhara", "Nasya", "Basti", "Virechana"].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                      style={{ backgroundColor: "#0D3B38", color: "white" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-2 sm:mt-3 leading-relaxed" style={body}>
                  Customised based on patient's constitution, cancer type & stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          YOUR JOURNEY WITH US – 4 STEPS - MOBILE SCROLL
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="py-10 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span
              className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide"
              style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
            >
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3" style={{ color: "#0D3B38", ...heading }}>
              Your Journey With Us
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto px-4" style={body}>
              Simple steps to begin your Ayurvedic Cancer Healing journey
            </p>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden w-full overflow-x-auto pb-6 -mb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4 px-2 min-w-max">
              {journeySteps.map((step, i) => (
                <div key={step.num} className="w-[260px] sm:w-[280px] flex-shrink-0 relative">
                  <div
                    className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm h-full relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
                    style={{ border: "1px solid #e5f0ec" }}
                  >
                    {/* Watermark number */}
                    <p
                      className="absolute top-2 left-3 text-5xl sm:text-6xl font-extrabold leading-none select-none"
                      style={{ color: "#0D3B38", opacity: 0.05 }}
                    >
                      {step.num}
                    </p>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl mx-auto mb-3 sm:mb-4 relative z-10"
                      style={{ backgroundColor: "#F4A118" }}
                    >
                      {step.icon}
                    </div>
                    <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-1 sm:mb-2 relative z-10" style={heading}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed relative z-10" style={body}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-3 gap-1">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-4 h-1 bg-[#F4A118] rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] text-gray-400">← Swipe →</span>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-10">
            {journeySteps.map((step, i) => (
              <div key={step.num} className="relative">
                <div
                  className="bg-white rounded-2xl p-7 text-center shadow-sm h-full relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
                  style={{ border: "1px solid #e5f0ec" }}
                >
                  <p
                    className="absolute top-3 left-4 text-7xl font-extrabold leading-none select-none"
                    style={{ color: "#0D3B38", opacity: 0.05 }}
                  >
                    {step.num}
                  </p>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 relative z-10"
                    style={{ backgroundColor: "#F4A118" }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-extrabold text-gray-800 text-base mb-2 relative z-10" style={heading}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed relative z-10" style={body}>
                    {step.desc}
                  </p>
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 -translate-y-1/2 items-center gap-[3px]">
                    {[0,1,2].map((d) => (
                      <div key={d} style={{ width: 5, height: 2, backgroundColor: "#F4A118" }} className="rounded-full" />
                    ))}
                    <span style={{ color: "#F4A118" }} className="font-bold text-xs">▶</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8 lg:mt-10">
            <Link
              href="/contact"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              className="inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-xl text-white font-extrabold text-sm sm:text-base md:text-lg hover:opacity-90 transition shadow-lg"
            >
              Book Your First Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CANCER TYPES GRID - MOBILE SCROLL
      ══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
            <div>
              <span
                className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide"
                style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
              >
                What We Treat
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ color: "#0D3B38", ...heading }}>
                Cancer Types & Treatment
              </h2>
            </div>
            <Link
              href="/disease"
              style={{ border: "2px solid #0D3B38", color: "#0D3B38" }}
              className="inline-block px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold hover:bg-green-50 transition text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
            >
              View All →
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden w-full overflow-x-auto pb-6 -mb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-3 sm:gap-4 px-2 min-w-max">
              {cancerTypes.map((c) => (
                <Link
                  key={c.name}
                  href={c.href}
                  className="w-[140px] sm:w-[160px] flex-shrink-0 group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-white text-center hover:shadow-xl transition hover:-translate-y-1"
                  style={{ border: "1px solid #e5f0ec", borderTop: "3px solid #0D3B38" }}
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "#EEF7F4" }}
                  >
                    {c.emoji}
                  </div>
                  <p className="text-gray-700 font-bold text-xs leading-tight" style={heading}>{c.name}</p>
                  <p className="text-[10px] font-semibold" style={{ color: "#F4A118" }}>Learn More →</p>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-3 gap-1">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-4 h-1 bg-[#F4A118] rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] text-gray-400">← Swipe →</span>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-5">
            {cancerTypes.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white text-center hover:shadow-xl transition hover:-translate-y-1"
                style={{ border: "1px solid #e5f0ec", borderTop: "3px solid #0D3B38" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#EEF7F4" }}
                >
                  {c.emoji}
                </div>
                <p className="text-gray-700 font-bold text-sm leading-tight" style={heading}>{c.name}</p>
                <p className="text-xs font-semibold" style={{ color: "#F4A118" }}>Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW TO CONSULT US – 6 STEPS - MOBILE SCROLL
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#EEF7F4" }} className="py-10 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span
              className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide"
              style={{ backgroundColor: "#0D3B38", color: "white" }}
            >
              Easy Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3" style={{ color: "#0D3B38", ...heading }}>
              How to Consult Us
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto px-4" style={body}>
              Starting your treatment is simple. Follow these 6 easy steps.
            </p>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden w-full overflow-x-auto pb-6 -mb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4 px-2 min-w-max">
              {consultationBonusSteps.map((step) => (
                <div
                  key={step.num}
                  className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 items-start hover:shadow-lg transition"
                  style={{ border: "1px solid #c8e8e0" }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                    style={{ backgroundColor: "#0D3B38" }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-extrabold mb-0.5 sm:mb-1" style={{ color: "#F4A118" }}>Step {step.num}</p>
                    <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-0.5 sm:mb-1" style={heading}>{step.title}</h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed" style={body}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-3 gap-1">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-4 h-1 bg-[#F4A118] rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] text-gray-400">← Swipe →</span>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-5 mb-10">
            {consultationBonusSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 flex gap-5 items-start hover:shadow-lg transition"
                style={{ border: "1px solid #c8e8e0" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: "#0D3B38" }}
                >
                  {step.icon}
                </div>
                <div>
                  <p className="text-xs font-extrabold mb-1" style={{ color: "#F4A118" }}>Step {step.num}</p>
                  <h3 className="font-bold text-gray-800 text-sm mb-1" style={heading}>{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed" style={body}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8 lg:mt-10">
            <Link
              href="/contact"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              className="inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-xl text-white font-extrabold text-sm sm:text-base md:text-lg hover:opacity-90 transition shadow-lg"
            >
              Book an Appointment →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECOND APPOINTMENT / PHONE CTA – 2 COLUMN
      ══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

            {/* Left - REPLACED WITH IMAGE */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://bkarogyam.com/varanasicenter.jpg"
                alt="BK Cancer Care Varanasi Center"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg sm:text-xl md:text-2xl font-bold" style={heading}>BK Cancer Care</p>
                <p className="text-xs sm:text-sm opacity-90">Varanasi Head Center</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Call CTA */}
              <div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-6"
                style={{ backgroundColor: "#0D3B38" }}
              >
                <p className="text-white/70 text-xs sm:text-sm mb-1 sm:mb-2">Call Us Now</p>
                <a
                  href="tel:+918081222333"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold block mb-3 sm:mb-4 hover:underline"
                  style={{ color: "#F4A118" }}
                >
                  +91 8081222333
                </a>
                <Link
                  href="/contact"
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                  className="inline-block w-full text-center py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-extrabold hover:opacity-90 transition text-xs sm:text-sm"
                >
                  📞 Book Consultation
                </Link>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918081222333"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl sm:rounded-2xl p-3 sm:p-5 flex items-center gap-3 sm:gap-4 hover:opacity-90 transition"
                style={{ backgroundColor: "#25D366" }}
              >
                <div className="text-3xl sm:text-4xl">💬</div>
                <div>
                  <p className="text-white font-extrabold text-sm sm:text-base">Chat on WhatsApp</p>
                  <p className="text-white/80 text-[10px] sm:text-xs mt-0.5">Quick replies</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          VIDEO TESTIMONIALS - UPDATED WITH YOUTUBE LINKS - MOBILE SCROLL
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="py-10 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <span
              className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide"
              style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
            >
              Patient Stories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2" style={{ color: "#0D3B38", ...heading }}>
              Patient Success Stories
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm" style={body}>
              Watch real patients share their healing journey with BK Cancer Care
            </p>
          </div>

          {/* Featured video */}
          <div
            onClick={() => openYouTubeVideo(youtubeVideos[0].id)}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-6 flex items-center justify-center cursor-pointer group hover:shadow-2xl transition"
            style={{
              background: "linear-gradient(135deg, #071e1c, #0D3B38)",
              height: 250,
              border: "2px solid #c8e8e0",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 sm:gap-3 text-center px-4 sm:px-8">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#F4A118" }}
              >
                <span className="text-white text-2xl sm:text-3xl ml-1">▶</span>
              </div>
              <p className="text-white font-extrabold text-base sm:text-xl mt-1 sm:mt-2" style={heading}>
                {youtubeVideos[0].title}
              </p>
              <p className="text-white/60 text-xs sm:text-sm">
                {youtubeVideos[0].description}
              </p>
              <span
                className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                style={{ backgroundColor: "rgba(244,161,24,0.2)", color: "#F4A118", border: "1px solid rgba(244,161,24,0.3)" }}
              >
                5 Million+ Lives Touched
              </span>
            </div>
          </div>

          {/* Mobile Horizontal Scroll for smaller videos */}
          <div className="lg:hidden w-full overflow-x-auto pb-6 -mb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4 px-2 min-w-max">
              {youtubeVideos.slice(1).map((video, index) => (
                <div
                  key={index}
                  onClick={() => openYouTubeVideo(video.id)}
                  className="w-[200px] sm:w-[220px] flex-shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg transition"
                  style={{ height: 150, border: "1px solid #e5f0ec", backgroundColor: "#e8f5ee" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-1 p-2 text-center">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                      style={{ backgroundColor: "#0D3B38" }}
                    >
                      <span className="text-white text-base sm:text-lg ml-1">▶</span>
                    </div>
                    <p className="text-gray-700 font-bold text-[10px] sm:text-xs mt-1 line-clamp-2" style={heading}>{video.title}</p>
                    <p className="text-gray-500 text-[8px] sm:text-[10px] line-clamp-1">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-3 gap-1">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-4 h-1 bg-[#F4A118] rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] text-gray-400">← Swipe →</span>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4 mb-8">
            {youtubeVideos.slice(1).map((video, index) => (
              <div
                key={index}
                onClick={() => openYouTubeVideo(video.id)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg transition"
                style={{ height: 180, border: "1px solid #e5f0ec", backgroundColor: "#e8f5ee" }}
              >
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 p-3 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                    style={{ backgroundColor: "#0D3B38" }}
                  >
                    <span className="text-white text-lg ml-1">▶</span>
                  </div>
                  <p className="text-gray-700 font-bold text-xs mt-1 line-clamp-2" style={heading}>{video.title}</p>
                  <p className="text-gray-500 text-[10px] line-clamp-1">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/contact"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-extrabold text-sm sm:text-base hover:opacity-90 transition shadow-md"
            >
              Book Your Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          GOOGLE REVIEWS – 4 CARDS - MOBILE SCROLL
      ══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-3">
            <div>
              <span
                className="inline-block text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 tracking-wide"
                style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}
              >
                Patient Reviews
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ color: "#0D3B38", ...heading }}>
                Patient Reviews
              </h2>
            </div>
            <Link
              href="/contact"
              style={{ backgroundColor: "#0D3B38" }}
              className="inline-block px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-white font-bold hover:opacity-90 transition text-xs sm:text-sm whitespace-nowrap"
            >
              See More
            </Link>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-7" style={body}>
            Who experienced our exceptional Ayurvedic treatment
          </p>

          {/* Google rating bar */}
          <div
            className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center gap-3 sm:gap-5 mb-6 sm:mb-8 shadow-sm"
            style={{ border: "1px solid #e0e0e0" }}
          >
            <div className="flex gap-0.5">
              {["#4285F4","#EA4335","#FBBC05","#4285F4","#34A853","#EA4335"].map((c, i) => (
                <span key={i} style={{ color: c, fontSize: 16, fontWeight: 700 }}>{"Google"[i]}</span>
              ))}
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl font-extrabold" style={{ color: "#0D3B38" }}>4.9</span>
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} style={{ color: "#F4A118" }} className="text-base sm:text-xl">★</span>
                ))}
              </div>
              <span className="text-gray-400 text-xs sm:text-sm" style={body}>5,000+ reviews</span>
            </div>
          </div>

          {/* Mobile Horizontal Scroll for Reviews */}
          <div className="lg:hidden w-full overflow-x-auto pb-6 -mb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4 px-2 min-w-max">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition"
                  style={{ border: "1px solid #e5f0ec" }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-extrabold text-base sm:text-lg flex-shrink-0"
                      style={{ backgroundColor: "#EEF7F4", border: "2px solid #0D3B38", color: "#0D3B38" }}
                    >
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-xs sm:text-sm" style={heading}>{r.name}</p>
                      <p className="text-gray-400 text-[10px] sm:text-xs">{r.time}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-3xl sm:text-4xl font-serif leading-none" style={{ color: "#0D3B38", opacity: 0.15 }}>&ldquo;</span>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-xs font-semibold mb-1 sm:mb-2" style={{ color: "#F4A118" }}>{r.cancerType}</p>
                  <div className="flex mb-2 sm:mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} style={{ color: "#F4A118" }} className="text-xs sm:text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed line-clamp-3" style={body}>{r.text}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-3 gap-1">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-4 h-1 bg-[#F4A118] rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] text-gray-400">← Swipe →</span>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                style={{ border: "1px solid #e5f0ec" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-lg flex-shrink-0"
                    style={{ backgroundColor: "#EEF7F4", border: "2px solid #0D3B38", color: "#0D3B38" }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm" style={heading}>{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.time}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-4xl font-serif leading-none" style={{ color: "#0D3B38", opacity: 0.15 }}>&ldquo;</span>
                  </div>
                </div>
                <p className="text-xs font-semibold mb-2" style={{ color: "#F4A118" }}>{r.cancerType}</p>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} style={{ color: "#F4A118" }}>★</span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed" style={body}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          AWARDS & RECOGNITION - MOBILE SCROLL
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold" style={{ color: "#0D3B38", ...heading }}>
              Awards & Recognition
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2" style={body}>
              Nationally recognized for excellence in Ayurvedic cancer care
            </p>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden w-full overflow-x-auto pb-6 -mb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-3 px-2 min-w-max">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="w-[180px] sm:w-[200px] flex-shrink-0 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #e5f0ec",
                    minHeight: 90,
                  }}
                >
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-1 sm:mb-2"
                    style={{ backgroundColor: "#EEF7F4" }}
                  >
                    🏆
                  </div>
                  <p className="text-gray-600 text-[10px] sm:text-xs font-semibold leading-snug" style={body}>{award}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-3 gap-1">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-4 h-1 bg-[#F4A118] rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] text-gray-400">← Swipe →</span>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #e5f0ec",
                  minHeight: 110,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2"
                  style={{ backgroundColor: "#EEF7F4" }}
                >
                  🏆
                </div>
                <p className="text-gray-600 text-xs font-semibold leading-snug" style={body}>{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PHILOSOPHY SECTION – DARK GREEN
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0D3B38" }} className="py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left – Philosophy */}
            <div>
              <p className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-2 sm:mb-3" style={{ color: "#F4A118" }}>
                Our Philosophy
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 sm:mb-4 md:mb-5 leading-snug" style={heading}>
                Health is Intrinsic — Not the Opposite of Sickness
              </h2>
              <p
                className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4"
                style={{ fontStyle: "italic", fontFamily: "Georgia, serif" }}
              >
                &ldquo;Cancer is not a death sentence — it is a call to restore balance. Our ancient Ayurvedic wisdom empowers patients to heal from within.&rdquo;
              </p>
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-extrabold text-white flex-shrink-0"
                  style={{ backgroundColor: "#F4A118" }}
                >
                  BK
                </div>
                <div>
                  <p className="text-white font-bold text-xs sm:text-sm" style={heading}>Dr. BK Chaurasia</p>
                  <p className="text-white/60 text-[10px] sm:text-xs">Founder, BK Cancer Care</p>
                </div>
              </div>
              <a
                href="https://youtu.be/utvjqTPRm3Y"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                className="inline-block px-5 sm:px-7 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-bold text-xs sm:text-sm hover:opacity-90 transition shadow-lg"
              >
                ▶ Watch Patient Stories
              </a>
            </div>

            {/* Right – YouTube video */}
            <div
              onClick={() => openYouTubeVideo(youtubeVideos[0].id)}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer group hover:shadow-2xl transition"
              style={{
                background: "linear-gradient(135deg, #071e1c, #1a5c57)",
                height: 250,
                border: "2px solid rgba(244,161,24,0.3)",
              }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#F4A118" }}
                >
                  <span className="text-white text-2xl sm:text-3xl ml-1">▶</span>
                </div>
                <p className="text-white font-extrabold text-base sm:text-lg" style={heading}>BK Cancer Care</p>
                <p className="text-white/60 text-xs sm:text-sm mt-1">Patient Success Stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FREE CONSULTATION CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg, #F4A118 0%, #d4600a 100%)" }} className="py-10 sm:py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3" style={heading}>
            Free Cancer Consultation Today
          </h2>
          <p className="text-white/90 mb-5 sm:mb-6 md:mb-8 text-sm sm:text-base max-w-2xl mx-auto" style={body}>
            Talk to our Ayurvedic cancer specialists now.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="tel:+918081222333"
              style={{ backgroundColor: "#0D3B38" }}
              className="px-5 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-white font-extrabold text-xs sm:text-sm md:text-base hover:opacity-90 transition shadow-md"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918081222333"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl bg-white font-extrabold text-xs sm:text-sm md:text-base hover:opacity-90 transition shadow-md"
              style={{ color: "#25D366" }}
            >
              💬 WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="px-5 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-extrabold text-xs sm:text-sm md:text-base hover:opacity-90 transition shadow-md"
              style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "white", border: "2px solid rgba(255,255,255,0.4)" }}
            >
              📅 Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FLOATING BUTTONS (always visible)
      ══════════════════════════════════════════════════ */}

      {/* Call – bottom left */}
      <a
        href="tel:+918081222333"
        style={{ backgroundColor: "#0D3B38" }}
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-xl hover:scale-110 transition"
        aria-label="Call us"
      >
        📞
      </a>

      {/* WhatsApp – bottom right */}
      <a
        href="https://wa.me/918081222333"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: "#25D366" }}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-xl hover:scale-110 transition"
        aria-label="WhatsApp us"
      >
        💬
      </a>

      {/* Free Consultation – right edge vertical */}
      <Link
        href="/contact"
        style={{
          background: "linear-gradient(180deg, #F4A118, #d4600a)",
          writingMode: "vertical-rl",
        }}
        className="fixed top-1/2 right-0 z-50 -translate-y-1/2 px-2 sm:px-3 py-3 sm:py-5 rounded-l-lg sm:rounded-l-xl text-white font-bold text-[10px] sm:text-xs shadow-xl hover:opacity-90 transition select-none"
        aria-label="Free Consultation"
      >
        Free Consultation
      </Link>

      {/* Success Popup */}
      {showSuccessPopup && (
        <SuccessPopup 
          message="Your appointment has been booked successfully!" 
          onClose={() => setShowSuccessPopup(false)} 
        />
      )}

      {/* Custom CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}