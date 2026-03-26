"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function HowItWorksPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Submit Your Medical Reports",
      description: "Share your complete medical history, diagnostic reports, and current treatment details with our team. The more information we have, the better we can understand your unique condition.",
      icon: "📋",
      details: [
        "Recent diagnostic reports (CT scan, MRI, PET scan)",
        "Blood test results",
        "Current medications and treatments",
        "Previous treatments and their outcomes",
        "Detailed medical history"
      ]
    },
    {
      number: "02",
      title: "Expert Doctor Review",
      description: "Our team of experienced Ayurvedic oncologists reviews your case thoroughly. They analyze your condition from both modern medical and Ayurvedic perspectives to understand the root cause.",
      icon: "👨‍⚕️",
      details: [
        "24-48 hours initial review time",
        "Multi-specialist team consultation",
        "Prakriti (body constitution) analysis",
        "Dosha imbalance assessment",
        "Treatment history evaluation"
      ]
    },
    {
      number: "03",
      title: "Personalized Treatment Plan",
      description: "Receive a customized Ayurvedic treatment protocol designed specifically for your condition, body type, and stage of illness. Every plan is unique to the patient.",
      icon: "📝",
      details: [
        "Custom herbal formulation",
        "Personalized diet plan",
        "Lifestyle modification guidelines",
        "Yoga and pranayama routine",
        "Panchakarma detox schedule"
      ]
    },
    {
      number: "04",
      title: "Start Your Program",
      description: "Begin your treatment journey with our comprehensive program. Receive all medications and detailed instructions to start your healing process.",
      icon: "🚀",
      details: [
        "Medicine delivery to your doorstep",
        "Detailed program guidebook",
        "Diet charts and recipes",
        "Yoga demonstration videos",
        "Daily routine checklist"
      ]
    },
    {
      number: "05",
      title: "Regular Monitoring & Support",
      description: "Stay connected with our team through regular follow-ups. We track your progress and make necessary adjustments to optimize your treatment.",
      icon: "📊",
      details: [
        "Weekly video consultations",
        "24/7 WhatsApp support",
        "Progress tracking dashboard",
        "Regular blood work monitoring",
        "Symptom assessment logs"
      ]
    },
    {
      number: "06",
      title: "Long-term Wellness & Maintenance",
      description: "After completing the intensive treatment phase, we guide you through maintaining your health and preventing recurrence with sustainable lifestyle practices.",
      icon: "🌿",
      details: [
        "Maintenance herbal protocol",
        "Seasonal detox programs",
        "Yearly health check-ups",
        "Lifestyle coaching",
        "Support community access"
      ]
    }
  ];

  const benefits = [
    {
      title: "100% Personalized",
      description: "No one-size-fits-all approach. Every treatment plan is uniquely crafted for you.",
      icon: "🎯"
    },
    {
      title: "Integrative Approach",
      description: "Combines best of Ayurveda with modern diagnostic insights.",
      icon: "🔄"
    },
    {
      title: "Continuous Support",
      description: "Round-the-clock access to our care team for questions and guidance.",
      icon: "💬"
    },
    {
      title: "Proven Results",
      description: "Thousands of patients have benefited from our comprehensive program.",
      icon: "⭐"
    }
  ];

  const faqs = [
    {
      q: "How long does the program take?",
      a: "The duration varies based on your condition and stage. Typically, our programs range from 3 to 12 months, with maintenance phase continuing thereafter."
    },
    {
      q: "Can I continue my current treatment?",
      a: "Yes! Our program is designed to complement your existing treatments. We work alongside your oncologist to ensure integrated care."
    },
    {
      q: "Do I need to visit the clinic?",
      a: "While we recommend an initial consultation for best results, we offer complete telemedicine support for patients who cannot travel."
    },
    {
      q: "What if I have side effects?",
      a: "Our team is available 24/7 to address any concerns. We closely monitor your progress and adjust treatment as needed."
    },
    {
      q: "Is the program covered by insurance?",
      a: "Coverage varies by provider. We provide all documentation needed for insurance claims. Contact us to check your specific coverage."
    }
  ];

  const timelineItems = [
    { day: "Day 1", title: "Submit Reports", icon: "📋" },
    { day: "Day 2-3", title: "Doctor Review", icon: "👨‍⚕️" },
    { day: "Day 4", title: "Get Plan", icon: "📝" },
    { day: "Week 1", title: "Start Program", icon: "🚀" },
    { day: "Weekly", title: "Monitoring", icon: "📊" },
    { day: "Lifetime", title: "Wellness Support", icon: "🌿" }
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .hero-title {
            font-size: 2rem !important;
          }
          .hero-subtitle {
            font-size: 0.9rem !important;
            padding: 0 1rem !important;
          }
          .step-card {
            margin-left: 3rem !important;
            padding: 1rem !important;
          }
          .step-icon {
            width: 2.5rem !important;
            height: 2.5rem !important;
            font-size: 1rem !important;
          }
          .banner-image {
            height: 12rem !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            gap: 0.75rem !important;
            padding: 0 1rem !important;
          }
          .cta-button {
            width: 100% !important;
            text-align: center !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .hero-title {
            font-size: 3rem !important;
          }
          .step-card {
            margin-left: 4rem !important;
          }
          .banner-image {
            height: 18rem !important;
          }
        }
      `}</style>

      {/* Hero Section with Banner Image */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        {/* Background Banner Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/under_2.jpeg"
            alt="Healthcare banner background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4A118] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center relative z-10">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4" style={body}>
            Simple & Effective
          </span>
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4" style={heading}>
            How Our <span className="text-[#F4A118]">Program Works</span>
          </h1>
          <p className="hero-subtitle text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4" style={body}>
            A step-by-step journey to healing, guided by expert Ayurvedic physicians and supported by modern integrative medicine
          </p>
        </div>
      </section>

      {/* Steps Timeline - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#EEF7F4] text-[#0D3B38] text-xs sm:text-sm font-semibold mb-3" style={body}>
              Your Healing Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#0D3B38", ...heading }}>
              6 Steps to <span className="text-[#F4A118]">Better Health</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto px-4" style={body}>
              Follow our structured approach to reclaim your health naturally
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on tablet/desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F4A118] via-[#0D3B38] to-[#F4A118] transform -translate-x-1/2"></div>
            
            {steps.map((step, index) => (
              <div key={step.number} className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot - Position adjusted for mobile */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#F4A118] to-[#d4600a] flex items-center justify-center text-white font-bold z-10 shadow-lg text-xs sm:text-sm md:text-base">
                  {step.number}
                </div>
                
                {/* Content Card */}
                <div className={`step-card w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-10 sm:pl-12 md:pl-0`}>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{step.icon}</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2" style={{ color: "#0D3B38", ...heading }}>{step.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4" style={body}>{step.description}</p>
                    <div className="bg-[#EEF7F4] rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 text-[#0D3B38]">What to expect:</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-xs text-gray-600">
                            <span className="text-[#F4A118] text-xs sm:text-sm">✓</span>
                            <span className="text-xs">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Responsive Grid */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#EEF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-white text-[#0D3B38] text-xs sm:text-sm font-semibold mb-3" style={body}>
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#0D3B38", ...heading }}>
              Key <span className="text-[#F4A118]">Benefits</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto px-4" style={body}>
              What makes our program unique and effective
            </p>
          </div>

          <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-[#0D3B38]">{benefit.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style for Mobile */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#EEF7F4] text-[#0D3B38] text-xs sm:text-sm font-semibold mb-3" style={body}>
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#0D3B38", ...heading }}>
              Frequently Asked <span className="text-[#F4A118]">Questions</span>
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex justify-between items-center w-full cursor-pointer p-4 sm:p-5 font-semibold text-[#0D3B38] hover:bg-gray-50 transition text-left text-sm sm:text-base"
                  style={heading}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#F4A118] transition-transform flex-shrink-0" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="p-4 sm:p-5 pt-0 text-gray-600 border-t border-gray-100 text-sm sm:text-base" style={body}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual Section - Responsive Grid */}
      <section className="py-8 sm:py-12 md:py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center text-white mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4" style={heading}>
              Your Journey to <span className="text-[#F4A118]">Wellness</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto px-4" style={body}>
              From consultation to recovery - we're with you every step of the way
            </p>
          </div>

          <div className="timeline-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            {timelineItems.map((item, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F4A118] text-white flex items-center justify-center mx-auto mb-1 sm:mb-2 text-lg sm:text-xl shadow-lg">
                  {item.icon}
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-white">{item.day}</p>
                <p className="text-[9px] sm:text-xs text-white/70">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Image Section - Responsive Height */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="banner-image relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/under_2.jpeg"
              alt="Healthcare consultation banner"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay text - responsive padding */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Expert Consultation Available</h3>
                <p className="text-xs sm:text-sm md:text-base">Book your free consultation today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized Buttons */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: "#0D3B38", ...heading }}>
            Ready to Begin Your <span className="text-[#F4A118]">Healing Journey?</span>
          </h2>
          <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4" style={body}>
            Take the first step today. Our team is ready to guide you towards better health.
          </p>
          <div className="cta-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              href="/contact" 
              className="cta-button inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base md:text-lg transition hover:scale-105 text-center"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Start Your Journey →
            </Link>
            <Link 
              href="/consultation" 
              className="cta-button inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[#0D3B38] font-bold text-sm sm:text-base md:text-lg transition hover:bg-gray-100 border-2 border-[#0D3B38] text-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}