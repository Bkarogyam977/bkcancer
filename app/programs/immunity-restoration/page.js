"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function ImmunityRestorationProgram() {
  const benefits = [
    "Increases white blood cell count",
    "Enhances natural killer cell activity",
    "Reduces risk of infections",
    "Strengthens overall immune response",
    "Faster recovery after treatment",
    "Improves energy and vitality",
    "Builds long-term disease resistance",
    "Reduces treatment-related fatigue"
  ];

  const components = [
    { name: "Immunomodulatory Herbs", desc: "Ashwagandha, Guduchi, Tulsi - scientifically proven to boost immunity" },
    { name: "Rasayana Therapy", desc: "Rejuvenation therapy to restore cellular health" },
    { name: "Nutritional Support", desc: "Immune-boosting foods and supplements" },
    { name: "Panchakarma Detox", desc: "Removal of toxins that suppress immunity" },
    { name: "Lifestyle Guidance", desc: "Daily routines that strengthen immune system" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/top-immunity-booster-food.jpg"
          alt="Top 10 Immunity Boosting Foods"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🛡️</span>
              <span className="text-[#F4A118] font-semibold text-sm">Support Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Immunity Restoration Program
            </h1>
            <p className="text-lg md:text-xl opacity-90" style={body}>
              Rebuild Your Body's Natural Defense System
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
                Rebuild Your Defense
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
                Strengthen Your Immune System
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed" style={body}>
                Cancer and its treatments often weaken the immune system significantly. Our Immunity Restoration Program is specifically designed to rebuild and strengthen your body's natural defense mechanisms.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed" style={body}>
                Using powerful immunomodulatory herbs and rejuvenation therapies, we help restore your immune function, reduce infection risk, and improve your body's ability to fight cancer cells.
              </p>
              <Link href="/consultation" className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                Restore Your Immunity →
              </Link>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_obfryrobfryrobfr1.png"
                alt="Immunity Restoration Program"
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
              What you can expect from our Immunity Restoration Program
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
              Our Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Multi-dimensional approach to immune restoration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{component.name}</h3>
                <p className="text-gray-600 text-sm" style={body}>{component.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Evidence */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#0D3B38] to-[#1a5c57] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4" style={heading}>🔬 Scientific Evidence</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#F4A118]">•</span>
                  <span className="text-white/80 text-sm">Ashwagandha shown to increase NK cell activity by 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4A118]">•</span>
                  <span className="text-white/80 text-sm">Guduchi significantly improves WBC count in cancer patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4A118]">•</span>
                  <span className="text-white/80 text-sm">Tulsi reduces oxidative stress and inflammation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e5f0ec" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>📊 Program Outcomes</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Immune Function Improvement</p>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F4A118] rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-right text-xs text-gray-500 mt-1">85% patients show significant improvement</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Reduced Infection Rate</p>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F4A118] rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p className="text-right text-xs text-gray-500 mt-1">70% reduction in infections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
            Ready to Strengthen Your Immunity?
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Book a consultation with our immunity specialists
          </p>
          <Link href="/consultation" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}