import React from "react";
import Test from "./components/Test";
import NavigationBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MotionBox from "./components/MotionBox";

export const metadata = {
  title: "Martin Portfolio",
};

function Home() {
  return (
    <div>
      <MotionBox>
        <NavigationBar />
      </MotionBox>

      <MotionBox>
        <Test name="gtrmgoitrgmtro" description="This is a test description." />
      </MotionBox>
      <HeroSection name="MARTIN" />
    </div>
  );
}

export default Home;
