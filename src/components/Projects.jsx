import React from "react"
import docket from "../images/docket.png"
import invide from "../images/invide.png"
import netflix from "../images/netflix.png"
import taxargo from "../images/taxargo.png"
import keep from "../images/keep.png"


 const Projects=()=>{
   return (

              <section id="timeline">
               <h1>Some Of My Projects</h1>
               <p className="leader">All cards must be the same height and width for space calculations on large screens.</p>
               <div className="demo-card-wrapper">
                 <div className="demo-card demo-card--step1">
                   <div className="head">
                     <div className="number-box">
                       <span>01</span>
                     </div>
                     <h2>Taxargo<span className="small">freelance project</span> </h2>
                   </div>
                   <div className="body">
                     <p>A Freelance Project which allows the user to pay ITR returns and GST,according to client's needs.<br/>Node.js for backend,Mongodb for db and Razorpay API to handle payments. </p>
                     <img src={taxargo}></img>
                   </div>
                 </div>

                 <div className="demo-card demo-card--step2">
                   <div className="head">
                     <div className="number-box">
                       <span>02</span>
                     </div>
                     <h2>Invide Labs<span className="small">team project</span></h2>
                   </div>
                   <div className="body">
                     <p>Member of an Elite community,worked here as a WEB DEVELOPER on GCS'20.Handled the backend and implemented various technologies like jitsi.org and socket.js to improve the website even more compelling.</p>
                     <img src={invide} alt="Graphic" style={{height:"180px"}}></img>
                   </div>
                 </div>

                 <div className="demo-card demo-card--step3">
                   <div className="head">
                     <div className="number-box">
                       <span>03</span>
                     </div>
                     <h2>Netflix Clone<span className="small">personal project</span></h2>
                   </div>
                   <div className="body">
                     <p>Similar to Netflix,it's a clone of it created using React.js and used the TMDB API for getting its content.This whole application is deployed and hosted on FIREBASE as well. </p>
                     <img src={netflix} alt="Graphic"></img>
                   </div>
                 </div>

                 <div className="demo-card demo-card--step4">
                   <div className="head">
                     <div className="number-box">
                       <span>04</span>
                     </div>
                     <h2>Docket<span className="small">personal project</span></h2>
                   </div>
                   <div className="body">
                     <p>A web app whose backend is written in Node.js and database is handled through NoSQL Mongodb.It allows the user to register themselves and take down their To-Do List.</p>
                     <img src={docket} alt="Graphic" style={{height:"180px"}}></img>
                   </div>
                 </div>

                 <div className="demo-card demo-card--step5">
                   <div className="head">
                     <div className="number-box">
                       <span>05</span>
                     </div>
                     <h2>Keep CLone<span className="small">Personal Project</span></h2>
                   </div>
                   <div className="body">
                     <p>Similar to Google keep ,it helps you to take down notes.Implemented the concept of UI/UX with the help of React.js</p>
                     <img src={keep} alt="Graphic" style={{height:"180px"}}></img>
                   </div>
                 </div>

               </div>
              </section>

   )
 }

 export default Projects
