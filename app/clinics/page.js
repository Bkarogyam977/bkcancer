"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function Clinics() {
  const [selectedCity, setSelectedCity] = useState(null);

  const clinics = [
    {
      id: 1,
      name: "BK Cancer Care - Mirzapur",
      city: "Mirzapur",
      state: "Uttar Pradesh",
      address: "4HVH+CHF, Tehseal Rd, Dhauru Pur, Mirzapur-cum-Vindhyachal, Mirzapur, Uttar Pradesh 231001",
      phone: "+91 86873 09086",
      email: "mirzapur@bkcancercare.com",
      timings: "Mon-Sat: 9 AM - 7 PM, Sun: 10 AM - 4 PM",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/dw.jpeg",
      fallbackImage: "https://via.placeholder.com/400x300/0D3B38/FFFFFF?text=BK+Cancer+Care",
      map: "https://maps.google.com/?q=4HVH%2BCHF+Tehseal+Rd+Dhauru+Pur+Mirzapur",
      facilities: ["Consultation Center", "Pharmacy", "Counseling Services", "Panchakarma Facility"]
    },
    {
      id: 2,
      name: "BK Cancer Care - Varanasi",
      city: "Varanasi",
      state: "Uttar Pradesh",
      address: "Lahartara Rd, near Hori Lal Park/Lawn, Manduwadih, Shivdaspur, Varanasi, Uttar Pradesh 221103",
      phone: "+91 80812 22333",
      email: "varanasi@bkcancercare.com",
      timings: "Mon-Sat: 9 AM - 7 PM, Sun: 10 AM - 4 PM",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/6/WhatsApp_Image_2026-03-06_at_1.09.29_PM.jpeg",
      fallbackImage: "https://via.placeholder.com/400x300/0D3B38/FFFFFF?text=BK+Cancer+Care+Varanasi",
      map: "https://maps.google.com/?q=Lahartara+Rd+near+Hori+Lal+Park+Varanasi",
      facilities: ["Main Center", "Panchakarma Facility", "In-patient Rooms", "Research Wing", "Herbal Garden"]
    },
    {
      id: 3,
      name: "BK Cancer Care - Delhi (Rohini)",
      city: "Delhi",
      state: "Delhi NCR",
      address: "Ho.no. D-10/8 1st Floor, Balaji Plaza Complex, Rohini East Metro Station, Rohini Sector 8, Delhi-110085",
      phone: "+91 80812 22333",
      email: "rohini@bkcancercare.com",
      timings: "Mon-Sat: 10 AM - 8 PM, Sun: 10 AM - 4 PM",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/969.jpeg",
      fallbackImage: "https://via.placeholder.com/400x300/0D3B38/FFFFFF?text=BK+Cancer+Care+Rohini",
      map: "https://maps.google.com/?q=Rohini+East+Metro+Station+Delhi",
      facilities: ["Consultation Center", "Pharmacy", "Yoga Hall", "Dietary Counseling"]
    },
    {
      id: 4,
      name: "BK Cancer Care - Delhi (Shastri Nagar)",
      city: "Delhi",
      state: "Delhi NCR",
      address: "FIRST FLOOR, M-118, Block M, Shastri Nagar, Delhi, 110052",
      phone: "+91 80812 22333",
      email: "shastrinagar@bkcancercare.com",
      timings: "Mon-Sat: 10 AM - 8 PM, Sun: 10 AM - 4 PM",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/2026-02-11.jpeg",
      fallbackImage: "https://via.placeholder.com/400x300/0D3B38/FFFFFF?text=BK+Cancer+Care+Shastri+Nagar",
      map: "https://maps.google.com/?q=Shastri+Nagar+Delhi",
      facilities: ["Consultation Center", "Pharmacy", "Counseling Services"]
    },
    {
      id: 5,
      name: "BK Cancer Care - Lucknow",
      city: "Lucknow",
      state: "Uttar Pradesh",
      address: "Gomati Nagar, Lucknow, Uttar Pradesh",
      phone: "+91 80812 22333",
      email: "lucknow@bkcancercare.com",
      timings: "Mon-Sat: 10 AM - 7 PM, Sun: 10 AM - 4 PM",
      image: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/bkarogyam_building.jpeg",
      fallbackImage: "https://via.placeholder.com/400x300/0D3B38/FFFFFF?text=BK+Cancer+Care+Lucknow",
      map: "https://maps.google.com/?q=Gomati+Nagar+Lucknow",
      facilities: ["Consultation Center", "Pharmacy", "Counseling Services", "Yoga Hall"]
    }
  ];

  const cities = [...new Set(clinics.map(c => c.city))];

  return (
    <>
      {/* Hero Section - Responsive */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[300px] bg-gradient-to-r from-[#0D3B38] to-[#1B6B5A]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4" style={heading}>
              Our Clinic Network
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90" style={body}>
              Bringing Ayurvedic Cancer Care to Your Doorstep Across India
            </p>
          </div>
        </div>
      </section>

      {/* Introduction - Responsive */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto" style={body}>
            With a growing network of clinics across India, BK Cancer Care is committed to making 
            Ayurvedic cancer treatment accessible to everyone. Each center is equipped with experienced 
            practitioners and state-of-the-art facilities.
          </p>
        </div>
      </section>

      {/* Map Visualization - Responsive */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0D3B38] to-[#1B6B5A] rounded-xl sm:rounded-2xl p-5 sm:p-8 text-white">
            <div className="text-center mb-5 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={heading}>Our Presence in India</h2>
              <p className="text-sm sm:text-base opacity-90">5 Centers | 3 States | Quality Care Everywhere</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center max-w-md mx-auto">
              {[
                { state: "Uttar Pradesh", centers: 3 },
                { state: "Delhi NCR", centers: 2 }
              ].map((state, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-3 sm:p-4">
                  <p className="font-bold text-sm sm:text-base">{state.state}</p>
                  <p className="text-xs sm:text-sm opacity-80">{state.centers} Centers</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City Filters - Responsive */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <button
              onClick={() => setSelectedCity(null)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition ${
                !selectedCity ? 'bg-[#0D3B38] text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              All Centers
            </button>
            {cities.map(city => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition ${
                  selectedCity === city ? 'bg-[#0D3B38] text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Clinics Grid - Fully Responsive */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {clinics
              .filter(clinic => !selectedCity || clinic.city === selectedCity)
              .map((clinic) => (
                <div
                  key={clinic.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                  style={{ border: "1px solid #e5f0ec" }}
                >
                  {/* Image Container - Responsive with fallback */}
                  <div className="relative h-48 sm:h-56 md:h-48 lg:h-56 w-full bg-gray-200">
                    <img
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = clinic.fallbackImage;
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-[#F4A118] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {clinic.city}
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
                      {clinic.name}
                    </h3>
                    
                    {/* Address */}
                    <p className="text-gray-500 text-xs sm:text-sm mb-2 flex items-start gap-2">
                      <span className="flex-shrink-0">📍</span>
                      <span style={body} className="break-words">{clinic.address}</span>
                    </p>
                    
                    {/* Phone */}
                    <p className="text-gray-500 text-xs sm:text-sm mb-2 flex items-start gap-2">
                      <span className="flex-shrink-0">📞</span>
                      <a href={`tel:${clinic.phone}`} className="hover:text-[#F4A118] break-all" style={body}>{clinic.phone}</a>
                    </p>
                    
                    {/* Email */}
                    <p className="text-gray-500 text-xs sm:text-sm mb-2 flex items-start gap-2">
                      <span className="flex-shrink-0">✉️</span>
                      <a href={`mailto:${clinic.email}`} className="hover:text-[#F4A118] break-all" style={body}>{clinic.email}</a>
                    </p>
                    
                    {/* Timings */}
                    <p className="text-gray-500 text-xs sm:text-sm mb-3 flex items-start gap-2">
                      <span className="flex-shrink-0">🕐</span>
                      <span style={body}>{clinic.timings}</span>
                    </p>
                    
                    {/* Facilities */}
                    <div className="mb-4">
                      <p className="font-semibold text-sm mb-2" style={{ color: "#F4A118" }}>Facilities:</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {clinic.facilities.map((facility, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <a
                        href={clinic.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-3 sm:px-4 py-2 rounded-lg border font-semibold text-sm transition hover:bg-gray-50"
                        style={{ borderColor: "#0D3B38", color: "#0D3B38" }}
                      >
                        Get Directions
                      </a>
                      <Link
                        href="/contact"
                        className="text-center px-3 sm:px-4 py-2 rounded-lg text-white font-semibold text-sm transition hover:opacity-90"
                        style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Responsive */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: "#0D3B38", ...heading }}>
              Coming Soon
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto" style={body}>
              We're expanding our reach to serve more patients across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {["Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Jaipur"].map((city, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center hover:shadow-md transition">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🏥</div>
                <p className="font-semibold text-sm sm:text-base" style={{ color: "#0D3B38" }}>{city}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Opening Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Responsive */}
      <section className="py-10 sm:py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={heading}>
            Find Your Nearest Center
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8" style={body}>
            Contact us to book an appointment at a center near you
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base md:text-lg transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Book Consultation →
            </Link>
            <a
              href="tel:+918081222333"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-[#0D3B38] font-bold text-sm sm:text-base md:text-lg transition hover:scale-105"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}