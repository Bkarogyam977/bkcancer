"use client";

import React from 'react';
import Link from 'next/link';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function BreastCancerPage() {
  const symptoms = [
    "Lump in breast or armpit",
    "Change in breast size or shape",
    "Nipple discharge or inversion",
    "Skin dimpling or redness",
    "Breast pain or tenderness",
    "Swelling of part of the breast",
    "Peau d'orange (orange peel skin)"
  ];

  return (
    <>
      <section className="relative h-[40vh] min-h-[350px]" style={{ background: "linear-gradient(135deg, #FF69B4, #d44c8c)" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <div className="text-6xl mb-4">🎀</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={heading}>Breast Cancer</h1>
            <p className="text-lg opacity-90 max-w-2xl" style={body}>Understanding breast cancer: symptoms, causes, and integrative treatment approaches</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>Overview</h2>
                <p className="text-gray-700 leading-relaxed" style={body}>Breast cancer is the most common cancer in women worldwide. It occurs when breast cells grow abnormally and form tumors. Early detection through mammography greatly improves outcomes. Men can also develop breast cancer, though it's rare.</p>
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
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Genetic mutations (BRCA1, BRCA2)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Family history</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Hormonal factors</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Obesity</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Alcohol consumption</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Late menopause or early menstruation</span></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#0D3B38] to-[#1a5c57] rounded-2xl p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-4" style={heading}>🌿 Ayurvedic Approach</h3>
                <p className="text-white/90 text-sm leading-relaxed" style={body}>Ayurveda focuses on balancing hormones, reducing inflammation, and strengthening the immune system. Herbs like Ashwagandha, Guggulu, and Shatavari are commonly used to support breast health and overall well-being.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>💊 Treatment Options</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700">✓ Surgery (lumpectomy or mastectomy)</li>
                  <li className="text-sm text-gray-700">✓ Radiation therapy</li>
                  <li className="text-sm text-gray-700">✓ Chemotherapy</li>
                  <li className="text-sm text-gray-700">✓ Hormone therapy</li>
                  <li className="text-sm text-gray-700">✓ Targeted therapy (Herceptin)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>Ready to Start Your Healing Journey?</h2>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>Book Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}