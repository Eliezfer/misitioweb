import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Codigofacilito from "../components/codigofacilito"
import EducationNav from "../components/education-nav"
import AboutMe from "../components/about-me"
import Skills from "../components/skills"
import Modal from "../components/modal";
import Navbar from "../components/navbar";


export default () => <div>
   <Navbar/>
   <Modal/>
   <Header/> 
   <AboutMe/>
   <Skills/>
   <EducationNav/>
   <Repos/>
   <Codigofacilito/>
</div>
