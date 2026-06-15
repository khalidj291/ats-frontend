import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/3.jpeg')",
        backgroundPosition: "center center",
      }}
    >
      <div className="w-full h-full bg-black/70 flex items-center">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Gas Detection <br />
            <span className="text-orange-500">Industrial Safety</span>
          </h1>

          <p className="mt-5 max-w-lg text-gray-300 text-lg">
            Installation, repair, and maintenance of gas detection systems,
            flame detectors, and industrial safety equipment across all of India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+919987508773" className="bg-orange-500 px-6 py-3 text-sm font-medium hover:bg-orange-600 transition">
              Call Now
            </a>
            <Link to="/products" className="border border-white px-6 py-3 text-sm hover:bg-white hover:text-black transition">
              View Products
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}