// Envia eventos para o Google Analytics (GA4)
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  // GA4
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }

  // Log em dev
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${eventName}`, params);
  }
};

// Chat (Ana)
export const trackChatOpened = () => trackEvent("chat_opened");
export const trackChatMessageSent = () => trackEvent("chat_message_sent");

// WhatsApp - source identifica de onde clicou
export const trackWhatsAppClicked = (source: string) =>
  trackEvent("whatsapp_clicked", { source, link_url: "https://wa.me/5548998649898" });

// Lead
export const trackLeadCaptured = (interest?: string) =>
  trackEvent("lead_captured", { interest });
