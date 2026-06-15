export default function Products() {
  const products = [
    {
      id: 1,
      name: "Open Path Gas Detector – Series I",
      category: "Gas Detection",
      desc: "Infrared open path detector covering large areas with a single transmitter-receiver pair. Ideal for wide-area leak detection in industrial zones.",
      type: "Open Path",
      image: "/1.jpeg",
    },
    {
      id: 2,
      name: "Open Path Gas Detector – Series II",
      category: "Gas Detection",
      desc: "Long-range open path solution for perimeter monitoring. High sensitivity across LNG, LPG, and hydrocarbon applications.",
      type: "Open Path",
      image: "/2.jpeg",
    },
    {
      id: 3,
      name: "Point Type Gas Detector – Model A",
      category: "Gas Detection",
      desc: "Fixed point detector for continuous monitoring of flammable and toxic gases in industrial environments.",
      type: "Point Type",
      image: "/3.jpeg",
    },
    {
      id: 4,
      name: "Point Type Gas Detector – Model B",
      category: "Gas Detection",
      desc: "Rugged fixed detector designed for harsh conditions — refineries, chemical plants, and offshore platforms.",
      type: "Point Type",
      image: "/4.jpeg",
    },
    {
      id: 5,
      name: "Point Type Gas Detector – Model C",
      category: "Gas Detection",
      desc: "Compact point detector with fast response time, suited for confined spaces and utility areas.",
      type: "Point Type",
      image: "/5.jpeg",
    },
    {
      id: 6,
      name: "Point Type Gas Detector – Model D",
      category: "Gas Detection",
      desc: "Heavy-duty detector with robust housing, built for continuous outdoor and high-vibration environments.",
      type: "Point Type",
      image: "/6.jpeg",
    },
    {
      id: 7,
      name: "Point Type Gas Detector – Model E",
      category: "Gas Detection",
      desc: "Multi-range point detector supporting both flammable and toxic gas sensing with dual-channel output.",
      type: "Point Type",
      image: "/7.jpeg",
    },
    {
      id: 8,
      name: "Point Type Gas Detector – Model F",
      category: "Gas Detection",
      desc: "Electrochemical point detector optimised for low-concentration toxic gas detection in process industries.",
      type: "Point Type",
      image: "/8.jpeg",
    },
    {
      id: 9,
      name: "Point Type Gas Detector – Model G",
      category: "Gas Detection",
      desc: "Catalytic bead sensor for flammable gas detection, offering reliable performance across a wide temperature range.",
      type: "Point Type",
      image: "/9.jpeg",
    },
  ];

  const typeStyle = {
    "Point Type": "text-orange-600 bg-orange-50 border-orange-300",
    "Open Path":  "text-blue-600 bg-blue-50 border-blue-300",
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Page banner */}
      <div className="bg-gray-900 pt-28 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">
            What we service
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Products
          </h1>
          <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
            We specialise in the repair, calibration, and maintenance of gas detection systems,
            flame detectors, and industrial safety equipment across Mumbai & Maharashtra.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 bg-white flex flex-col group hover:border-orange-300 hover:shadow-sm transition-all duration-200"
            >
              {/* Image */}
              <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="h-px bg-gray-200" />

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                    {product.category}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 border rounded-sm tracking-wide ${typeStyle[product.type]}`}>
                    {product.type}
                  </span>
                </div>
                <h3 className="text-gray-900 font-semibold text-sm leading-snug">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {product.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}