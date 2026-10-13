"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

export default function KidiWebTechChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hello! 👋 Welcome to KIDIWEBTECH. How can I help you today?",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e?.preventDefault();

    const text = input.trim();
    if (!text || loading) return;

    const updatedMessages = [...messages, { role: "user", text }];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.slice(-20),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to get a response.");
      }

      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: `Sorry! ${error.message || "Please try again."}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ============ ROUND CIRCLE FLOATING BUTTON ============ */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white shadow-2xl ring-2 ring-sky-400/60 transition hover:scale-110 hover:ring-sky-400"
        >
          <MessageCircle size={28} className="text-sky-400" />

          {/* Sparkle badge */}
          <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-400 text-slate-950">
            <Sparkles size={13} />
          </span>

          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full ring-2 ring-sky-400 animate-ping opacity-40" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-4 right-4 z-[9999] flex h-[min(620px,calc(100dvh-32px))] w-[calc(100vw-32px)] max-w-[390px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-slate-950 p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-400 p-3 text-slate-950">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold">KIDIWEBTECH</h3>
                <p className="text-xs text-sky-300">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 hover:bg-white/10"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
            <div className="rounded-xl bg-sky-50 p-3 text-xs text-sky-900">
              Ask about website development, mobile apps, SEO, and digital
              marketing.
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="rounded-full bg-slate-200 p-2">
                  {message.role === "user" ? (
                    <User size={16} />
                  ) : (
                    <Bot size={16} />
                  )}
                </div>

                <div
                  className={`max-w-[82%] whitespace-pre-wrap break-words rounded-2xl p-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-slate-950 text-white"
                      : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <p className="animate-pulse text-sm text-slate-500">
                KIDIWEBTECH AI is typing...
              </p>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={sendMessage}
            className="flex gap-2 border-t bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask us anything..."
              maxLength={4000}
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="rounded-xl bg-sky-500 px-4 text-white hover:bg-sky-600 disabled:opacity-50"
            >
              <Send size={19} />
            </button>
          </form>

          <p className="bg-white pb-3 text-center text-[10px] text-slate-400">
            Powered by Gemini AI · KIDIWEBTECH
          </p>
        </div>
      )}
    </>
  );
}
