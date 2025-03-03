import React from "react";
import MotionBox from "./MotionBox";

function Footer() {
  return (
    <MotionBox>
      <footer className="p-4 bg-gray-800 mt-8">
        <p className="text-center text-sm text-white">© 2023 Martin Portfolio. All rights reserved.</p>
      </footer>
    </MotionBox>
  );
}

export default Footer;
