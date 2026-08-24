import React from "react";
import './intro.css';
import bg from '../../assets/image.png'; // 👈 Path is lowercase

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Nabeel Vellakutty<br/> Naushad</span> <br />Dreamer</span>
            </div>
            <img src={bg} alt="profile" className="bg" />

        </section>
    )
}

export default Intro;