"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function LungCancerPage() {
  const symptoms = [
    "Persistent cough that doesn't go away",
    "Chest pain that worsens with deep breathing",
    "Shortness of breath and wheezing",
    "Coughing up blood",
    "Unexplained weight loss",
    "Hoarseness and fatigue",
    "Recurring respiratory infections"
  ];

  const treatments = [
    "Surgery (lobectomy, pneumonectomy)",
    "Chemotherapy",
    "Radiation therapy",
    "Immunotherapy",
    "Targeted therapy",
    "Radiofrequency ablation"
  ];

  const ayurvedicHerbs = [
    { name: "Pippali", benefit: "Strengthens lung tissue and improves respiratory function" },
    { name: "Tulsi", benefit: "Powerful immunomodulator and anti-inflammatory" },
    { name: "Vasaka", benefit: "Clears respiratory passages and reduces inflammation" },
    { name: "Ashwagandha", benefit: "Boosts immunity and reduces stress" },
    { name: "Guduchi", benefit: "Enhances natural killer cell activity" }
  ];

  return (
    <>
      {/* Hero Section with Image on Right */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A2F2C, #1B5E55)" }}>
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <div className="text-6xl mb-4">🫁</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
                Lung Cancer
              </h1>
              <p className="text-lg opacity-90 max-w-2xl leading-relaxed" style={body}>
                Understanding lung cancer: symptoms, causes, and integrative treatment approaches
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link 
                  href="/consultation" 
                  className="px-6 py-3 rounded-lg text-white font-semibold transition hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                >
                  Get Free Consultation →
                </Link>
                <Link 
                  href="#treatment" 
                  className="px-6 py-3 rounded-lg text-white font-semibold transition hover:bg-white/20 border border-white/30"
                >
                  View Treatments
                </Link>
              </div>
            </div>

            {/* Right Side - Banner Image */}
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/22/lung-cancer.jpeg"
                alt="Lung Cancer Awareness and Treatment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>Overview</h2>
                <p className="text-gray-700 leading-relaxed" style={body}>Lung cancer is the leading cause of cancer deaths worldwide. It begins in the lungs and often spreads to lymph nodes and other organs. There are two main types: small cell lung cancer (SCLC) and non-small cell lung cancer (NSCLC), with NSCLC accounting for about 85% of cases.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>⚠️ Common Symptoms</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {symptoms.map((symptom, i) => (<li key={i} className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700" style={body}>{symptom}</span></li>))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>🎯 Risk Factors</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Smoking (80-90% of cases)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Secondhand smoke exposure</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Radon gas exposure</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Asbestos exposure</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Family history</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Air pollution</span></li>
                </ul>
              </div>

              <div className="mb-8" id="treatment">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>💊 Treatment Options</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {treatments.map((treatment, i) => (<li key={i} className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700" style={body}>{treatment}</span></li>))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Enhanced Ayurvedic Approach Card */}
              <div className="rounded-2xl p-6 mb-6 text-white" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
                <h3 className="text-xl font-bold mb-4" style={heading}>🌿 Ayurvedic Approach</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4" style={body}>In Ayurveda, lung cancer is correlated with imbalances in Pranavaha Srotas (respiratory channels). Treatment focuses on strengthening lung tissue, improving immunity, and detoxifying the body.</p>
                {ayurvedicHerbs.map((herb, i) => (
                  <div key={i} className="mb-3 pb-2 border-b border-white/10 last:border-0">
                    <p className="font-semibold text-sm text-[#F4A118]">{herb.name}</p>
                    <p className="text-white/70 text-xs mt-1">{herb.benefit}</p>
                  </div>
                ))}
              </div>

              {/* Enhanced Support Card */}
              <div className="rounded-2xl p-6 mb-6 shadow-lg" style={{ background: "linear-gradient(135deg, #FFF5E6, #FFFFFF)", border: "1px solid #FFE0B5" }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>📞 Need Support?</h3>
                <p className="text-gray-600 text-sm mb-4" style={body}>Our integrative oncology team can help you with personalized treatment plans</p>
                <Link href="/consultation" className="block text-center px-4 py-2.5 rounded-lg text-white font-semibold transition hover:scale-105" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                  Book Consultation →
                </Link>
              </div>

              {/* New: Quick Facts Card */}
              <div className="rounded-2xl p-6 shadow-lg" style={{ background: "#EEF7F4", border: "1px solid #d4e5e0" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0D3B38", ...heading }}>📊 Quick Facts</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span className="text-gray-600">Most common age:</span><span className="font-semibold text-[#0D3B38]">65+ years</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">5-year survival rate:</span><span className="font-semibold text-[#0D3B38]">20-25%</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Early detection rate:</span><span className="font-semibold text-[#0D3B38]">16%</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Male vs Female:</span><span className="font-semibold text-[#0D3B38]">1.5:1</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>Ready to Start Your Healing Journey?</h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>Get expert guidance on managing lung cancer with integrative approaches</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
              Book Free Consultation →
            </Link>
            <Link href="/resources" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:bg-white/20 border-2 border-white/50">
              Download Free Guide →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}