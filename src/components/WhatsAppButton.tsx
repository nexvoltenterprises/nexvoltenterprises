'use client';

import React from 'react';
import { getGeneralEnquiryUrl } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
    >
      {/* Floating Tooltip Label: 'Chat with us' */}
      <div
        role="tooltip"
        id="whatsapp-tooltip"
        className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out"
      >
        <div className="relative bg-[#0B0B0D] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap border border-[#D4AF37]/40 flex items-center">
          Chat with us
          <span
            className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B0B0D] rotate-45 border-t border-r border-[#D4AF37]/40"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={getGeneralEnquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        aria-describedby="whatsapp-tooltip"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp SVG Logo Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.563 3.813 1.563 5.375L2.25 22l4.781-1.25c1.5 1 3.25 1.563 5 1.563 5.531 0 10.031-4.5 10.031-10.031C22.063 6.5 17.563 2 12.031 2zm0 18.25c-1.688 0-3.25-.5-4.563-1.406l-.344-.219-3.375.906.906-3.281-.219-.344C3.531 14.594 3.031 13.344 3.031 12.031 3.031 7.063 7.094 3 12.031 3s9 4.063 9 9.031c0 4.969-4.031 9.031-9 9.031zm4.938-6.75c-.281-.156-1.625-.813-1.875-.906-.25-.094-.438-.156-.625.156s-.719.906-.875 1.094c-.156.188-.344.219-.625.063-.281-.156-1.188-.438-2.281-1.406-.844-.75-1.406-1.688-1.563-1.969-.156-.281-.031-.438.125-.594.125-.125.281-.344.406-.5.156-.188.219-.281.313-.469.094-.188.031-.375-.031-.5-.063-.125-.625-1.531-.875-2.094-.25-.563-.469-.469-.656-.469h-.563c-.188 0-.531.063-.813.375s-1.094 1.063-1.094 2.594c0 1.531 1.125 3.031 1.281 3.219.156.188 2.219 3.375 5.375 4.75.75.313 1.344.5 1.813.656.781.25 1.469.219 2.031.125.625-.094 1.938-.781 2.219-1.563.281-.781.281-1.438.188-1.563-.094-.125-.281-.219-.563-.375z" />
        </svg>
      </a>
    </aside>
  );
}
