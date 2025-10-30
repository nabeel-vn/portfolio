
import React, { useState } from 'react';
import './works.css';

import Portfolio1 from "../../assets/portfolio-1.png"; 
import Jyothi from "../../assets/jyothi.png";
import isn from "../../assets/isn.png"
import Portfolio2 from "../../assets/experience.png";
import Portfolio3 from "../../assets/project_works.png";
import tial1 from "../../assets/tial1.png"; 
import project2 from "../../assets/project2.png";


const portfolioItems = [
    {
        id: 1,
        img: Portfolio1, 
        title: "Education",
        description: "My academic background and qualifications.",
        themeClass: "royal-purple-theme", 
        details: [
            {
                id: '1a',
                detailImg: Jyothi, 
                Institution: "Jyothi Engineering College", 
                role: "Bachelor of Technology",
                duration: "2022 - 2026",
                info: "Built a foundation in Civil Engineering by integrating technology and sustainability to shape the future",
                fullDisplay: true 
            },
            {
                id: '1b',
                detailImg: isn, 
                Institution: "Indian School Nizwa", 
                role: "High school",
                grade: "1 - 10",
                info: "Completed my high school at ISN in Nizwa, Oman",
                fullDisplay: true
            }
        ]
    },
    {
        id: 2,
        img: Portfolio2,
        title: "Experience",
        description: "A summary of my professional work history and roles.",
        themeClass: "blue-theme", 
        details: [
            {
                id: '2a',
                detailImg: tial1,
                Organization: "Thiruvananthapuram International Airport (Adani Airport Holdings Ltd)", 
                role: "Internship",
                duration: "24th June 2025 - 30th June 2025",
                info: "A childhood dream that finally took flight: As a kid I was mesmerized by the airport scenes in 'Cars 2' - the buzzing airside, the motion and the magic beyond the runway. Years later, I got to live that dream during my internship at TIAL. Standing where planes takeoff, I realized - some childhood fantasies really do take flight"
            },
            {
                id: '2b',
                detailImg: null, 
                Organization: "Builtech Constructions", 
                role: "Summer Intern",
                duration: "July 2024 - August 2024",
                info: "The internship was at the Builtech Aura construction site. Had the opportunity to learn the basics of Civil Engineering aspects like large scale project execution, site supervision, Autocad basics and pile foundations"
            }
        ]
    }
    ,
    {
        id: 3,
        img: Portfolio3,
        title: "Projects",
        description: "A selection of key projects I have completed.",
        themeClass: "purple-theme", 
        details: [
            {
                id: '3a',
                // 🛠️ FIX APPLIED: Set detailImg to null to remove the image for the Portfolio Website
                detailImg: null, 
                role: "Portfolio Website (React)",
                duration: "Personal Project",
                info: "Built a fully responsive personal website using modern React principles and CSS."
            },
            {
                id: '3b',
                detailImg: project2, 
                role: "Real-Time Flow Monitoring for Canal Irrigation — A Vision for Sustainable India, Appreciated by Hon. MLA Rahul Mamkootathil",
                duration: "Academic Project",
                info: `Guided by the vision of a sustainable and equitable rural India, this project presents an Arduino based real-time canal water flow monitoring system to ensure transparency, efficiency and fairness in irrigation water distribution. By empowering farmers with real-time data, it helps prevent water disputes, enables smarter crop planning, and fosters responsible water management.

Developed collaboratively by Nabeel Vellakutty Naushad, Sahana S, and Ann Mariya K.J, the project embodies the spirit of innovation through teamwork and purpose driven engineering. It was <span class="highlight-gold">recognized and appreciated by Honourable MLA Rahul Mamkootathil</span> for its potential to transform rural irrigation systems and uplift farming communities.

A humble step towards technology driven sustainability, this project bridges the gap between innovation and impact, turning vision into real-world change.`
            }
        ]
    }
];

const Works = () => {
    const [selectedImage, setSelectedImage] = useState(null); 

    const openLightbox = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'>I am excited to share the projects, works and achievements.</span>
            
            <div className='worksGrid'> 
                {portfolioItems.map(item => (
                    <div key={item.id} className={`workBar ${item.themeClass}`}>
                        
                        <div className='workBarTextGroup'> 
                             <img src={item.img} alt={item.title} className='workBarImg' /> 
                             <div className='workBarText'>
                                 <h2>{item.title}</h2>
                                 <p>{item.description}</p>
                             </div>
                        </div>

                        <div className='workDetails'>
                            {item.details.map(detail => (
                                <div key={detail.id} className='workDetailItem'>
                                    <div className='detailContentContainer'>
                                        <div className='workDetailText'>
                                            {(detail.Institution || detail.Organization) && <h3>{detail.Institution || detail.Organization}</h3>}
                                            {detail.role && <p className='detailRole'>{detail.role}</p>}
                                            {detail.grade && <p className='detailGrade'>{detail.grade}</p>} 
                                            {detail.duration && <p className='detailDuration'>{detail.duration}</p>}
                                            {detail.info && <p className='detailInfo' dangerouslySetInnerHTML={{ __html: detail.info }}></p>}
                                        </div>
                                        {/* This block handles conditional image rendering: it only renders if detail.detailImg exists */}
                                        {detail.detailImg && (
                                            <div className='detailImageWrapper'>
                                                <img 
                                                    src={detail.detailImg} 
                                                    alt={detail.role} 
                                                    className={`workDetailImg ${detail.fullDisplay ? 'workDetailImg-full' : ''}`}
                                                    onClick={!detail.fullDisplay ? () => openLightbox(detail.detailImg) : undefined} 
                                                />
                                                {!detail.fullDisplay && <p className="imageClickText">Click to view full image</p>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

            <button className='workBtn'>See More</button>

            {selectedImage && (
                <div className="lightbox-modal" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
                        <img src={selectedImage} alt="Fullscreen Detail" className="lightbox-image" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Works;







