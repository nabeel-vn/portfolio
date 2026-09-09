import React from "react";
import { Link } from 'react-scroll';
import './intro.css';
import bg from '../../assets/image.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introGrid"></div>

            <div className="introInner">
                <div className="introContent">
                    <div className="statusRow">
                        <span className="statusDot"></span>
                        Open to opportunities
                    </div>

                    <span className="hello">Hello, I'm</span>
                    <h1 className="introName">
                        Nabeel Vellakutty<br />Naushad
                    </h1>
                    <p className="introRole">
                        Civil engineer with hands-on experience spanning airport infrastructure and marine and coastal construction, currently exploring where technology, real estate, and infrastructure meet.
                    </p>

                    <div className="introActions">
                        <Link
                            to="works"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="primaryBtn"
                        >
                            View my work
                        </Link>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="secondaryBtn"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>

                <div className="introPhotoWrap">
                    <div className="photoFrame">
                        <span className="corner cornerTL"></span>
                        <span className="corner cornerTR"></span>
                        <span className="corner cornerBL"></span>
                        <span className="corner cornerBR"></span>
                        <img src={bg} alt="Nabeel Vellakutty Naushad" className="bg" />
                    </div>

                    <div className="titleBlock">
                        <div className="titleBlockRow">
                            <span className="tbLabel">Discipline</span>
                            <span className="tbValue">Civil / Infrastructure / Marine / Real Estate</span>
                        </div>
                        <div className="titleBlockRow">
                            <span className="tbLabel">Status</span>
                            <span className="tbValue">Graduate, 2026</span>
                        </div>
                        <div className="titleBlockRow">
                            <span className="tbLabel">Based</span>
                            <span className="tbValue">Sultanate of Oman</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;