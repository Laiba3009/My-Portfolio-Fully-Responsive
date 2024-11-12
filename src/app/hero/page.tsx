import React from 'react';
import Image from "next/image";
import "../styles/hero.css"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Hero(){
    return(
       
        <div className="hero-sect">
        <div className="header-box">
        <div className='hero'> 
      <Image className="hero-imag" src={"/image/hero.png"} 
       alt="hero image" 
       width={500}
       height={450}
        />
        </div>
        <div className="center-text">
       <h1>
        I am Laiba <br />
         <span> Front-End </span> Developer
     </h1>
      <p>I build beautiful responsive, scalable, functional websites.
        Explore my porfoilo to see  my work in action and let's connect to build something amazing together!</p>
       <div className='link-icon'>
       <a href="https://github.com/Laiba3009">
       <FaGithub  className='git-icon'/>
       </a>
       <a href="https://www.instagram.com/laibajaweed8?igsh=MWZuYmVrcHA2eHR6Ng==">
       <FaInstagram  className='insta-icon'/>
       </a>
       <a href="https://www.facebook.com/profile.php?id=61550887534337&mibextid=ZbWKwL">
       <FaFacebook className='facebook-icon ' />
       </a>
       </div>
       <div> <button className='btn'>Connect Me</button></div>
        </div>
        </div>
        </div>
       
    )
}
          
export default Hero