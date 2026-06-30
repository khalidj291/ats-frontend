import { Mail } from "lucide-react";

export default function ContactCTA() {
  const contacts = [
    { name: "Mahendra Bhujang", phone: "+919987508773", display: "+91 99875 08773" },
    { name: "Zahid Deshmukh", phone: "+918898802204", display: "+91 88988 02204" },
  ];

  const email = "atselectroservices2021@gmail.com";

  return (
    <section className="bg-[#f7f7f5] text-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-orange-500 text-xs tracking-widest uppercase mb-2">
              Get in Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Let's Discuss Your <br /> Safety Requirements
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Whether you need a new installation, system upgrade, or AMC support,
              our team is ready to assist across India.
            </p>

            <div className="w-8 h-[2px] bg-orange-500 mt-5" />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 md:items-end">
            {contacts.map((contact) => (
              <div key={contact.phone} className="flex flex-col gap-1 md:items-end">
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  {contact.name}
                </span>
                <a href={`tel:${contact.phone}`} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 text-sm font-medium transition w-[200px] text-center">
                  {contact.display}
                </a>
              </div>
            ))}

            <div className="flex items-center gap-2 mt-2 text-gray-600 hover:text-orange-600 transition">
              <Mail size={15} />
              <a href={`mailto:${email}`} className="text-sm">
                {email}
              </a>
            </div>

            <p className="text-gray-500 text-xs mt-1 md:text-right">
              Serving India
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}