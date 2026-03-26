"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");

  const resources = {
    articles: [
      {
        title: "Understanding Cancer: An Ayurvedic Perspective",
        category: "education",
        date: "March 15, 2024",
        readTime: "8 min read",
        description: "Learn how Ayurveda views cancer and the holistic approach to treatment.",
        link: "#"
      },
      {
        title: "The Role of Panchakarma in Cancer Care",
        category: "treatment",
        date: "March 10, 2024",
        readTime: "6 min read",
        description: "Discover how detoxification helps in cancer treatment and recovery.",
        link: "#"
      },
      {
        title: "Nutrition Guide for Cancer Patients",
        category: "nutrition",
        date: "March 5, 2024",
        readTime: "10 min read",
        description: "Comprehensive dietary recommendations during cancer treatment.",
        link: "#"
      },
      {
        title: "Managing Chemotherapy Side Effects with Ayurveda",
        category: "treatment",
        date: "February 28, 2024",
        readTime: "7 min read",
        description: "Natural ways to reduce side effects of conventional treatments.",
        link: "#"
      }
    ],
    videos: [
      {
        title: "Introduction to Ayurvedic Cancer Care",
        duration: "15:30",
        thumbnail: "https://via.placeholder.com/400x225?text=Video+1",
        link: "https://youtu.be/utvjqTPRm3Y"
      },
      {
        title: "Patient Success Story: Breast Cancer Recovery",
        duration: "12:45",
        thumbnail: "https://via.placeholder.com/400x225?text=Video+2",
        link: "https://youtu.be/BJ5fIySdUbg"
      },
      {
        title: "Understanding Panchakarma Therapy",
        duration: "18:20",
        thumbnail: "https://via.placeholder.com/400x225?text=Video+3",
        link: "https://youtu.be/cZvwbo6MTjo"
      },
      {
        title: "Q&A Session with Dr. BK Chaurasia",
        duration: "25:10",
        thumbnail: "https://via.placeholder.com/400x225?text=Video+4",
        link: "https://youtu.be/I7NhABARuvU"
      }
    ],
    guides: [
      {
        title: "Complete Guide to Ayurvedic Cancer Treatment",
        format: "PDF",
        pages: 45,
        size: "2.5 MB",
        description: "Comprehensive guide covering all aspects of Ayurvedic cancer care.",
        link: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/Gemini_Generated_Image_dstjtkdstjtkdstj1.png"
      },
      {
        title: "Diet & Lifestyle Guidelines",
        format: "PDF",
        pages: 28,
        size: "1.8 MB",
        description: "Practical guide to diet and lifestyle during cancer treatment.",
        link: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/Gemini_Generated_Image_qr3smaqr3smaqr3s1.png"
      },
      {
        title: "Yoga & Pranayama for Cancer Patients",
        format: "PDF",
        pages: 32,
        size: "2.1 MB",
        description: "Safe yoga practices for cancer patients and survivors.",
        link: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/Gemini_Generated_Image_zd2j8mzd2j8mzd2j1.png"
      }
    ],
    faqs: [
      {
        question: "Is Ayurvedic treatment effective for all types of cancer?",
        answer: "Ayurvedic treatment can be effective for various cancer types. The approach is personalized based on the specific cancer type, stage, and individual constitution."
      },
      {
        question: "Can I take Ayurvedic treatment alongside chemotherapy?",
        answer: "Yes, our integrative approach works alongside conventional treatments to reduce side effects and improve outcomes. However, this should be done under medical supervision."
      },
      {
        question: "How long does Ayurvedic cancer treatment take?",
        answer: "Treatment duration varies based on cancer type, stage, and individual response. Typically, patients see improvements within 3-6 months, with continued treatment for optimal results."
      },
      {
        question: "Are there any side effects of Ayurvedic treatment?",
        answer: "Our treatments are designed to be natural and side-effect-free. Unlike conventional treatments, there is no hair loss, nausea, or damage to healthy cells."
      },
      {
        question: "How can I book an appointment?",
        answer: "You can book an appointment by calling +91 8081222333, using our online booking form, or visiting any of our centers."
      }
    ]
  };

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "education", label: "Educational" },
    { id: "treatment", label: "Treatment Info" },
    { id: "nutrition", label: "Nutrition" },
    { id: "videos", label: "Videos" },
    { id: "guides", label: "Guides" }
  ];

  const filteredArticles = activeCategory === "all" 
    ? resources.articles 
    : resources.articles.filter(a => a.category === activeCategory);

  // Function to handle download with proper file name
  const handleDownload = (guide) => {
    if (guide.link && guide.link !== "#") {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = guide.link;
      // Set download attribute with appropriate filename based on guide title
      const fileName = guide.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.png';
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      {/* Hero Section with Banner Image */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/Patient-Resources_870x300.jpeg"
          alt="Patient Resources Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Patient Resources
            </h1>
            <p className="text-lg md:text-xl opacity-90" style={body}>
              Educational Materials, Guides, and Support for Your Journey
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={body}>
            Explore our collection of resources designed to help you understand cancer treatment 
            and support your healing journey.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition ${
                  activeCategory === cat.id 
                    ? 'bg-[#0D3B38] text-white' 
                    : 'bg-white hover:bg-gray-100'
                }`}
                style={{ border: "1px solid #e5f0ec" }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      {(activeCategory === "all" || activeCategory === "education" || activeCategory === "treatment" || activeCategory === "nutrition") && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0D3B38", ...heading }}>
              Articles & Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#F4A118] text-white text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-3" style={body}>{article.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <a href={article.link} className="text-sm font-semibold hover:underline" style={{ color: "#F4A118" }}>
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos Section */}
      {(activeCategory === "all" || activeCategory === "videos") && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0D3B38", ...heading }}>
              Educational Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.videos.map((video, i) => (
                <a
                  key={i}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D3B38] to-[#1B6B5A] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#F4A118] flex items-center justify-center mx-auto mb-2">
                          <span className="text-white text-xl">▶</span>
                        </div>
                        <p className="text-white text-sm">{video.duration}</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold text-center group-hover:text-[#F4A118] transition" style={{ color: "#0D3B38" }}>
                    {video.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guides Section */}
      {(activeCategory === "all" || activeCategory === "guides") && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0D3B38", ...heading }}>
              Downloadable Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.guides.map((guide, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6" style={{ border: "1px solid #e5f0ec" }}>
                  <div className="text-3xl mb-3">📘</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-3" style={body}>{guide.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>{guide.format}</span>
                    <span>{guide.pages} pages</span>
                    <span>{guide.size}</span>
                  </div>
                  <button
                    onClick={() => handleDownload(guide)}
                    className="block w-full text-center px-4 py-2 rounded-lg text-white font-semibold transition hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                  >
                    Download Free →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0D3B38", ...heading }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {resources.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6" style={{ border: "1px solid #e5f0ec" }}>
                <h3 className="font-bold mb-2" style={{ color: "#F4A118", ...heading }}>{faq.question}</h3>
                <p className="text-gray-600" style={body}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
            Need More Information?
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Contact our patient support team for personalized assistance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Contact Support →
            </Link>
            <a
              href="tel:+918081222333"
              className="inline-block px-8 py-4 rounded-xl bg-white text-[#0D3B38] font-bold text-lg transition hover:scale-105"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}