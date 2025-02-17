import React from "react";
import Test from "./components/Test";
import NavigationBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

export const metadata = {
  title: "Martin Portfolio",
};

function Home() {
  return (
    <div>
      
      <NavigationBar />
      <HeroSection name="MARTIN"/>
      <Test name="gtrmgoitrgmtro" description="This is a test description." />
    </div>
  );
}

export default Home;
