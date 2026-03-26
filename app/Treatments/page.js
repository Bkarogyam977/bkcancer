"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function Treatments() {
  return (
    <>
      {/* Hero Section with New Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/22/understanding_2.jpeg"
            alt="Ayurvedic Cancer Treatment"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-sm font-semibold mb-4" style={body}>
              Integrative Oncology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Our Treatments
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed" style={body}>
              Comprehensive Ayurvedic Cancer Care Protocols — Personalized, Holistic, and Effective
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link 
                href="/consultation" 
                className="px-6 py-3 rounded-lg text-white font-semibold transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Free Consultation →
              </Link>
              <Link 
                href="#treatments" 
                className="px-6 py-3 rounded-lg text-white font-semibold transition hover:bg-white/20 border border-white/30"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Treatments */}
      <section id="treatments" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EEF7F4] text-[#0D3B38] text-sm font-semibold mb-3" style={body}>
              Our Modalities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Core Treatment Modalities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Each treatment is personalized based on individual needs, cancer type, and body constitution
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                title: "Panchakarma Therapy",
                icon: "🔄",
                description: "The cornerstone of Ayurvedic cancer treatment, Panchakarma is a comprehensive detoxification process that eliminates toxins (ama) from the body, strengthens the immune system, and prepares the body for deeper healing. This ancient therapy helps restore the body's natural balance and enhances the effectiveness of other treatments.",
                procedures: ["Vamana (Therapeutic Emesis)", "Virechana (Purgation)", "Basti (Medicated Enema)", "Nasya (Nasal Administration)", "Raktamokshana (Blood Letting)"],
                benefits: ["Deep detoxification", "Immune system strengthening", "Improved metabolism", "Reduced side effects", "Enhanced treatment efficacy"],
                image: "https://healdiway.bkarogyam.com/media/clinic-image%2Fblogimage%2F2024%2F8%2F13%2F2024-08-13%2012%3A39%3A15.993421%2005%3A30%2Fabhyanga.jpg"
              },
              {
                title: "Herbal Immunotherapy",
                icon: "🌿",
                description: "Our proprietary herbal formulations are designed to boost the immune system, target cancer cells, and support the body's natural healing mechanisms without side effects. These time-tested formulas combine ancient wisdom with modern research for optimal results.",
                procedures: ["Personalized herbal combinations", "Immunomodulators", "Rasayana (Rejuvenation) therapy", "Anti-cancer herbs", "Supportive formulations"],
                benefits: ["Zero side effects", "Strengthened immunity", "Targeted cancer cell action", "Improved quality of life", "Prevents recurrence"],
                image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_o25k8uo25k8uo25k.png"
              },
              {
                title: "Diet & Nutrition Therapy",
                icon: "🥗",
                description: "Personalized dietary plans based on individual constitution (Prakriti) and cancer type. Food as medicine approach to support healing, boost immunity, and reduce inflammation. Our nutritionists work closely with you to create sustainable eating habits.",
                procedures: ["Personalized meal plans", "Anti-cancer foods", "Digestive support", "Nutritional supplementation", "Detoxifying diet"],
                benefits: ["Enhanced immunity", "Better treatment response", "Improved energy", "Faster recovery", "Long-term wellness"],
                image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_k9cvqpk9cvqpk9cv1.png"
              },
              {
                title: "Mind-Body Therapies",
                icon: "🧘",
                description: "Holistic approaches that address mental and emotional wellbeing, crucial for cancer healing. Stress management and mental clarity support physical healing. These practices help patients develop resilience and maintain a positive outlook throughout treatment.",
                procedures: ["Yoga therapy", "Pranayama (Breathing exercises)", "Meditation", "Stress management", "Counseling"],
                benefits: ["Reduced stress", "Improved mental clarity", "Better sleep", "Emotional balance", "Enhanced healing"],
                image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_obfryrobfryrobfr1.png"
              },
              {
                title: "External Therapies",
                icon: "💆",
                description: "Specialized external applications that provide targeted relief, reduce pain, and support the healing process at the local level. These therapies complement internal treatments and provide immediate comfort and relief.",
                procedures: ["Abhyanga (Oil Massage)", "Shirodhara", "Lepa (Herbal paste application)", "Pinda Sweda", "Dhanyamla Dhara"],
                benefits: ["Pain relief", "Reduced inflammation", "Improved circulation", "Relaxation", "Localized healing"],
                image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_g3mmhag3mmhag3mm1.png"
              }
            ].map((treatment, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-5xl mb-4">{treatment.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0D3B38", ...heading }}>
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed" style={body}>
                    {treatment.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                    <div className="bg-[#EEF7F4] rounded-xl p-4">
                      <h4 className="font-bold mb-2 text-[#0D3B38]">🔹 Key Procedures</h4>
                      <ul className="space-y-1">
                        {treatment.procedures.map((proc, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-[#F4A118]">•</span>
                            <span style={body}>{proc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#EEF7F4] rounded-xl p-4">
                      <h4 className="font-bold mb-2 text-[#0D3B38]">✨ Key Benefits</h4>
                      <ul className="space-y-1">
                        {treatment.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-[#F4A118]">✓</span>
                            <span style={body}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#0D3B38] text-sm font-semibold mb-3" style={body}>
              Step by Step
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Our Treatment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              A systematic approach to your healing journey — from consultation to long-term wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Initial Consultation", desc: "Free consultation with specialist to understand your condition", icon: "📞" },
              { step: "02", title: "Detailed Assessment", desc: "Analysis of cancer type, stage, and body constitution", icon: "📊" },
              { step: "03", title: "Personalized Plan", desc: "Custom treatment protocol designed specifically for you", icon: "📝" },
              { step: "04", title: "Treatment Begins", desc: "Start your healing journey with our expert team", icon: "🌿" },
              { step: "05", title: "Regular Monitoring", desc: "Continuous follow-up and treatment adjustment", icon: "📈" },
              { step: "06", title: "Long-term Care", desc: "Ongoing support for complete recovery and prevention", icon: "💚" }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F4A118] to-[#d4600a] flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg">
                  {step.step}
                </div>
                <div className="text-3xl mb-2">{step.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#0D3B38", ...heading }}>{step.title}</h3>
                <p className="text-gray-600 text-sm" style={body}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "25+", label: "Years of Experience", icon: "📅" },
              { number: "10,000+", label: "Happy Patients", icon: "👥" },
              { number: "5", label: "Treatment Centers", icon: "📍" },
              { number: "90%", label: "Satisfaction Rate", icon: "⭐" }
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#F4A118] mb-1">{stat.number}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
            Ready to Start Your Treatment?
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Book a consultation with our Ayurvedic cancer specialists today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Book Consultation →
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:bg-white/20 border-2 border-white/50"
            >
              Learn How It Works →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}