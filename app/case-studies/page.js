"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      name: "Ramesh Kumar",
      age: 58,
      cancerType: "Lung Cancer",
      stage: "Stage 3",
      location: "Delhi",
      image: "https://via.placeholder.com/400x300?text=Patient+1",
      diagnosis: "Diagnosed with Stage 3 Lung Cancer after persistent cough and chest pain",
      treatment: "6 months of integrated Ayurvedic treatment including Panchakarma and herbal formulations",
      results: "Tumor reduced by 40%, improved breathing, no new metastasis, quality of life significantly improved",
      testimonial: "I was scared when diagnosed with lung cancer. BK Cancer Care gave me hope. After 6 months of treatment, my breathing improved, and scans showed the tumor had shrunk significantly. No side effects, no pain. Thank you Dr. BK Chaurasia!",
      beforeAfter: "Before: Severe cough, difficulty breathing, fatigue. After: Active lifestyle, normal breathing, energy restored"
    },
    {
      id: 2,
      name: "Sunita Devi",
      age: 45,
      cancerType: "Breast Cancer",
      stage: "Stage 2",
      location: "Mumbai",
      image: "https://via.placeholder.com/400x300?text=Patient+2",
      diagnosis: "Diagnosed with Stage 2 Breast Cancer during routine checkup",
      treatment: "Integrated approach with Ayurvedic herbs, diet therapy, and stress management for 4 months",
      results: "Tumor size reduced by 60%, no side effects, improved immunity, complete recovery",
      testimonial: "I underwent conventional treatment elsewhere but suffered severe side effects. At BK Cancer Care, the Ayurvedic treatment helped me recover without any side effects. My tumor reduced significantly, and I feel healthier than before!",
      beforeAfter: "Before: Lump in breast, fatigue, anxiety. After: Tumor reduced, energy back, mentally strong"
    },
    {
      id: 3,
      name: "Mohit Sharma",
      age: 32,
      cancerType: "Blood Cancer (Leukemia)",
      stage: "Acute",
      location: "Lucknow",
      image: "https://via.placeholder.com/400x300?text=Patient+3",
      diagnosis: "Diagnosed with Acute Leukemia with low blood counts and frequent infections",
      treatment: "Specialized blood purification therapy, herbal immunomodulators, and Panchakarma for 8 months",
      results: "Blood counts normalized, no infections, bone marrow healthy, complete remission",
      testimonial: "Leukemia diagnosis was devastating. The Ayurvedic treatment at BK Cancer Care changed my life. My blood counts normalized, and I'm back to my normal life. No chemotherapy needed!",
      beforeAfter: "Before: Low immunity, frequent infections, weakness. After: Normal blood counts, strong immunity, active life"
    },
    {
      id: 4,
      name: "Priya Singh",
      age: 38,
      cancerType: "Cervical Cancer",
      stage: "Stage 1",
      location: "Varanasi",
      image: "https://via.placeholder.com/400x300?text=Patient+4",
      diagnosis: "Early detection of cervical cancer during screening",
      treatment: "3 months of Ayurvedic treatment with localized therapies and immune boosters",
      results: "Complete recovery, no recurrence, improved reproductive health",
      testimonial: "Early detection and Ayurvedic treatment saved my life. The treatment was painless and effective. I'm grateful to the BK Cancer Care team for their care and support.",
      beforeAfter: "Before: Abnormal bleeding, pain. After: Normal health, no symptoms, healthy"
    },
    {
      id: 5,
      name: "Anil Kumar",
      age: 62,
      cancerType: "Prostate Cancer",
      stage: "Stage 2",
      location: "Jaipur",
      image: "https://via.placeholder.com/400x300?text=Patient+5",
      diagnosis: "Diagnosed with prostate cancer during regular checkup",
      treatment: "6 months of herbal therapy, lifestyle modifications, and regular monitoring",
      results: "PSA levels normalized, no progression, improved urinary function",
      testimonial: "I wanted to avoid surgery and radiation. Ayurvedic treatment at BK Cancer Care helped me manage my prostate cancer effectively. My PSA levels are normal, and I feel great.",
      beforeAfter: "Before: Frequent urination, difficulty, anxiety. After: Normal urination, peace of mind"
    },
    {
      id: 6,
      name: "Geeta Verma",
      age: 52,
      cancerType: "Colon Cancer",
      stage: "Stage 2",
      location: "Pune",
      image: "https://via.placeholder.com/400x300?text=Patient+6",
      diagnosis: "Diagnosed with colon cancer after digestive issues",
      treatment: "5 months of Panchakarma, detoxification, and herbal treatment",
      results: "Complete recovery, improved digestion, no recurrence in 2 years",
      testimonial: "The detoxification process was amazing. My digestive health improved, and the cancer treatment was effective without any side effects. Highly recommended!",
      beforeAfter: "Before: Digestive issues, pain, weight loss. After: Healthy digestion, normal weight"
    }
  ];

  return (
    <>
      {/* Premium Hero Section with Background Image */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/55.jpeg"
            alt="Patient Success Stories - Healing Journeys"
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-[8000ms]"
            priority
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4A118] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-sm font-semibold mb-4 backdrop-blur-sm" style={body}>
              Real Stories • Real Hope
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight" style={heading}>
              <span className="text-[#F4A118]"></span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl" style={body}>
              Read the inspirational stories of our patients in their journey towards recovery
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-lg text-white font-semibold transition hover:scale-105 shadow-lg"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Start Your Journey →
              </Link>
              <Link
                href="#stories"
                className="inline-block px-8 py-3 rounded-lg text-white font-semibold transition hover:bg-white/20 border border-white/30 backdrop-blur-sm"
              >
                Read All Stories
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction - Premium Stats */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EEF7F4] rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-12">
            {[
              { number: "5000+", label: "Patients Treated", icon: "👥" },
              { number: "85%", label: "Success Rate", icon: "⭐" },
              { number: "20+", label: "Years Experience", icon: "📅" },
              { number: "1000+", label: "Case Studies", icon: "📋" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-[#EEF7F4] to-white">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#F4A118" }}>{stat.number}</p>
                <p className="text-gray-600 text-sm" style={body}>{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={body}>
              These are real stories from patients who have successfully completed their cancer treatment at BK Cancer Care. 
              Their journeys inspire hope and demonstrate the power of Ayurvedic healing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="stories" className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}>
              Healing Journeys
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Real Stories of <span className="text-[#F4A118]">Hope & Recovery</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Every patient's journey is unique. Here are some of their inspiring stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group"
                style={{ border: "1px solid #e5f0ec" }}
                onClick={() => setSelectedCase(study)}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#0D3B38] to-[#1B6B5A] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2 group-hover:scale-110 transition-transform">📋</div>
                    <p className="text-white font-bold text-lg">Success Story</p>
                    <p className="text-white/70 text-sm">{study.cancerType}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-xl" style={{ color: "#0D3B38", ...heading }}>{study.name}</h3>
                      <p className="text-sm text-gray-500">{study.age} years, {study.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#F4A118", color: "white" }}>
                      {study.stage}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-semibold" style={{ color: "#F4A118" }}>{study.cancerType}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed" style={body}>
                    {study.testimonial.substring(0, 120)}...
                  </p>
                  <button className="text-sm font-semibold hover:gap-2 transition-all inline-flex items-center gap-1" style={{ color: "#F4A118" }}>
                    Read Full Story <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Case Study Details - Premium */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCase(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white rounded-t-2xl p-5 border-b flex justify-between items-center" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
              <h2 className="text-2xl font-bold text-white" style={heading}>
                Patient Success Story
              </h2>
              <button onClick={() => setSelectedCase(null)} className="text-3xl text-white hover:text-[#F4A118] transition">&times;</button>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: "#0D3B38", ...heading }}>{selectedCase.name}</h3>
                    <p className="text-gray-500">{selectedCase.age} years | {selectedCase.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "#F4A118", color: "white" }}>
                      {selectedCase.stage}
                    </span>
                    <p className="text-sm font-semibold mt-1" style={{ color: "#F4A118" }}>{selectedCase.cancerType}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#EEF7F4] rounded-xl p-5">
                  <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: "#F4A118", ...heading }}>
                    <span>📋</span> Diagnosis
                  </h4>
                  <p className="text-gray-600 mb-5" style={body}>{selectedCase.diagnosis}</p>
                  
                  <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: "#F4A118", ...heading }}>
                    <span>🌿</span> Treatment
                  </h4>
                  <p className="text-gray-600" style={body}>{selectedCase.treatment}</p>
                </div>
                
                <div className="bg-[#EEF7F4] rounded-xl p-5">
                  <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: "#F4A118", ...heading }}>
                    <span>✨</span> Results
                  </h4>
                  <p className="text-gray-600 mb-5" style={body}>{selectedCase.results}</p>
                  
                  <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: "#F4A118", ...heading }}>
                    <span>🔄</span> Before vs After
                  </h4>
                  <p className="text-gray-600" style={body}>{selectedCase.beforeAfter}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#0D3B38] to-[#1B6B5A] rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl text-white/50">"</div>
                  <div>
                    <p className="text-white text-lg italic leading-relaxed" style={body}>{selectedCase.testimonial}</p>
                    <p className="text-right font-semibold mt-4 text-[#F4A118]">- {selectedCase.name}</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-lg text-white font-semibold transition hover:scale-105 shadow-md"
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                >
                  Start Your Healing Journey →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Voices of <span className="text-[#F4A118]">Hope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              What our patients say about their healing journey with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((study, i) => (
              <div key={i} className="bg-[#EEF7F4] rounded-xl p-6">
                <div className="text-3xl mb-3">⭐</div>
                <p className="text-gray-600 italic mb-4" style={body}>"{study.testimonial.substring(0, 100)}..."</p>
                <p className="font-bold text-[#0D3B38]">{study.name}</p>
                <p className="text-sm text-gray-500">{study.cancerType}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#F4A118] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
              Want to Share Your Story?
            </h2>
            <p className="text-white/90 mb-8 text-lg" style={body}>
              Join our community of survivors and inspire others with your healing journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Share Your Story →
              </Link>
              <Link
                href="/consultation"
                className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:bg-white/20 border-2 border-white/50"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}