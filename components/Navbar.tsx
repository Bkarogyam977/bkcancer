// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/services", label: "Services" },
//   { href: "/disease", label: "Disease" },
//   { href: "/contact", label: "Contact" },
// ];

// const socialLinks = [
//   {
//     label: "Twitter",
//     href: "#",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//       </svg>
//     ),
//   },
//   {
//     label: "Facebook",
//     href: "#",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//       </svg>
//     ),
//   },
//   {
//     label: "Instagram",
//     href: "#",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//       </svg>
//     ),
//   },
//   {
//     label: "YouTube",
//     href: "#",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//       </svg>
//     ),
//   },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 shadow-lg">
//       {/* ── Top Bar ── */}
//       <div style={{ backgroundColor: "#EEF7F4", borderBottom: "1px solid #c8e8e0" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-9">
//             {/* Social Media Icons */}
//             <div className="flex items-center gap-3">
//               {socialLinks.map((s) => (
//                 <a
//                   key={s.label}
//                   href={s.href}
//                   aria-label={s.label}
//                   style={{ color: "#0D3B38" }}
//                   className="hover:opacity-70 transition-opacity duration-200"
//                 >
//                   {s.icon}
//                 </a>
//               ))}
//             </div>

//             {/* Phone Number */}
//             <a
//               href="tel:+918081222333"
//               className="flex items-center gap-2 group"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="#F4A118"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//               </svg>
//               <span
//                 style={{ color: "#F4A118" }}
//                 className="font-bold text-sm group-hover:opacity-80 transition-opacity"
//               >
//                 +91 8081222333
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ── Main Navbar ── */}
//       <nav style={{ backgroundColor: "white", borderBottom: "1px solid #e5f0ec" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-3">
//               <div
//                 style={{ backgroundColor: "#F4A118" }}
//                 className="w-10 h-10 rounded-full flex items-center justify-center"
//               >
//                 <span className="text-white font-bold text-lg">BK</span>
//               </div>
//               <div>
//                 <p style={{ color: "#0D3B38" }} className="font-bold text-lg leading-tight">BK Arogyam</p>
//                 <p style={{ color: "#F4A118" }} className="text-xs leading-tight">
//                   100% Ayurvedic Treatment
//                 </p>
//               </div>
//             </Link>

//             {/* Desktop Nav Links */}
//             <div className="hidden md:flex items-center gap-1">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
//                     style={{
//                       color: isActive ? "#F4A118" : "#0D3B38",
//                       borderBottom: isActive ? "2px solid #F4A118" : "2px solid transparent",
//                       fontWeight: isActive ? 700 : 500,
//                     }}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* Contact Us Button */}
//             <div className="hidden md:block">
//               <Link
//                 href="/contact"
//                 style={{ backgroundColor: "#F4A118" }}
//                 className="px-5 py-2 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               style={{ color: "#0D3B38" }}
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {menuOpen && (
//             <div style={{ backgroundColor: "#EEF7F4", borderTop: "1px solid #c8e8e0" }} className="md:hidden pb-4">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setMenuOpen(false)}
//                     className="block px-4 py-3 text-sm font-medium transition-colors"
//                     style={{ color: isActive ? "#F4A118" : "#0D3B38", fontWeight: isActive ? 700 : 500 }}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               })}
//               <div className="px-4 py-3 border-t border-green-200 mt-2">
//                 <a
//                   href="tel:+918081222333"
//                   style={{ color: "#F4A118" }}
//                   className="text-sm font-bold"
//                 >
//                   📞 +91 8081222333
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }







"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/disease", label: "Disease" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* ── Top Bar ── */}
      <div style={{ backgroundColor: "#EEF7F4", borderBottom: "1px solid #c8e8e0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{ color: "#0D3B38" }}
                  className="hover:opacity-70 transition-opacity duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Phone Number */}
            <a
              href="tel:+918081222333"
              className="flex items-center gap-2 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#F4A118"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span
                style={{ color: "#F4A118" }}
                className="font-bold text-sm group-hover:opacity-80 transition-opacity"
              >
                +91 8081222333
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav style={{ backgroundColor: "white", borderBottom: "1px solid #e5f0ec" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - New Design without Image */}
            <Link href="/" className="flex items-center gap-2 sm:gap-4">
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #0D3B38 0%, #1a5c57 100%)",
                  border: "2px solid #F4A118"
                }}
              >
                BK
              </div>
              <div className="flex flex-col">
                <p style={{ color: "#0D3B38" }} className="font-bold text-base sm:text-xl leading-tight">
                  BK Cancer Care
                </p>
                <p style={{ color: "#F4A118" }} className="text-[10px] sm:text-sm leading-tight">
                  Ayurvedic Cancer Specialists
                </p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                    style={{
                      color: isActive ? "#F4A118" : "#0D3B38",
                      borderBottom: isActive ? "2px solid #F4A118" : "2px solid transparent",
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                style={{ backgroundColor: "#F4A118" }}
                className="px-5 py-2 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              style={{ color: "#0D3B38" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div style={{ backgroundColor: "#EEF7F4", borderTop: "1px solid #c8e8e0" }} className="md:hidden pb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium transition-colors"
                    style={{ color: isActive ? "#F4A118" : "#0D3B38", fontWeight: isActive ? 700 : 500 }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-4 py-3 border-t border-green-200 mt-2">
                <a
                  href="tel:+918081222333"
                  style={{ color: "#F4A118" }}
                  className="text-sm font-bold"
                >
                  📞 +91 8081222333
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}