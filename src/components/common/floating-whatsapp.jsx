import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919213684966?text=Hi%20Lavista%2C%20I%20want%20to%20discuss%20a%20real%20estate%20marketing%20campaign."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle className="w-6 h-6" />

    </a>
  );
}