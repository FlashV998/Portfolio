
import React from 'react'


import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Particles from 'react-particles-js';


import Projects from "./components/Projects"
function App() {
  return (
    <>

    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50,
              density:{
                enable:true,
                value_area:900
              }
	        },"size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	    
	}} />
    <Navbar/>
    <Header/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
