"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919405649047?text=Hi%20NerdTech%2C%20I'm%20interested%20in%20your%20software%20services!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NerdTech on WhatsApp"
      className="group fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))] z-40 flex h-12 w-12 items-center justify-center rounded-full bg-success-green shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-success-green/60 [animation-duration:2.5s]" />
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.91 6.48L4 29l7.72-1.87A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 16.6c-.3.84-1.72 1.62-2.38 1.7-.61.08-1.38.11-2.23-.14-.51-.15-1.17-.38-2.02-.75-3.55-1.53-5.87-5.1-6.05-5.34-.18-.24-1.45-1.93-1.45-3.68 0-1.75.92-2.6 1.24-2.96.32-.35.7-.44.93-.44.24 0 .47 0 .68.01.22.01.51-.08.8.61.3.7 1.02 2.44 1.11 2.62.09.18.15.4.03.64-.12.24-.18.38-.36.59-.18.2-.38.46-.54.62-.18.18-.37.37-.16.73.21.36.93 1.53 2 2.48 1.37 1.22 2.53 1.6 2.89 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.33.12 2.08.98 2.44 1.16.36.18.6.27.68.42.09.15.09.85-.21 1.69Z" />
      </svg>
    </a>
  );
}