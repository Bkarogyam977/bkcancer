// import Link from "next/link";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Disease Treatment - BK Arogyam",
//   description: "BK Arogyam provides Ayurvedic treatment for cancer, kidney disease, diabetes, liver disease, and many more chronic conditions.",
// };

// const diseases = [
//   {
//     icon: "🎗️",
//     name: "Cancer",
//     category: "Oncology",
//     desc: "Ayurvedic support for cancer focuses on boosting immunity, reducing toxins, and managing side effects of conventional treatment through herbs like Ashwagandha, Guduchi, and Turmeric.",
//     symptoms: ["Unexplained weight loss", "Persistent fatigue", "Lumps or nodules", "Fever in evenings", "Bleeding or bruising"],
//     herbs: ["Ashwagandha", "Guduchi", "Turmeric", "Neem"],
//   },
//   {
//     icon: "🫘",
//     name: "Kidney Disease",
//     category: "Nephrology",
//     desc: "Ayurvedic protocols help improve kidney function, reduce creatinine levels, and slow disease progression naturally without harmful side effects.",
//     symptoms: ["Swelling in legs/feet", "Reduced urine output", "Fatigue", "Back pain", "High blood pressure"],
//     herbs: ["Punarnava", "Gokshura", "Varuna", "Shilajit"],
//   },
//   {
//     icon: "💉",
//     name: "Diabetes",
//     category: "Endocrinology",
//     desc: "Ayurvedic management of diabetes focuses on improving insulin sensitivity, controlling blood sugar, and preventing complications through diet, herbs, and lifestyle changes.",
//     symptoms: ["Frequent urination", "Excessive thirst", "Blurred vision", "Slow healing wounds", "Fatigue"],
//     herbs: ["Bitter Melon", "Fenugreek", "Gymnema", "Turmeric"],
//   },
//   {
//     icon: "🫀",
//     name: "Liver Disease",
//     category: "Hepatology",
//     desc: "Ayurvedic liver treatment focuses on detoxification, reducing inflammation, and regenerating liver cells through potent herbal formulations.",
//     symptoms: ["Jaundice (yellowing)", "Abdominal pain", "Nausea", "Fatigue", "Dark urine"],
//     herbs: ["Bhumyamalaki", "Kutki", "Kalmegh", "Bhringaraj"],
//   },
//   {
//     icon: "❤️",
//     name: "Heart Disease",
//     category: "Cardiology",
//     desc: "Ayurvedic heart care focuses on reducing cholesterol, improving circulation, and strengthening the heart muscle through natural therapies.",
//     symptoms: ["Chest pain", "Shortness of breath", "Palpitations", "Dizziness", "Swelling"],
//     herbs: ["Arjuna", "Garlic", "Guggul", "Triphala"],
//   },
//   {
//     icon: "🦴",
//     name: "Arthritis",
//     category: "Orthopedics",
//     desc: "Ayurvedic arthritis treatment reduces joint inflammation, pain, and stiffness through specialized therapies, oils, and anti-inflammatory herbs.",
//     symptoms: ["Joint pain", "Morning stiffness", "Swelling", "Reduced mobility", "Warmth in joints"],
//     herbs: ["Boswellia", "Ginger", "Ashwagandha", "Turmeric"],
//   },
//   {
//     icon: "🦋",
//     name: "Thyroid",
//     category: "Endocrinology",
//     desc: "Ayurvedic management of thyroid disorders focuses on balancing hormones, reducing autoimmune response, and improving metabolic function.",
//     symptoms: ["Unexplained weight changes", "Fatigue or hyperactivity", "Hair loss", "Cold or heat sensitivity", "Mood changes"],
//     herbs: ["Ashwagandha", "Guggul", "Kanchanar", "Brahmi"],
//   },
//   {
//     icon: "🩺",
//     name: "Blood Pressure",
//     category: "Cardiology",
//     desc: "Ayurvedic approach to hypertension addresses the root cause through stress reduction, dietary changes, and potent herbs that naturally lower blood pressure.",
//     symptoms: ["Headaches", "Dizziness", "Blurred vision", "Chest pain", "Shortness of breath"],
//     herbs: ["Arjuna", "Garlic", "Sarpagandha", "Triphala"],
//   },
//   {
//     icon: "🌬️",
//     name: "Asthma",
//     category: "Pulmonology",
//     desc: "Ayurvedic treatment for asthma focuses on reducing inflammation, strengthening lung tissue, and preventing episodes through herbs and breathing practices.",
//     symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Respiratory distress"],
//     herbs: ["Vasa", "Licorice", "Pushkarmool", "Pippali"],
//   },
//   {
//     icon: "🌸",
//     name: "PCOD / PCOS",
//     category: "Gynecology",
//     desc: "Ayurvedic management of PCOD/PCOS helps regulate hormonal imbalances, improve fertility, and manage symptoms through personalized herbal protocols.",
//     symptoms: ["Irregular periods", "Excessive hair growth", "Acne", "Weight gain", "Difficulty conceiving"],
//     herbs: ["Shatavari", "Ashoka", "Lodhra", "Triphala"],
//   },
//   {
//     icon: "🧠",
//     name: "Paralysis",
//     category: "Neurology",
//     desc: "Ayurvedic treatment for paralysis focuses on nerve regeneration, improving circulation, and rehabilitation through Panchakarma and specialized therapies.",
//     symptoms: ["Loss of movement", "Muscle weakness", "Numbness", "Difficulty speaking", "Vision problems"],
//     herbs: ["Brahmi", "Ashwagandha", "Bala", "Shatavari"],
//   },
//   {
//     icon: "⚖️",
//     name: "Obesity",
//     category: "Metabolic",
//     desc: "Ayurvedic weight management addresses the root cause of obesity through Kapha-balancing diet, metabolism-boosting herbs, and lifestyle modifications.",
//     symptoms: ["Excess body weight", "Fatigue", "Joint pain", "Sleep apnea", "Low energy"],
//     herbs: ["Triphala", "Guggul", "Garcinia", "Ginger"],
//   },
// ];

