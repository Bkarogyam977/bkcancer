import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D3B38" }} className="text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{ backgroundColor: "#F4A118" }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">BK</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">BK Arogyam</p>
                <p style={{ color: "#F4A118" }} className="text-xs">100% Ayurvedic Treatment</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              BK Arogyam is a trusted Ayurvedic healthcare center providing holistic treatment for chronic and lifestyle diseases.
            </p>
            <div className="flex gap-3 mt-4">
              {["Twitter", "Facebook", "Instagram", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{ backgroundColor: "#1a5c57" }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white text-xs transition"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: "#F4A118" }} className="font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/disease", label: "Disease" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ color: "#F4A118" }} className="font-bold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Second Floor, 77, Block C, Tarun Enclave, Pitampura, New Delhi, Delhi, 110034</span>
              </li>
              <li className="flex gap-2">
                <span>📧</span>
                <span>bkarogyam@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span style={{ color: "#F4A118" }} className="font-semibold">+91 8081222333</span>
              </li>
            </ul>
          </div>

          {/* Book Consultation */}
          <div>
            <h3 style={{ color: "#F4A118" }} className="font-bold text-base mb-4">Book Consultation</h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Ready to experience the rejuvenating benefits of Ayurveda? Schedule your consultation today.
            </p>
            <Link
              href="/contact"
              style={{ backgroundColor: "#F4A118" }}
              className="inline-block px-5 py-2 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-sm">
            © 2025 BK Arogyam. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/50">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
