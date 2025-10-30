
import React, { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);

   return (
       <nav className="navbar">
           {/* LOGO: Lowercase 'nabeel' text for gradient styling */}
           <div className='logo'>nabeel</div>

           <div className="desktopMenu">
               <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
               <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
               <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
           </div>

           {/* Contact Button Fix: Wrapped children in a React Fragment <>...</> */}
           <Link
               activeClass='active'
               to="contact"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="desktopMenuBtn"
           >
               <>
                   <img src={contactImg} alt="Contact Icon" className="desktopMenuImg" />
                   Contact Me
               </>
           </Link>

           <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />

           {/* Mobile Menu */}
           <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
               <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
               <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
               <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
               <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
           </div>
       </nav>
   );
};

export default Navbar;
