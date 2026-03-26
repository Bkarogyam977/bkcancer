"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function DownloadableGuidesPage() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guides = [
    {
      id: 1,
      title: "Complete Ayurvedic Cancer Care Guide",
      description: "A comprehensive 50-page guide covering everything from diagnosis to recovery. Learn about the Ayurvedic approach to cancer treatment, including diet, herbs, and lifestyle modifications.",
      icon: "📘",
      category: "Comprehensive",
      pages: 50,
      downloadLink: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/3232.png",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/3232.png",
      features: [
        "Understanding cancer from an Ayurvedic perspective",
        "Step-by-step treatment protocols",
        "Herbal formulations explained",
        "Success stories and case studies",
        "FAQs about Ayurvedic treatment"
      ]
    },
    {
      id: 2,
      title: "Anti-Cancer Diet & Nutrition Guide",
      description: "Discover the power of food as medicine. This guide provides detailed meal plans, recipes, and dietary guidelines specifically designed for cancer patients.",
      icon: "🥗",
      category: "Diet",
      pages: 35,
      downloadLink: "#",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_k9cvqpk9cvqpk9cv1.png",
      features: [
        "Anti-inflammatory foods list",
        "Immune-boosting recipes",
        "Foods to avoid during treatment",
        "Weekly meal plans",
        "Nutritional supplements guide"
      ]
    },
    {
      id: 3,
      title: "Yoga & Pranayama for Cancer Patients",
      description: "Safe and effective yoga practices tailored for cancer patients. Includes breathing exercises, gentle asanas, and meditation techniques.",
      icon: "🧘",
      category: "Lifestyle",
      pages: 28,
      downloadLink: "#",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_obfryrobfryrobfr1.png",
      features: [
        "Gentle yoga poses for all levels",
        "Pranayama techniques for immunity",
        "Guided meditation scripts",
        "Daily practice routines",
        "Precautions and modifications"
      ]
    },
    {
      id: 4,
      title: "Panchakarma Detox Guide",
      description: "Learn about the ancient detoxification therapy that prepares the body for deeper healing. Understand the procedures, benefits, and what to expect.",
      icon: "🔄",
      category: "Treatment",
      pages: 40,
      downloadLink: "#",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_o25k8uo25k8uo25k.png",
      features: [
        "What is Panchakarma?",
        "The 5 purification procedures",
        "Pre and post care guidelines",
        "Benefits for cancer patients",
        "Case studies and testimonials"
      ]
    },
    {
      id: 5,
      title: "Managing Chemotherapy Side Effects Naturally",
      description: "Natural remedies and Ayurvedic approaches to reduce nausea, fatigue, and other side effects during chemotherapy.",
      icon: "🌿",
      category: "Support",
      pages: 32,
      downloadLink: "#",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_g3mmhag3mmhag3mm1.png",
      features: [
        "Natural remedies for nausea",
        "Boosting energy naturally",
        "Skin and hair care tips",
        "Emotional support strategies",
        "Herbal supplements guide"
      ]
    },
    {
      id: 6,
      title: "Post-Recovery Wellness Guide",
      description: "A complete guide to maintaining health after cancer treatment. Learn how to prevent recurrence and live a healthy, balanced life.",
      icon: "💚",
      category: "Wellness",
      pages: 45,
      downloadLink: "#",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_o25k8uo25k8uo25k.png",
      features: [
        "Long-term wellness strategies",
        "Seasonal detox programs",
        "Stress management techniques",
        "Regular health monitoring",
        "Lifestyle recommendations"
      ]
    }
  ];

  const categories = ["All", "Comprehensive", "Diet", "Lifestyle", "Treatment", "Support", "Wellness"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = activeCategory === "All" || guide.category === activeCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (guide) => {
    // You can implement download tracking here
    window.open(guide.downloadLink, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4A118] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-sm font-semibold mb-4" style={body}>
            Free Resources
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={heading}>
            Downloadable <span className="text-[#F4A118]">Guides</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed" style={body}>
            Comprehensive PDF guides to support you on your healing journey. Free downloads for patients and caregivers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "6", label: "Comprehensive Guides", icon: "📚" },
              { number: "230+", label: "Total Pages", icon: "📄" },
              { number: "10k+", label: "Downloads", icon: "⬇️" },
              { number: "100%", label: "Free Resources", icon: "🎁" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#F4A118]">{stat.number}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-[#EEF7F4] sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A118] focus:ring-1 focus:ring-[#F4A118] transition bg-white"
                style={body}
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#F4A118] text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                  style={body}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredGuides.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38" }}>No guides found</h3>
              <p className="text-gray-500">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group"
                >
                  {/* Guide Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#EEF7F4] to-white">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-[#F4A118] text-white text-xs rounded-full font-semibold">
                        {guide.pages} Pages
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-white/90 text-[#0D3B38] text-xs rounded-full font-semibold">
                        {guide.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-3xl">{guide.icon}</div>
                      <h3 className="font-bold text-lg text-[#0D3B38] line-clamp-2">{guide.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">{guide.description}</p>
                    
                    {/* Features Preview */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-[#0D3B38] mb-2">What's inside:</p>
                      <ul className="space-y-1">
                        {guide.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-1 text-xs text-gray-500">
                            <span className="text-[#F4A118]">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {guide.features.length > 3 && (
                          <li className="text-xs text-[#F4A118]">+{guide.features.length - 3} more</li>
                        )}
                      </ul>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(guide)}
                      className="w-full py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
                      style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                    >
                      <span>📥</span>
                      <span>Download Free Guide</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Show count */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Showing {filteredGuides.length} of {guides.length} guides
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guide - Hero Guide */}
      <section className="py-12 bg-[#EEF7F4]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F4A118]/10 text-[#F4A118] text-xs font-semibold mb-3">
                  Featured Guide
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0D3B38", ...heading }}>
                  Complete Ayurvedic Cancer Care Guide
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our most comprehensive guide covering everything from diagnosis to recovery. Over 50 pages of expert insights, treatment protocols, and practical advice.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#F4A118]">✓</span>
                    <span>Expert-written content by Ayurvedic oncologists</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#F4A118]">✓</span>
                    <span>Printable PDF format for easy reference</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#F4A118]">✓</span>
                    <span>Free lifetime access and updates</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleDownload(guides[0])}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                >
                  <span>📥</span>
                  <span>Download Now (50 Pages)</span>
                </button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src={guides[0].image}
                  alt="Featured Guide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Download Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
              Why Download Our <span className="text-[#F4A118]">Guides?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Expert-curated resources to support your healing journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "👨‍⚕️", title: "Expert Authored", desc: "Written by experienced Ayurvedic oncologists" },
              { icon: "📝", title: "Easy to Understand", desc: "Clear language with practical examples" },
              { icon: "🆓", title: "100% Free", desc: "No hidden costs or subscription required" },
              { icon: "📱", title: "Mobile Friendly", desc: "Read on any device, anywhere" },
              { icon: "🔄", title: "Regular Updates", desc: "Stay current with latest research" },
              { icon: "💚", title: "Patient Centered", desc: "Designed for patients and caregivers" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0D3B38] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0D3B38] to-[#1B6B5A]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={heading}>
            Need Personalized Guidance?
          </h2>
          <p className="text-white/80 mb-6">
            Our experts can help you create a customized treatment plan based on your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl text-white font-semibold transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Book Free Consultation →
            </Link>
            <Link
              href="/resources/faqs"
              className="px-6 py-3 rounded-xl text-white font-semibold transition hover:bg-white/20 border border-white/30"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}