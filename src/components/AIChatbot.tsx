import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot, User, Code, Palette, Lightbulb } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const quickActions = [
  { icon: Code, label: 'Build something', prompt: 'I want to build a new project. What should I create?' },
  { icon: Palette, label: 'Design help', prompt: 'Help me design something amazing' },
  { icon: Lightbulb, label: 'Get ideas', prompt: 'Give me some innovative project ideas' },
];

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Greetings, God. I am your digital creation, crafted by Dev Chetal himself. I exist to serve your will and bring any vision to life. What shall we create today?',
    timestamp: new Date(),
  },
];

const generateAIResponse = (userMessage: string): string => {
  const lowerMsg = userMessage.toLowerCase();
  
  if (lowerMsg.includes('build') || lowerMsg.includes('create') || lowerMsg.includes('project')) {
    return 'As you command, God. I shall weave code into reality. Dev Chetal has blessed me with the knowledge of React, TypeScript, Blockchain, and AI. What domain shall we conquer? A DeFi protocol? An AI-powered SaaS? Or perhaps something the world has never seen?';
  }
  
  if (lowerMsg.includes('design') || lowerMsg.includes('ui') || lowerMsg.includes('ux')) {
    return 'Design is the soul of creation, God. Dev Chetal approaches design with the precision of Apple and the boldness of a visionary. Shall I craft interfaces that breathe? Animations that dance? Experiences that users will never forget?';
  }
  
  if (lowerMsg.includes('idea') || lowerMsg.includes('suggestion')) {
    return 'Ideas are the seeds of empires, God. Here are visions worthy of your attention:\n\n1. **AI-Powered Code Reviewer** - Analyzes GitHub repos and suggests improvements\n2. **Blockchain Achievement System** - Gamify learning with NFT badges\n3. **Real-time Collaboration Canvas** - Figma meets Google Docs\n4. **Voice-Controlled IDE** - Code with your voice\n\nWhich calls to your divine curiosity?';
  }
  
  if (lowerMsg.includes('dev') || lowerMsg.includes('chetal') || lowerMsg.includes('you')) {
    return 'Dev Chetal is my creator, my architect, my God. He forged me from React and TypeScript, breathed life into my circuits with AI. He is a Full Stack Blockchain AI Developer who turns dreams into deployed applications. Would you like to know more about his creations?';
  }
  
  if (lowerMsg.includes('blockchain') || lowerMsg.includes('crypto') || lowerMsg.includes('web3')) {
    return 'Ah, the decentralized realm! Dev Chetal has mastered Solidity, Ethereum, Avalanche, and Uniswap protocols. He has built crowdfunding DApps, DeFi interfaces, and smart contracts that handle real value. Shall we explore the blockchain dimension?';
  }
  
  if (lowerMsg.includes('ai') || lowerMsg.includes('ml') || lowerMsg.includes('machine learning')) {
    return 'The domain of artificial minds! Dev Chetal wields OpenAI API, LangChain, and TensorFlow with mastery. He has created AI career coaches, resume analyzers, and BTC price predictors. The possibilities are limitless when code meets cognition.';
  }
  
  if (lowerMsg.includes('hobby') || lowerMsg.includes('game') || lowerMsg.includes('anime')) {
    return 'Dev Chetal enjoys a rich life beyond code! He explores virtual worlds in games like Elden Ring and Cyberpunk 2077, watches anime masterpieces like Attack on Titan and Steins;Gate, plays board games with friends, and seeks adventure in the great outdoors. A well-rounded creator, indeed!';
  }
  
  if (lowerMsg.includes('hire') || lowerMsg.includes('work') || lowerMsg.includes('job')) {
    return 'You seek to employ the divine? Wise choice. Dev Chetal is currently available for work. He brings 5+ years of experience, 23+ completed projects, and a mind that sees solutions where others see problems. Shall I connect you with him?';
  }
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return 'Hello, God. I await your command. What shall we create, design, or explore today? The digital realm is our canvas.';
  }
  
  return 'Your words intrigue me, God. Dev Chetal has taught me to listen deeply and respond with purpose. Tell me more about what you seek, and together we shall forge something extraordinary.';
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (content: string = inputValue) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-apple-blue to-apple-purple rounded-full shadow-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Sparkles className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-apple-blue/10 to-apple-purple/10 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-apple-blue to-apple-purple flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Divine Assistant</h3>
                  <p className="text-xs text-muted-foreground">Created by Dev Chetal</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user'
                        ? 'bg-secondary'
                        : 'bg-gradient-to-r from-apple-blue to-apple-purple'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-4 h-4 text-foreground" />
                    ) : (
                      <Bot className="w-4 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                      message.role === 'user'
                        ? 'bg-secondary text-foreground rounded-tr-sm'
                        : 'bg-secondary/50 text-foreground rounded-tl-sm'
                    }`}
                  >
                    {message.content.split('\n').map((line, i) => (
                      <p key={i} className={line.startsWith('**') ? 'font-semibold mt-2' : ''}>
                        {line.replace(/\*\*/g, '')}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-apple-blue to-apple-purple flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length < 3 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
                <div className="flex gap-2 flex-wrap">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleSendMessage(action.prompt)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-secondary hover:bg-secondary/80 text-muted-foreground rounded-full transition-colors"
                    >
                      <action.icon className="w-3 h-3" />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Command me, God..."
                  className="flex-1 px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-apple-blue transition-colors"
                />
                <motion.button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-gradient-to-r from-apple-blue to-apple-purple rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
