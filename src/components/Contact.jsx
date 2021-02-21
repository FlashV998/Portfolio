import React from "react"
import coffee from "../images/coffee.svg"
import wp from "../images/whatsapp1.svg"
import lin from "../images/linkedin.svg"
import ghub from "../images/github.svg"
const Contact=()=>{
  return(
    <div className="section" id="contact" style={{textAlign:"center" ,height:"60vh"}}>
    <h1 style={{marginTop:"7rem"}}>Contact Me</h1>
    <p className="leader">Sip your brew <img src={coffee}  style={{height:"2rem",marginBottom:"1rem"}} alt="coffee"></img><br/>& reach me through any of your favorite means.</p>
      <div className="container" style={{marginTop:"5rem"}}>
            <div className="row">
                  <div className=" col-4 col-md-4 "><a target="_blank" href="https://linkedin.com/in/chetanya-tomar998"><img className="contact-link1" src={lin}  style={{height:"4rem"}} alt="linkedIn"></img></a></div>
                  <div className=" col-4 col-md-4"><a target="_blank" href="https://api.whatsapp.com/send?phone=919410252833"><img className="contact-link2" src={wp}  style={{height:"4rem"}} alt="WhatsApp"></img></a></div>
                  <div className=" col-4 col-md-4"><a target="_blank" href="https://github.com/FlashV998"><img className="contact-link3" src={ghub}  style={{height:"4rem"}} alt="github"></img></a></div>
            </div>

      </div>




    </div>
  )
}

export default Contact
