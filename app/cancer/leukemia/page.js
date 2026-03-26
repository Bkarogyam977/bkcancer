"use client";

import React from 'react';
import Link from 'next/link';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function LeukemiaPage() {
  const symptoms = [
    "Fever or chills",
    "Persistent fatigue and weakness",
    "Frequent infections",
    "Easy bleeding or bruising",
    "Bone pain or tenderness",
    "Swollen lymph nodes",
    "Night sweats"
  ];

  return (
    <>
      <section className="relative h-[40vh] min-h-[350px]" style={{ background: "linear-gradient(135deg, #E74C3C, #c0392b)" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <div className="text-6xl mb-4">🩸</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={heading}>Blood Cancer (Leukemia)</h1>
            <p className="text-lg opacity-90 max-w-2xl" style={body}>Understanding leukemia: symptoms, causes, and integrative treatment approaches</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>Overview</h2>
                <p className="text-gray-700 leading-relaxed" style={body}>Leukemia is cancer of the body's blood-forming tissues, including the bone marrow and lymphatic system. It results in abnormal white blood cells that don't function properly. Types include acute lymphocytic leukemia (ALL), acute myeloid leukemia (AML), chronic lymphocytic leukemia (CLL), and chronic myeloid leukemia (CML).</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>⚠️ Common Symptoms</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {symptoms.map((symptom, i) => (<li key={i} className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700" style={body}>{symptom}</span></li>))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>🎯 Risk Factors & Causes</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Genetic mutations</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Radiation exposure</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Chemical exposure (benzene)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Previous cancer treatment</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#F4A118]">•</span><span className="text-gray-700">Genetic disorders like Down syndrome</span></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#0D3B38] to-[#1a5c57] rounded-2xl p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-4" style={heading}>🌿 Ayurvedic Approach</h3>
                <p className="text-white/90 text-sm leading-relaxed" style={body}>Ayurveda focuses on balancing the doshas and improving bone marrow health. Rasayana herbs like Ashwagandha, Amalaki, and Guduchi help rebuild immunity and blood cells. Treatment aims to strengthen the body's natural defense mechanisms.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>💊 Treatment Options</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700">✓ Chemotherapy</li>
                  <li className="text-sm text-gray-700">✓ Targeted therapy</li>
                  <li className="text-sm text-gray-700">✓ Radiation therapy</li>
                  <li className="text-sm text-gray-700">✓ Stem cell transplant</li>
                  <li className="text-sm text-gray-700">✓ Immunotherapy</li>
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