"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function EducationalVideosPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const videos = [
    {
      id: 1,
      title: "Kidney Failure: Patient's True Story | BK Arogyam",
      description: "A kidney patient shares their journey of recovery without dialysis through Ayurvedic treatment at BK Arogyam.",
      url: "https://youtu.be/iTQdSOObiuQ",
      thumbnail: "https://img.youtube.com/vi/iTQdSOObiuQ/maxresdefault.jpg",
      category: "patient-stories",
      duration: "15:32",
      views: "1.8K",
      date: "May 2024"
    },
    {
      id: 2,
      title: "Harish Rana Case: A Powerful Message of Forgiveness",
      description: "An emotional journey of healing and forgiveness shared by a patient who found new hope through Ayurvedic care.",
      url: "https://youtu.be/wk3cLPURVz0",
      thumbnail: "https://img.youtube.com/vi/wk3cLPURVz0/maxresdefault.jpg",
      category: "patient-stories",
      duration: "22:15",
      views: "95K",
      date: "March 2024"
    },
    {
      id: 3,
      title: "Dialysis Stopped: Patient's Real Story | BK Arogyam",
      description: "A remarkable story of a patient who successfully stopped dialysis after receiving Ayurvedic treatment.",
      url: "https://youtu.be/aq39S4N4YOM",
      thumbnail: "https://img.youtube.com/vi/aq39S4N4YOM/maxresdefault.jpg",
      category: "patient-stories",
      duration: "18:45",
      views: "16K",
      date: "March 2024"
    },
    {
      id: 4,
      title: "Belly Fat: Why It Increases BP & Diabetes?",
      description: "Expert talk on the connection between belly fat, blood pressure, and diabetes with practical health tips.",
      url: "https://youtu.be/UVo09_Ruq14",
      thumbnail: "https://img.youtube.com/vi/UVo09_Ruq14/maxresdefault.jpg",
      category: "expert-talks",
      duration: "12:28",
      views: "56K",
      date: "February 2024"
    },
    {
      id: 5,
      title: "Ayurvedic Treatment for Acute Kidney Disease",
      description: "Comprehensive guide on Ayurvedic approaches to treating kidney failure and acute kidney disease naturally.",
      url: "https://youtu.be/7YmCFngF97o",
      thumbnail: "https://img.youtube.com/vi/7YmCFngF97o/maxresdefault.jpg",
      category: "expert-talks",
      duration: "25:10",
      views: "42K",
      date: "January 2024"
    },
    {
      id: 6,
      title: "Kidney Stones: Foods to Avoid Immediately",
      description: "Essential dietary guidance for kidney stone patients - what to eat and what to avoid for better kidney health.",
      url: "https://youtu.be/I_vwXkZ_XwE",
      thumbnail: "https://img.youtube.com/vi/I_vwXkZ_XwE/maxresdefault.jpg",
      category: "health-tips",
      duration: "10:45",
      views: "11K",
      date: "December 2023"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Videos', icon: '🎬' },
    { id: 'patient-stories', name: 'Patient Stories', icon: '📖' },
    { id: 'expert-talks', name: 'Expert Talks', icon: '👨‍⚕️' },
    { id: 'health-tips', name: 'Health Tips', icon: '💡' }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('/').pop().split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-sm font-semibold mb-4 backdrop-blur-sm" style={body}>
            Knowledge is Healing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={heading}>
            Educational <span className="text-[#F4A118]">Videos</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed" style={body}>
            Watch expert talks, patient success stories, and health tips to empower your healing journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link
              href="#videos"
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Explore Videos →
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition hover:bg-white/20 border border-white/30"
            >
              Get Expert Guidance
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
            {[
              { number: "6+", label: "Educational Videos", icon: "🎥" },
              { number: "100K+", label: "Total Views", icon: "👁️" },
              { number: "24/7", label: "Free Access", icon: "🆓" }
            ].map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#EEF7F4]">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#F4A118" }}>{stat.number}</p>
                <p className="text-gray-600 text-sm" style={body}>{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={body}>
              Our educational video library is designed to help you understand various health conditions, 
              treatment options, and lifestyle modifications. Learn from expert doctors and hear inspiring 
              stories from patients who have successfully healed with Ayurvedic care.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-[#F8F9FA] sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                style={activeCategory === category.id ? { background: "linear-gradient(135deg, #F4A118, #d4600a)" } : {}}
              >
                <span>{category.icon}</span>
                <span className="text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section id="videos" className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-900 cursor-pointer group" onClick={() => window.open(video.url, '_blank')}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://img.youtube.com/vi/default/maxresdefault.jpg';
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#F4A118] flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#EEF7F4] text-[#0D3B38]">
                      {video.category === 'patient-stories' && '📖 Patient Story'}
                      {video.category === 'expert-talks' && '👨‍⚕️ Expert Talk'}
                      {video.category === 'health-tips' && '💡 Health Tip'}
                    </span>
                    <span className="text-xs text-gray-400">{video.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ color: "#0D3B38", ...heading }}>
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2" style={body}>
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <span>👁️</span>
                      <span>{video.views} views</span>
                    </div>
                    <button
                      onClick={() => window.open(video.url, '_blank')}
                      className="text-[#F4A118] font-semibold text-sm hover:underline flex items-center gap-1"
                    >
                      Watch Now
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38" }}>No Videos Found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Why Watch Our <span className="text-[#F4A118]">Educational Videos</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Gain valuable insights and knowledge to support your health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎓", title: "Expert Knowledge", desc: "Learn from experienced Ayurvedic doctors and specialists" },
              { icon: "📖", title: "Real Stories", desc: "Hear inspiring journeys of patients who recovered" },
              { icon: "💡", title: "Practical Tips", desc: "Get actionable health and lifestyle advice" },
              { icon: "🆓", title: "Free Access", desc: "All educational content available at no cost" }
            ].map((benefit, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#EEF7F4] hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "#0D3B38" }}>{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={heading}>
              Featured <span className="text-[#F4A118]">Video</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Watch this inspiring patient story to understand the power of Ayurvedic healing
            </p>
          </div>
          
          <div className="bg-black/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iTQdSOObiuQ"
                title="Featured Educational Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Kidney Failure: Patient's True Story | BK Arogyam</h3>
              <p className="text-white/70">A powerful testimony of healing and recovery through Ayurvedic treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
            Want Personalized Guidance?
          </h2>
          <p className="text-gray-500 mb-8 text-lg" style={body}>
            Book a free consultation with our Ayurvedic experts for personalized treatment plans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Book Free Consultation →
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block px-8 py-4 rounded-xl text-[#0D3B38] font-bold text-lg transition hover:bg-gray-100 border-2 border-[#0D3B38]"
            >
              How Our Program Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}