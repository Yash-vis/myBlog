import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";

import ProjectPage from "./components/NewsPage";
import HelpPage from "./components/HelpPage";
import TechGrid from "./components/TechGrid";
import HeroScene from "./components/HeroScene";


export default function Home() {
 



  return (
    <>
      <Navbar />
      <HeroText />
      <TechGrid/>
      <HeroScene />
      <ProjectPage/> 
      <HelpPage/>
     
    </>
  );
}
