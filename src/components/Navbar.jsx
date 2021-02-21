

/* eslint-disable */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import coffee from "../images/coffee.svg"

 const Navbar=()=>{
   return(
     <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
     <div className="container">

        <a   href="#home"> <img className="  d-lg-none " src={coffee}  style={{height:"3rem",marginBottom:"1rem"}} alt="coffee"></img></a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
      </button>
  <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#timeline">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
   )
 }

 export default Navbar
