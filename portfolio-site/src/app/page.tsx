import React from "react";
import Test from "./components/Test";
import NavigationBar from "./components/NavBar";

export const metadata = {
  title: "Martin Portfolio",
};

function Home() {
  return (
    <div>
      
      <NavigationBar />
      <Test name="gtrmgoitrgmtro" description="This is a test description." />
    </div>
  );
}

export default Home;
