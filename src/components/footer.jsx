import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

          {/* LEFT — Brand */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold mb-3">
              ATS Electro Services
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Specialists in gas detection, flame detection, and industrial safety systems across Mumbai & Maharashtra.
            </p>

            <div className="w-10 h-[2px] bg-orange-500" />
          </div>

          {/* RIGHT — Links */}
          <div className="grid grid-cols-2 gap-10 text-sm">

            <div>
              <p className="text-gray-300 mb-3 font-medium">Navigation</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <Link to="/" className="hover:text-orange-400">Home</Link>
                <Link to="/products" className="hover:text-orange-400">Products</Link>
                <Link to="/about" className="hover:text-orange-400">About</Link>
                <Link to="/contact" className="hover:text-orange-400">Contact</Link>
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-3 font-medium">Contact</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="tel:+918149894566" className="hover:text-orange-400">
                  +91 99875 08773
                </a>
                <span>Mumbai, Maharashtra</span>
                <span>Navi Mumbai · Thane · Pune</span>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} ATS Electro Services</span>
          <span>Industrial Safety Solutions</span>
        </div>

      </div>
    </footer>
  );
}