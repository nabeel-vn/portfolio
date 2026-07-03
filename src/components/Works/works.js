import React, { useState } from "react";
import "./works.css";

// Assets
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
        id: "1a",
        detailImg: Jyothi,
        Institution: "Jyothi Engineering College",
        role: "Bachelor of Technology",
        duration: "2022 - 2026",
        info:
          "Building a foundation in Civil Engineering by integrating technology and sustainability.",
        fullDisplay: true,
      },
      {
        id: "1b",
        detailImg: isn,
        Institution: "Indian School Nizwa",
        role: "High school",
        grade: "1 - 10",
        info: "Completed high school at ISN, Oman.",
        fullDisplay: true,
      },
    ],
  },
  {
    id: 2,
    img: Portfolio2,
    title: "Experience",
    description: "Professional work history and internships.",
    themeClass: "blue-theme",
    details: [
      {
        id: "2a",
        detailImg: tial1,
        Organization: "Thiruvananthapuram International Airport",
        role: "Internship",
        duration: "24th June 2025 - 30th June 2025",
        info:
          "A childhood dream internship at the airport that inspired my journey.",
      },
      {
        id: "2b",
        Organization: "Builtech Constructions",
        role: "Summer Intern",
        duration: "July 2024 - August 2024",
        info:
          "Learned AutoCAD, site supervision, and construction workflows.",
      },
      {
        id: "2c",
        detailImgs: [agec, agec1, agec2, agec3],
        Organization: "Arabian Gulf Engineering Consultancy",
        role: "Engineering Intern",
        duration: "Feb 2026",
        info:
          "Hands-on RCC supervision, reinforcement inspection, and site execution.",
      },
    ],
  },
  {
    id: 3,
    img: Portfolio3,
    title: "Projects",
    description: "Key academic and engineering projects.",
    themeClass: "purple-theme",
    details: [
      {
        id: "3a",
        Organization:
          "AI-Based Vehicle Detection and Traffic Flow Optimization System",
        role: "Final Year Project",
        duration: "Final Year",
        info:
          "Real-time YOLOv5-based traffic detection system for adaptive signal control.",
      },
      {
        id: "3b",
        detailImg: project2,
        Organization: "Canal Irrigation Flow Monitoring System",
        role: "Mini Project",
        duration: "Final Year",
        info:
          "Arduino-based smart irrigation monitoring system improving water distribution.",
      },
    ],
  },
];

const Works = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openGalleryId, setOpenGalleryId] = useState(null);

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I am excited to share my projects and experience.
      </span>

      <div className="worksGrid">
        {portfolioItems.map((item) => (
          <div key={item.id} className={`workBar ${item.themeClass}`}>
            <div className="workBarTextGroup">
              <img src={item.img} alt={item.title} className="workBarImg" />
              <div className="workBarText">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>

            <div className="workDetails">
              {item.details.map((detail) => (
                <div key={detail.id} className="workDetailItem">
                  <div className="detailContentContainer">
                    <div className="workDetailText">
                      {(detail.Institution || detail.Organization) && (
                        <h3>
                          {detail.Institution || detail.Organization}
                        </h3>
                      )}

                      {detail.role && (
                        <p className="detailRole">{detail.role}</p>
                      )}

                      {detail.duration && (
                        <p className="detailDuration">{detail.duration}</p>
                      )}

                      {detail.info && (
                        <p className="detailInfo">{detail.info}</p>
                      )}

                      {detail.detailImgs && (
                        <div className="galleryContainer">
                          <span
                            className="clickHereText"
                            onClick={() =>
                              setOpenGalleryId(
                                openGalleryId === detail.id ? null : detail.id
                              )
                            }
                          >
                            {openGalleryId === detail.id
                              ? "Hide images"
                              : "View images"}
                          </span>

                          {openGalleryId === detail.id && (
                            <div className="detailImageGallery">
                              {detail.detailImgs.map((img, idx) => (
                                <img
                                  key={idx}
                                  src={img}
                                  alt="gallery"
                                  className="galleryImg"
                                  onClick={() => setSelectedImage(img)}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {detail.detailImg && (
                      <div className="detailImageWrapper">
                        <img
                          src={detail.detailImg}
                          alt="detail"
                          className={`workDetailImg ${
                            detail.fullDisplay ? "workDetailImg-full" : ""
                          }`}
                          onClick={
                            !detail.fullDisplay
                              ? () => setSelectedImage(detail.detailImg)
                              : undefined
                          }
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
        <div className="lightbox-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
            <img
              src={selectedImage}
              alt="fullscreen"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
