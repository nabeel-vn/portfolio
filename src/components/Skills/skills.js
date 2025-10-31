
import React from "react";
import './skills.css';
// These are your actual image variables
import entrepreneur from '../../assets/entrepreneur.png';
import real_estate from '../../assets/real_estate.png';
import ai from '../../assets/ai.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Like</span>
            {/* Added a descriptive span here, matching your works component structure */}
            
            <div className="skillBars">
                <div className="skillBar">
                    {/* 🛠️ FIX APPLIED: Using 'entrepreneur' import */}
                    <img src={entrepreneur} alt="Entrepreneurship Icon" className="skillBarImg" /> 
                    <div className="skillBarText">
                        <h2>Entrepreneurship</h2>
                        <p>With a foundation in engineering, I aspire to bridge technology and entrepreneurship, creating solutions that are both sustainable and scalable.</p>
                    </div>
                </div>
                <div className="skillBar">
                    {/* 🛠️ FIX APPLIED: Using 'real_estate' import */}
                    <img src={real_estate} alt="Real Estate Icon" className="skillBarImg" /> 
                    <div className="skillBarText">
                        <h2>Real Estate developments</h2>
                        <p>Ever since I played the game monopoly, I am passionate and enthusiastic on township and real estate developments</p>
                    </div>
                </div>
                <div className="skillBar">
                    {/* 🛠️ FIX APPLIED: Using 'ai' import */}
                    <img src={ai} alt="AI Projects Icon" className="skillBarImg" /> 
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

