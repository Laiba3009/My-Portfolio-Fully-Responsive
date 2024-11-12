import "../styles/contact.css"
import React from "react";


function Contact(){
    return(
        <main className="contact">
            <div className="form-cont">
                <h1 className="con-tittle">Contact Us</h1>
                <form action="" className="form">
                    <input type="text"  placeholder="Enter Your Name"/>
                    <input type="email"  placeholder="abc@gmail.com"/>
                    <input className="msg" type="text"  placeholder="your  message"/>

                </form>
                <button className="btn-sub"> Submit </button>
            </div>
        </main>
    )
}
export default Contact