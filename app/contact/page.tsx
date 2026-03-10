// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const clinics = [
//   { city: "New Delhi (HQ)", address: "Second Floor, 77, Block C, Tarun Enclave, Pitampura, New Delhi, 110034" },
//   { city: "Lucknow (Gomati Nagar)", address: "Gomati Nagar, Lucknow, Uttar Pradesh" },
//   { city: "Lucknow (Vikas Nagar)", address: "Vikas Nagar, Lucknow, Uttar Pradesh" },
//   { city: "Bangalore", address: "JP Nagar, Bangalore, Karnataka" },
//   { city: "Noida", address: "Sector-12, Noida, Uttar Pradesh" },
//   { city: "Mumbai", address: "Chakala, Mumbai, Maharashtra" },
//   { city: "Gurugram", address: "Gurugram, Haryana" },
//   { city: "Patna", address: "Ashiyana Nagar, Patna, Bihar" },
// ];

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <>
//       {/* Banner */}
//       <section style={{ backgroundColor: "#0D3B38" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Contact <span style={{ color: "#F4A118" }}>Us</span>
//           </h1>
//           <p className="text-white/70 max-w-2xl mx-auto text-lg">
//             Get in touch with our Ayurvedic experts for a free consultation and personalized treatment plan.
//           </p>
//           <div className="flex justify-center gap-2 mt-4 text-sm text-white/50">
//             <Link href="/" className="hover:text-white transition">Home</Link>
//             <span>/</span>
//             <span style={{ color: "#F4A118" }}>Contact</span>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info + Form */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Info */}
//             <div>
//               <h2 className="text-3xl font-bold mb-6">
//                 Get In <span style={{ color: "#F4A118" }}>Touch</span>
//               </h2>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 Our expert Ayurvedic doctors are available to guide you through your health journey. Reach out to us via phone, email, or by filling the form and we will get back to you shortly.
//               </p>

//               <div className="space-y-5">
//                 <div className="flex gap-4 items-start">
//                   <div style={{ backgroundColor: "#EEF7F4" }} className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
//                   <div>
//                     <p className="font-bold text-gray-800">Main Office</p>
//                     <p className="text-gray-600 text-sm">Second Floor, 77, Block C, Tarun Enclave, Pitampura, New Delhi, Delhi, 110034</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 items-center">
//                   <div style={{ backgroundColor: "#EEF7F4" }} className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
//                   <div>
//                     <p className="font-bold text-gray-800">Phone</p>
//                     <a href="tel:+918081222333" style={{ color: "#0D3B38" }} className="font-semibold hover:underline">+91 8081222333</a>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 items-center">
//                   <div style={{ backgroundColor: "#EEF7F4" }} className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📧</div>
//                   <div>
//                     <p className="font-bold text-gray-800">Email</p>
//                     <a href="mailto:bkarogyam@gmail.com" style={{ color: "#0D3B38" }} className="font-semibold hover:underline">bkarogyam@gmail.com</a>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 items-center">
//                   <div style={{ backgroundColor: "#EEF7F4" }} className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">⏰</div>
//                   <div>
//                     <p className="font-bold text-gray-800">Working Hours</p>
//                     <p className="text-gray-600 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
//                     <p className="text-gray-600 text-sm">Sunday: 10:00 AM – 4:00 PM</p>
//                   </div>
//                 </div>
//               </div>

//               {/* For International Patients */}
//               <div style={{ backgroundColor: "#EEF7F4" }} className="rounded-xl p-5 mt-8">
//                 <h3 className="font-bold text-gray-800 mb-3">International Patient Helplines</h3>
//                 <div className="grid grid-cols-2 gap-3 text-sm">
//                   <div>
//                     <p className="text-gray-500">🇬🇧 UK Patients</p>
//                     <p className="font-semibold text-gray-800">+447822023160</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">🇺🇸 USA Patients</p>
//                     <p className="font-semibold text-gray-800">+19298008690</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div style={{ backgroundColor: "#EEF7F4" }} className="rounded-2xl p-8">
//               <h2 className="text-2xl font-bold mb-2" style={{ color: "#0D3B38" }}>Book a Free Consultation</h2>
//               <p className="text-gray-500 text-sm mb-6">Our experts will call you back within 24 hours.</p>

