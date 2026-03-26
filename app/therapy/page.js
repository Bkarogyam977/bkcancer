"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

// Therapy data
const therapies = [
  {
    id: 1,
    name: "Panchakarma Therapy",
    sanskritName: "पंचकर्म चिकित्सा",
    description: "A comprehensive detoxification program that eliminates deep-seated toxins from the body and restores natural balance.",
    longDescription: "Panchakarma is the cornerstone of Ayurvedic treatment, consisting of five purification procedures designed to cleanse the body of accumulated toxins (ama). This therapy helps in treating chronic diseases, improving immunity, and rejuvenating the body at a cellular level.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/doctor_group_photo.jpeg",
    benefits: [
      "Deep detoxification of the body",
      "Removal of accumulated toxins",
      "Strengthens immune system",
      "Improves digestion and metabolism",
      "Rejuvenates body tissues",
      "Balances all three doshas"
    ],
    procedures: [
      "Vamana (Therapeutic Emesis)",
      "Virechana (Therapeutic Purgation)",
      "Basti (Medicated Enema)",
      "Nasya (Nasal Administration)",
      "Raktamokshana (Bloodletting)"
    ],
    duration: "7-21 days",
    bestFor: ["Chronic diseases", "Autoimmune disorders", "Stress", "Digestive issues", "Skin diseases"]
  },
  {
    id: 2,
    name: "Abhyanga Therapy",
    sanskritName: "अभ्यंग चिकित्सा",
    description: "A full-body therapeutic oil massage that nourishes tissues, improves circulation, and promotes deep relaxation.",
    longDescription: "Abhyanga involves the application of warm herbal oils with specific massage techniques. This therapy helps in relieving stress, improving blood circulation, nourishing the skin, and promoting sound sleep.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/WhatsApp_Image_2026-03-25_at_10.59.17_AM.jpeg",
    benefits: [
      "Reduces stress and anxiety",
      "Improves blood circulation",
      "Nourishes skin and tissues",
      "Promotes sound sleep",
      "Relieves muscle tension",
      "Enhances joint mobility"
    ],
    procedures: [
      "Warm herbal oil application",
      "Gentle to deep pressure massage",
      "Specific marma point stimulation",
      "Steam therapy post massage"
    ],
    duration: "45-60 minutes",
    bestFor: ["Stress relief", "Arthritis", "Muscle pain", "Poor circulation", "Insomnia"]
  },
  {
    id: 3,
    name: "Shirodhara Therapy",
    sanskritName: "शिरोधारा चिकित्सा",
    description: "A gentle stream of warm herbal oil poured on the forehead to calm the mind and nervous system.",
    longDescription: "Shirodhara involves the continuous pouring of medicated oil, buttermilk, or other liquids over the forehead (third eye area). This therapy is highly effective for mental disorders, stress, insomnia, and neurological conditions.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/12/Gemini_Generated_Image_h8w38ah8w38ah8w3_2.png",
    benefits: [
      "Calms the nervous system",
      "Reduces stress and anxiety",
      "Improves sleep quality",
      "Enhances mental clarity",
      "Relieves headaches and migraines",
      "Balances emotions"
    ],
    procedures: [
      "Preparation with warm herbal oil",
      "Continuous oil flow on forehead",
      "Gentle head and scalp massage",
      "Relaxation period"
    ],
    duration: "45-60 minutes",
    bestFor: ["Stress", "Anxiety", "Insomnia", "Migraines", "Neurological disorders"]
  },
  {
    id: 4,
    name: "Kati Basti",
    sanskritName: "कटी बस्ती",
    description: "A specialized treatment for lower back pain and spinal disorders using warm herbal oil.",
    longDescription: "Kati Basti involves retaining warm herbal oil over the lower back region using a specially prepared dough ring. This therapy provides deep relief for chronic back pain, sciatica, and degenerative spinal conditions.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/Gemini_Generated_Image_sqqv19sqqv19sqqv1.png",
    benefits: [
      "Relieves lower back pain",
      "Treats sciatica",
      "Strengthens spinal muscles",
      "Improves flexibility",
      "Reduces inflammation",
      "Nourishes vertebral discs"
    ],
    procedures: [
      "Dough ring preparation",
      "Warm herbal oil retention",
      "Oil renewal process",
      "Gentle massage post therapy"
    ],
    duration: "45-60 minutes",
    bestFor: ["Lower back pain", "Sciatica", "Spondylosis", "Spinal disorders", "Muscle stiffness"]
  },
  {
    id: 5,
    name: "Nasya Therapy",
    sanskritName: "नस्य चिकित्सा",
    description: "Administration of herbal oils or powders through the nasal passages to cleanse and rejuvenate the head region.",
    longDescription: "Nasya involves the administration of medicated oils or powders through the nostrils. This therapy is highly effective for sinusitis, headaches, allergies, and conditions affecting the head, neck, and sensory organs.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/carrire_banner.jpeg",
    benefits: [
      "Clears sinuses",
      "Relieves headaches",
      "Improves sense of smell",
      "Enhances mental clarity",
      "Treats allergies",
      "Strengthens immunity"
    ],
    procedures: [
      "Gentle facial and neck massage",
      "Application of herbal oils",
      "Nasal administration",
      "Steam inhalation"
    ],
    duration: "30-45 minutes",
    bestFor: ["Sinusitis", "Headaches", "Allergies", "Cervical spondylosis", "Hair problems"]
  },
  {
    id: 6,
    name: "Basti Therapy",
    sanskritName: "बस्ती चिकित्सा",
    description: "Medicated enema therapy that is highly effective for Vata disorders and chronic conditions.",
    longDescription: "Basti is considered the most effective treatment for Vata-related disorders. It involves the introduction of medicated oils or decoctions into the colon, providing deep nourishment and detoxification.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/doctor_group_photo.jpeg",
    benefits: [
      "Treats Vata disorders",
      "Improves digestive health",
      "Nourishes the colon",
      "Relieves constipation",
      "Strengthens immune system",
      "Rejuvenates body tissues"
    ],
    procedures: [
      "Preparation of herbal decoctions",
      "Administration of enema",
      "Post-therapy care",
      "Dietary guidelines"
    ],
    duration: "30-60 minutes",
    bestFor: ["Constipation", "IBS", "Arthritis", "Neurological disorders", "Chronic fatigue"]
  },
  {
    id: 7,
    name: "Udvartana Therapy",
    sanskritName: "उद्वर्तन चिकित्सा",
    description: "A deep exfoliating massage using herbal powders for weight management and skin rejuvenation.",
    longDescription: "Udvartana is a specialized massage using herbal powders to exfoliate the skin, reduce fat deposits, and improve circulation. It is highly effective for obesity, cellulite, and skin conditions.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/12/Gemini_Generated_Image_h8w38ah8w38ah8w3_2.png",
    benefits: [
      "Aids weight loss",
      "Reduces cellulite",
      "Exfoliates skin",
      "Improves circulation",
      "Tones muscles",
      "Removes toxins"
    ],
    procedures: [
      "Application of herbal powder",
      "Deep exfoliating massage",
      "Steam therapy",
      "Moisturizing"
    ],
    duration: "45-60 minutes",
    bestFor: ["Obesity", "Cellulite", "Skin conditions", "Poor circulation", "Lymphatic drainage"]
  },
  {
    id: 8,
    name: "Pizhichil Therapy",
    sanskritName: "पिझिचिल चिकित्सा",
    description: "A luxurious therapy where warm herbal oil is continuously poured over the body while being massaged.",
    longDescription: "Pizhichil combines the benefits of Abhyanga and Swedana. Warm medicated oil is poured in a continuous stream over the body while gentle massage is performed. It is excellent for neurological disorders and overall rejuvenation.",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/WhatsApp_Image_2026-03-25_at_10.59.17_AM.jpeg",
    benefits: [
      "Treats neurological disorders",
      "Deep muscle relaxation",
      "Improves joint mobility",
      "Reduces stress",
      "Rejuvenates the body",
      "Enhances skin health"
    ],
    procedures: [
      "Warm oil preparation",
      "Continuous oil pouring",
      "Gentle synchronized massage",
      "Steam therapy"
    ],
    duration: "60-90 minutes",
    bestFor: ["Paralysis", "Arthritis", "Muscular dystrophy", "Stress", "Rejuvenation"]
  }
];

