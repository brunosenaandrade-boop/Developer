"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, ArrowRight } from "lucide-react";
import { trackChatOpened, trackChatMessageSent, trackWhatsAppClicked } from "@/lib/analytics";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5548998649898";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// Ana - Respostas locais (fallback quando API não disponível)
const generateResponse = (userInput: string, messageCount: number): string => {
  const input = userInput.toLowerCase().trim();

  if (messageCount === 1 && (input.includes("oi") || input.includes("olá") || input.includes("ola") || input.includes("bom dia") || input.includes("boa tarde") || input.includes("boa noite") || input.length < 15)) {
    return "Oi! Que bom ter você aqui! Me conta, você tá procurando desenvolver algum projeto ou tá só conhecendo nosso trabalho?";
  }

  if (input.includes("preço") || input.includes("preco") || input.includes("valor") || input.includes("custo") || input.includes("quanto custa") || input.includes("orçamento") || input.includes("orcamento")) {
    return "Olha, cada projeto tem suas particularidades, então o valor varia bastante dependendo do que você precisa. O Bruno consegue te dar um orçamento certinho depois de entender melhor o seu projeto. Quer que eu te passe pra ele no WhatsApp? É bem rapidinho a conversa inicial!";
  }

  if (input.includes("prazo") || input.includes("tempo") || input.includes("demora") || input.includes("quanto tempo") || input.includes("dias")) {
    return "O prazo depende muito da complexidade do projeto. Projetos mais simples saem em algumas semanas, já os mais robustos podem levar um pouco mais. O Bruno consegue te dar uma estimativa mais precisa. Quer conversar com ele?";
  }

  if (input.includes("site") || input.includes("landing") || input.includes("página") || input.includes("pagina")) {
    return "Que legal! Sites e landing pages são uma das nossas especialidades. Você já tem uma ideia do que precisa ou tá começando do zero? Me conta mais pra eu entender melhor como podemos te ajudar!";
  }

  if (input.includes("sistema") || input.includes("plataforma") || input.includes("dashboard") || input.includes("crm") || input.includes("erp") || input.includes("gestão") || input.includes("gestao")) {
    return "Sistemas web são o forte aqui! Já fizemos desde CRMs simples até plataformas bem completas. Qual é a necessidade principal do seu negócio? O que você precisa gerenciar ou automatizar?";
  }

  if (input.includes("saas") || input.includes("app") || input.includes("aplicativo") || input.includes("startup") || input.includes("mvp")) {
    return "Muito bom! Criar um produto digital do zero é desafiador, mas super recompensador. Você já tem a ideia validada ou ainda tá na fase de planejamento? Me conta mais sobre o que você quer construir!";
  }

  if (input.includes("loja") || input.includes("ecommerce") || input.includes("e-commerce") || input.includes("vender online") || input.includes("vendas")) {
    return "E-commerce é um mercado que não para de crescer! Você já vende em algum lugar ou seria sua primeira loja online? Pergunto porque isso muda um pouco a abordagem do projeto.";
  }

  if (input.includes("quem") || input.includes("vocês") || input.includes("empresa") || input.includes("bruno") || input.includes("sobre")) {
    return "A BS Developer é a empresa do Bruno Sena. Ele é desenvolvedor há alguns anos e trabalha com projetos sob demanda pra empresas e empreendedores. O foco é entregar soluções que realmente funcionem pro seu negócio. Quer saber mais sobre algum tipo de projeto específico?";
  }

  if (input.includes("onde") || input.includes("endereço") || input.includes("endereco") || input.includes("cidade") || input.includes("localização") || input.includes("localizacao")) {
    return "Ficamos em Capivari de Baixo, Santa Catarina. Mas trabalhamos com clientes de todo o Brasil de forma remota. A comunicação é toda online, então a distância não é problema!";
  }

  if (input.includes("portfólio") || input.includes("portfolio") || input.includes("trabalhos") || input.includes("projetos") || input.includes("exemplos")) {
    return "O Bruno pode te mostrar alguns cases durante a conversa! Cada projeto é bem diferente dependendo do cliente. Quer que eu te passe pra ele no WhatsApp? Assim vocês podem trocar uma ideia e ele te mostra o que faz mais sentido pro seu caso.";
  }

  if (input.includes("sim") || input.includes("quero") || input.includes("pode") || input.includes("vamos") || input.includes("bora") || input.includes("interessado") || input.includes("gostaria")) {
    return "Ótimo! Deixa eu te passar pro Bruno então. Ele responde rapidinho e vai adorar entender melhor o seu projeto. Vou te direcionar pro WhatsApp dele, tá?";
  }

  if (input.includes("não sei") || input.includes("nao sei") || input.includes("dúvida") || input.includes("duvida") || input.includes("ajuda") || input.includes("preciso")) {
    return "Sem problemas! Às vezes é difícil mesmo saber por onde começar. Me conta qual é o seu negócio ou ideia, e a gente vai conversando pra descobrir o que faz mais sentido pra você.";
  }

  if (input.includes("obrigado") || input.includes("obrigada") || input.includes("valeu") || input.includes("agradeço")) {
    return "Imagina! Qualquer coisa é só chamar aqui. Se quiser continuar a conversa com o Bruno no WhatsApp é só clicar no botão aqui embaixo. Boa sorte com seu projeto!";
  }

  if (messageCount >= 3) {
    return "Olha, pelo que você tá me contando, acho que o Bruno consegue te ajudar bem! Que tal trocar uma ideia direto com ele no WhatsApp? É mais fácil pra alinhar os detalhes e ele pode te dar informações mais precisas.";
  }

  return "Entendi! Me conta mais sobre o que você precisa. Qual é o principal objetivo com esse projeto?";
};

const INITIAL_MESSAGE = `Oi! Sou a Ana, do atendimento aqui da BS Developer.

Como posso te ajudar hoje?`;

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: INITIAL_MESSAGE,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    trackChatOpened();
  };

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    trackChatMessageSent();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.message,
        },
      ]);
      setIsTyping(false);
    } catch {
      // Fallback local
      setTimeout(() => {
        const response = generateResponse(userMessage.content, messages.length);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: response,
          },
        ]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClicked("chatbot");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20conversei%20com%20a%20Ana%20no%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.`,
      "_blank"
    );
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.5 }}
            onClick={handleOpen}
            className="fixed bottom-24 right-6 z-50 flex items-center gap-2 bg-[#111111] border border-[#27272A] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#161616] hover:border-[#71717A] transition-all"
            aria-label="Abrir chat"
          >
            <MessageSquare size={20} />
            <span className="text-sm font-medium">Fale com a Ana</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[380px] h-[500px] bg-[#0A0A0A] rounded-2xl shadow-2xl border border-[#27272A] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#111111] border-b border-[#27272A] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div>
                  <p className="font-medium text-sm">Ana</p>
                  <p className="text-xs text-[#71717A]">Atendimento BS Developer</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#71717A] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages flex-1 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat-bubble ${
                    message.role === "user"
                      ? "chat-bubble-user"
                      : "chat-bubble-assistant"
                  }`}
                >
                  {message.content}
                </div>
              ))}

              {isTyping && (
                <div className="chat-bubble chat-bubble-assistant">
                  <div className="typing-indicator">
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp CTA (appears after 2+ messages) */}
            {messages.length > 2 && (
              <div className="px-4 py-2 border-t border-[#27272A]">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full btn btn-whatsapp text-sm group"
                >
                  Continuar no WhatsApp
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-[#27272A]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  disabled={isTyping}
                  className="flex-1 bg-[#111111] border border-[#27272A] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2563EB] transition-colors disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                  className="btn btn-primary px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
