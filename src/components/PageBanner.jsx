export default function PageBanner({ label, title, subtitle }) {
  return (
    <div className="bg-gray-900 pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {label && (
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">
            {label}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}