// export default function DiseasePage() {
//   return (
//     <>
//       {/* Banner */}
//       <section style={{ backgroundColor: "#0D3B38" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Disease <span style={{ color: "#F4A118" }}>Treatment</span>
//           </h1>
//           <p className="text-white/70 max-w-2xl mx-auto text-lg">
//             Ayurvedic treatment for a wide range of chronic and lifestyle diseases — addressing the root cause, not just the symptoms.
//           </p>
//           <div className="flex justify-center gap-2 mt-4 text-sm text-white/50">
//             <Link href="/" className="hover:text-white transition">Home</Link>
//             <span>/</span>
//             <span style={{ color: "#F4A118" }}>Disease</span>
//           </div>
//         </div>
//       </section>

//       {/* Causes Section */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-5">
//                 What <span style={{ color: "#F4A118" }}>Causes</span> Chronic Disease?
//               </h2>
//               <p className="text-gray-600 mb-4 leading-relaxed">Before beginning treatment, the underlying causes must be understood in detail.</p>
//               <ul className="space-y-3">
//                 {[
//                   "Genetic factors and hereditary conditions affecting cellular function",
//                   "Poor diet high in fats, sugar, and processed foods",
//                   "Sedentary lifestyle and lack of physical activity",
//                   "Environmental toxin exposure including pollutants and chemicals",
//                   "Chronic stress and hormonal imbalances",
//                   "Weakened immunity and dosha imbalances",
//                 ].map((cause) => (
//                   <li key={cause} className="flex gap-3 text-gray-600">
//                     <span style={{ color: "#F4A118" }} className="font-bold mt-0.5">•</span>
//                     <span>{cause}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div style={{ backgroundColor: "#EEF7F4" }} className="rounded-2xl p-8">
//               <h3 className="text-2xl font-bold mb-5" style={{ color: "#0D3B38" }}>Signs & Symptoms to Watch</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 {[
//                   "Nodules under skin", "Continuous discomfort", "Evening fever",
//                   "Unexplained weight loss", "Persistent fatigue", "Bleeding easily",
//                   "Trouble breathing", "Difficulty swallowing", "Skin changes",
//                   "Mood changes",
//                 ].map((s) => (
//                   <div key={s} className="flex gap-2 items-center text-sm text-gray-700">
//                     <span style={{ color: "#0D3B38" }}>⚕</span> {s}
//                   </div>
//                 ))}
//               </div>
//               <Link href="/contact" style={{ backgroundColor: "#0D3B38" }} className="inline-block mt-6 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition text-sm">
//                 Book Consultation
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Disease Cards */}
//       <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-3">
//             Conditions We <span style={{ color: "#F4A118" }}>Treat</span>
//           </h2>
//           <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
//             Comprehensive Ayurvedic treatment for chronic and lifestyle-related diseases.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {diseases.map((d) => (
//               <div key={d.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
//                 <div style={{ backgroundColor: "#0D3B38" }} className="p-5 flex items-center gap-4">
//                   <span className="text-4xl">{d.icon}</span>
//                   <div>
//                     <h3 className="text-white font-bold text-lg">{d.name}</h3>
//                     <span style={{ backgroundColor: "#F4A118" }} className="text-white text-xs px-2 py-0.5 rounded-full">{d.category}</span>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">{d.desc}</p>
//                   <div className="mb-3">
//                     <p className="text-xs font-bold text-gray-500 uppercase mb-2">Common Symptoms</p>
//                     <div className="flex flex-wrap gap-1">
//                       {d.symptoms.map((s) => (
//                         <span key={s} style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }} className="text-xs px-2 py-1 rounded-full">{s}</span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mb-4">
//                     <p className="text-xs font-bold text-gray-500 uppercase mb-2">Key Herbs Used</p>
//                     <div className="flex flex-wrap gap-1">
//                       {d.herbs.map((h) => (
//                         <span key={h} style={{ backgroundColor: "#F4A118" }} className="text-white text-xs px-2 py-1 rounded-full">{h}</span>
//                       ))}
//                     </div>
//                   </div>
//                   <Link href="/contact" style={{ color: "#0D3B38" }} className="font-semibold text-sm hover:underline">
//                     Get Treatment →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How Ayurveda Treats */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-4">
//             How Ayurveda <span style={{ color: "#F4A118" }}>Diagnoses & Treats</span>
//           </h2>
//           <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
//             Ayurveda is fundamentally different from modern medicine — it treats the whole person, not just the disease.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <div style={{ backgroundColor: "#EEF7F4", borderLeft: "4px solid #0D3B38" }} className="rounded-xl p-6">
//               <h3 className="font-bold text-lg mb-3" style={{ color: "#0D3B38" }}>Ayurvedic Diagnosis</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Rather than blood tests or biopsies, Ayurvedic practitioners analyze the body as a whole. They check your pulse, tongue, eyes, and lifestyle to understand deep-rooted imbalances. It is less about labeling a disease and more about understanding where the body has been out of sync for a long time.
//               </p>
//             </div>
//             <div style={{ backgroundColor: "#EEF7F4", borderLeft: "4px solid #F4A118" }} className="rounded-xl p-6">
//               <h3 className="font-bold text-lg mb-3" style={{ color: "#0D3B38" }}>Ayurvedic Treatment</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Ayurveda focuses on rebuilding the body's natural strength and clearing the root cause. This includes Panchakarma detox, dosha balancing with potent herbs, and lifestyle adjustments. It is a slow and subtle approach — treating the whole person rather than just getting rid of cells.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{ backgroundColor: "#0D3B38" }} className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-3">
//             Get Expert <span style={{ color: "#F4A118" }}>Ayurvedic Treatment</span>
//           </h2>
//           <p className="text-white/70 mb-6">Our doctors will create a personalized treatment plan for your specific condition.</p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link href="/contact" style={{ backgroundColor: "#F4A118" }} className="px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition">
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
  title: "Disease Treatment - BK Arogyam",
  description: "BK Arogyam provides Ayurvedic treatment for cancer, kidney disease, diabetes, liver disease, and many more chronic conditions.",
};

