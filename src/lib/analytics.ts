import { logEvent, Analytics } from "firebase/analytics";
import { initAnalytics } from "./firebase";

let analytics: Analytics | null = null;

const getAnalyticsInstance = async () => {
  if (!analytics) {
    analytics = await initAnalytics();
  }
  return analytics;
};

export const trackEvent = async (eventName: string, params?: Record<string, unknown>) => {
  const analyticsInstance = await getAnalyticsInstance();
  if (analyticsInstance) {
    logEvent(analyticsInstance, eventName, params);
  }
};

// Eventos específicos
export const trackChatOpened = () => trackEvent("chat_opened");
export const trackChatMessageSent = () => trackEvent("chat_message_sent");
export const trackWhatsAppClicked = (source: string) => trackEvent("whatsapp_clicked", { source });
export const trackLeadCaptured = (interest?: string) => trackEvent("lead_captured", { interest });
