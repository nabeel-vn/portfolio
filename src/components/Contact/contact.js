
import React, { useRef, useState } from "react";
import './contact.css';
// Updated import to LinkedInIcon
import LinkedInIcon from "../../assets/linkedin-icon.png"; 
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    // State for user feedback
    const [message, setMessage] = useState('');
    // State to track loading status
    const [isLoading, setIsLoading] = useState(false); 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        // START LOADING
        setIsLoading(true); 
        setMessage('Sending...'); 

        emailjs.sendForm(
            'service_yqkzria',        // Service ID
            'template_0ywco3g',       // Template ID
            form.current,
            'LDiz0KS4R8jQnpoGs'       // Public Key (User ID)
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setMessage('Your message has been sent successfully! 🎉'); 
            alert("Message Sent Successfully!"); 
            e.target.reset(); // Clears the form fields
        })
        .catch((error) => {
            console.log('FAILED...', error.text);
            setMessage('Failed to send message. Please try again. 😢'); 
            alert("Message Failed to Send! Check console for details."); 
        })
        .finally(() => {
             // STOP LOADING regardless of success or failure
             setIsLoading(false); 
        });
    };

    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="ContactDesc">Fill out the form below to contact me</span>
                
                {/* Display the feedback message */}
                {message && <p className={`feedback-message ${isLoading ? 'loading' : ''}`}>{message}</p>}

                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" required disabled={isLoading} />
                    <input type="email" className="email" placeholder="Your Email" name="your_email" required disabled={isLoading} />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" required disabled={isLoading}></textarea>
                    
                    <button 
                        type="submit" 
                        value="send" 
                        className="submitBtn"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Submit'}
                    </button>
                    
                    <div className="links">
                        
                        {/* LinkedIn Link */}
                        <a href="http://linkedin.com/in/nabeel-vellakutty-naushad-9608a5301" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                        </a>

                        {/* Twitter (Unlinked for now) */}
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        
                        {/* YouTube (Unlinked for now) */}
                        <img src={YouTubeIcon} alt="Youtube" className="link" />
                        
                        {/* Instagram Link */}
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