const diseases = [
  {
    icon: "🎗️",
    name: "Cancer",
    category: "Oncology",
    desc: "Ayurvedic support for cancer focuses on boosting immunity, reducing toxins, and managing side effects of conventional treatment through herbs like Ashwagandha, Guduchi, and Turmeric.",
    symptoms: ["Unexplained weight loss", "Persistent fatigue", "Lumps or nodules", "Fever in evenings", "Bleeding or bruising"],
    herbs: ["Ashwagandha", "Guduchi", "Turmeric", "Neem"],
  },
  {
    icon: "🫘",
    name: "Kidney Disease",
    category: "Nephrology",
    desc: "Ayurvedic protocols help improve kidney function, reduce creatinine levels, and slow disease progression naturally without harmful side effects.",
    symptoms: ["Swelling in legs/feet", "Reduced urine output", "Fatigue", "Back pain", "High blood pressure"],
    herbs: ["Punarnava", "Gokshura", "Varuna", "Shilajit"],
  },
  {
    icon: "💉",
    name: "Diabetes",
    category: "Endocrinology",
    desc: "Ayurvedic management of diabetes focuses on improving insulin sensitivity, controlling blood sugar, and preventing complications through diet, herbs, and lifestyle changes.",
    symptoms: ["Frequent urination", "Excessive thirst", "Blurred vision", "Slow healing wounds", "Fatigue"],
    herbs: ["Bitter Melon", "Fenugreek", "Gymnema", "Turmeric"],
  },
  {
    icon: "🫀",
    name: "Liver Disease",
    category: "Hepatology",
    desc: "Ayurvedic liver treatment focuses on detoxification, reducing inflammation, and regenerating liver cells through potent herbal formulations.",
    symptoms: ["Jaundice (yellowing)", "Abdominal pain", "Nausea", "Fatigue", "Dark urine"],
    herbs: ["Bhumyamalaki", "Kutki", "Kalmegh", "Bhringaraj"],
  },
  {
    icon: "❤️",
    name: "Heart Disease",
    category: "Cardiology",
    desc: "Ayurvedic heart care focuses on reducing cholesterol, improving circulation, and strengthening the heart muscle through natural therapies.",
    symptoms: ["Chest pain", "Shortness of breath", "Palpitations", "Dizziness", "Swelling"],
    herbs: ["Arjuna", "Garlic", "Guggul", "Triphala"],
  },
  {
    icon: "🦴",
    name: "Arthritis",
    category: "Orthopedics",
    desc: "Ayurvedic arthritis treatment reduces joint inflammation, pain, and stiffness through specialized therapies, oils, and anti-inflammatory herbs.",
    symptoms: ["Joint pain", "Morning stiffness", "Swelling", "Reduced mobility", "Warmth in joints"],
    herbs: ["Boswellia", "Ginger", "Ashwagandha", "Turmeric"],
  },
  {
    icon: "🦋",
    name: "Thyroid",
    category: "Endocrinology",
    desc: "Ayurvedic management of thyroid disorders focuses on balancing hormones, reducing autoimmune response, and improving metabolic function.",
    symptoms: ["Unexplained weight changes", "Fatigue or hyperactivity", "Hair loss", "Cold or heat sensitivity", "Mood changes"],
    herbs: ["Ashwagandha", "Guggul", "Kanchanar", "Brahmi"],
  },
  {
    icon: "🩺",
    name: "Blood Pressure",
    category: "Cardiology",
    desc: "Ayurvedic approach to hypertension addresses the root cause through stress reduction, dietary changes, and potent herbs that naturally lower blood pressure.",
    symptoms: ["Headaches", "Dizziness", "Blurred vision", "Chest pain", "Shortness of breath"],
    herbs: ["Arjuna", "Garlic", "Sarpagandha", "Triphala"],
  },
  {
    icon: "🌬️",
    name: "Asthma",
    category: "Pulmonology",
    desc: "Ayurvedic treatment for asthma focuses on reducing inflammation, strengthening lung tissue, and preventing episodes through herbs and breathing practices.",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Respiratory distress"],
    herbs: ["Vasa", "Licorice", "Pushkarmool", "Pippali"],
  },
  {
    icon: "🌸",
    name: "PCOD / PCOS",
    category: "Gynecology",
    desc: "Ayurvedic management of PCOD/PCOS helps regulate hormonal imbalances, improve fertility, and manage symptoms through personalized herbal protocols.",
    symptoms: ["Irregular periods", "Excessive hair growth", "Acne", "Weight gain", "Difficulty conceiving"],
    herbs: ["Shatavari", "Ashoka", "Lodhra", "Triphala"],
  },
  {
    icon: "🧠",
    name: "Paralysis",
    category: "Neurology",
    desc: "Ayurvedic treatment for paralysis focuses on nerve regeneration, improving circulation, and rehabilitation through Panchakarma and specialized therapies.",
    symptoms: ["Loss of movement", "Muscle weakness", "Numbness", "Difficulty speaking", "Vision problems"],
    herbs: ["Brahmi", "Ashwagandha", "Bala", "Shatavari"],
  },
  {
    icon: "⚖️",
    name: "Obesity",
    category: "Metabolic",
    desc: "Ayurvedic weight management addresses the root cause of obesity through Kapha-balancing diet, metabolism-boosting herbs, and lifestyle modifications.",
    symptoms: ["Excess body weight", "Fatigue", "Joint pain", "Sleep apnea", "Low energy"],
    herbs: ["Triphala", "Guggul", "Garcinia", "Ginger"],
  },
];

