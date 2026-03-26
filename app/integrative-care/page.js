"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function IntegrativeCancerCare() {
  return (
    <>
      {/* Premium Hero Section with Background Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/Care_for_Cancer.jpeg"
            alt="Integrative Cancer Care - Holistic Healing"
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
              Holistic Healing Approach
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight" style={heading}>
              Integrative <span className="text-[#F4A118]">Cancer Care</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl" style={body}>
              Combining Ancient Ayurvedic Wisdom with Modern Medical Insights for Comprehensive Healing
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
                href="#components"
                className="inline-block px-8 py-3 rounded-lg text-white font-semibold transition hover:bg-white/20 border border-white/30 backdrop-blur-sm"
              >
                Explore Our Approach
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

      {/* Introduction Section - Premium */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EEF7F4] rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}>
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
                The Best of <span className="text-[#F4A118]">Both Worlds</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg" style={body}>
                Integrative cancer care combines the ancient wisdom of Ayurveda with evidence-based modern medicine. 
                This holistic approach treats not just the cancer but the whole person - mind, body, and spirit.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed" style={body}>
                At BK Cancer Care, we believe that cancer treatment should be comprehensive, personalized, and focused 
                on enhancing quality of life while fighting the disease effectively.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#F4A118]/10 flex items-center justify-center">
                    <span className="text-[#F4A118] font-bold">25+</span>
                  </div>
                  <span className="text-sm text-gray-600">Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#F4A118]/10 flex items-center justify-center">
                    <span className="text-[#F4A118] font-bold">10K+</span>
                  </div>
                  <span className="text-sm text-gray-600">Patients Treated</span>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://bkarogyam.com/varanasicenter.jpg"
                alt="Integrative Cancer Care Center"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components - Premium */}
      <section id="components" className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}>
              Our Modalities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Key Components of <span className="text-[#F4A118]">Integrative Care</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Our comprehensive approach combines multiple healing modalities for optimal results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Ayurvedic Therapies",
                desc: "Personalized herbal medicines, Panchakarma detox, and dietary recommendations based on your constitution.",
                color: "#0D3B38"
              },
              {
                icon: "🏥",
                title: "Modern Diagnostics",
                desc: "Advanced cancer screening, monitoring, and when appropriate, integration with conventional treatments.",
                color: "#1B6B5A"
              },
              {
                icon: "🧘",
                title: "Mind-Body Medicine",
                desc: "Yoga, meditation, pranayama, and counseling to support emotional and mental wellbeing.",
                color: "#F4A118"
              },
              {
                icon: "🥗",
                title: "Nutritional Support",
                desc: "Customized diet plans that boost immunity and support the body during treatment.",
                color: "#0D3B38"
              },
              {
                icon: "💪",
                title: "Immunotherapy",
                desc: "Natural immune-modulating therapies that strengthen your body's defense mechanisms.",
                color: "#1B6B5A"
              },
              {
                icon: "🔄",
                title: "Follow-up Care",
                desc: "Continuous monitoring and adjustment of treatment protocols for optimal results.",
                color: "#F4A118"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group" style={{ border: "1px solid #e5f0ec" }}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: item.color, ...heading }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={body}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Premium */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EEF7F4] rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}>
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0D3B38", ...heading }}>
                Benefits of <span className="text-[#F4A118]">Integrative Approach</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Reduced side effects from conventional treatments",
                  "Improved quality of life during and after treatment",
                  "Strengthened immune system for better recovery",
                  "Better treatment outcomes and survival rates",
                  "Holistic healing addressing root causes",
                  "Personalized care tailored to individual needs"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition group-hover:scale-110" style={{ backgroundColor: "#F4A118" }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg" style={body}>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-[#F4A118] font-semibold hover:gap-3 transition-all"
                >
                  Learn More About Our Process 
                  <span>→</span>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://healdiway.bkarogyam.com/media/clinic-image%2Fblogimage%2F2024%2F8%2F13%2F2024-08-13%2012%3A39%3A15.993421%2005%3A30%2Fabhyanga.jpg"
                alt="Benefits of Integrative Care"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Premium */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={heading}>
            What Our <span className="text-[#F4A118]">Patients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "The integrative approach at BK Cancer Care changed my life. Ayurvedic treatments alongside my conventional therapy made all the difference.",
                name: "Rajesh K.",
                location: "Delhi"
              },
              {
                quote: "I experienced minimal side effects during my treatment thanks to their holistic care. Truly grateful for their support.",
                name: "Sunita M.",
                location: "Mumbai"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
                <div className="text-4xl mb-3">"</div>
                <p className="text-white/90 mb-4 leading-relaxed">{testimonial.quote}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#F4A118] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="bg-gradient-to-r from-[#EEF7F4] to-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Start Your <span className="text-[#F4A118]">Integrative Healing</span> Journey
            </h2>
            <p className="text-gray-600 mb-8 text-lg" style={body}>
              Book a consultation with our integrative cancer specialists today and discover a new path to healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105 shadow-lg"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                Book Free Consultation →
              </Link>
              <Link
                href="/treatments"
                className="inline-block px-8 py-4 rounded-xl text-[#0D3B38] font-bold text-lg transition hover:bg-gray-100 border-2 border-[#0D3B38]"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}