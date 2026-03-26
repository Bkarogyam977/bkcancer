"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { id: "all", name: "All Questions", icon: "📚" },
    { id: "general", name: "General", icon: "🏥" },
    { id: "treatment", name: "Treatment", icon: "💊" },
    { id: "ayurveda", name: "Ayurveda", icon: "🌿" },
    { id: "diet", name: "Diet & Nutrition", icon: "🥗" },
    { id: "cost", name: "Cost & Insurance", icon: "💰" }
  ];

  const faqs = [
    // General FAQs
    {
      id: 1,
      question: "What types of cancer does BK Cancer Care treat?",
      answer: "We treat all major types of cancer including Lung Cancer, Breast Cancer, Blood Cancer/Leukemia, Liver Cancer, Kidney Cancer, Cervical Cancer, Brain Tumor, Prostate Cancer, Oral Cancer, Colon Cancer, Stomach Cancer, Throat Cancer, Pancreatic Cancer, Thyroid Cancer, Bladder Cancer, Ovarian Cancer, Skin Cancer, and Colorectal Cancer. Our approach is personalized for each cancer type and stage.",
      category: "general",
      featured: true
    },
    {
      id: 2,
      question: "How is Ayurvedic cancer treatment different from conventional treatment?",
      answer: "Ayurvedic treatment focuses on treating the root cause of cancer by balancing the body's doshas, strengthening the immune system, and detoxifying the body. Unlike conventional treatment that often targets only the symptoms, Ayurveda works holistically to restore overall health, minimize side effects, and prevent recurrence. We also work alongside conventional treatments for integrated care.",
      category: "general",
      featured: true
    },
    {
      id: 3,
      question: "Can I continue my ongoing chemotherapy/radiation while taking Ayurvedic treatment?",
      answer: "Yes, absolutely! Our Ayurvedic treatments are designed to complement conventional cancer treatments. Many patients combine our therapies with chemotherapy and radiation to reduce side effects, boost immunity, and improve treatment outcomes. We work closely with your oncologist to ensure integrated, safe care.",
      category: "treatment",
      featured: true
    },
    {
      id: 4,
      question: "How long does the treatment take?",
      answer: "Treatment duration varies based on the type and stage of cancer, as well as individual response. Typically, our programs range from 3 to 12 months for active treatment, followed by a maintenance phase of 6-12 months to prevent recurrence. We provide personalized timelines during your consultation.",
      category: "treatment"
    },
    {
      id: 5,
      question: "What is Panchakarma and how does it help cancer patients?",
      answer: "Panchakarma is a comprehensive Ayurvedic detoxification therapy that eliminates toxins (ama) from the body, strengthens the immune system, and prepares the body for deeper healing. It includes five procedures: Vamana, Virechana, Basti, Nasya, and Raktamokshana. For cancer patients, it helps reduce treatment side effects, improve metabolism, and enhance overall well-being.",
      category: "ayurveda"
    },
    {
      id: 6,
      question: "Are there any side effects of Ayurvedic treatment?",
      answer: "Ayurvedic treatments are natural and generally have no side effects when administered by qualified practitioners. Some patients may experience mild detoxification symptoms initially, which are positive signs of healing. Our doctors closely monitor your progress and adjust treatments as needed to ensure comfort and safety.",
      category: "treatment"
    },
    {
      id: 7,
      question: "What dietary changes are recommended for cancer patients?",
      answer: "Our diet plans are personalized based on your cancer type, body constitution (Prakriti), and treatment stage. Generally, we recommend anti-inflammatory foods, fresh vegetables, fruits, whole grains, and immune-boosting spices like turmeric and ginger. We also advise avoiding processed foods, sugar, and heavy-to-digest items. Each patient receives a detailed diet chart.",
      category: "diet"
    },
    {
      id: 8,
      question: "Is Ayurvedic treatment covered by insurance?",
      answer: "Coverage varies by insurance provider. Many insurance companies now recognize Ayurvedic treatments. We provide all necessary documentation for insurance claims. Contact us to check your specific coverage, and our team will help you with the paperwork.",
      category: "cost"
    },
    {
      id: 9,
      question: "Do I need to visit the clinic for treatment?",
      answer: "While we recommend an initial in-person consultation for the best results, we offer complete telemedicine support for patients who cannot travel. Our online consultations include video calls, digital report sharing, and home delivery of medicines. Follow-up consultations are conducted virtually for convenience.",
      category: "general"
    },
    {
      id: 10,
      question: "What is the success rate of Ayurvedic cancer treatment?",
      answer: "Our success rates vary by cancer type and stage. With early detection and integrated treatment, many patients show significant improvement in quality of life, reduced side effects, and better treatment outcomes. We have helped over 10,000 patients improve their health and well-being through our personalized Ayurvedic protocols.",
      category: "treatment"
    },
    {
      id: 11,
      question: "What herbs are commonly used in cancer treatment?",
      answer: "We use a range of powerful Ayurvedic herbs including Ashwagandha (immunity booster), Guduchi (detoxifier), Tulsi (anti-inflammatory), Pippali (respiratory health), Vasaka (lung support), Kanchnaar (lymphatic health), and many others. Our formulations are personalized based on your specific condition and body type.",
      category: "ayurveda"
    },
    {
      id: 12,
      question: "How much does treatment cost?",
      answer: "Treatment costs vary depending on the cancer type, stage, and duration of treatment. We offer transparent pricing and flexible payment plans. During your initial consultation, we'll provide a detailed cost estimate based on your personalized treatment plan. We believe in making quality healthcare accessible to all.",
      category: "cost"
    },
    {
      id: 13,
      question: "Can yoga and meditation help during cancer treatment?",
      answer: "Yes, absolutely! Yoga and meditation are integral parts of our holistic approach. They help reduce stress, improve mental clarity, boost immunity, and enhance overall well-being. We provide personalized yoga and pranayama routines suitable for your condition and energy levels.",
      category: "diet"
    },
    {
      id: 14,
      question: "What is the role of detoxification in cancer treatment?",
      answer: "Detoxification (Panchakarma) is crucial for removing accumulated toxins that contribute to cancer growth and treatment side effects. It prepares the body for deeper healing, improves nutrient absorption, strengthens the immune system, and enhances the effectiveness of other treatments.",
      category: "ayurveda"
    },
    {
      id: 15,
      question: "How do I get started with treatment?",
      answer: "Getting started is simple! Book a free consultation through our website or call us. Our team will guide you through the process, collect your medical reports, schedule a consultation with our experts, and create a personalized treatment plan for you. We're here to support you every step of the way.",
      category: "general",
      featured: true
    }
  ];

  // Filter FAQs based on category and search
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredFaqs = faqs.filter(faq => faq.featured);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
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
            Answers to Your Questions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={heading}>
            Frequently Asked <span className="text-[#F4A118]">Questions</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed" style={body}>
            Find answers to common questions about Ayurvedic cancer treatment, our programs, and your healing journey
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "15+", label: "FAQ Categories", icon: "📚" },
              { number: "50+", label: "Common Questions", icon: "❓" },
              { number: "24/7", label: "Support Available", icon: "💬" },
              { number: "10k+", label: "Patients Helped", icon: "👥" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-[#F4A118]">{stat.number}</div>
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
                placeholder="Search questions..."
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
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                    activeCategory === category.id
                      ? "bg-[#F4A118] text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100"
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

      {/* Featured FAQs Section */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
                Most Asked <span className="text-[#F4A118]">Questions</span>
              </h2>
              <p className="text-gray-500">Get quick answers to the most common questions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-[#EEF7F4] rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-[#F4A118] text-xl flex-shrink-0">❓</div>
                    <div>
                      <h3 className="font-bold text-[#0D3B38] mb-2 line-clamp-2">{faq.question}</h3>
                      {openFaq === faq.id && (
                        <p className="text-gray-600 text-sm mt-2 pt-2 border-t border-gray-200">{faq.answer}</p>
                      )}
                      {openFaq !== faq.id && (
                        <span className="text-[#F4A118] text-xs font-semibold">Click to read more →</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All FAQs Accordion */}
      <section className="py-12 bg-[#EEF7F4]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
              All <span className="text-[#F4A118]">Questions</span>
            </h2>
            <p className="text-gray-500">Browse through our comprehensive FAQ collection</p>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38" }}>No questions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-[#0D3B38] pr-4" style={heading}>
                      {faq.question}
                    </span>
                    <span className={`text-[#F4A118] text-xl transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="p-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed" style={body}>
                        {faq.answer}
                      </p>
                      {faq.category && (
                        <div className="mt-3">
                          <span className="inline-block px-2 py-1 bg-[#EEF7F4] text-[#0D3B38] text-xs rounded-full">
                            {categories.find(c => c.id === faq.category)?.name || faq.category}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Show count */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Showing {filteredFaqs.length} of {faqs.length} questions
            </p>
          </div>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-[#0D3B38] to-[#1B6B5A] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={heading}>
              Still Have Questions?
            </h2>
            <p className="text-white/80 mb-6" style={body}>
              Our team is here to help you with any additional questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl text-white font-semibold transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Contact Our Team →
              </Link>
              <Link
                href="/consultation"
                className="px-6 py-3 rounded-xl text-white font-semibold transition hover:bg-white/20 border border-white/30"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "📞", title: "Call Us", info: "+91 1234567890", desc: "Mon-Sat, 9AM-7PM" },
              { icon: "💬", title: "WhatsApp", info: "+91 9876543210", desc: "24/7 Support Available" },
              { icon: "✉️", title: "Email", info: "info@bkcancercare.com", desc: "We reply within 24 hours" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#0D3B38] mb-1">{item.title}</h3>
                <p className="text-[#F4A118] font-semibold">{item.info}</p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}