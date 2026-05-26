import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779766361624"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_-18px_rgba(37,211,102,0.95)] transition hover:-translate-y-1"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}