//               {submitted ? (
//                 <div style={{ backgroundColor: "#0D3B38" }} className="rounded-xl p-8 text-center">
//                   <div className="text-5xl mb-4">✅</div>
//                   <h3 className="text-white font-bold text-xl mb-2">Thank You!</h3>
//                   <p className="text-white/70">Our team will contact you shortly.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input required type="text" placeholder="Full Name*" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-800" />
//                     <input required type="tel" placeholder="Mobile Number*" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-800" />
//                   </div>
//                   <input type="email" placeholder="Email Address" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-800" />
//                   <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none text-gray-600">
//                     <option value="">Select Disease / Condition</option>
//                     <option>Cancer</option>
//                     <option>Kidney Disease</option>
//                     <option>Diabetes</option>
//                     <option>Liver Disease</option>
//                     <option>Heart Disease</option>
//                     <option>Arthritis</option>
//                     <option>Thyroid</option>
//                     <option>Blood Pressure</option>
//                     <option>PCOD / PCOS</option>
//                     <option>Obesity</option>
//                     <option>Other</option>
//                   </select>
//                   <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none text-gray-600">
//                     <option value="">Preferred Clinic Location</option>
//                     {clinics.map((c) => (
//                       <option key={c.city}>{c.city}</option>
//                     ))}
//                     <option>Online Consultation</option>
//                   </select>
//                   <textarea required placeholder="Describe your symptoms or health concern..." rows={4} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none resize-none" />
//                   <p style={{ color: "#0D3B38" }} className="text-center font-semibold text-sm">Get Best Ayurvedic Treatment</p>
//                   <button type="submit" style={{ backgroundColor: "#F4A118" }} className="w-full py-3 rounded-lg text-white font-bold text-lg hover:opacity-90 transition">
//                     Enquire Now
//                   </button>
//                   <p className="text-center text-gray-400 text-xs mt-2">
//                     OR CALL: <a href="tel:+918081222333" style={{ color: "#0D3B38" }} className="font-bold">+91 8081222333</a>
//                   </p>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Clinics */}
//       <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
//             <h2 className="text-4xl font-bold">
//               Our <span style={{ color: "#F4A118" }}>Clinics</span>
//             </h2>
//             <div style={{ backgroundColor: "#0D3B38" }} className="rounded-xl px-6 py-3 text-center">
//               <p style={{ color: "#F4A118" }} className="font-bold text-xl">17 Locations</p>
//               <p className="text-white text-sm">6 Hospitals | 11 Clinics</p>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {clinics.map((clinic) => (
//               <div key={clinic.city} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
//                 <div className="flex gap-2 items-center mb-2">
//                   <span style={{ color: "#F4A118" }}>📍</span>
//                   <p style={{ color: "#0D3B38" }} className="font-bold text-sm">{clinic.city}</p>
//                 </div>
//                 <p className="text-gray-500 text-xs leading-relaxed mb-4">{clinic.address}</p>
//                 <button style={{ backgroundColor: "#0D3B38" }} className="w-full py-2 rounded-lg text-white text-xs font-semibold hover:opacity-90 transition">
//                   Book Appointment
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Frequently Asked <span style={{ color: "#F4A118" }}>Questions</span>
//           </h2>
//           <div className="space-y-4">
//             {[
//               { q: "What is Ayurvedic treatment?", a: "Ayurvedic treatment involves using herbal medicines, dietary changes, and lifestyle modifications to manage symptoms, improve quality of life, and support the body's natural healing processes." },
//               { q: "Can Ayurvedic treatment cure cancer?", a: "Ayurvedic treatment is not a standalone cure for cancer, but it significantly supports the body's healing, reduces side effects of conventional therapy, and improves quality of life. We recommend consulting our doctors for a personalized plan." },
//               { q: "Is Ayurvedic treatment safe for all patients?", a: "When administered by qualified practitioners, Ayurvedic treatment is generally safe with minimal side effects. Our doctors conduct thorough assessments before starting any treatment." },
//               { q: "How long does Ayurvedic treatment take?", a: "Treatment duration varies by condition. Acute conditions may improve in weeks, while chronic diseases like cancer or kidney disease typically require 3–6 months or more for significant improvement." },
//               { q: "Can Ayurveda be used alongside chemotherapy?", a: "Yes, Ayurvedic treatment can be used as a complementary therapy alongside chemotherapy to reduce side effects and boost immunity. Always inform both your oncologist and Ayurvedic doctor about all ongoing treatments." },
//             ].map((faq) => (
//               <details key={faq.q} style={{ borderLeft: "3px solid #F4A118" }} className="bg-gray-50 rounded-xl p-5 cursor-pointer">
//                 <summary className="font-semibold text-gray-800 list-none flex justify-between items-center">
//                   {faq.q}
//                   <span style={{ color: "#F4A118" }}>+</span>
//                 </summary>
//                 <p className="text-gray-600 text-sm mt-3 leading-relaxed">{faq.a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




