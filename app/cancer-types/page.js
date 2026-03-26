"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function CancerTypes() {
  const [selectedCancer, setSelectedCancer] = useState(null);

  const cancerData = [
    {
      name: "Lung Cancer",
      emoji: "🫁",
      description: "Lung cancer is the leading cause of cancer deaths worldwide. Our Ayurvedic approach focuses on strengthening the respiratory system, detoxifying the lungs, and boosting immunity to fight cancer cells.",
      symptoms: ["Persistent cough", "Chest pain", "Shortness of breath", "Coughing up blood", "Unexplained weight loss"],
      ayurvedicApproach: "Panchakarma detox, herbal formulations like Kanakasava, Vasaka, and Tulsi, along with pranayama for lung health.",
      survivalRate: "Significant improvement with early detection and integrated treatment"
    },
    {
      name: "Breast Cancer",
      emoji: "🎗️",
      description: "Breast cancer is one of the most common cancers in women. Our Ayurvedic treatment focuses on balancing hormones, detoxifying breast tissue, and strengthening immunity.",
      symptoms: ["Lump in breast", "Change in breast shape", "Nipple discharge", "Skin dimpling", "Breast pain"],
      ayurvedicApproach: "Herbal medicines like Ashwagandha, Guduchi, and Shatavari, along with lifestyle modifications and stress management.",
      survivalRate: "High success rate with early detection and integrated Ayurvedic care"
    },
    {
      name: "Blood Cancer / Leukemia",
      emoji: "🩸",
      description: "Leukemia affects blood-forming tissues. Our approach focuses on purifying the blood, strengthening bone marrow, and boosting the immune system.",
      symptoms: ["Fatigue", "Frequent infections", "Easy bruising", "Bone pain", "Swollen lymph nodes"],
      ayurvedicApproach: "Raktamokshana (blood purification), herbal formulations like Giloy, Amalaki, and Pippali, along with diet therapy.",
      survivalRate: "Promising results with consistent Ayurvedic treatment alongside conventional care"
    },
    {
      name: "Liver Cancer",
      emoji: "🟤",
      description: "Liver cancer requires careful management. Our treatment focuses on protecting liver function, detoxification, and preventing cancer spread.",
      symptoms: ["Jaundice", "Abdominal pain", "Swelling in abdomen", "Nausea", "Unexplained weight loss"],
      ayurvedicApproach: "Liver-protective herbs like Bhumyamalaki, Kutki, and Punarnava, along with Panchakarma detox.",
      survivalRate: "Improved quality of life and liver function with integrated care"
    },
    {
      name: "Kidney Cancer",
      emoji: "🫘",
      description: "Kidney cancer treatment focuses on supporting kidney function, detoxification, and strengthening the urinary system.",
      symptoms: ["Blood in urine", "Lower back pain", "Fatigue", "Unexplained weight loss", "Fever"],
      ayurvedicApproach: "Kidney-supporting herbs like Gokshura, Punarnava, and Varun, along with dietary modifications.",
      survivalRate: "Good outcomes with early intervention and holistic care"
    },
    {
      name: "Cervical Cancer",
      emoji: "🌸",
      description: "Cervical cancer is preventable and treatable. Our approach focuses on strengthening the reproductive system and boosting immunity.",
      symptoms: ["Abnormal bleeding", "Pelvic pain", "Pain during intercourse", "Unusual discharge"],
      ayurvedicApproach: "Herbal formulations like Ashoka, Lodhra, and Shatavari, along with lifestyle modifications and stress management.",
      survivalRate: "High success rate with early detection and integrated treatment"
    },
    {
      name: "Brain Tumor",
      emoji: "🧠",
      description: "Brain tumor treatment requires specialized care. Our approach focuses on reducing tumor growth, managing symptoms, and improving neurological function.",
      symptoms: ["Headaches", "Seizures", "Vision problems", "Memory loss", "Personality changes"],
      ayurvedicApproach: "Medhya Rasayanas (brain tonics) like Brahmi, Shankhpushpi, and Ashwagandha, along with nasal therapies.",
      survivalRate: "Improved quality of life and symptom management"
    },
    {
      name: "Prostate Cancer",
      emoji: "🔵",
      description: "Prostate cancer is common in men. Our treatment focuses on hormonal balance, urinary health, and preventing cancer progression.",
      symptoms: ["Difficulty urinating", "Frequent urination", "Blood in urine", "Pelvic pain", "Erectile dysfunction"],
      ayurvedicApproach: "Herbal formulations like Gokshura, Ashwagandha, and Shilajit, along with dietary modifications.",
      survivalRate: "Excellent outcomes with early detection and integrated care"
    },
    {
      name: "Oral Cancer",
      emoji: "👄",
      description: "Oral cancer requires comprehensive care. Our approach focuses on healing mouth tissues, detoxification, and strengthening immunity.",
      symptoms: ["Sores in mouth", "White patches", "Difficulty swallowing", "Lump in mouth", "Pain"],
      ayurvedicApproach: "Topical herbal applications, detoxification, and immune-boosting herbs like Tulsi and Neem.",
      survivalRate: "Good outcomes with early detection and integrated treatment"
    },
    {
      name: "Colon Cancer",
      emoji: "🌀",
      description: "Colon cancer treatment focuses on digestive health, detoxification, and preventing cancer recurrence.",
      symptoms: ["Change in bowel habits", "Blood in stool", "Abdominal pain", "Unexplained weight loss", "Fatigue"],
      ayurvedicApproach: "Digestive herbs like Triphala, Kutaja, and Haritaki, along with colon detoxification.",
      survivalRate: "Improved outcomes with integrated Ayurvedic and conventional care"
    },
    {
      name: "Stomach Cancer",
      emoji: "🫃",
      description: "Stomach cancer requires careful management of digestive health. Our approach focuses on healing stomach lining and improving digestion.",
      symptoms: ["Indigestion", "Abdominal pain", "Nausea", "Loss of appetite", "Blood in stool"],
      ayurvedicApproach: "Digestive herbs like Amla, Ginger, and Licorice, along with dietary modifications and detox.",
      survivalRate: "Improved quality of life and digestive function"
    },
    {
      name: "Throat Cancer",
      emoji: "🗣️",
      description: "Throat cancer treatment focuses on healing throat tissues, improving voice function, and strengthening immunity.",
      symptoms: ["Sore throat", "Hoarseness", "Difficulty swallowing", "Lump in neck", "Ear pain"],
      ayurvedicApproach: "Throat-healing herbs like Yashtimadhu, Tulsi, and Ginger, along with detoxification.",
      survivalRate: "Good outcomes with early detection and integrated care"
    },
    {
      name: "Pancreatic Cancer",
      emoji: "🫀",
      description: "Pancreatic cancer requires specialized care. Our approach focuses on supporting pancreatic function and improving digestion.",
      symptoms: ["Jaundice", "Abdominal pain", "Weight loss", "Loss of appetite", "Nausea"],
      ayurvedicApproach: "Digestive herbs, pancreatic support formulations, and detoxification therapies.",
      survivalRate: "Improved quality of life and symptom management"
    },
    {
      name: "Thyroid Cancer",
      emoji: "🦋",
      description: "Thyroid cancer treatment focuses on hormonal balance and supporting thyroid function.",
      symptoms: ["Lump in neck", "Hoarseness", "Difficulty swallowing", "Neck pain", "Swollen lymph nodes"],
      ayurvedicApproach: "Thyroid-supporting herbs like Kanchnaar Guggulu, Ashwagandha, and Guggulu.",
      survivalRate: "Excellent outcomes with early detection"
    },
    {
      name: "Bladder Cancer",
      emoji: "💧",
      description: "Bladder cancer treatment focuses on urinary health and detoxification.",
      symptoms: ["Blood in urine", "Frequent urination", "Painful urination", "Pelvic pain"],
      ayurvedicApproach: "Urinary tract herbs like Punarnava, Gokshura, and Varun, along with detox.",
      survivalRate: "Good outcomes with integrated care"
    },
    {
      name: "Ovarian Cancer",
      emoji: "🎗️",
      description: "Ovarian cancer treatment focuses on reproductive health and hormonal balance.",
      symptoms: ["Bloating", "Pelvic pain", "Difficulty eating", "Frequent urination", "Fatigue"],
      ayurvedicApproach: "Reproductive herbs like Ashoka, Lodhra, and Shatavari, along with detox.",
      survivalRate: "Improved outcomes with early detection"
    },
    {
      name: "Skin Cancer",
      emoji: "☀️",
      description: "Skin cancer treatment focuses on external healing and immune support.",
      symptoms: ["New growths", "Sores that don't heal", "Mole changes", "Red patches"],
      ayurvedicApproach: "Topical herbal applications, blood purification, and immune-boosting herbs.",
      survivalRate: "Excellent with early detection"
    },
    {
      name: "Colorectal Cancer",
      emoji: "🌀",
      description: "Colorectal cancer treatment focuses on digestive health and detoxification.",
      symptoms: ["Change in bowel habits", "Blood in stool", "Abdominal pain", "Weight loss"],
      ayurvedicApproach: "Digestive herbs, colon detox, and immune support.",
      survivalRate: "Good outcomes with integrated care"
    }
  ];

  return (
    <>
      {/* Premium Hero Section with Image on Right */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#F4A118] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-sm font-semibold mb-4" style={body}>
                Comprehensive Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
                Cancer Types <span className="text-[#F4A118]">We Treat</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6" style={body}>
                Specialized Ayurvedic Treatment for Over 20 Types of Cancer
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="px-6 py-3 rounded-lg text-white font-semibold transition hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                >
                  Free Consultation →
                </Link>
                <Link
                  href="#cancer-grid"
                  className="px-6 py-3 rounded-lg text-white font-semibold transition hover:bg-white/20 border border-white/30"
                >
                  Explore All Types
                </Link>
              </div>
            </div>

            {/* Right Side - Premium Image */}
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/22/Common_Types_of_Cancer_ac618d600e.jpeg"
                alt="Common Types of Cancer - Ayurvedic Treatment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - Premium Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            {[
              { number: "20+", label: "Cancer Types Treated", icon: "🎗️" },
              { number: "10,000+", label: "Patients Helped", icon: "👥" },
              { number: "85%", label: "Success Rate", icon: "⭐" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-[#EEF7F4] to-white">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#F4A118] mb-1">{stat.number}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={body}>
              At BK Cancer Care, we provide specialized Ayurvedic treatment for all major cancer types. 
              Our approach is personalized based on the specific cancer type, stage, and individual constitution (Prakriti).
            </p>
          </div>
        </div>
      </section>

      {/* Cancer Grid - Premium Grid */}
      <section id="cancer-grid" className="py-12 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Browse by <span className="text-[#F4A118]">Cancer Type</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Click on any cancer type to learn about our specialized Ayurvedic approach
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
            {cancerData.map((cancer, index) => (
              <button
                key={index}
                onClick={() => setSelectedCancer(cancer)}
                className={`p-3 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  selectedCancer?.name === cancer.name 
                    ? 'bg-gradient-to-r from-[#F4A118] to-[#d4600a] text-white shadow-lg' 
                    : 'bg-white hover:shadow-md text-gray-700'
                }`}
                style={{ border: selectedCancer?.name === cancer.name ? 'none' : "1px solid #e5f0ec" }}
              >
                <div className="text-2xl mb-1">{cancer.emoji}</div>
                <p className="font-semibold text-xs sm:text-sm" style={heading}>{cancer.name.split(' ')[0]}</p>
              </button>
            ))}
          </div>

          {/* Selected Cancer Details - Premium Card */}
          {selectedCancer && (
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 animate-fadeIn">
              <div className="bg-gradient-to-r from-[#0D3B38] to-[#1B6B5A] px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{selectedCancer.emoji}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white" style={heading}>
                    {selectedCancer.name}
                  </h2>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: "#F4A118", ...heading }}>
                      <span>📋</span> Overview
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed" style={body}>{selectedCancer.description}</p>
                    
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: "#F4A118", ...heading }}>
                      <span>⚠️</span> Common Symptoms
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedCancer.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#F4A118]">•</span>
                          <span className="text-gray-600" style={body}>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: "#F4A118", ...heading }}>
                      <span>🌿</span> Ayurvedic Approach
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed bg-[#EEF7F4] p-4 rounded-xl" style={body}>
                      {selectedCancer.ayurvedicApproach}
                    </p>
                    
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: "#F4A118", ...heading }}>
                      <span>📊</span> Treatment Outcomes
                    </h3>
                    <p className="text-gray-600 leading-relaxed p-4 rounded-xl border border-[#F4A118]/20" style={body}>
                      {selectedCancer.survivalRate}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <Link
                    href="/Treatments"
                    className="inline-block px-8 py-3 rounded-lg text-white font-semibold transition hover:scale-105 shadow-md"
                    style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                  >
                    Get Personalized Treatment for {selectedCancer.name.split(' ')[0]} Cancer →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#F4A118] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
              Not Sure About Your Cancer Type?
            </h2>
            <p className="text-white/90 mb-8 text-lg" style={body}>
              Our expert doctors can help identify your condition and create a personalized Ayurvedic treatment plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Free Expert Consultation →
              </Link>
              <Link
                href="/how-it-works"
                className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:bg-white/20 border-2 border-white/50"
              >
                How Our Program Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}