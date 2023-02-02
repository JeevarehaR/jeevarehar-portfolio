import React from "react";
import Typography from "@mui/material/Typography";

export function AboutMe() {
  return (
    <div>
      <br />
      <br />
      <h2>About Me</h2>
      <Typography>
        <h4>
          <span>I'm</span> <span className="myname">Jeevareha R 👋🏻</span>
        </h4>
        <p>
          I'm a self-taught web developer, passionate in designing high
          performance software applications considering the user experience and
          design flow. I believe in combining good design, technology and
          innovation in all my projects. Currently I'm focused on MERN Stack.
        </p>
      </Typography>
      <br />
    </div>
  );
}
