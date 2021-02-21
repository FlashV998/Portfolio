import React from "react"
import aws from "../images/amazon_aws-icon.svg"
import mongo from "../images/mongodb-icon.svg"
import node from "../images/nodejs-icon.svg"
import reactjs from "../images/reactjs-ar21.svg"

const List=()=>{
  return (
  <div>
  <div className="List">
    <div><img className="imag" src={reactjs}></img></div>
    <div><img className="imag" src={node}></img></div>
    <div><img className="imag" src={mongo}></img></div>
    <div><img className="imag" src={aws}></img></div>
  </div>



  <div className="List">


  <div className="list1 vl">
    <ul className="list-content">
        <li><h6>HTML & CSS</h6></li>
        <li><h6>Javascript</h6></li>
        <li><h6>Node.js</h6></li>
        <li><h6>MongoDB</h6></li>
        <li><h6>AWS</h6></li>
        <li><h6>Java</h6></li>
    </ul>
  </div>

  <div className="list1 vl">
    <ul className="list-content">
    <li><h6>React.js</h6></li>
    <li><h6>Redux</h6></li>
    <li><h6>React Native</h6></li>
    <li><h6>Ember.js</h6></li>
    <li><h6>Linux</h6></li>
    <li><h6>REST APIs</h6></li>


    </ul>
  </div>




  </div>

  </div>
  )
}

export default List
