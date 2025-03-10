import React from "react";
import NavBar from "../../components/NavBar";
import AboutMe from "../../components/AboutMe";

export const metadata = {
  title: "About Martin",
};

function AboutPage() {
  return (
    <div>
      <NavBar />
      <AboutMe />
    </div>
  );
}

export default AboutPage;
