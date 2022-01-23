import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Codigofacilito from "../components/codigofacilito"
import EducationNav from "../components/education-nav"
import AboutMe from "../components/about-me"
import Skills from "../components/skills"
import Modal from "../components/modal";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Contact from "../components/contact.form";

export default () => <div>
   <Navbar/>
   <Header/> 
   <AboutMe/>
   <Skills/>
   <EducationNav/>
   <Projects/> 
   <Repos/>
   <Codigofacilito/>
   <Contact/>
</div>
