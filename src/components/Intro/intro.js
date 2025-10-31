
import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Nabeel Vellakutty<br/> Naushad</span> <br />Dreamer</span>
                
                {/* 🎯 FIX APPLIED HERE: Added 'to="contact"' prop */}
                <Link to="contact" smooth={true} duration={500} offset={-50}>
                    <button className="btn">
                        <img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me
                    </button>
                </Link>
                
            </div>
            <img src={bg} alt="profile" className="bg" />

        </section>
    )
}

export default Intro;

