// Analytics simples - usa apenas console em dev, pode ser expandido depois
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${eventName}`, params);
  }
};

export const trackChatOpened = () => trackEvent("chat_opened");
export const trackChatMessageSent = () => trackEvent("chat_message_sent");
export const trackWhatsAppClicked = (source: string) => trackEvent("whatsapp_clicked", { source });
export const trackLeadCaptured = (interest?: string) => trackEvent("lead_captured", { interest });
