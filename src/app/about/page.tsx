import Image from "next/image";
import "../styles/about.css"
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



function About(){
    return(
        
            <div className="about">
      <div className="about-sect">
        <Image
          className="about-imag"
          src="/image/about-imag.png"
          alt="about image"
          width={400}
          height={400}
        />
        </div>
        <div className="text">
          <h2 className="about-text">About Me</h2>
          <p>
            I am a Frontend Developer with a passion for creating high-quality,
            responsive, and scalable websites. With a strong foundation in HTML,
            CSS, and TypeScript, Next.js. I am a student at GIAIC, pursuing a
            course in Artificial Intelligence, Web 3.0, & Metaverse. Passionate
            about technology and constantly learning new skills to stay up-to-date
            with the latest innovations. Take a look around and let's get in touch.
          </p>
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
          </div>
        </div>
    )
}
export default About