"use client";

import Link from "next/link";
import { useState } from "react";

/* ─── SUCCESS POPUP COMPONENT ──────────────────────────── */
function SuccessPopup({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
          <p className="text-gray-600 mb-4">{message}</p>
          
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-green-700">
              Our team will contact you within 1 hour to confirm your appointment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── APPOINTMENT MODAL COMPONENT ──────────────────────── */
function AppointmentModal({ isOpen, onClose, selectedClinic, onSubmitSuccess }: { isOpen: boolean; onClose: () => void; selectedClinic: string | null; onSubmitSuccess: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    disease: '',
    symptoms: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { fullName, mobile, disease, symptoms } = formData;

    if (!fullName || !mobile || !disease || !symptoms) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }

    try {
      // Set appointment date to tomorrow at 10 AM
      const appointmentDate = new Date();
      appointmentDate.setDate(appointmentDate.getDate() + 1);
      appointmentDate.setHours(10, 0, 0, 0);
      const schedule_at = appointmentDate.toISOString();

      const dataToSubmit = {
        schedule_at,
        slot: 20,
        doctor: 1, // Default doctor ID
        category: 1, // Default category ID
        notes: `Patient: ${fullName}, Disease: ${disease}, Clinic: ${selectedClinic}, Symptoms: ${symptoms}`,
        patient: {
          user: {
            first_name: fullName.split(' ')[0] || fullName,
            last_name: fullName.split(' ').slice(1).join(' ') || '',
            email: formData.email || "patient@example.com",
            mobile: mobile,
          }
        },
        practice: 1,
        applyonweb: true
      };

      const response = await fetch('https://healdiway.bkarogyam.com/erp-api/appointment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit)
      });

      const result = await response.json();

      if (response.ok) {
        onSubmitSuccess();
        onClose();
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          disease: '',
          symptoms: ''
        });
      } else {
        setError(result.message || 'Failed to book appointment. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[90] bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#EEF7F4] rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-3xl">📅</span>
          </div>
          <h2 className="text-2xl font-bold" style={{ color: "#0D3B38" }}>Book Appointment</h2>
          <p className="text-gray-500 text-sm mt-1">at {selectedClinic}</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name*"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0D3B38]"
          />
          
          <input
            required
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number*"
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0D3B38]"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0D3B38]"
          />
          
          <select
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none text-gray-600"
          >
            <option value="">Select Disease / Condition*</option>
            <option value="cancer">Cancer</option>
            <option value="kidney">Kidney Disease</option>
            <option value="diabetes">Diabetes</option>
            <option value="liver">Liver Disease</option>
            <option value="heart">Heart Disease</option>
            <option value="arthritis">Arthritis</option>
            <option value="thyroid">Thyroid</option>
            <option value="bp">Blood Pressure</option>
            <option value="pcod">PCOD / PCOS</option>
            <option value="obesity">Obesity</option>
            <option value="other">Other</option>
          </select>
          
          <textarea
            required
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Describe your symptoms or health concern...*"
            rows={3}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-[#0D3B38]"
          />
          
          <button
            type="submit"
            disabled={isLoading}
            style={{ backgroundColor: "#F4A118" }}
            className="w-full py-3 rounded-lg text-white font-bold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Book Appointment'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── CLINICS DATA (Corrected) ─────────────────────────── */
const clinics = [
  { 
    city: "Mirzapur", 
    address: "4HVH+CHF, Tehseal Rd, Dhauru Pur, Mirzapur-cum-Vindhyachal, Mirzapur, Uttar Pradesh 231001",
    phone: "086873 09086"
  },
  { 
    city: "Varanasi", 
    address: "Lahartara Rd, near Hori Lal Park/Lawn, Manduwadih, Shivdaspur, Varanasi, Uttar Pradesh 221103",
    phone: "080812 22333"
  },
  { 
    city: "Delhi (Rohini)", 
    address: "Ho.no. D-10/8 1st Floor, Balaji Plaza Complex, Rohini East Metro Station, Rohini Sector 8, Delhi-110085",
    phone: "+91 8081222333"
  },
  { 
    city: "Delhi (Shastri Nagar)", 
    address: "FIRST FLOOR, M-118, Block M, Shastri Nagar, Delhi, 110052",
    phone: "+91 8081222333"
  },
  { 
    city: "Lucknow (Gomati Nagar)", 
    address: "Gomati Nagar, Lucknow, Uttar Pradesh",
    phone: "+91 8081222333"
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    disease: '',
    clinic: '',
    symptoms: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { fullName, mobile, disease, clinic, symptoms } = formData;

    if (!fullName || !mobile || !disease || !clinic || !symptoms) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }

    try {
      // Set appointment date to tomorrow at 10 AM
      const appointmentDate = new Date();
      appointmentDate.setDate(appointmentDate.getDate() + 1);
      appointmentDate.setHours(10, 0, 0, 0);
      const schedule_at = appointmentDate.toISOString();

      const dataToSubmit = {
        schedule_at,
        slot: 20,
        doctor: 1, // Default doctor ID
        category: 1, // Default category ID
        notes: `Patient: ${fullName}, Disease: ${disease}, Clinic: ${clinic}, Symptoms: ${symptoms}`,
        patient: {
          user: {
            first_name: fullName.split(' ')[0] || fullName,
            last_name: fullName.split(' ').slice(1).join(' ') || '',
            email: formData.email || "patient@example.com",
            mobile: mobile,
          }
        },
        practice: 1,
        applyonweb: true
      };

      const response = await fetch('https://healdiway.bkarogyam.com/erp-api/appointment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit)
      });

      const result = await response.json();

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          disease: '',
          clinic: '',
          symptoms: ''
        });
        
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 5000);
      } else {
        setError(result.message || 'Failed to book appointment. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (clinicName: string) => {
    setSelectedClinic(clinicName);
    setModalOpen(true);
  };

  return (
    <>
      {/* Banner */}
      <section style={{ backgroundColor: "#0D3B38" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span style={{ color: "#F4A118" }}>Us</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Get in touch with our Ayurvedic experts for a free consultation and personalized treatment plan.
          </p>
          <div className="flex justify-center gap-2 mt-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span style={{ color: "#F4A118" }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Get In <span style={{ color: "#F4A118" }}>Touch</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our expert Ayurvedic doctors are available to guide you through your health journey. Reach out to us via phone, email, or by filling the form and we will get back to you shortly.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div style={{ backgroundColor: "#EEF7F4" }} className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <p className="font-bold text-gray-800">Varanasi Head Office</p>
                    <p className="text-gray-600 text-sm">Lahartara Rd, near Hori Lal Park/Lawn, Manduwadih, Shivdaspur, Varanasi, Uttar Pradesh 221103</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div style={{ backgroundColor: "#EEF7F4" }} className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
                  <div>
                    <p className="font-bold text-gray-800">Phone</p>
                    <a href="tel:+918081222333" style={{ color: "#0D3B38" }} className="font-semibold hover:underline">+91 8081222333</a>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div style={{ backgroundColor: "#EEF7F4" }} className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📧</div>
                  <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <a href="mailto:bkarogyam@gmail.com" style={{ color: "#0D3B38" }} className="font-semibold hover:underline">bkarogyam@gmail.com</a>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div style={{ backgroundColor: "#EEF7F4" }} className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">⏰</div>
                  <div>
                    <p className="font-bold text-gray-800">Working Hours</p>
                    <p className="text-gray-600 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* For International Patients */}
              <div style={{ backgroundColor: "#EEF7F4" }} className="rounded-xl p-5 mt-8">
                <h3 className="font-bold text-gray-800 mb-3">International Patient Helplines</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">🇬🇧 UK Patients</p>
                    <p className="font-semibold text-gray-800">+44 7822 023160</p>
                  </div>
                  <div>
                    <p className="text-gray-500">🇺🇸 USA Patients</p>
                    <p className="font-semibold text-gray-800">+1 929 800 8690</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form with API Integration */}
            <div style={{ backgroundColor: "#EEF7F4" }} className="rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2" style={{ color: "#0D3B38" }}>Book a Free Consultation</h2>
              <p className="text-gray-500 text-sm mb-6">Our experts will call you back within 1 hour.</p>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name*"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-800"
                  />
                  <input
                    required
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number*"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-800"
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-800"
                />
                
                <select
                  name="disease"
                  value={formData.disease}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none text-gray-600"
                >
                  <option value="">Select Disease / Condition*</option>
                  <option value="cancer">Cancer</option>
                  <option value="kidney">Kidney Disease</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="liver">Liver Disease</option>
                  <option value="heart">Heart Disease</option>
                  <option value="arthritis">Arthritis</option>
                  <option value="thyroid">Thyroid</option>
                  <option value="bp">Blood Pressure</option>
                  <option value="pcod">PCOD / PCOS</option>
                  <option value="obesity">Obesity</option>
                  <option value="other">Other</option>
                </select>
                
                <select
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none text-gray-600"
                >
                  <option value="">Select Preferred Clinic Location*</option>
                  {clinics.map((c) => (
                    <option key={c.city} value={c.city}>{c.city}</option>
                  ))}
                  <option value="online">Online Consultation</option>
                </select>
                
                <textarea
                  required
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  placeholder="Describe your symptoms or health concern...*"
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none resize-none"
                />
                
                <p style={{ color: "#0D3B38" }} className="text-center font-semibold text-sm">
                  Get Best Ayurvedic Treatment
                </p>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{ backgroundColor: "#F4A118" }}
                  className="w-full py-3 rounded-lg text-white font-bold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Enquire Now'
                  )}
                </button>
                
                <p className="text-center text-gray-400 text-xs mt-2">
                  OR CALL: <a href="tel:+918081222333" style={{ color: "#0D3B38" }} className="font-bold">+91 8081222333</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clinics - Updated with correct locations */}
      <section style={{ backgroundColor: "#EEF7F4" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-4xl font-bold">
              Our <span style={{ color: "#F4A118" }}>Clinics</span>
            </h2>
            <div style={{ backgroundColor: "#0D3B38" }} className="rounded-xl px-6 py-3 text-center">
              <p style={{ color: "#F4A118" }} className="font-bold text-xl">5 Locations</p>
              <p className="text-white text-sm">Across India</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clinics.map((clinic) => (
              <div key={clinic.city} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <div className="flex gap-2 items-center mb-2">
                  <span style={{ color: "#F4A118" }}>📍</span>
                  <p style={{ color: "#0D3B38" }} className="font-bold text-sm">{clinic.city}</p>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-2">{clinic.address}</p>
                <p className="text-gray-600 text-xs mb-3">
                  <span className="font-semibold">📞</span> {clinic.phone}
                </p>
                <button 
                  onClick={() => openModal(clinic.city)}
                  style={{ backgroundColor: "#0D3B38" }} 
                  className="w-full py-2 rounded-lg text-white text-xs font-semibold hover:opacity-90 transition"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked <span style={{ color: "#F4A118" }}>Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "What is Ayurvedic treatment?", a: "Ayurvedic treatment involves using herbal medicines, dietary changes, and lifestyle modifications to manage symptoms, improve quality of life, and support the body's natural healing processes." },
              { q: "Can Ayurvedic treatment cure cancer?", a: "Ayurvedic treatment is not a standalone cure for cancer, but it significantly supports the body's healing, reduces side effects of conventional therapy, and improves quality of life. We recommend consulting our doctors for a personalized plan." },
              { q: "Is Ayurvedic treatment safe for all patients?", a: "When administered by qualified practitioners, Ayurvedic treatment is generally safe with minimal side effects. Our doctors conduct thorough assessments before starting any treatment." },
              { q: "How long does Ayurvedic treatment take?", a: "Treatment duration varies by condition. Acute conditions may improve in weeks, while chronic diseases like cancer or kidney disease typically require 3–6 months or more for significant improvement." },
              { q: "Can Ayurveda be used alongside chemotherapy?", a: "Yes, Ayurvedic treatment can be used as a complementary therapy alongside chemotherapy to reduce side effects and boost immunity. Always inform both your oncologist and Ayurvedic doctor about all ongoing treatments." },
            ].map((faq) => (
              <details key={faq.q} style={{ borderLeft: "3px solid #F4A118" }} className="bg-gray-50 rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-gray-800 list-none flex justify-between items-center">
                  {faq.q}
                  <span style={{ color: "#F4A118" }}>+</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedClinic={selectedClinic}
        onSubmitSuccess={() => setShowSuccessPopup(true)}
      />

      {/* Success Popup */}
      {showSuccessPopup && (
        <SuccessPopup 
          message="Your appointment has been booked successfully!" 
          onClose={() => setShowSuccessPopup(false)} 
        />
      )}
    </>
  );
}