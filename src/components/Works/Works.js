import React, { useState } from 'react';
import './works.css';

// Asset Imports
import Jyothi from "../../assets/jyothi.png";
import isn from "../../assets/isn.png";
import tial1 from "../../assets/tial1.png";
import project2 from "../../assets/project2.png";
import agec from "../../assets/agec.png";
import agec1 from "../../assets/agec1.png";
import agec2 from "../../assets/agec2.png";
import agec3 from "../../assets/agec3.png";
import detonator1 from "../../assets/detonator1.png";
import detonator2 from "../../assets/detonator2.png";
import detonator3 from "../../assets/detonator3.png";
import detonator4 from "../../assets/detonator4.png";
import detonator5 from "../../assets/detonator5.png";
import detonator6 from "../../assets/detonator6.png";
import detonator7 from "../../assets/detonator7.png";
import detonator8 from "../../assets/detonator8.png";
//import fins1 from "../../assets/fins1.png";
//import fins2 from "../../assets/fins2.png";
//import fins3 from "../../assets/fins3.png";


const portfolioItems = [
  {
    id: 1,
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
    title: "Experience",
    description: "A summary of my professional work history and roles.",
    themeClass: "blue-theme",
    details: [
      {
        id: '2b',
        detailImg: null,
        Organization: "Builtech Constructions",
        location: "Palakkad, Keralam, India",
        role: "Summer Intern",
        duration: "July 2024 - August 2024",
        info: "The internship was at the Builtech Aura construction site. Had the opportunity to learn the basics of Civil Engineering aspects like large scale project execution, site supervision, Autocad basics and pile foundations."
      },
      {
        id: '2a',
        detailImg: tial1,
        Organization: "Thiruvananthapuram International Airport (Adani Airport Holdings Ltd)",
        role: "Internship",
        duration: "24th June 2025 - 30th June 2025",
        location: "Thiruvananthapuram, Keralam, India",
        info: "A childhood dream that finally took flight: As a kid I was mesmerized by the airport scenes in 'Cars 2' - the buzzing airside, the motion and the magic beyond the runway. Years later, I got to live that dream during my internship at TIAL. Standing where planes takeoff, I realized - some childhood fantasies really do take flight."
      },
      {
        id: '2c',
        detailImgs: [agec, agec1, agec2, agec3],
        Organization: "Arabian Gulf Engineering Consultancy",
        role: "Engineering Intern",
        duration: "16 February 2026 - 28 February 2026",
        location: "Nizwa, Sultanate of Oman",
        info: "Engineering extends beyond classrooms - it takes shape on construction sites, where theory is transformed into real structures. During my internship I gained hands-on exposure to RCC structural supervision, reinforcement inspection, bar bending schedule (BBS) verification, and various site execution practices. Learning directly on site under the guidance of my father reinforced that engineering is a responsibility built on precision and integrity."
      },
      {
        id: '2d',
        Organization: "Detonator Engineering Company LLC",
        location: "Muscat Governorate, Sultanate of Oman",
        role: "Marine Engineering Intern",
        duration: "01-08-2026 - Present",
        phases: [
          {
            id: '2d-1',
            phaseLabel: "Phase 1 - Haramil Project",
            detailImgs: [detonator1, detonator2, detonator3, detonator4, detonator5, detonator6, detonator7, detonator8],
            info: "<p><strong>Marine and Coastal Construction | Oman</strong></p><p>Gained practical exposure to marine and coastal infrastructure construction, observing the execution of shoreline protection and marine structures from site preparation through placement and construction. The experience involved understanding construction methodologies, drawings, site levels and profiles, as well as quality-control and consultant inspection processes in a marine environment.</p><p><strong>Key Exposure</strong></p><ul><li>Understanding construction sequences and site preparation</li><li>Interpretation of marine construction drawings, levels, chainages and profiles</li><li>Boat ramp construction and associated marine works</li><li>Crown wall construction and coastal structural works</li><li>Core-Loc® placement and installation procedures</li><li>Rock and armour protection works</li><li>Monitoring execution against approved drawings and specifications</li><li>Quality-control practices in marine construction</li><li>Consultant inspections and implementation of site observations</li><li>HSE practices and coordination within an active construction site</li></ul><p><em>Focus: <span class=\"highlight-gold\">Marine Construction</span>, <span class=\"highlight-gold\">Coastal Infrastructure</span>, <span class=\"highlight-gold\">Shore Protection</span>, <span class=\"highlight-gold\">Crown Walls</span>, <span class=\"highlight-gold\">Core-Loc® Placement</span>, <span class=\"highlight-gold\">Rock and Armour Works</span>, <span class=\"highlight-gold\">Site Supervision</span></em></p>"
          },
          {
            id: '2d-2',
            phaseLabel: "Phase 2 - Fins Coastal Protection Project",
            //detailImgs: [fins1, fins2, fins3],
            info: "<p><strong>Marine and Coastal Construction | Oman</strong></p><p>Unlike the Haramil Project, which was nearing its final stages, the Fins Main Breakwater (MBW) was encountered at an early stage of construction — offering a valuable contrast in perspective, from the foundational setup of a marine project through to its initial execution on site. Gained hands-on exposure to Core-Loc® casting and curing at the casting yard, studied the concrete mix design in detail, and reviewed the project specifications and the contractor's scope of work. Also observed rock armour gradation, stockpile management, and the placement of rock armour at different levels and chainages along the breakwater.</p><p><strong>Key Exposure</strong></p><ul><li>Witnessed Core-Loc® casting and curing processes at the casting yard</li><li>Studied concrete mix design in detail</li><li>Reviewed project specifications and the contractor's scope of work</li><li>Understood rock armour gradation requirements</li><li>Observed stockpile management and material handling</li><li>Rock armour placement across different levels and chainages</li><li>Exposure to site equipment used in marine construction</li><li>Interpretation of breakwater engineering drawings and layouts</li><li>Consultant inspections and site observation follow-up</li></ul><p><em>Focus: <span class=\"highlight-gold\">Early-Stage Marine Construction</span>, <span class=\"highlight-gold\">Core-Loc® Casting</span>, <span class=\"highlight-gold\">Concrete Mix Design</span>, <span class=\"highlight-gold\">Rock Armour Gradation</span>, <span class=\"highlight-gold\">Casting Yard Operations</span>, <span class=\"highlight-gold\">Breakwater Construction</span></em></p>"
          }
        ]
      }
    ]
  },
  {
    id: 3,
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
        info: "An intelligent traffic monitoring and adaptive control system using YOLOv5-based real-time vehicle detection and tracking techniques.<ul><li><strong>Top Recognition:</strong> Named District Level Winners of YIP 8.0 (Category 2-4) and awarded a Rs. 25,000/- cash prize.</li><li><strong>Multi-Class Detection:</strong> Automated classification and counting of heterogeneous traffic (cars, buses, trucks, 2/3-wheelers) from live video feeds at major urban intersections.</li><li><strong>High Precision:</strong> Trained and optimized the YOLO model for Indian mixed-traffic conditions, achieving a stellar accuracy with a Mean Absolute Percentage Error (MAPE) as low as <span class=\"highlight-gold\">4.09%</span>.</li><li><strong>Traffic Engineering:</strong> Evaluated flow characteristics, roadway capacity, delay, and Level of Service (LOS) using Indo-HCM 2017 standards.</li><li><strong>Smart Control:</strong> Designed adaptive signal control algorithms using Webster's method and Deep Reinforcement Learning (DRL)-inspired concepts to minimize congestion.</li><li><strong>Proven Simulation:</strong> Validated the system in SUMO (Simulation of Urban Mobility), proving its real-world efficiency by achieving an approximate <span class=\"highlight-gold\">42% reduction in network delay</span>.</li><li><strong>Core Stack:</strong> Gained practical expertise in Computer Vision, Deep Learning, Python, OpenCV, YOLOv5, SUMO, and IoT.</li></ul>"
      },
      {
        id: '3b',
        detailImg: project2,
        Organization: "Real-Time Flow Monitoring for Canal Irrigation",
        role: "Mini Project",
        duration: "Final Year Project",
        info: "Guided by the vision of a sustainable and equitable rural India, this project presents an Arduino based real-time canal water flow monitoring system to ensure transparency, efficiency and fairness in irrigation water distribution. By empowering farmers with real-time data, it helps prevent water disputes, enables smarter crop planning, and fosters responsible water management.<br/><br/>Developed collaboratively by Nabeel Vellakutty Naushad, Sahana S, and Ann Mariya K.J. It was <span class=\"highlight-gold\">recognized and appreciated by Honourable MLA Rahul Mamkootathil</span> for its potential to transform rural irrigation systems."
      }
    ]
  }
];

