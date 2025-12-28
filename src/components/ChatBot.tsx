import React, { useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import styles from './ChatBot.module.css';

const SUGGESTED_QUESTIONS = [
    "What is Physical AI and how is it different from traditional AI?",
    "How do I get started with ROS 2 for robotics?",
    "Explain Vision-Language-Action models in simple terms"
];

export default function ChatBot() {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async (messageText?: string) => {
        const textToSend = messageText || input;
        if (!textToSend.trim() || loading) return;

        const userMessage = { role: 'user', content: textToSend };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: textToSend, history: messages })
            });

            const data = await response.json();

            if (!response.ok) {
                // Backend returned an error
                const errorMessage = data.detail || 'An error occurred while processing your request';
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: `⚠️ Error: ${errorMessage}`
                }]);
            } else {
                // Success - add response
                setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: '⚠️ Could not connect to backend. Please ensure the server is running on http://localhost:8000'
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSuggestedQuestion = (question: string) => {
        sendMessage(question);
    };

    const resetChat = () => {
        setMessages([]);
        setInput('');
    };

    return (
        <>
            {/* Floating Button */}
            <button
                className={styles.floatingButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open AI Assistant"
            >
                💬
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className={styles.chatContainer}>
                    {/* Header with Close and Reset */}
                    <div className={styles.chatHeader}>
                        <div className={styles.headerLeft}>
                            <div className={styles.botIcon}>🤖</div>
                            <div>
                                <h3>AI Learning Assistant</h3>
                                <span className={styles.status}>
                                    <span className={styles.statusDot}></span>
                                    Online
                                </span>
                            </div>
                        </div>
                        <div className={styles.headerActions}>
                            {messages.length > 0 && (
                                <button
                                    className={styles.resetButton}
                                    onClick={resetChat}
                                    title="Reset chat"
                                >
                                    🔄
                                </button>
                            )}
                            <button
                                className={styles.closeButton}
                                onClick={() => setIsOpen(false)}
                                title="Close chat"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className={styles.messagesArea}>
                        {messages.length === 0 ? (
                            <div className={styles.welcomeScreen}>
                                <div className={styles.welcomeIcon}>👋</div>
                                <h4>Welcome to Your AI Assistant!</h4>
                                <p>I'm here to help you learn about Physical AI, Robotics, and more.</p>

                                {!user && (
                                    <div className={styles.authTip}>
                                        <span className={styles.tipIcon}>💡</span>
                                        <div className={styles.tipContent}>
                                            <strong>Pro Tip:</strong> Sign in for personalized learning recommendations
                                            and track your progress!
                                            <a href="/signin" className={styles.tipLink}>Sign In →</a>
                                        </div>
                                    </div>
                                )}

                                <div className={styles.suggestedQuestions}>
                                    <p className={styles.suggestLabel}>Try asking:</p>
                                    {SUGGESTED_QUESTIONS.map((question, idx) => (
                                        <button
                                            key={idx}
                                            className={styles.questionChip}
                                            onClick={() => handleSuggestedQuestion(question)}
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <>
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.botMessage}`}
                                    >
                                        <div className={styles.messageContent}>
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {loading && (
                                    <div className={`${styles.message} ${styles.botMessage}`}>
                                        <div className={styles.typingIndicator}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            className={styles.messageInput}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder={user ? `Hey ${user.email?.split('@')[0]}, ask me anything...` : "Type your question..."}
                            disabled={loading}
                        />
                        <button
                            className={styles.sendButton}
                            onClick={() => sendMessage()}
                            disabled={loading || !input.trim()}
                        >
                            {loading ? '⏳' : '💨'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