export default function DiseasePage() {
  return (
    <>
      {/* Banner with New Image */}
      <section className="relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_lbuenhlbuenhlbue2.png"
            alt="BK Arogyam Disease Treatment - Ayurvedic Healing"
            fill
            className="object-cover"
            priority
            unoptimized // Add this if images don't load, remove if next.config.js is configured
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Disease <span style={{ color: "#F4A118" }}>Treatment</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-6">
                Ayurvedic treatment for a wide range of chronic and lifestyle diseases — addressing the root cause, not just the symptoms.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span style={{ color: "#F4A118" }}>Disease</span>
              </div>
              
              {/* Quick CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-[#F4A118] to-[#d4600a] rounded-lg text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                >
                  Book Consultation
                </Link>
                <a 
                  href="tel:+918081222333" 
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold border border-white/30 hover:bg-white/20 transition-all"
                >
                  📞 Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="0.95" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5">
                What <span style={{ color: "#F4A118" }}>Causes</span> Chronic Disease?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">Before beginning treatment, the underlying causes must be understood in detail.</p>
              <ul className="space-y-3">
                {[
                  "Genetic factors and hereditary conditions affecting cellular function",
                  "Poor diet high in fats, sugar, and processed foods",
                  "Sedentary lifestyle and lack of physical activity",
                  "Environmental toxin exposure including pollutants and chemicals",
                  "Chronic stress and hormonal imbalances",
                  "Weakened immunity and dosha imbalances",
                ].map((cause) => (
                  <li key={cause} className="flex gap-3 text-gray-600">
                    <span style={{ color: "#F4A118" }} className="font-bold mt-0.5">•</span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: "#EEF7F4" }} className="rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-5" style={{ color: "#0D3B38" }}>Signs & Symptoms to Watch</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Nodules under skin", "Continuous discomfort", "Evening fever",
                  "Unexplained weight loss", "Persistent fatigue", "Bleeding easily",
                  "Trouble breathing", "Difficulty swallowing", "Skin changes",
                  "Mood changes",
                ].map((s) => (
                  <div key={s} className="flex gap-2 items-center text-sm text-gray-700">
                    <span style={{ color: "#0D3B38" }}>⚕</span> {s}
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ backgroundColor: "#0D3B38" }} className="inline-block mt-6 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition text-sm">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Cards */}
      <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-3">
            Conditions We <span style={{ color: "#F4A118" }}>Treat</span>
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Comprehensive Ayurvedic treatment for chronic and lifestyle-related diseases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map((d) => (
              <div key={d.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div style={{ backgroundColor: "#0D3B38" }} className="p-5 flex items-center gap-4">
                  <span className="text-4xl">{d.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{d.name}</h3>
                    <span style={{ backgroundColor: "#F4A118" }} className="text-white text-xs px-2 py-0.5 rounded-full">{d.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{d.desc}</p>
                  <div className="mb-3">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Common Symptoms</p>
                    <div className="flex flex-wrap gap-1">
                      {d.symptoms.map((s) => (
                        <span key={s} style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }} className="text-xs px-2 py-1 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Key Herbs Used</p>
                    <div className="flex flex-wrap gap-1">
                      {d.herbs.map((h) => (
                        <span key={h} style={{ backgroundColor: "#F4A118" }} className="text-white text-xs px-2 py-1 rounded-full">{h}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" style={{ color: "#0D3B38" }} className="font-semibold text-sm hover:underline">
                    Get Treatment →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Ayurveda Treats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            How Ayurveda <span style={{ color: "#F4A118" }}>Diagnoses & Treats</span>
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
            Ayurveda is fundamentally different from modern medicine — it treats the whole person, not just the disease.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div style={{ backgroundColor: "#EEF7F4", borderLeft: "4px solid #0D3B38" }} className="rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3" style={{ color: "#0D3B38" }}>Ayurvedic Diagnosis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rather than blood tests or biopsies, Ayurvedic practitioners analyze the body as a whole. They check your pulse, tongue, eyes, and lifestyle to understand deep-rooted imbalances. It is less about labeling a disease and more about understanding where the body has been out of sync for a long time.
              </p>
            </div>
            <div style={{ backgroundColor: "#EEF7F4", borderLeft: "4px solid #F4A118" }} className="rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3" style={{ color: "#0D3B38" }}>Ayurvedic Treatment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ayurveda focuses on rebuilding the body's natural strength and clearing the root cause. This includes Panchakarma detox, dosha balancing with potent herbs, and lifestyle adjustments. It is a slow and subtle approach — treating the whole person rather than just getting rid of cells.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0D3B38" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Get Expert <span style={{ color: "#F4A118" }}>Ayurvedic Treatment</span>
          </h2>
          <p className="text-white/70 mb-6">Our doctors will create a personalized treatment plan for your specific condition.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" style={{ backgroundColor: "#F4A118" }} className="px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition">
              Book Consultation
            </Link>
            <a href="tel:+918081222333" className="px-8 py-3 rounded-lg bg-white font-bold hover:opacity-90 transition" style={{ color: "#0D3B38" }}>
              📞 +91 8081222333
            </a>
          </div>
        </div>
      </section>
    </>
  );
}