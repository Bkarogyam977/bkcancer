"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Doctor availability configuration
  const doctorAvailability = {
    1: {
      name: "Dr. BK Chaurasiya",
      doctorCode: "DR001",
      availableDays: [3, 6],
      availableDaysNames: ["Wednesday", "Saturday"],
      timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]
    },
    2: {
      name: "Dr. Shashi Chaurasiya",
      doctorCode: "DR002",
      availableDays: [3, 6],
      availableDaysNames: ["Wednesday", "Saturday"],
      timeSlots: ["09:30 AM", "10:30 AM", "11:30 AM", "01:00 PM", "02:30 PM", "03:30 PM", "04:30 PM"]
    },
    3: {
      name: "Dr. Ritesh Chaurasiya",
      doctorCode: "DR003",
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      availableDaysNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      timeSlots: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]
    },
    4: {
      name: "Dr. Jitendra Tiwari",
      doctorCode: "DR004",
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      availableDaysNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]
    },
    5: {
      name: "Dr. Deepak Kumar Singh",
      doctorCode: "DR005",
      availableDays: [2, 3, 5, 6],
      availableDaysNames: ["Tuesday", "Wednesday", "Friday", "Saturday"],
      timeSlots: ["09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]
    }
  };

  const getAvailableDates = (doctorId) => {
    const availability = doctorAvailability[doctorId];
    if (!availability) return [];
    
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();
      
      if (availability.availableDays.includes(dayOfWeek)) {
        dates.push({
          date: date,
          formattedDate: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
          }),
          dateValue: date.toISOString().split('T')[0]
        });
      }
    }
    return dates;
  };

  const doctors = [
    {
      id: 1,
      name: "Dr. BK Chaurasiya",
      shortName: "BKC",
      profileImage: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/12/Gemini_Generated_Image_h8w38ah8w38ah8w3_2.png",
      qualification: "Kidney Specialist",
      role: "Managing Director",
      specialization: "Ayurvedic Oncology & Kidney Care",
      experience: "20+ years",
      location: "Varanasi",
      about: "Dr. BK Chaurasiya is the founder and chief Vaidya of BK Cancer Care. With over 20+ years of experience in treating cancer, he has successfully guided thousands of patients on their healing journey.",
      expertise: ["Cancer Treatment", "Kidney Disorders", "Panchakarma", "Herbal Immunotherapy", "Palliative Care"],
      languages: ["Hindi", "English", "Sanskrit"],
      availability: "Wed, Sat: 10 AM - 5 PM",
      education: "BAMS, MD (Ayurveda)"
    },
    {
      id: 2,
      name: "Dr. Shashi Chaurasiya",
      shortName: "DSC",
      profileImage: null,
      qualification: "Nephrologist",
      role: "B.A.M.S",
      specialization: "Detoxification & Kidney Health",
      experience: "15+ years",
      location: "Delhi",
      about: "Dr. Shashi Chaurasiya is a renowned nephrologist with over 15 years of expertise in detoxification therapies.",
      expertise: ["Panchakarma", "Detoxification", "Kidney Health", "Lymphatic Drainage", "Herbal Formulations"],
      languages: ["Hindi", "English"],
      availability: "Wed, Sat: 9 AM - 6 PM",
      education: "B.A.M.S"
    },
    {
      id: 3,
      name: "Dr. Ritesh Chaurasiya",
      shortName: "DRC",
      profileImage: null,
      qualification: "Pharmaceutical Expert",
      role: "B.A.M.S",
      specialization: "Herbal Formulations",
      experience: "8+ years",
      location: "Varanasi",
      about: "Dr. Ritesh Chaurasiya leads the pharmaceutical research and development at BK Cancer Care.",
      expertise: ["Herbal Formulations", "Clinical Research", "Personalized Medicine", "Drug Development", "Quality Control"],
      languages: ["Hindi", "English"],
      availability: "All Days",
      education: "B.A.M.S"
    },
    {
      id: 4,
      name: "Dr. Jitendra Tiwari",
      shortName: "DJT",
      profileImage: null,
      qualification: "Nephrologist",
      role: "B.A.M.S",
      specialization: "Patient Guidance & Kidney Care",
      experience: "12+ years",
      location: "Mumbai",
      about: "Dr. Jitendra Tiwari is a dedicated nephrologist with over 12 years of experience guiding patients.",
      expertise: ["Patient Counseling", "Kidney Care", "Treatment Guidance", "Supportive Care", "Lifestyle Management"],
      languages: ["Hindi", "English"],
      availability: "All Days",
      education: "B.A.M.S"
    },
    {
      id: 5,
      name: "Dr. Deepak Kumar Singh",
      shortName: "DKS",
      profileImage: "https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/25/WhatsApp_Image_2026-03-25_at_10.59.17_AM.jpeg",
      qualification: "Ayurvedic Oncologist",
      role: "Senior Ayurvedic Oncologist",
      specialization: "Ayurvedic Oncology",
      experience: "12+ years",
      location: "Varanasi",
      about: "Dr. Deepak Kumar Singh is a highly qualified Ayurvedic oncologist with specialized training from IMS BHU.",
      expertise: ["Ayurvedic Oncology", "Uro-Nephrology", "Cancer Palliative Care", "Herbal Immunotherapy", "Post-Chemo Recovery"],
      languages: ["Hindi", "English", "Sanskrit"],
      availability: "Tue, Wed, Fri, Sat",
      education: "BAMS, PG Dip, CCPG (IMS BHU)"
    }
  ];

  const openBookingModal = (doctor) => {
    setBookingDoctor(doctor);
    setSelectedDate('');
    setSelectedTime('');
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setPatientAge('');
    setPatientAddress('');
    setBookingMessage('');
    setShowBookingModal(true);
  };

  const handleDateChange = (dateValue) => {
    setSelectedDate(dateValue);
    setSelectedTime('');
    const availability = doctorAvailability[bookingDoctor?.id];
    if (availability) {
      setAvailableTimeSlots(availability.timeSlots);
    }
  };

  const formatTimeForAPI = (time12hr) => {
    const [time, modifier] = time12hr.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') hours = '00';
    if (modifier === 'PM') hours = parseInt(hours, 10) + 12;
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  const submitAppointment = async () => {
    if (!patientName || !patientPhone || !selectedDate || !selectedTime) {
      setBookingMessage('❌ Please fill all required fields');
      return;
    }

    setBookingLoading(true);
    setBookingMessage('');

    const availability = doctorAvailability[bookingDoctor.id];
    const formattedTime = formatTimeForAPI(selectedTime);
    const scheduleDateTime = `${selectedDate} ${formattedTime}:00`;
    
    const appointmentData = {
      patient: 1,
      doctor_id: bookingDoctor.id,
      doctor_name: bookingDoctor.name,
      doctor_code: availability.doctorCode,
      schedule_at: scheduleDateTime,
      appointment_date: selectedDate,
      appointment_time: formattedTime,
      status: "new"
    };

    try {
      const response = await fetch('https://healdiway.bkarogyam.com/erp-api/appointment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });

      const responseData = await response.text();

      if (response.ok) {
        setBookingMessage('✅ Appointment booked successfully! We will contact you shortly.');
        setTimeout(() => {
          setShowBookingModal(false);
          setBookingMessage('');
          setPatientName('');
          setPatientPhone('');
          setPatientEmail('');
          setPatientAge('');
          setPatientAddress('');
          setSelectedDate('');
          setSelectedTime('');
        }, 2000);
      } else {
        let errorMsg = '❌ Failed to book appointment. ';
        try {
          const errorJson = JSON.parse(responseData);
          const errors = [];
          for (const [key, value] of Object.entries(errorJson)) {
            errors.push(`${key}: ${Array.isArray(value) ? value.join(', ') : value}`);
          }
          errorMsg += errors.join(' | ');
        } catch (e) {
          errorMsg += responseData;
        }
        setBookingMessage(errorMsg);
      }
    } catch (error) {
      setBookingMessage('❌ Network error. Please check your connection.');
    } finally {
      setBookingLoading(false);
    }
  };

  const availableDates = bookingDoctor ? getAvailableDates(bookingDoctor.id) : [];

  return (
    <>
      <style jsx>{`
        /* Mobile Styles (max-width: 640px) */
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
          .doctors-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .hero-title { font-size: 1.75rem !important; line-height: 1.3 !important; }
          .hero-subtitle { font-size: 0.85rem !important; }
          .hero-buttons { flex-direction: column !important; gap: 0.75rem !important; width: 100% !important; }
          .hero-buttons a { width: 100% !important; text-align: center !important; padding: 0.75rem !important; }
          .modal-content { width: 95% !important; margin: 0.5rem !important; max-height: 85vh !important; }
          .doctor-profile-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .stat-card { padding: 0.75rem !important; }
          .stat-number { font-size: 1.25rem !important; }
          .stat-label { font-size: 0.65rem !important; }
          .time-slots-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.5rem !important; }
          .doctor-card-image { height: 180px !important; }
          .doctor-avatar { width: 70px !important; height: 70px !important; }
          .doctor-name { font-size: 1rem !important; }
          .booking-modal { padding: 1rem !important; }
          .form-input { padding: 0.75rem !important; font-size: 0.9rem !important; }
          .section-padding { padding: 2rem 1rem !important; }
          .hero-section { min-height: 400px !important; }
        }
        
        /* Tablet Styles (641px to 1023px) */
        @media (min-width: 641px) and (max-width: 1023px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 1rem !important; }
          .doctors-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.25rem !important; }
          .hero-title { font-size: 2.5rem !important; }
          .hero-subtitle { font-size: 1rem !important; }
          .doctor-profile-grid { grid-template-columns: 1fr 2fr !important; gap: 1.5rem !important; }
          .time-slots-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .doctor-avatar { width: 90px !important; height: 90px !important; }
          .section-padding { padding: 3rem 1.5rem !important; }
        }
        
        /* Desktop Styles (min-width: 1024px) */
        @media (min-width: 1024px) {
          .doctors-grid { grid-template-columns: repeat(5, 1fr) !important; gap: 1.5rem !important; }
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 1.5rem !important; }
          .time-slots-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        
        /* Custom scrollbar */
        .modal-content::-webkit-scrollbar { width: 6px; }
        .modal-content::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .modal-content::-webkit-scrollbar-thumb { background: #F4A118; border-radius: 10px; }
        
        /* Touch-friendly buttons */
        button, .btn-clickable { cursor: pointer; -webkit-tap-highlight-color: transparent; }
        button:active { transform: scale(0.98); }
        
        /* Smooth transitions */
        * { transition: all 0.2s ease; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://bk-erp-file.s3.amazonaws.com/offer-banners/offersbanners/2026/3/23/doctor_group_photo.jpeg"
            alt="Doctor Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center min-h-[400px] md:min-h-[450px]">
          <div className="text-white max-w-3xl py-8">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F4A118]/20 text-[#F4A118] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm">
              Meet Our Experts
            </span>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              Our Expert <span className="text-[#F4A118]">Doctors</span>
            </h1>
            <p className="hero-subtitle text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Meet our team of experienced Ayurvedic specialists dedicated to your healing journey
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6">
              <Link href="/contact" className="inline-block px-6 sm:px-8 py-3 rounded-lg text-white font-semibold text-center hover:scale-105 transition" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                Book Appointment →
              </Link>
              <Link href="#doctors" className="inline-block px-6 sm:px-8 py-3 rounded-lg text-white font-semibold text-center border border-white/30 hover:bg-white/10 transition">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="stats-grid grid gap-3 sm:gap-6 text-center">
            {[
              { number: "5", label: "Expert Doctors", icon: "👨‍⚕️" },
              { number: "67+", label: "Combined Experience", icon: "📅" },
              { number: "20+", label: "Years of Excellence", icon: "⭐" },
              { number: "100%", label: "Patient Care Focus", icon: "💚" }
            ].map((stat, i) => (
              <div key={i} className="stat-card p-3 sm:p-5 rounded-2xl bg-gradient-to-br from-[#EEF7F4] to-white shadow-sm hover:shadow-md transition">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
                <p className="stat-number text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1" style={{ color: "#F4A118" }}>{stat.number}</p>
                <p className="stat-label text-gray-600 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section id="doctors" className="py-8 sm:py-12 md:py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3" style={{ backgroundColor: "#EEF7F4", color: "#0D3B38" }}>
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4" style={{ color: "#0D3B38", ...heading }}>
              Meet Our <span className="text-[#F4A118]">Ayurvedic Specialists</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Dedicated to providing personalized, holistic cancer care
            </p>
          </div>
          
          <div className="doctors-grid grid gap-4 sm:gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group" style={{ border: "1px solid #e5f0ec" }} onClick={() => setSelectedDoctor(doctor)}>
                <div className="doctor-card-image relative h-44 sm:h-48 md:h-52 lg:h-56 bg-gradient-to-br from-[#0D3B38] to-[#1B6B5A] flex items-center justify-center">
                  <div className="text-center">
                    <div className="doctor-avatar w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform overflow-hidden">
                      {doctor.profileImage ? (
                        <Image
                          src={doctor.profileImage}
                          alt={doctor.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xl sm:text-2xl md:text-3xl text-white font-bold">{doctor.shortName}</span>
                      )}
                    </div>
                    <p className="text-white text-[10px] sm:text-xs font-semibold px-2">{doctor.qualification.split(',')[0]}</p>
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="doctor-name text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1" style={{ color: "#0D3B38", ...heading }}>{doctor.name}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{doctor.role}</p>
                  <p className="text-[10px] sm:text-xs font-semibold mb-2" style={{ color: "#F4A118" }}>{doctor.specialization.split(' & ')[0]}</p>
                  <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-3">
                    <span>{doctor.experience}</span>
                    <span>{doctor.location}</span>
                  </div>
                  <button className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-white font-semibold text-xs sm:text-sm hover:scale-105 transition" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 rounded-t-2xl p-3 sm:p-4 md:p-5 border-b" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
              <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Doctor Profile</h2>
                <button onClick={() => setSelectedDoctor(null)} className="text-2xl sm:text-3xl text-white hover:text-[#F4A118] transition">&times;</button>
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-8">
              <div className="doctor-profile-grid grid gap-4 sm:gap-5 md:gap-8">
                <div className="bg-gradient-to-br from-[#0D3B38] to-[#1B6B5A] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white/20 flex items-center justify-center mb-3 overflow-hidden">
                    {selectedDoctor.profileImage ? (
                      <Image
                        src={selectedDoctor.profileImage}
                        alt={selectedDoctor.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">{selectedDoctor.shortName}</span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1">{selectedDoctor.name}</h3>
                  <p className="text-[#F4A118] text-xs sm:text-sm mb-1">{selectedDoctor.qualification.split(',')[0]}</p>
                  <p className="text-white/80 text-xs sm:text-sm">{selectedDoctor.role}</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: "#0D3B38" }}>{selectedDoctor.name}</p>
                  <p className="text-sm sm:text-base font-semibold mb-1" style={{ color: "#F4A118" }}>{selectedDoctor.specialization}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3">{selectedDoctor.education}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-xs sm:text-sm">{selectedDoctor.about}</p>
                  <div className="bg-[#EEF7F4] rounded-xl p-3 mb-4">
                    <p className="font-semibold text-xs sm:text-sm mb-1">📅 Available Days: <span className="text-[#F4A118]">{doctorAvailability[selectedDoctor.id]?.availableDaysNames.join(', ')}</span></p>
                  </div>
                  <button onClick={() => { setSelectedDoctor(null); openBookingModal(selectedDoctor); }} className="w-full px-4 py-2.5 sm:py-3 rounded-lg text-white font-semibold text-sm sm:text-base hover:scale-105 transition" style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}>
                    Book Appointment →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Booking Modal */}
      {showBookingModal && bookingDoctor && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4" onClick={() => setShowBookingModal(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 rounded-t-2xl p-3 sm:p-4 border-b" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
              <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-xl font-bold text-white">Book Appointment</h2>
                <button onClick={() => setShowBookingModal(false)} className="text-2xl text-white hover:text-[#F4A118] transition">&times;</button>
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="mb-4 p-3 bg-[#EEF7F4] rounded-xl">
                <p className="font-bold text-[#0D3B38] text-sm sm:text-base">{bookingDoctor.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">Available: {doctorAvailability[bookingDoctor.id]?.availableDaysNames.join(', ')}</p>
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Full Name *</label>
                <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} className="form-input w-full p-2.5 sm:p-3 border rounded-xl focus:outline-none focus:border-[#F4A118] text-sm" placeholder="Enter your full name" />
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Phone Number *</label>
                <input type="tel" value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} className="form-input w-full p-2.5 sm:p-3 border rounded-xl focus:outline-none focus:border-[#F4A118] text-sm" placeholder="Enter your phone number" />
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Email</label>
                <input type="email" value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} className="form-input w-full p-2.5 sm:p-3 border rounded-xl focus:outline-none focus:border-[#F4A118] text-sm" placeholder="Enter your email (optional)" />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Age</label>
                  <input type="number" value={patientAge} onChange={(e) => setPatientAge(e.target.value)} className="form-input w-full p-2.5 sm:p-3 border rounded-xl focus:outline-none focus:border-[#F4A118] text-sm" placeholder="Age" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">City</label>
                  <input type="text" value={patientAddress} onChange={(e) => setPatientAddress(e.target.value)} className="form-input w-full p-2.5 sm:p-3 border rounded-xl focus:outline-none focus:border-[#F4A118] text-sm" placeholder="City" />
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Select Date *</label>
                <select value={selectedDate} onChange={(e) => handleDateChange(e.target.value)} className="w-full p-2.5 sm:p-3 border rounded-xl focus:outline-none focus:border-[#F4A118] text-sm">
                  <option value="">Choose a date</option>
                  {availableDates.map((date, idx) => (
                    <option key={idx} value={date.dateValue}>{date.formattedDate}</option>
                  ))}
                </select>
              </div>

              {selectedDate && (
                <div className="mb-4 sm:mb-5">
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Select Time *</label>
                  <div className="time-slots-grid grid gap-2">
                    {availableTimeSlots.map((time, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm transition ${
                          selectedTime === time ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={selectedTime === time ? { background: "linear-gradient(135deg, #F4A118, #d4600a)" } : {}}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {bookingMessage && (
                <div className={`p-2.5 sm:p-3 rounded-xl mb-3 sm:mb-4 text-center text-xs sm:text-sm ${bookingMessage.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {bookingMessage}
                </div>
              )}

              <button
                onClick={submitAppointment}
                disabled={bookingLoading}
                className="w-full py-2.5 sm:py-3 rounded-xl text-white font-bold text-sm sm:text-base transition hover:scale-105 disabled:opacity-50"
                style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
              >
                {bookingLoading ? 'Booking...' : 'Confirm Appointment'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}