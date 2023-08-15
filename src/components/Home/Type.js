import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student",
          "Software Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "AI Developer",
          "Blockchain Developer",
          "Android Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
