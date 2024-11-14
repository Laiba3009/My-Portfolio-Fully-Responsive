import "../styles/project.css"
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";


function Project(){
    return(
    <div>
        <h1 className="pro-text">My Projects</h1>

        <div className="box-cont">
     <div className="box">
     <Image className="box-imag" src={"/image/contdown.png"} 
       alt="countdown image" 
       width={350}
       height={300}
        />
        <h3 className="box-nam">Countdown Timer</h3>
        <p className="pp-tex">A Next.js  and Typescript powered  website to truck time with an interactive countdown feature</p>
        <div className="pro-icon">
        <a className="click" href="https://github.com/Laiba3009/Countdown-Timer-Project">
        <FaGithub  className='p-icon'/>
        </a>
        <a  className= "click" href="https://countdown-timer-project-psi.vercel.app/">
        <TbBrandVercel className="p-icon" />
        </a>
        </div>
     </div>
     <div className="box">
     <Image className="box-imag" src={"/image/virtual assistant.png"} 
       alt="countdown image" 
       width={350}
       height={300}
        />
        <h3 className="box-nam">Virtual Assistant</h3>
        <p className="pp-tex">Alexa your virtual assistant built with HTML CSS and JavaScript.
         Alexa is a powerful tool designed.
        </p>
        <div className="pro-icon">
        <a  className="click" href="https://github.com/Laiba3009/My-Virtual-Assistant">
        <FaGithub  className='p-icon'/>
        </a>
        <a  className= "click" href="https://my-virtual-assistant-rust.vercel.app/">
        <TbBrandVercel className="p-icon" />
        </a>
        </div>
     </div>
     <div className="box">
     <Image className="box-imag" src={"/image/portfolio.png"} 
       alt="countdown image" 
       width={350}
       height={300}
        />
        <h3 className="box-nam">Portfolio</h3>
        <p className="pp-tex">My Portfolio fully responsive Animation creating a HTML CSS and JAVASCRIPT website.</p>
       
       <div className="pro-icon">
          <a  className="click" href="https://github.com/Laiba3009/My-Portfolio">
        <FaGithub  className='p-icon'/>
        </a>
        <a  className= "click" href="https://my-portfolio-three-rho-81.vercel.app/">
        <TbBrandVercel className="p-icon" />
        </a>
        </div>
     </div>
        </div>
        </div>
    )
}
export default Project
