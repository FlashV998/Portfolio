
import React from "react"
import Typed from 'react-typed'

const Header=()=>{
  return(
    <div className="header-wrapper" id="home">
        <div className="header-info">
        <h2 className="glow">Let's Brew Something Together</h2>
<Typed className="typed-text"
strings={["Web Development","App Development","Cloud Practitioner"]}
typeSpeed={40}
backSpeed={50}
loop
 >
        </Typed>
        </div>
    </div>
  )
}

export default Header
