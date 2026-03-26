"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function AdvancedStageSupportProgram() {
  const benefits = [
    "Effective pain management",
    "Improved appetite and nutrition",
    "Better sleep quality",
    "Reduced anxiety and stress",
    "Emotional and psychological support",
    "Maintained dignity and comfort",
    "Family support and guidance",
    "Improved quality of life"
  ];

  const services = [
    { name: "Pain Management", desc: "Natural approaches to manage cancer pain" },
    { name: "Nutrition Support", desc: "Easy-to-digest, nourishing foods" },
    { name: "Emotional Counseling", desc: "Support for patients and families" },
    { name: "Symptom Management", desc: "Managing fatigue, breathlessness, and more" },
    { name: "Family Guidance", desc: "Support and education for caregivers" }
  ];

  const duration = {
    min: "Ongoing",
    recommended: "As needed",
    includes: ["Regular consultations", "Symptom management", "Pain relief protocols", "Nutritional support", "Emotional counseling", "24/7 caregiver support"]
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/Gemini_Generated_Image_digczqdigczqdigc1.png"
            alt="Advanced Stage Support - Compassionate Ayurvedic Cancer Care"
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
              <span className="text-5xl">❤️</span>
              <span className="text-[#F4A118] font-semibold text-sm">Support Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Advanced Stage Support Program
            </h1>
            <p className="text-lg md:text-xl opacity-90" style={body}>
              Compassionate Care for Comfort, Dignity, and Quality of Life
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
                Compassionate Care
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
                Quality of Life is Our Priority
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed" style={body}>
                In advanced stages of cancer, the focus shifts to comfort, dignity, and quality of life. Our Advanced Stage Support Program provides compassionate care that addresses physical, emotional, and spiritual needs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed" style={body}>
                We work alongside your medical team to manage symptoms, reduce pain, and provide emotional support for both patients and families.
              </p>
              <Link href="/consultation" className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                Get Support →
              </Link>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_g3mmhag3mmhag3mm1.png"
                alt="Advanced Stage Support Program"
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
              What We Provide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Comprehensive support for patients and families
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

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Holistic support for body, mind, and spirit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                <div className="text-3xl mb-3">{["💊","🥗","💬","🌿","👨‍👩‍👧"][i]}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{service.name}</h3>
                <p className="text-gray-600 text-sm" style={body}>{service.desc}</p>
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
              <p className="text-gray-600 mb-6" style={body}>Flexible support based on individual needs</p>
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
                "The care and support I received during my advanced stage treatment was incredible. They helped manage my pain and gave me hope. My family felt supported too."
              </p>
              <p className="text-white font-semibold">- Lakshmi Devi, Advanced Ovarian Cancer</p>
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
            We're Here to Support You
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Contact us to learn how we can help you or your loved one
          </p>
          <Link href="/consultation" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
            Get Support →
          </Link>
        </div>
      </section>
    </>
  );
}