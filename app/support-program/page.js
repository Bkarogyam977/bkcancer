"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function SupportProgram() {
  const [activeTab, setActiveTab] = useState('financial');

  const programs = {
    financial: [
      {
        title: "BK Ayur Seva Yojana",
        description: "Financial assistance program for underprivileged patients",
        benefits: ["Up to 50% treatment cost waiver", "Free consultation", "Medicines at subsidized rates"],
        eligibility: "Annual family income less than ₹3,00,000",
        icon: "💰"
      },
      {
        title: "Medicines on Credit",
        description: "Interest-free credit facility for medicines",
        benefits: ["Pay in 3-6 months EMI", "No interest charges", "Flexible repayment options"],
        eligibility: "Working professionals with stable income",
        icon: "💊"
      },
      {
        title: "Zakat Fund",
        description: "Special fund for Muslim community patients",
        benefits: ["Complete treatment support", "Medicines free of cost", "Travel allowance"],
        eligibility: "Based on need assessment",
        icon: "🤲"
      }
    ],
    emotional: [
      {
        title: "1-on-1 Counseling",
        description: "Professional psychological support for patients and caregivers",
        benefits: ["Weekly sessions", "Family counseling", "Stress management techniques"],
        icon: "🎗️"
      },
      {
        title: "Patient Support Groups",
        description: "Connect with fellow cancer warriors and survivors",
        benefits: ["Monthly meetups", "WhatsApp support group", "Success stories sharing"],
        icon: "👥"
      },
      {
        title: "Mind-Body Wellness",
        description: "Yoga, meditation, and pranayama sessions",
        benefits: ["Daily online sessions", "Guided meditation", "Breathing exercises"],
        icon: "🧘"
      }
    ],
    nutritional: [
      {
        title: "Free Nutrition Kit",
        description: "Monthly nutritional supplement package",
        benefits: ["Herbal supplements", "Diet chart", "Immunity boosters"],
        icon: "🥗"
      },
      {
        title: "Dietary Consultation",
        description: "Personalized diet plans by Ayurvedic nutritionists",
        benefits: ["Monthly consultation", "Recipe book", "24/7 diet support"],
        icon: "📋"
      }
    ],
    transport: [
      {
        title: "Free Ambulance Service",
        description: "24/7 ambulance service for emergency and regular checkups",
        benefits: ["Free pickup & drop", "Trained staff", "Oxygen support"],
        icon: "🚑"
      },
      {
        title: "Travel Allowance",
        description: "Reimbursement for travel expenses",
        benefits: ["Up to ₹2000 per month", "For rural patients", "Train/bus fare coverage"],
        icon: "🚌"
      }
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] bg-gradient-to-r from-[#0D3B38] to-[#1B6B5A]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Support Programs
            </h1>
            <p className="text-lg md:text-xl opacity-90" style={body}>
              We're Here to Support You Every Step of the Way
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
            Comprehensive Support for Cancer Patients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={body}>
            At BK Cancer Care, we believe that no one should fight cancer alone. Our support programs 
            are designed to provide holistic care - from financial assistance to emotional well-being, 
            ensuring that every patient receives the support they deserve.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5000+", label: "Patients Supported", icon: "❤️" },
              { number: "₹2Cr+", label: "Financial Aid", icon: "💰" },
              { number: "1000+", label: "Counseling Sessions", icon: "🎗️" },
              { number: "24/7", label: "Support Available", icon: "🕐" }
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold" style={{ color: "#F4A118" }}>{stat.number}</div>
                <div className="text-gray-600" style={body}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { id: 'financial', label: '💰 Financial Support', icon: '💰' },
              { id: 'emotional', label: '🎗️ Emotional Support', icon: '🎗️' },
              { id: 'nutritional', label: '🥗 Nutritional Support', icon: '🥗' },
              { id: 'transport', label: '🚑 Transport Support', icon: '🚑' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === tab.id 
                    ? 'bg-[#0D3B38] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                style={body}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs[activeTab].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition p-6"
                style={{ border: "1px solid #e5f0ec" }}
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4" style={body}>{program.description}</p>
                
                <div className="mb-4">
                  <p className="font-semibold mb-2" style={{ color: "#F4A118" }}>Benefits:</p>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600" style={body}>
                        <span className="text-green-500">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {program.eligibility && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1" style={{ color: "#0D3B38" }}>Eligibility:</p>
                    <p className="text-sm text-gray-600" style={body}>{program.eligibility}</p>
                  </div>
                )}

                <button
                  onClick={() => window.location.href = '/contact'}
                  className="w-full mt-4 px-4 py-2 rounded-lg text-white font-semibold transition hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              How to Apply
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Simple 3-step process to get the support you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                description: "Call our support helpline or visit your nearest center",
                action: "📞 8081222333",
                link: "tel:+918081222333"
              },
              {
                step: "2",
                title: "Document Submission",
                description: "Submit required documents for eligibility check",
                action: "Income proof, ID proof, Medical reports",
                link: null
              },
              {
                step: "3",
                title: "Approval & Support",
                description: "Get approval within 3-5 working days and start receiving support",
                action: "Quick processing",
                link: null
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0D3B38] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38" }}>{item.title}</h3>
                <p className="text-gray-600 mb-2" style={body}>{item.description}</p>
                {item.link ? (
                  <a href={item.link} className="text-[#F4A118] font-semibold" style={body}>
                    {item.action} →
                  </a>
                ) : (
                  <p className="text-sm text-gray-500" style={body}>{item.action}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: "#0D3B38", ...heading }}>
              Documents Required
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                "Aadhar Card / Voter ID",
                "Income Certificate / BPL Card",
                "Medical Reports & Prescription",
                "Bank Account Details",
                "Passport Size Photographs (2)",
                "Medical Insurance Card (if any)"
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-2 p-2">
                  <span className="text-[#F4A118] text-xl">📄</span>
                  <span style={body}>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Real stories of hope and recovery from patients who received support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Mrs. Sunita Devi",
                age: "52",
                location: "Varanasi",
                story: "Received financial support for my breast cancer treatment. The counseling sessions helped me stay positive throughout my journey.",
                support: "Financial + Emotional Support"
              },
              {
                name: "Mr. Rajesh Kumar",
                age: "45",
                location: "Delhi",
                story: "The free medicine support was a huge relief for my family. I'm now cancer-free and helping other patients in my community.",
                support: "Medicines + Nutrition Support"
              }
            ].map((story, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0D3B38] text-white flex items-center justify-center text-xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#0D3B38" }}>{story.name}</h4>
                    <p className="text-sm text-gray-500">{story.age} years, {story.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3" style={body}>"{story.story}"</p>
                <span className="inline-block px-3 py-1 bg-[#F4A118]/10 text-[#F4A118] rounded-full text-sm">
                  {story.support}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#0D3B38", ...heading }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Who is eligible for financial support?",
                a: "Patients with annual family income less than ₹3,00,000 or those holding BPL card are eligible for financial assistance."
              },
              {
                q: "How long does it take to get approval?",
                a: "Approval typically takes 3-5 working days after document submission."
              },
              {
                q: "Can I apply for multiple support programs?",
                a: "Yes, eligible patients can apply for multiple support programs based on their needs."
              },
              {
                q: "Is there any registration fee?",
                a: "No, all our support programs are completely free to apply."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>{faq.q}</h4>
                <p className="text-gray-600" style={body}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
            Need Support? We're Here to Help
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Don't let financial constraints come in the way of your treatment. Contact us today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Apply for Support →
            </Link>
            <a
              href="tel:+918081222333"
              className="inline-block px-8 py-4 rounded-xl bg-white text-[#0D3B38] font-bold text-lg transition hover:scale-105"
            >
              📞 Call Support Helpline
            </a>
          </div>
          <p className="text-white/70 mt-6 text-sm" style={body}>
            Support Helpline: 9 AM - 7 PM (Mon-Sat)
          </p>
        </div>
      </section>
    </>
  );
}