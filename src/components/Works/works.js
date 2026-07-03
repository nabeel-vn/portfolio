
import React, { useState } from 'react';
import './works.css';

// Asset Imports
import Portfolio1 from "../../assets/portfolio-1.png";
import Jyothi from "../../assets/jyothi.png";
import isn from "../../assets/isn.png";
import Portfolio2 from "../../assets/experience.png";
import Portfolio3 from "../../assets/project_works.png";
import tial1 from "../../assets/tial1.png";
import project2 from "../../assets/project2.png";
import agec from "../../assets/agec.png";
import agec1 from "../../assets/agec1.png";
import agec2 from "../../assets/agec2.png";
import agec3 from "../../assets/agec3.png";

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
        info: "Building a foundation in Civil Engineering by integrating technology and sustainability to shape the future.",
        fullDisplay: true
      },
      {
        id: '1b',
        detailImg: isn,
        Institution: "Indian School Nizwa",
        role: "High school",
        grade: "1 - 10",
        info: "Completed my high school at ISN in Nizwa, Oman.",
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
        info: "A childhood dream that finally took flight: As a kid I was mesmerized by the airport scenes in 'Cars 2' - the buzzing airside, the motion and the magic beyond the runway. Years later, I got to live that dream during my internship at TIAL. Standing where planes takeoff, I realized - some childhood fantasies really do take flight."
      },
      {
        id: '2b',
        detailImg: null,
        Organization: "Builtech Constructions",
        role: "Summer Intern",
        duration: "July 2024 - August 2024",
        info: "The internship was at the Builtech Aura construction site. Had the opportunity to learn the basics of Civil Engineering aspects like large scale project execution, site supervision, Autocad basics and pile foundations."
      },
      {
        id: '2c',
        detailImgs: [agec, agec1, agec2, agec3],
        Organization: "Arabian Gulf Engineering Consultancy",
        role: "Engineering Intern",
        duration: "16 February 2026 - 28 February 2026",
        info: "Engineering extends beyond classrooms - it takes shape on construction sites, where theory is transformed into real structures. During my internship I gained hands-on exposure to RCC structural supervision, reinforcement inspection, bar bending schedule (BBS) verification, and various site execution practices. Learning directly on site under the guidance of my father reinforced that engineering is a responsibility built on precision and integrity."
      }
    ]
  },
  {
    id: 3,
    img: Portfolio3,
    title: "Projects",
    description: "A selection of key projects I have completed.",
    themeClass: "purple-theme",
    details: [
      {
        id: '3a',
        detailImg: null,
        Organization: "A Real-Time Vehicle Detection and Novel Vehicle Tracking System for Estimating and Controlling Traffic Flow on Highways",
        role: "Academic Project",
        duration: "Final Year Project",
        info: `An intelligent traffic monitoring and adaptive control system using YOLOv5-based real-time vehicle detection and tracking techniques.
        <ul> 
          <li><strong>Top Recognition:</strong> Named District Level Winners of YIP 8.0 (Category 2–4) and awarded a Rs. 25,000/- cash prize.</li> 
          <li><strong>Multi-Class Detection:</strong> Automated classification and counting of heterogeneous traffic (cars, buses, trucks, 2/3-wheelers) from live video feeds at major urban intersections.</li> 
          <li><strong>High Precision:</strong> Trained and optimized the YOLO model for Indian mixed-traffic conditions, achieving a stellar accuracy with a Mean Absolute Percentage Error (MAPE) as low as <span class="highlight-gold">4.09%</span>.</li> 
          <li><strong>Traffic Engineering:</strong> Evaluated flow characteristics, roadway capacity, delay, and Level of Service (LOS) using Indo-HCM 2017 standards.</li> 
          <li><strong>Smart Control:</strong> Designed adaptive signal control algorithms using Webster’s method and Deep Reinforcement Learning (DRL)-inspired concepts to minimize congestion.</li> 
          <li><strong>Proven Simulation:</strong> Validated the system in SUMO (Simulation of Urban Mobility), proving its real-world efficiency by achieving an approximate <span class="highlight-gold">42% reduction in network delay</span>.</li> 
          <li><strong>Core Stack:</strong> Gained practical expertise in Computer Vision, Deep Learning, Python, OpenCV, YOLOv5, SUMO, and IoT.</li> 
        </ul>`
      },
      {
        id: '3b',
        detailImg: project2,
        Organization: "Real-Time Flow Monitoring for Canal Irrigation",
        role: "Mini Project",
        duration: "Final Year Project",
        info: `Guided by the vision of a sustainable and equitable rural India, this project presents an Arduino based real-time canal water flow monitoring system to ensure transparency, efficiency and fairness in irrigation water distribution. By empowering farmers with real-time data, it helps prevent water disputes, enables smarter crop planning, and fosters responsible water management. <br/><br/> Developed collaboratively by Nabeel Vellakutty Naushad, Sahana S, and Ann Mariya K.J. It was <span class="highlight-gold">recognized and appreciated by Honourable MLA Rahul Mamkootathil</span> for its potential to transform rural irrigation systems.`
      }
    ]
  }
];

const Works = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const openLightbox = (imgSrc) => setSelectedImage(imgSrc);
  const closeLightbox = () => setSelectedImage(null);

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
                      {detail.duration && <p className='detailDuration'>{detail.duration}</p>}
                      {detail.info && <p className='detailInfo' dangerouslySetInnerHTML={{ __html: detail.info }}></p>}
                      
                      {/* Special Gallery for AGEC Internship */}
                      {detail.detailImgs && (
                        <div className="galleryContainer">
                          <span className="clickHereText" onClick={() => setShowGallery(!showGallery)}>
                            {showGallery ? "Click here to hide images" : "Click here to view the images"}
                          </span>
                          {showGallery && (
                            <div className="detailImageGallery">
                              {detail.detailImgs.map((img, idx) => (
                                <img key={idx} src={img} alt="Work" className="galleryImg" onClick={() => openLightbox(img)} />
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Standard Single Image (Logos) */}
                    {detail.detailImg && (
                      <div className='detailImageWrapper'>
                        <img 
                          src={detail.detailImg} 
                          alt={detail.role} 
                          className={`workDetailImg ${detail.fullDisplay ? 'workDetailImg-full' : ''}`}
                          onClick={!detail.fullDisplay ? () => openLightbox(detail.detailImg) : undefined} 
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
            <img src={selectedImage} alt="Fullscreen View" className="lightbox-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
