"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Role of Ayurveda in Cancer Care",
    excerpt: "Discover how ancient Ayurvedic wisdom complements modern cancer treatments to improve quality of life and support healing.",
    content: "Ayurveda offers a holistic approach to cancer care that focuses on strengthening the body's natural defenses...",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop",
    date: "March 15, 2026",
    author: "Dr. BK Chaurasiya",
    category: "Cancer Care",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Panchakarma: The Ultimate Detox Therapy",
    excerpt: "Learn about the five cleansing procedures of Panchakarma and how they help eliminate toxins from the body.",
    content: "Panchakarma is a comprehensive detoxification program that cleanses the body at a cellular level...",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
    date: "March 10, 2026",
    author: "Dr. Shashi Chaurasiya",
    category: "Detoxification",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Ayurvedic Diet for Cancer Patients",
    excerpt: "Nutritional guidelines based on Ayurvedic principles to support patients undergoing cancer treatment.",
    content: "Proper nutrition plays a crucial role in cancer recovery. Ayurveda recommends personalized dietary plans...",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    date: "March 5, 2026",
    author: "Dr. Ritesh Chaurasiya",
    category: "Nutrition",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Managing Chemotherapy Side Effects Naturally",
    excerpt: "Natural remedies and Ayurvedic approaches to reduce the side effects of chemotherapy.",
    content: "Chemotherapy can cause various side effects. Ayurveda offers natural solutions to manage nausea, fatigue, and more...",
    image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/26/17.jpeg",
    date: "February 28, 2026",
    author: "Dr. Deepak Kumar Singh",
    category: "Treatment Support",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Power of Herbal Immunomodulators",
    excerpt: "Explore Ayurvedic herbs that boost immunity and support the body's natural healing mechanisms.",
    content: "Certain herbs like Ashwagandha, Guduchi, and Tulsi have powerful immunomodulatory properties...",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=500&fit=crop",
    date: "February 20, 2026",
    author: "Dr. BK Chaurasiya",
    category: "Herbal Medicine",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Yoga and Meditation for Cancer Recovery",
    excerpt: "How yogic practices can help in emotional healing and physical recovery during cancer treatment.",
    content: "Yoga and meditation reduce stress, improve circulation, and promote emotional well-being...",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
    date: "February 15, 2026",
    author: "Dr. Jitendra Tiwari",
    category: "Lifestyle",
    readTime: "4 min read"
  }
];

// Categories for filtering
const categories = ["All", "Cancer Care", "Detoxification", "Nutrition", "Treatment Support", "Herbal Medicine", "Lifestyle"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post (first post)
  const featuredPost = blogPosts[0];

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/carrire_banner.jpeg"
            alt="BK Cancer Care Blog - Ayurvedic Insights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-sm font-semibold mb-4 backdrop-blur-sm">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Ayurvedic <span className="text-[#F4A118]">Insights</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl" style={body}>
              Discover expert articles on Ayurvedic cancer care, holistic healing, and wellness tips from our experienced doctors.
            </p>
            <div className="flex gap-2 mt-4 text-sm text-white/70">
              <Link href="/" className="hover:text-[#F4A118] transition">Home</Link>
              <span>/</span>
              <span className="text-[#F4A118]">Blog</span>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F4A118] transition"
                style={body}
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[#F4A118] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={body}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="py-12 bg-gradient-to-br from-[#EEF7F4] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4A118]/10 text-[#F4A118] text-sm font-semibold mb-3">
                Featured Article
              </span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0D3B38", ...heading }}>
                Editor's <span className="text-[#F4A118]">Pick</span>
              </h2>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full min-h-[300px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#F4A118]/10 text-[#F4A118] text-xs font-semibold rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0D3B38", ...heading }}>
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed" style={body}>
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">By {featuredPost.author}</p>
                      <p className="text-xs text-gray-400">{featuredPost.date}</p>
                    </div>
                    <button
                      onClick={() => setSelectedPost(featuredPost)}
                      className="px-5 py-2 rounded-lg text-white font-semibold text-sm hover:scale-105 transition"
                      style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group"
                  style={{ border: "1px solid #e5f0ec" }}
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#F4A118] text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2" style={{ color: "#0D3B38", ...heading }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3" style={body}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">By {post.author}</p>
                      <span className="text-[#F4A118] text-sm font-semibold group-hover:translate-x-1 transition">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
              Subscribe to Our <span className="text-[#F4A118]">Newsletter</span>
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto" style={body}>
              Get the latest Ayurvedic insights, health tips, and treatment updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-[#F4A118]"
                style={body}
              />
              <button
                className="px-6 py-3 rounded-lg text-white font-semibold transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-white/50 text-xs mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 rounded-t-2xl p-4 border-b" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-white" style={heading}>Blog Article</h2>
                <button onClick={() => setSelectedPost(null)} className="text-2xl text-white hover:text-[#F4A118] transition">&times;</button>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-6">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#F4A118]/10 text-[#F4A118] text-sm font-semibold rounded-full">
                  {selectedPost.category}
                </span>
                <span className="text-gray-400 text-sm">{selectedPost.readTime}</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
                {selectedPost.title}
              </h1>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                <div>
                  <p className="font-semibold text-gray-800">By {selectedPost.author}</p>
                  <p className="text-sm text-gray-500">{selectedPost.date}</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none" style={body}>
                <p className="text-gray-600 leading-relaxed mb-4">{selectedPost.excerpt}</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {selectedPost.content} This is a detailed article about {selectedPost.title.toLowerCase()}. 
                  Our expert doctors share valuable insights based on years of clinical experience and ancient 
                  Ayurvedic wisdom. Ayurveda offers a holistic approach to health that focuses on balancing the 
                  body's doshas and strengthening natural immunity.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For personalized guidance and treatment, we recommend scheduling a consultation with our 
                  experienced Ayurvedic doctors. Each patient receives an individualized treatment plan based 
                  on their unique constitution and health condition.
                </p>
                <div className="bg-[#EEF7F4] rounded-xl p-5 my-6">
                  <h3 className="font-bold text-[#0D3B38] mb-2">Key Takeaways:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Ayurveda complements modern cancer treatments</li>
                    <li>Personalized approach based on individual constitution</li>
                    <li>Focus on strengthening the body's natural defenses</li>
                    <li>Integration of diet, lifestyle, and herbal remedies</li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To learn more about how Ayurveda can support your health journey, contact our team for a 
                  free consultation. We're here to help you achieve optimal wellness naturally.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t">
                <button
                  onClick={() => window.location.href = "/contact"}
                  className="w-full md:w-auto px-6 py-3 rounded-lg text-white font-semibold transition hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                >
                  Book a Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .prose-lg { font-size: 0.95rem; }
        }
      `}</style>
    </>
  );
}