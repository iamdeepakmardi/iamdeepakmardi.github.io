import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal, ChevronRight, Minimize2 } from 'lucide-react';
import { ChatMessage, Sender } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      text: "System initialized. DeepDev_Bot loaded. How can I assist you with Deepak's profile?",
      sender: Sender.Bot,
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: Sender.User,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: Sender.Bot,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${isOpen
          ? 'h-10 w-10 bg-zinc-800 text-zinc-400 border border-zinc-700'
          : 'h-14 w-14 bg-cyan-500 text-zinc-950 hover:bg-cyan-400'
          }`}
        aria-label="Toggle terminal"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Terminal className="h-6 w-6" />}
      </button>

      {/* Terminal Window */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-[90vw] sm:w-[400px] bg-[#0c0c0e] border border-zinc-800 rounded-lg shadow-2xl transition-all duration-300 origin-bottom-right transform backdrop-blur-md bg-opacity-95 overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
          }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-zinc-900/80 p-3 border-b border-zinc-800">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-1">
              <Terminal className="w-3 h-3" />
              <span>bash -- deepak_assistant</span>
            </div>
          </div>
          <Minimize2 onClick={toggleChat} className="w-4 h-4 text-zinc-600 hover:text-zinc-300 cursor-pointer" />
        </div>

        {/* Console Output */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === Sender.User ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[90%] break-words ${msg.sender === Sender.User
                  ? 'text-cyan-300'
                  : 'text-zinc-300'
                  }`}
              >
                <div className="flex gap-2">
                  <span className="select-none opacity-50 shrink-0">
                    {msg.sender === Sender.User ? '>' : '$'}
                  </span>
                  <span>{msg.text}</span>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="select-none opacity-50">$</span>
              <span className="animate-pulse">_</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Line */}
        <div className="p-3 bg-zinc-900/50 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type command..."
              className="w-full bg-transparent border-none focus:ring-0 text-zinc-200 font-mono text-sm placeholder-zinc-600 p-0"
              autoFocus
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="p-1 text-zinc-500 hover:text-cyan-400 disabled:opacity-0 transition-all"
            >
              <Send className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;