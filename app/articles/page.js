"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function ArticlesInsightsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Articles", icon: "📚" },
    { id: "cancer", name: "Cancer Care", icon: "🎗️" },
    { id: "ayurveda", name: "Ayurveda", icon: "🌿" },
    { id: "diet", name: "Diet & Nutrition", icon: "🥗" },
    { id: "lifestyle", name: "Lifestyle", icon: "🧘" },
    { id: "research", name: "Research", icon: "🔬" }
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Cancer: A Holistic Ayurvedic Perspective",
      excerpt: "Explore how Ayurveda views cancer as an imbalance in the body's doshas and how holistic healing can restore harmony.",
      category: "cancer",
      readTime: "8 min read",
      date: "March 15, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_o25k8uo25k8uo25k.png",
      author: "Dr. BK Chaurasiya",
      authorRole: "Ayurvedic Oncologist",
      featured: true
    },
    {
      id: 2,
      title: "The Power of Turmeric in Cancer Prevention",
      excerpt: "Discover how curcumin, the active compound in turmeric, can help prevent cancer and support treatment.",
      category: "ayurveda",
      readTime: "5 min read",
      date: "March 10, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_k9cvqpk9cvqpk9cv1.png",
      author: "Dr. Shashi Chaurasiya",
      authorRole: "Ayurvedic Nutritionist",
      featured: false
    },
    {
      id: 3,
      title: "Anti-Cancer Diet: Foods That Heal",
      excerpt: "Learn about the best foods to include in your diet to boost immunity and fight cancer naturally.",
      category: "diet",
      readTime: "6 min read",
      date: "March 5, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_obfryrobfryrobfr1.png",
      author: "Dr. Ritesh Chaurasiya",
      authorRole: "Ayurvedic Expert",
      featured: true
    },
    {
      id: 4,
      title: "Latest Research: Ayurveda and Immunotherapy",
      excerpt: "New studies show how Ayurvedic herbs can enhance the effectiveness of modern immunotherapy treatments.",
      category: "research",
      readTime: "7 min read",
      date: "February 28, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_g3mmhag3mmhag3mm1.png",
      author: "Dr. Jitendra Tiwari",
      authorRole: "Research Director",
      featured: false
    },
    {
      id: 5,
      title: "Managing Chemotherapy Side Effects with Ayurveda",
      excerpt: "Natural ways to reduce nausea, fatigue, and other side effects during cancer treatment.",
      category: "cancer",
      readTime: "6 min read",
      date: "February 20, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_o25k8uo25k8uo25k.png",
      author: "Dr. BK Chaurasiya",
      authorRole: "Ayurvedic Oncologist",
      featured: false
    },
    {
      id: 6,
      title: "Yoga for Cancer Patients: A Gentle Approach",
      excerpt: "Discover safe and effective yoga practices for cancer patients to improve strength and reduce stress.",
      category: "lifestyle",
      readTime: "5 min read",
      date: "February 15, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_k9cvqpk9cvqpk9cv1.png",
      author: "Dr. Shashi Chaurasiya",
      authorRole: "Yoga Therapist",
      featured: false
    },
    {
      id: 7,
      title: "Panchakarma: The Ultimate Detox for Cancer Patients",
      excerpt: "Learn how this ancient detoxification therapy can support cancer treatment and recovery.",
      category: "ayurveda",
      readTime: "8 min read",
      date: "February 10, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_obfryrobfryrobfr1.png",
      author: "Dr. Ritesh Chaurasiya",
      authorRole: "Panchakarma Specialist",
      featured: true
    },
    {
      id: 8,
      title: "The Role of Gut Health in Cancer Prevention",
      excerpt: "Understanding how a healthy gut microbiome can reduce cancer risk and improve treatment outcomes.",
      category: "diet",
      readTime: "5 min read",
      date: "February 5, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_g3mmhag3mmhag3mm1.png",
      author: "Dr. Jitendra Tiwari",
      authorRole: "Ayurvedic Physician",
      featured: false
    },
    {
      id: 9,
      title: "Latest Breakthroughs in Ayurvedic Cancer Research",
      excerpt: "A comprehensive review of recent scientific studies validating Ayurvedic approaches to cancer care.",
      category: "research",
      readTime: "10 min read",
      date: "January 28, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_o25k8uo25k8uo25k.png",
      author: "Dr. BK Chaurasiya",
      authorRole: "Research Director",
      featured: true
    },
    {
      id: 10,
      title: "Stress Management for Cancer Patients",
      excerpt: "Effective techniques to reduce stress and anxiety during cancer treatment and recovery.",
      category: "lifestyle",
      readTime: "4 min read",
      date: "January 20, 2026",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_k9cvqpk9cvqpk9cv1.png",
      author: "Dr. Shashi Chaurasiya",
      authorRole: "Mind-Body Specialist",
      featured: false
    }
  ];

  // Filter articles based on category and search
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);

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
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={heading}>
            Articles & <span className="text-[#F4A118]">Insights</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed" style={body}>
            Latest research, expert insights, and health tips to guide you on your healing journey
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F4A118] focus:ring-1 focus:ring-[#F4A118] transition"
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
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                    activeCategory === category.id
                      ? "bg-[#F4A118] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={body}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-12 bg-[#EEF7F4]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
                Featured <span className="text-[#F4A118]">Articles</span>
              </h2>
              <p className="text-gray-500">Hand-picked insights for your healing journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38" }}>No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-[#0D3B38] to-[#1B6B5A]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={heading}>
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-6" style={body}>
              Get the latest health insights, research updates, and wellness tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#F4A118]"
                style={body}
              />
              <button
                className="px-6 py-3 rounded-xl text-white font-semibold transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Subscribe →
              </button>
            </div>
            <p className="text-white/60 text-xs mt-4">No spam, unsubscribe anytime</p>
          </div>
        </div>
      </section>
    </>
  );
}

// Article Card Component
function ArticleCard({ article }) {
  return (
    <Link href={`/articles/${article.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-[#F4A118] text-white text-xs rounded-full font-semibold">
              {article.readTime}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
            <span>{article.date}</span>
            <span>•</span>
            <span className="text-[#F4A118] font-semibold">{article.category.toUpperCase()}</span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-[#0D3B38] group-hover:text-[#F4A118] transition-colors line-clamp-2" style={heading}>
            {article.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2" style={body}>
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div>
              <p className="text-xs font-semibold text-[#0D3B38]">{article.author}</p>
              <p className="text-[10px] text-gray-400">{article.authorRole}</p>
            </div>
            <div className="text-[#F4A118] group-hover:translate-x-1 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}