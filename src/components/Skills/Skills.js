import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Like</span>

            <div className="skillBars">
                <div className="skillBar">
                    <svg viewBox="0 0 24 24" className="skillBarImg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3v18h18"/>
                        <rect x="6" y="14" width="3" height="4"/>
                        <rect x="11" y="10" width="3" height="8"/>
                        <rect x="16" y="6" width="3" height="12"/>
                        <path d="M17.5 4l1.5 2-1.5 2"/>
                    </svg>
                    <div className="skillBarText">
                        <h2>Entrepreneurship</h2>
                        <p>With a foundation in engineering, I aspire to bridge technology and entrepreneurship, creating solutions that are both sustainable and scalable.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <svg viewBox="0 0 24 24" className="skillBarImg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 21h20"/>
                        <rect x="3" y="12" width="4" height="9"/>
                        <rect x="10" y="6" width="4" height="15"/>
                        <rect x="17" y="9" width="4" height="12"/>
                        <path d="M4.5 15h1M4.5 18h1"/>
                        <path d="M11.5 9h1M11.5 12h1M11.5 15h1M11.5 18h1"/>
                        <path d="M18.5 12h1M18.5 15h1M18.5 18h1"/>
                    </svg>
                    <div className="skillBarText">
                        <h2>Real Estate developments</h2>
                        <p>Ever since I played the game monopoly, I am passionate and enthusiastic on township and real estate developments</p>
                    </div>
                </div>
                <div className="skillBar">
                    <svg viewBox="0 0 24 24" className="skillBarImg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="12" height="12" rx="1"/>
                        <rect x="9" y="9" width="6" height="6" rx="0.5"/>
                        <path d="M9 2v2M12 2v2M15 2v2M9 20v2M12 20v2M15 20v2M2 9h2M2 12h2M2 15h2M20 9h2M20 12h2M20 15h2"/>
                    </svg>
                    <div className="skillBarText">
                        <h2>AI Integrated projects and works</h2>
                        <p>fascinated by intelligent systems since childhood, I'm passionate about integrating AI and engineering to create sustainable, real-world solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;