// Benefits of Ayurvedic Therapies
const overallBenefits = [
  {
    title: "Natural Healing",
    description: "Ayurvedic therapies work with your body's natural healing mechanisms to restore balance and health.",
    icon: "🌿"
  },
  {
    title: "No Side Effects",
    description: "When performed by qualified practitioners, these therapies have no harmful side effects.",
    icon: "✅"
  },
  {
    title: "Holistic Approach",
    description: "Treats the root cause of disease rather than just managing symptoms.",
    icon: "🔄"
  },
  {
    title: "Personalized Treatment",
    description: "Therapies are customized based on your unique constitution and condition.",
    icon: "🎯"
  },
  {
    title: "Preventive Care",
    description: "Regular therapies help prevent diseases and maintain optimal health.",
    icon: "🛡️"
  },
  {
    title: "Mind-Body Balance",
    description: "Promotes harmony between mind, body, and spirit for complete wellness.",
    icon: "🧘"
  }
];

export default function TherapyPage() {
  const [selectedTherapy, setSelectedTherapy] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Detoxification", "Pain Management", "Rejuvenation", "Mental Wellness", "Weight Management"];

  const filteredTherapies = activeCategory === "All" 
    ? therapies 
    : therapies.filter(t => {
        if (activeCategory === "Detoxification") return ["Panchakarma Therapy", "Basti Therapy", "Nasya Therapy"].includes(t.name);
        if (activeCategory === "Pain Management") return ["Kati Basti", "Abhyanga Therapy", "Pizhichil Therapy"].includes(t.name);
        if (activeCategory === "Rejuvenation") return ["Pizhichil Therapy", "Shirodhara Therapy", "Abhyanga Therapy"].includes(t.name);
        if (activeCategory === "Mental Wellness") return ["Shirodhara Therapy", "Nasya Therapy"].includes(t.name);
        if (activeCategory === "Weight Management") return ["Udvartana Therapy"].includes(t.name);
        return true;
      });

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/carrire_banner.jpeg"
            alt="Ayurvedic Therapies - BK Cancer Care"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-sm font-semibold mb-4 backdrop-blur-sm">
              Our Therapies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Ayurvedic <span className="text-[#F4A118]">Healing Therapies</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl" style={body}>
              Discover ancient Ayurvedic treatments designed to restore balance, eliminate toxins, and promote natural healing.
            </p>
            <div className="flex gap-2 mt-4 text-sm text-white/70">
              <Link href="/" className="hover:text-[#F4A118] transition">Home</Link>
              <span>/</span>
              <span className="text-[#F4A118]">Therapies</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF7F4] text-[#0D3B38] text-sm font-semibold mb-4">
              Ancient Wisdom, Modern Healing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0D3B38", ...heading }}>
              Experience the Power of <span className="text-[#F4A118]">Ayurvedic Therapies</span>
            </h2>
            <p className="text-gray-600 leading-relaxed" style={body}>
              Our specialized Ayurvedic therapies are designed to address the root cause of diseases, 
              eliminate toxins, and restore the natural balance of your body. Each therapy is carefully 
              selected and personalized based on your unique constitution and health condition.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Benefits of <span className="text-[#F4A118]">Ayurvedic Therapies</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Why thousands of patients choose our holistic healing approach
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {overallBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{benefit.title}</h3>
                <p className="text-gray-600 text-sm" style={body}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#F4A118] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={body}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTherapies.map((therapy) => (
              <div
                key={therapy.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group"
                style={{ border: "1px solid #e5f0ec" }}
                onClick={() => setSelectedTherapy(therapy)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={therapy.image}
                    alt={therapy.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 bg-[#F4A118] text-white text-xs font-semibold rounded-full">
                      {therapy.duration}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1" style={{ color: "#0D3B38", ...heading }}>{therapy.name}</h3>
                  <p className="text-sm text-[#F4A118] font-medium mb-2">{therapy.sanskritName}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2" style={body}>{therapy.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {therapy.bestFor.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#EEF7F4] text-[#0D3B38] text-xs rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#F4A118] text-sm font-semibold group-hover:translate-x-1 transition">
                      Learn More →
                    </span>
                    <span className="text-xs text-gray-400">{therapy.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={heading}>
                Expert Ayurvedic <span className="text-[#F4A118]">Care</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Experienced Ayurvedic doctors with specialized training",
                  "Personalized therapy plans based on your constitution",
                  "Authentic herbal medicines prepared in-house",
                  "Clean, hygienic, and peaceful therapy rooms",
                  "Comprehensive pre and post-therapy consultation",
                  "Integration with modern diagnostic insights"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#F4A118] text-xl">✓</span>
                    <span className="text-white/90 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-8 px-6 py-3 rounded-lg text-white font-semibold transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Book a Consultation →
              </Link>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/doctor_group_photo.jpeg"
                alt="Ayurvedic Therapy Room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
            Ready to Begin Your <span className="text-[#F4A118]">Healing Journey?</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto" style={body}>
            Consult with our expert Ayurvedic doctors to get a personalized therapy plan tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg text-white font-semibold transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Book Free Consultation →
            </Link>
            <Link
              href="/doctors"
              className="px-8 py-3 rounded-lg text-[#0D3B38] font-semibold transition hover:bg-gray-100 border-2 border-[#0D3B38]"
            >
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Therapy Detail Modal */}
      {selectedTherapy && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedTherapy(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 rounded-t-2xl p-4 border-b" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-white" style={heading}>Therapy Details</h2>
                <button onClick={() => setSelectedTherapy(null)} className="text-2xl text-white hover:text-[#F4A118] transition">&times;</button>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                <Image
                  src={selectedTherapy.image}
                  alt={selectedTherapy.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#F4A118]/10 text-[#F4A118] text-sm font-semibold rounded-full">
                  Duration: {selectedTherapy.duration}
                </span>
                <span className="px-3 py-1 bg-[#EEF7F4] text-[#0D3B38] text-sm font-semibold rounded-full">
                  {selectedTherapy.sanskritName}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
                {selectedTherapy.name}
              </h1>
              
              <p className="text-gray-600 leading-relaxed mb-6" style={body}>
                {selectedTherapy.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#EEF7F4] rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: "#0D3B38" }}>
                    <span>✨</span> Benefits
                  </h3>
                  <ul className="space-y-2">
                    {selectedTherapy.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#F4A118]">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#EEF7F4] rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: "#0D3B38" }}>
                    <span>📋</span> Procedures
                  </h3>
                  <ul className="space-y-2">
                    {selectedTherapy.procedures.map((procedure, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#F4A118]">•</span>
                        <span>{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#0D3B38] to-[#1B6B5A] rounded-xl p-5 mb-6">
                <h3 className="font-bold text-lg mb-3 text-white">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTherapy.bestFor.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-6">
                <Link
                  href="/contact"
                  className="inline-block w-full md:w-auto px-6 py-3 rounded-lg text-white font-semibold text-center transition hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                >
                  Book This Therapy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .prose-lg { font-size: 0.95rem; }
        }
      `}</style>
    </>
  );
}