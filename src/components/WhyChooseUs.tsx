import { Layers, MessageCircle, Users, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const values = [
    {
      icon: Layers,
      heading: "Diverse Product Categories",
      text: "Browse a wide selection of electronics across audio, charging, and accessory categories.",
    },
    {
      icon: MessageCircle,
      heading: "Convenient Product Enquiries",
      text: "Connect instantly via WhatsApp to enquire about any product in our catalogue.",
    },
    {
      icon: Users,
      heading: "Customer-Focused Communication",
      text: "Our team is available to discuss your requirements and help you find the right products.",
    },
    {
      icon: ShieldCheck,
      heading: "Electronics & Accessory Solutions",
      text: "From personal audio to charging essentials, find everyday technology products in one place.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#171719]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 block">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Why Choose Nexvolt Enterprises?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#C7C7C7]">
            Dedicated to providing dependable consumer electronics and transparent communication.
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#0B0B0D] rounded-xl p-6 shadow-md border border-white/10 flex flex-col items-start hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/05 transition-all duration-300"
              >
                {/* Icon in gold circle */}
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F2D675] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.heading}
                </h3>
                <p className="text-sm text-[#C7C7C7] leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { WhyChooseUs };
