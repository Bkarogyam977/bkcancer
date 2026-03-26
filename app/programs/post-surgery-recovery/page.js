"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function PostSurgeryRecoveryProgram() {
  const benefits = [
    "Faster wound healing and tissue repair",
    "Reduced post-surgery complications",
    "Restores strength and energy quickly",
    "Prevents infection at surgical site",
    "Reduces swelling and inflammation",
    "Improves mobility and function",
    "Prevents cancer recurrence",
    "Enhances overall quality of life"
  ];

  const therapies = [
    { name: "Wound Healing Herbs", desc: "Natural formulations that accelerate tissue repair" },
    { name: "Anti-inflammatory Therapy", desc: "Reduces swelling and promotes healing" },
    { name: "Nutritional Support", desc: "Protein-rich diet to rebuild tissues" },
    { name: "Gentle Panchakarma", desc: "Safe detoxification after surgery" },
    { name: "Rehabilitation Support", desc: "Gradual return to normal activities" }
  ];

  const duration = {
    min: "1 month",
    recommended: "3 months",
    includes: ["Post-surgery assessment", "Customized healing protocol", "Dietary guidance", "Regular follow-ups", "24/7 support"]
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/21/33.jpg"
            alt="Post Surgery Recovery - Ayurvedic Cancer Care"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🏥</span>
              <span className="text-[#F4A118] font-semibold text-sm">Support Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Post Surgery Recovery Program
            </h1>
            <p className="text-lg md:text-xl opacity-90" style={body}>
              Accelerate Healing and Restore Vitality After Cancer Surgery
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}>
                Faster Recovery
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
                Recover Faster, Heal Better
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed" style={body}>
                Surgery is a significant stress on the body. Our Post Surgery Recovery Program is designed to accelerate healing, reduce complications, and help you regain your strength quickly.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed" style={body}>
                Using specialized wound-healing herbs, nutritional support, and gentle therapies, we help your body recover faster and more completely after cancer surgery.
              </p>
              <Link href="/consultation" className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                Start Recovery Program →
              </Link>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/9/Gemini_Generated_Image_k9cvqpk9cvqpk9cv1.png"
                alt="Post Surgery Recovery Program"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Key Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              What our Post Surgery Recovery Program offers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-5 text-center hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                <div className="w-12 h-12 rounded-full bg-[#F4A118]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#F4A118] text-xl">✓</span>
                </div>
                <p className="text-gray-700 text-sm font-medium" style={body}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Our Therapeutic Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Integrated therapies that work together for optimal results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapies.map((therapy, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                <div className="text-3xl mb-3">{["🌿","💊","🥗","🔄","💪"][i]}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{therapy.name}</h3>
                <p className="text-gray-600 text-sm" style={body}>{therapy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Recovery Timeline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              What to expect during your recovery journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { week: "Week 1-2", title: "Initial Healing", desc: "Wound healing, pain management, rest" },
              { week: "Week 3-4", title: "Regaining Strength", desc: "Gentle exercises, nutrition focus" },
              { week: "Week 5-8", title: "Active Recovery", desc: "Increased activity, energy restoration" },
              { week: "Week 9-12", title: "Full Recovery", desc: "Return to normal activities, prevention" }
            ].map((phase, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition" style={{ border: "1px solid #e5f0ec" }}>
                <div className="text-[#F4A118] font-bold text-lg mb-2">{phase.week}</div>
                <h3 className="font-bold mb-2 text-[#0D3B38]">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8" style={{ border: "1px solid #e5f0ec" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>📅 Program Duration</h3>
              <p className="text-3xl font-bold text-[#F4A118] mb-2">{duration.min} - {duration.recommended}</p>
              <p className="text-gray-600 mb-6" style={body}>Based on individual response and recovery progress</p>
              <h4 className="font-bold mb-3" style={{ color: "#0D3B38" }}>What's Included:</h4>
              <ul className="space-y-2">
                {duration.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#F4A118]">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0D3B38] to-[#1a5c57] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4" style={heading}>🌟 Success Stories</h3>
              <p className="text-white/80 mb-4 italic" style={body}>
                "The post-surgery recovery program was amazing. My wound healed faster than expected, and I had minimal pain. I was back to normal activities within weeks!"
              </p>
              <p className="text-white font-semibold">- Rajesh M., Colon Cancer Patient</p>
              <Link href="/case-studies" className="inline-block mt-6 text-[#F4A118] hover:underline text-sm">
                Read More Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
            Ready to Recover Faster?
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Book a consultation to start your recovery journey
          </p>
          <Link href="/consultation" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}