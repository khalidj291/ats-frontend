const reasons = [
  {
    number: "01",
    title: "Authorised Channel Partners",
    desc: "Factory-trained engineers ensuring OEM-compliant installation and calibration.",
  },
  {
    number: "02",
    title: "Single-Point Accountability",
    desc: "One team handling design, installation, AMC, and support — no vendor handoffs.",
  },
  {
    number: "03",
    title: "Regional Presence",
    desc: "Fast on-site response across Mumbai, Navi Mumbai, Thane, and Pune.",
  },
  {
    number: "04",
    title: "Compliance Ready",
    desc: "Complete documentation for Factory Act, PESO, and audit requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white px-6 py-16 relative overflow-hidden">

      {/* Ghost ATS */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-black text-white/[0.04] pr-6 select-none">
        ATS
      </span>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-orange-500 text-xs tracking-widest uppercase mb-2">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Built for Industrial Reliability
          </h2>

          <div className="w-8 h-1 bg-orange-500 mt-3" />
        </div>

        {/* Alternating points */}
        <div className="space-y-8 md:space-y-10">

          {reasons.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-6 md:gap-10 items-start ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Left */}
              <div>
                <span className="text-orange-500 text-xs tracking-widest">
                  {item.number}
                </span>

                <h3 className="text-lg md:text-xl font-semibold mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Right */}
              <div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="w-6 h-[2px] bg-orange-500 mt-3"></div>
              </div>

            </div>
          ))}

        </div>

       

      </div>
    </section>
  );
}