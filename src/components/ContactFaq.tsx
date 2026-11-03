"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "Where is Nexvolt Enterprises located in Bengaluru?",
    answer:
      "Our office and distribution facility is located at #13, Moodlappa Cross, Doddamavali, Bengaluru, Karnataka, India (PIN: 560004). You can visit during business hours or contact us in advance for in-person product evaluations.",
  },
  {
    question: "How does the 'Price on Request' model work?",
    answer:
      "Because we cater to retail customers, corporate bulk buyers, and regional distributors, pricing is tailored according to order volume, GST invoicing, and dispatch location. Simply tap 'Enquire on WhatsApp' on any product page or call +91 91805 95957 to receive immediate transparent pricing.",
  },
  {
    question: "Do you supply bulk orders for businesses and corporate gifting?",
    answer:
      "Yes. Nexvolt Enterprises regularly supplies commercial clients, corporate gifting programs, and electronics retailers with volume discounts, secure batch packaging, and prompt dispatch across Karnataka and South India.",
  },
  {
    question: "What categories of consumer electronics do you stock?",
    answer:
      "We stock 8 specialized categories: Neckbands, True Wireless (TWS) Earbuds, Open-Ear (OWS) Earbuds, Portable Bluetooth Speakers, Television Soundbars, Home Theatre Speaker Systems, Wall Charger Adapters, and Heavy-Duty Braided Charging Cables.",
  },
  {
    question: "What are your business and customer support hours?",
    answer:
      "Our sales and customer support desk operates Monday through Saturday from 10:00 AM to 7:00 PM IST. WhatsApp messages received outside business hours will be answered promptly the following morning.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FAQ_DATA.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="bg-[#0B0B0D] border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-[#D4AF37]/40"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3 className="text-base sm:text-lg font-bold text-white">
                {item.question}
              </h3>
              <div
                className={`w-8 h-8 rounded-full bg-[#171719] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#D4AF37]" : "text-gray-400"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#C7C7C7] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
