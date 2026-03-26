"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function MaintenanceProgram() {
  const benefits = [
    "Prevents cancer recurrence",
    "Maintains strong immunity",
    "Regular health monitoring",
    "Lifestyle guidance for wellness",
    "Stress management techniques",
    "Nutritional support",
    "Long-term health maintenance",
    "Peace of mind through regular care"
  ];

  const components = [
    { name: "Preventive Herbal Protocol", desc: "Herbal formulations to maintain health and prevent recurrence" },
    { name: "Regular Monitoring", desc: "Periodic check-ups and assessments" },
    { name: "Lifestyle Counseling", desc: "Guidance on diet, exercise, and daily routines" },
    { name: "Stress Management", desc: "Yoga, meditation, and relaxation techniques" },
    { name: "Nutritional Support", desc: "Long-term dietary guidance for optimal health" }
  ];

  const duration = {
    min: "6 months",
    recommended: "2-3 years",
    includes: ["Quarterly consultations", "Maintenance herbal protocol", "Dietary guidance", "Lifestyle counseling", "Regular health monitoring", "24/7 support"]
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/hospital-preventive.jpeg"
            alt="Maintenance Program - Long-term Ayurvedic Cancer Care"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🌿</span>
              <span className="text-[#F4A118] font-semibold text-sm">Support Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Maintenance Program
            </h1>
            <p className="text-lg md:text-xl opacity-90" style={body}>
              Long-term Wellness and Cancer Recurrence Prevention
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}>
                Long-term Wellness
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
                Stay Healthy After Treatment
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed" style={body}>
                Completing cancer treatment is a major milestone. Our Maintenance Program helps you stay healthy, prevent recurrence, and enjoy long-term wellness.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed" style={body}>
                Through regular monitoring, preventive herbal protocols, and lifestyle guidance, we support your journey to lasting health and vitality.
              </p>
              <Link href="/consultation" className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                Start Maintenance Program →
              </Link>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_obfryrobfryrobfr1.png"
                alt="Maintenance Program"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Key Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              What our Maintenance Program offers for long-term health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-5 text-center hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                <div className="w-12 h-12 rounded-full bg-[#F4A118]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#F4A118] text-xl">✓</span>
                </div>
                <p className="text-gray-700 text-sm font-medium" style={body}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Program Components
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Comprehensive approach to long-term wellness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{component.name}</h3>
                <p className="text-gray-600 text-sm" style={body}>{component.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e5f0ec" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>📅 Program Duration</h3>
              <p className="text-3xl font-bold text-[#F4A118] mb-2">{duration.min} - {duration.recommended}</p>
              <p className="text-gray-600 mb-6" style={body}>Long-term commitment for lasting results</p>
              <h4 className="font-bold mb-3" style={{ color: "#0D3B38" }}>What's Included:</h4>
              <ul className="space-y-2">
                {duration.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#F4A118]">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0D3B38] to-[#1a5c57] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4" style={heading}>🌟 Success Story</h3>
              <p className="text-white/80 mb-4 italic" style={body}>
                "Two years after completing my cancer treatment, I'm still cancer-free thanks to the Maintenance Program. Regular check-ups and herbal support give me peace of mind."
              </p>
              <p className="text-white font-semibold">- Vikram S., Survivor</p>
              <Link href="/case-studies" className="inline-block mt-6 text-[#F4A118] hover:underline text-sm">
                Read More Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Monitoring Schedule
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Regular check-ups for long-term wellness
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8" style={{ border: "1px solid #e5f0ec" }}>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-gray-200">
                  <span className="font-semibold text-[#0D3B38]">First Year</span>
                  <span className="text-gray-600">Every 3 months</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-gray-200">
                  <span className="font-semibold text-[#0D3B38]">Second Year</span>
                  <span className="text-gray-600">Every 4-6 months</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-gray-200">
                  <span className="font-semibold text-[#0D3B38]">Third Year & Beyond</span>
                  <span className="text-gray-600">Every 6-12 months</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2">
                  <span className="font-semibold text-[#0D3B38]">Annual Comprehensive Check-up</span>
                  <span className="text-gray-600">Yearly full assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
            Ready to Start Your Maintenance Journey?
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Book a consultation to begin your long-term wellness plan
          </p>
          <Link href="/consultation" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}