const Works = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openGalleries, setOpenGalleries] = useState({});

  const openLightbox = (imgSrc) => setSelectedImage(imgSrc);
  const closeLightbox = () => setSelectedImage(null);
  const toggleGallery = (key) => {
    setOpenGalleries(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I am excited to share the projects, works and achievements.</span>

      <div className="worksGrid">
        {portfolioItems.map(item => (
          <div key={item.id} className={`workBar ${item.themeClass}`}>

            <div className="workBarTextGroup">
              {item.title === "Education" && (
                <svg viewBox="0 0 24 24" className="workBarImg workBarIcon" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9l11 6 9-4.91V17"/>
                  <path d="M5 10.5V16c0 1 3 3 7 3s7-2 7-3v-5.5"/>
                </svg>
              )}
              {item.title === "Experience" && (
                <svg viewBox="0 0 24 24" className="workBarImg workBarIcon" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )}
              {item.title === "Projects" && (
                <svg viewBox="0 0 24 24" className="workBarImg workBarIcon" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              )}
              <div className="workBarText">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>

            <div className="workDetails">
              {item.details.map(detail => (
                <div key={detail.id} className="workDetailItem">
                  <div className="detailContentContainer">
                    <div className="workDetailText">
                      {(detail.Institution || detail.Organization) && <h3>{detail.Institution || detail.Organization}</h3>}
                      {detail.location && <p className="detailLocation">{detail.location}</p>}
                      {detail.role && <p className="detailRole">{detail.role}</p>}
                      {detail.duration && <p className="detailDuration">{detail.duration}</p>}

                      {!detail.phases && detail.info && (
                        <p className="detailInfo" dangerouslySetInnerHTML={{ __html: detail.info }}></p>
                      )}

                      {!detail.phases && detail.detailImgs && (
                        <div className="galleryContainer">
                          <span className="clickHereText" onClick={() => toggleGallery(detail.id)}>
                            {openGalleries[detail.id] ? "Click here to hide images" : "Click here to view the images"}
                          </span>
                          {openGalleries[detail.id] && (
                            <div className="detailImageGallery">
                              {detail.detailImgs.map((img, idx) => (
                                <img key={idx} src={img} alt="Work" className="galleryImg" onClick={() => openLightbox(img)} />
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {detail.phases && detail.phases.map(phase => (
                        <div key={phase.id} className="phaseBlock">
                          <h4 className="phaseLabel">{phase.phaseLabel}</h4>
                          {phase.info && (
                            <p className="detailInfo" dangerouslySetInnerHTML={{ __html: phase.info }}></p>
                          )}
                          {phase.detailImgs && phase.detailImgs.length > 0 && (
                            <div className="galleryContainer">
                              <span className="clickHereText" onClick={() => toggleGallery(phase.id)}>
                                {openGalleries[phase.id] ? "Click here to hide images" : "Click here to view the images"}
                              </span>
                              {openGalleries[phase.id] && (
                                <div className="detailImageGallery">
                                  {phase.detailImgs.map((img, idx) => (
                                    <img key={idx} src={img} alt="Work" className="galleryImg" onClick={() => openLightbox(img)} />
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {detail.detailImg && (
                      <div className="detailImageWrapper">
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