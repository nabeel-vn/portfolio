
import React, { useRef, useState, useEffect } from "react";
import './contact.css';
import LinkedInIcon from "../../assets/linkedin-icon.png"; 
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
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
            // This will show the specific error from EmailJS in your UI
            setMessage(`Error: ${error?.text || "Failed to send. Check console."} 😢`);
        } finally {
            setIsLoading(false);
            // Clear message after 5 seconds
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
                    {/* Ensure these 'name' attributes match your EmailJS Template {{your_name}} */}
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
                        <a href="http://linkedin.com/in/nabeel-vellakutty-naushad-9608a5301" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        <img src={YouTubeIcon} alt="Youtube" className="link" />
                        <a href="https://www.instagram.com/nabeel__vn/" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;




