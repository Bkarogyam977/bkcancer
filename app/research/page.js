"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function Research() {
  // Research areas data with your actual image URLs
  const researchAreas = [
    {
      title: "Clinical Studies",
      description: "Ongoing clinical trials to evaluate the efficacy of our herbal formulations in various cancer types.",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/Clinical_Studies.jpeg",
      alt: "Clinical Studies Research"
    },
    {
      title: "Herbal Research",
      description: "Scientific validation of Ayurvedic herbs for their anti-cancer properties and mechanisms of action.",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/herbal.jpeg",
      alt: "Herbal Research Laboratory"
    },
    {
      title: "Outcome Studies",
      description: "Long-term follow-up studies tracking patient outcomes, survival rates, and quality of life.",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/re.png",
      alt: "Outcome Studies Analysis"
    },
    {
      title: "Molecular Research",
      description: "Understanding the molecular mechanisms of Ayurvedic treatments on cancer cells.",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/Molecular_Research.jpeg",
      alt: "Molecular Research Lab"
    },
    {
      title: "Drug Development",
      description: "Development of standardized herbal formulations with consistent quality and efficacy.",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/Drug_Development.jpeg",
      alt: "Drug Development Process"
    },
    {
      title: "Quality of Life",
      description: "Research focused on improving patient well-being during and after cancer treatment.",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/Quality_of_Life.jpg",
      alt: "Quality of Life Research"
    }
  ];

  return (
    <>
      {/* Hero Section with Banner Image */}
      <section className="relative h-[50vh] min-h-[350px] sm:h-[55vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/24/carrire_banner.jpeg"
          alt="Research Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4" style={heading}>
              Research & Innovation
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90" style={body}>
              Bridging Ancient Wisdom with Modern Science
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center" style={body}>
            At BK Cancer Care, we are committed to advancing Ayurvedic cancer treatment through rigorous 
            research, clinical studies, and scientific validation of our protocols.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: "#0D3B38", ...heading }}>
              Our Research Areas
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4" style={body}>
              Focused research to validate and improve Ayurvedic cancer treatments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {researchAreas.map((area, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                style={{ border: "1px solid #e5f0ec" }}
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600" style={body}>
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: "#0D3B38", ...heading }}>
              Research Publications
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" style={body}>
              Our research findings published in reputed medical journals
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                title: "Efficacy of Ayurvedic Herbal Formulations in Advanced Lung Cancer: A Retrospective Study",
                journal: "Journal of Ayurveda and Integrative Medicine",
                year: "2024",
                authors: "Dr. BK Chaurasia, et al."
              },
              {
                title: "Panchakarma Therapy in Cancer Care: A Comprehensive Review",
                journal: "International Journal of Ayurveda Research",
                year: "2023",
                authors: "Dr. BK Chaurasia, Dr. S. Sharma"
              },
              {
                title: "Quality of Life Improvement in Breast Cancer Patients with Integrated Ayurvedic Treatment",
                journal: "Alternative Therapies in Health and Medicine",
                year: "2023",
                authors: "Dr. P. Singh, Dr. BK Chaurasia"
              },
              {
                title: "Herbal Immunomodulators in Cancer Treatment: Current Evidence and Future Perspectives",
                journal: "Journal of Ethnopharmacology",
                year: "2022",
                authors: "Dr. BK Chaurasia, et al."
              },
              {
                title: "Ayurvedic Management of Chemotherapy-Induced Side Effects: A Randomized Controlled Trial",
                journal: "Supportive Care in Cancer",
                year: "2022",
                authors: "Dr. R. Kumar, Dr. BK Chaurasia"
              }
            ].map((pub, i) => (
              <div 
                key={i} 
                className="bg-gray-50 p-5 sm:p-6 rounded-xl hover:shadow-md transition-all duration-300"
                style={{ border: "1px solid #e5f0ec" }}
              >
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
                  {pub.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-1" style={body}>
                  {pub.journal} | {pub.year}
                </p>
                <p className="text-xs sm:text-sm text-gray-600" style={body}>
                  {pub.authors}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={heading}>
            Collaborate With Us
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg" style={body}>
            Interested in research collaboration or clinical trials?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
          >
            Contact Research Team →
          </Link>
        </div>
      </section>
    </>
  );
}