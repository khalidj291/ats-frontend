import { Link } from "react-router-dom";

const services = [
  {
    title: "Installation",
    subtitle: "Fixed & Portable Solutions",
    desc: "Our experienced team members are poficient in installing fire and gas detection systems with precision and efficiency,tailored to meet the specific need of each client.",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200",
    tag: "Core Service",
  },
  {
    title: "Commisioning",
    subtitle: "permissions",
    desc: "we offer thorough commisioning services to ensure that all the systems are functioning correctly and in compliance with the industry standards.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200",
    tag: "Fire Safety",
  },
  {
    title: "Calibaration",
    subtitle: "Precision",
    desc: "Our team conducts precise calibration of gas and flame detectors to maintain accuracy and reliability in detecting potential hazards.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200",
    tag: "Ongoing Support",
  },
  {
    title: "Testing",
    subtitle: "For faults and errors",
    desc: "Regular testing of fire and gas detection systems is essential for ensuring their effectiveness in emergency situations. We provide comprehensive testing services to guarantee the reliability of the equipment.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    tag: "Engineering",
  },
  {
    title: "Repairing",
    subtitle: "Hazard Assessment & Compliance",
    desc: "In the event of malfunction or damage, our skilled technicians are equipped to diagnose and repair various multinational make gas and flame detectors promptly, minimizing downtime and ensuring continuous protection.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    tag: "Compliance",
  },
  {
    title: "Turnkey Projects",
    subtitle: "Design to Commissioning",
    desc: "End-to-end project execution — from hazard study and system design through installation, commissioning, and operator training across pharmaceutical, petrochemical, and power industries.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    tag: "Full Scope",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f5f4f0] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Industrial Safety<br />Solutions
            </h2>
            <div className="w-10 h-1 bg-orange-500 mt-5" />
          </div>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed md:text-right">
            Specialists in gas detection and flame detection systems for hazardous industrial environments across Mumbai & Maharashtra.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#f5f4f0] hover:bg-white transition-colors duration-300 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300" />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.15em] uppercase text-white bg-orange-500 px-2.5 py-1">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="w-6 h-[2px] bg-orange-500 mb-4 group-hover:w-10 transition-all duration-300" />
                <h3 className="text-lg font-bold text-gray-900 mb-0.5 group-hover:text-orange-500 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}