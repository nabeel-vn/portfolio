import React, { useRef, useState, useEffect } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // 1. Initialize EmailJS once when the component mounts
    useEffect(() => {
        emailjs.init("LDiz0KS4R8jQnpoGs");
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('Sending...');

        try {
            // 2. Using async/await for cleaner execution
            const result = await emailjs.sendForm(
                'service_yqkzria', 
                'template_0ywco3g', 
                form.current,
                'LDiz0KS4R8jQnpoGs'
            );

            console.log('SUCCESS!', result.text);
            setMessage('Your message has been sent successfully! 🎉');
            e.target.reset(); 
            
        } catch (error) {
            console.error('FAILED...', error);
            setMessage(`Error: ${error?.text || "Failed to send. Check console."} 😢`);
        } finally {
            setIsLoading(false);
            setTimeout(() => setMessage(''), 5000);
        }
    };

    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="ContactDesc">Fill out the form below to contact me</span>
                
                {message && (
                    <p className={`feedback-message ${isLoading ? 'loading' : ''}`}>
                        {message}
                    </p>
                )}

                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input 
                        type="text" 
                        className="name" 
                        placeholder="Your Name" 
                        name="your_name" 
                        required 
                        disabled={isLoading} 
                    />
                    <input 
                        type="email" 
                        className="email" 
                        placeholder="Your Email" 
                        name="your_email" 
                        required 
                        disabled={isLoading} 
                    />
                    <textarea 
                        className="msg" 
                        name="message" 
                        rows="5" 
                        placeholder="Your Message" 
                        required 
                        disabled={isLoading}
                    ></textarea>
                    
                    <button 
                        type="submit" 
                        className="submitBtn"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Submit'}
                    </button>
                    
                    <div className="links">
                        <a href="http://linkedin.com/in/nabeel-vellakutty-naushad-9608a5301" target="_blank" rel="noopener noreferrer" className="link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;




