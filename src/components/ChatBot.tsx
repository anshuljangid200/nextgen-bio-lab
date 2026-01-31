import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const KNOWLEDGE_BASE = [
    { keywords: ['hello', 'hi', 'hey'], response: "Hello! Welcome to Micrylis Biotech. How can I help you today?" },
    { keywords: ['product', 'pipette', 'labware'], response: "We specialize in precision labware, particularly next-generation pipettes made from medical-grade Bio-Based Polypropylene." },
    { keywords: ['material', 'bio-pp', 'polypropylene'], response: "Our products use medical-grade Bio-Based Polypropylene (Bio-PP), which is eco-friendly and has high chemical resistance." },
    { keywords: ['contact', 'email', 'reach'], response: "You can reach us at contact@micrylisbiotech.com or use the 'Contact Us' button in the navigation bar." },
    { keywords: ['team', 'founder', 'who'], response: "Our team consists of experts like Foram Mokani, Karan Panchal, and Manthan Viradiya. You can see our full team in the 'Pioneers' section." },
    { keywords: ['calculator', 'bio-calculator', 'tool'], response: "We offer several precision bio-calculators including Molecular Weight, NGS Coverage, Tm, and Biodiversity calculators. Check them out in the 'Calculators' menu!" },
    { keywords: ['location', 'where', 'india'], response: "Micrylis Biotech is based in India, where we design and manufacture our precision labware to global standards." },
    { keywords: ['service', 'ngs', 'purification', 'pcr'], response: "We provide solutions for Purification Kits, NGS Sequencing, and PCR Master Mixes." },
];

const SUGGESTED_QUESTIONS = [
    "What are your products?",
    "Tell me about Bio-PP material.",
    "How can I contact you?",
    "Show me your calculators.",
    "Who are the pioneers?"
];

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm the Micrylis Assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (text?: string) => {
        const messageText = text || inputValue;
        if (!messageText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: messageText,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMsg]);
        if (!text) setInputValue('');

        // Generate bot response
        setTimeout(() => {
            const botResponse = generateResponse(messageText);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    const generateResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        for (const item of KNOWLEDGE_BASE) {
            if (item.keywords.some(k => lowerInput.includes(k))) {
                return item.response;
            }
        }

        // Broad matching for suggestions
        if (lowerInput.includes('product')) return KNOWLEDGE_BASE[1].response;
        if (lowerInput.includes('material') || lowerInput.includes('bio-pp')) return KNOWLEDGE_BASE[2].response;
        if (lowerInput.includes('contact')) return KNOWLEDGE_BASE[3].response;
        if (lowerInput.includes('calculator')) return KNOWLEDGE_BASE[5].response;
        if (lowerInput.includes('pioneer') || lowerInput.includes('team')) return KNOWLEDGE_BASE[4].response;

        return "I'm not sure I understand that. Feel free to contact us at contact@micrylisbiotech.com for specific inquiries!";
    };

    return (
        <div className="chatbot-container" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 2000 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        style={{
                            width: '350px',
                            height: '500px',
                            maxWidth: 'calc(100vw - 4rem)',
                            maxHeight: 'calc(100vh - 10rem)',
                            background: '#fff',
                            borderRadius: '20px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            marginBottom: '1rem',
                            border: '1px solid rgba(0,0,0,0.1)',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1.2rem',
                            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Micrylis Assistant</div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>Online | Ready to help</div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            style={{
                                flex: 1,
                                padding: '1.5rem',
                                overflowY: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.2rem',
                                background: '#F8FAFC',
                            }}
                            className="no-scrollbar"
                        >
                            {messages.map((msg) => (
                                <div key={msg.id} style={{
                                    display: 'flex',
                                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    alignItems: 'flex-end',
                                    gap: '0.5rem',
                                }}>
                                    {msg.sender === 'bot' && (
                                        <div style={{ width: '28px', height: '28px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                            <Bot size={16} color="#3B82F6" />
                                        </div>
                                    )}
                                    <div style={{
                                        maxWidth: '85%',
                                        padding: '1rem 1.25rem',
                                        borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                                        background: msg.sender === 'user' ? 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' : '#fff',
                                        color: msg.sender === 'user' ? '#fff' : '#1E293B',
                                        fontSize: '0.9rem',
                                        boxShadow: msg.sender === 'user' ? '0 4px 15px rgba(37, 99, 235, 0.2)' : '0 4px 15px rgba(0,0,0,0.03)',
                                        lineHeight: '1.5',
                                        border: msg.sender === 'user' ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                    }}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Suggestions */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            background: '#fff',
                            display: 'flex',
                            gap: '0.6rem',
                            overflowX: 'auto',
                            whiteSpace: 'nowrap',
                            borderTop: '1px solid #F1F5F9',
                        }} className="no-scrollbar">
                            {SUGGESTED_QUESTIONS.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSend(q)}
                                    style={{
                                        padding: '0.5rem 1.2rem',
                                        borderRadius: '12px',
                                        border: '1px solid #E2E8F0',
                                        background: '#F8FAFC',
                                        color: '#64748B',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.borderColor = '#3B82F6';
                                        e.currentTarget.style.color = '#3B82F6';
                                        e.currentTarget.style.background = '#EFF6FF';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.borderColor = '#E2E8F0';
                                        e.currentTarget.style.color = '#64748B';
                                        e.currentTarget.style.background = '#F8FAFC';
                                    }}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div style={{ padding: '1.25rem', background: '#fff', borderTop: '1px solid #F1F5F9' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem 1.25rem',
                                        borderRadius: '15px',
                                        border: '1px solid #E2E8F0',
                                        outline: 'none',
                                        fontSize: '0.9rem',
                                        background: '#F8FAFC',
                                        transition: 'border-color 0.2s ease',
                                    }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#3B82F6'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!inputValue.trim()}
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '12px',
                                        background: inputValue.trim() ? 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)' : '#E2E8F0',
                                        border: 'none',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: inputValue.trim() ? 'pointer' : 'default',
                                        transition: 'all 0.3s ease',
                                        boxShadow: inputValue.trim() ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none',
                                    }}
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                    border: 'none',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
                }}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
};
