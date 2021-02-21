import React from "react"
import List from "./List"
import dp1 from "../images/res.jpg"

const Skills=()=>{
  return(
            <div className="section" id="skills">

            <div className="card  shadow  bg-white rounded" style={{width: "80%",margin:"2rem auto"}}>
                <div className="row card-body">

                         <div className="  col-lg-6">
                            <div style={{textAlign: "center"}}><img className="img" src={dp1}></img></div>
                            <div>
                            <h2 style={{textAlign: "center",
                              fontSize: "1.57rem", margin:"2rem 0"}}>
                            MORE ABOUT ME
                            </h2>
                            <p style={{fontFamily: "'Zilla Slab', serif",fontSize:"1.05rem",textAlign:"left"}}>I'm a Coder and a Developer who loves to learn about new technologies and implement them.As a Freelancer I also take on projects that intrigues me.<br/>As a Full-Stack Developer my proficiency lies in React and Node.js.</p>
                            <p style={{fontFamily: "'Zilla Slab', serif",fontSize:"1.05rem",textAlign:"left"}}>Head towards Contact section to hire me for <strong>personal or team projects.</strong></p>
                            <p style={{fontFamily: "'Zilla Slab', serif",fontSize:"1.05rem",textAlign:"left"}}>Hit the link to download my resume: <a href="https://drive.google.com/file/d/1BfDKdSXaWy2ASMiVvll1c9oR-GaWTGlW/view?usp=drivesdk" target="_blank">Download Resume.</a></p>

                            </div>
                         </div>


                         <div className=" col-lg-6">
                          <div>
                            <h2 style={{textAlign: "center",
                            fontSize: "1.57rem"}}>MY ARSENAL</h2>
                            <List/>
                          </div>
                        </div>


                </div>

              </div>
              </div>


  )
}
export default Skills
