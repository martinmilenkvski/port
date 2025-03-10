import React from "react";
import Test from "./components/Test";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MotionBox from "./components/MotionBox";
import ScrollAnimation from "./components/ScrollAnimation";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import CircularText from './components/CircularText';

export const metadata = {
  title: "Martin Portfolio",
};

function Home() {
  return (
    <div>
      <MotionBox>
        <NavBar />
      </MotionBox>

      <MotionBox>
        <Test name="gtrmgoitrgmtro" description="This is a test description." />
      </MotionBox>
      <HeroSection name="MARTIN" />

      <ScrollAnimation>
        <div className="p-4 bg-gray-100 my-8">
          <h2 className="text-2xl">TEST</h2>
          <p>Fade i scroll</p>
        </div>
      </ScrollAnimation>

      <CircularText
        text="REACT*BITS*COMPONENTS*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
      
      <ProjectsSection />

      <Footer />
    </div>
  );
}

export default Home;
