"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function RadiationSupportProgram() {
  const benefits = [
    "Reduces skin reactions and burns",
    "Prevents radiation-induced fatigue",
    "Protects healthy tissues",
    "Maintains energy levels",
    "Supports tissue healing",
    "Reduces inflammation",
    "Improves treatment tolerance",
    "Enhances recovery after radiation"
  ];

  const protections = [
    { name: "Skin Protection", desc: "Natural formulations to protect and heal irradiated skin" },
    { name: "Cellular Protection", desc: "Herbs that protect healthy cells from radiation damage" },
    { name: "Fatigue Management", desc: "Energy-boosting therapies and nutrition" },
    { name: "Anti-inflammatory Support", desc: "Reduces inflammation in treated areas" },
    { name: "Tissue Regeneration", desc: "Promotes healing of affected tissues" }
  ];

  const duration = {
    min: "Throughout radiation",
    recommended: "3-6 months",
    includes: ["Pre-radiation assessment", "During-treatment support", "Post-radiation recovery", "Customized herbal protocol", "Dietary guidance", "24/7 support"]
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/image-6501-1024x683.jpeg"
            alt="Radiation Support - Ayurvedic Cancer Care"
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
              <span className="text-5xl">⚡</span>
              <span className="text-[#F4A118] font-semibold text-sm">Support Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Radiation Support Program
            </h1>
            <p className="text-lg md:text-xl opacity-90" style={body}>
              Protect Your Body During Radiation Therapy
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
                Protective Care
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
                Support Your Body During Radiation
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed" style={body}>
                Radiation therapy effectively targets cancer cells but can affect healthy tissues. Our Radiation Support Program is designed to protect healthy cells, reduce side effects, and support your body during treatment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed" style={body}>
                Using powerful radioprotective herbs and supportive therapies, we help minimize skin reactions, fatigue, and other radiation-related side effects.
              </p>
              <Link href="/consultation" className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                Start Radiation Support →
              </Link>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_o25k8uo25k8uo25k.png"
                alt="Radiation Support Program"
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
              How our program helps during radiation therapy
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

      {/* Protection Strategies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Protection Strategies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Multi-layered approach to radiation protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protections.map((protection, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{protection.name}</h3>
                <p className="text-gray-600 text-sm" style={body}>{protection.desc}</p>
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
              <p className="text-gray-600 mb-6" style={body}>Based on individual response and treatment schedule</p>
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
              <h3 className="text-2xl font-bold mb-4" style={heading}>🌟 Success Stories</h3>
              <p className="text-white/80 mb-4 italic" style={body}>
                "During my radiation treatment, I was worried about skin burns and fatigue. The Radiation Support Program helped protect my skin and kept my energy levels up throughout treatment."
              </p>
              <p className="text-white font-semibold">- Sunita R., Breast Cancer Patient</p>
              <Link href="/case-studies" className="inline-block mt-6 text-[#F4A118] hover:underline text-sm">
                Read More Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
            Ready to Start Radiation Support?
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Book a consultation to protect your body during radiation
          </p>
          <Link href="/consultation" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}