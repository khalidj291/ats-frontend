import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-white">

        {/* LEFT — Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 overflow-hidden flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="ATS Electro Services"
              className="h-10 w-10 object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-sm font-semibold tracking-wide">
            ATS Electro Services
          </span>
        </div>

        {/* CENTER — Desktop links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          <Link to="/" className="hover:text-orange-400 transition duration-200">Home</Link>
          <Link to="/products" className="hover:text-orange-400 transition duration-200">Products</Link>
          <Link to="/about" className="hover:text-orange-400 transition duration-200">About Us</Link>
          <Link to="/contact" className="hover:text-orange-400 transition duration-200">Contact</Link>
        </div>

        {/* RIGHT — Desktop CTA */}
        <div className="hidden md:block">
          <a href="tel:+919987508773" className="border border-white px-5 py-2 text-sm tracking-wide rounded-md hover:bg-white hover:text-black transition duration-200">
            Call Now
          </a>
        </div>

        {/* RIGHT — Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 py-6 flex flex-col gap-5 text-sm font-medium tracking-wide">
          <Link to="/" onClick={() => setOpen(false)} className="text-white hover:text-orange-400 transition duration-200">Home</Link>
          <Link to="/products" onClick={() => setOpen(false)} className="text-white hover:text-orange-400 transition duration-200">Products</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="text-white hover:text-orange-400 transition duration-200">About Us</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="text-white hover:text-orange-400 transition duration-200">Contact</Link>
          <a href="tel:+919987508773" className="border border-white text-white px-5 py-2.5 text-sm tracking-wide text-center hover:bg-white hover:text-black transition duration-200">
            Call Now
          </a>
        </div>
      )}

    </nav>
  );
}