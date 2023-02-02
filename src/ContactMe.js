import { React } from "react";
import Box from "@mui/material/Box";

import BottomNavigation from "@mui/material/BottomNavigation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "@mui/material";

export function ContactMe() {
  return (
    <div className="contacts" style={{ margin: "30px 0" }}>
      <h2>Contact Me</h2>
      <Box
        sx={{
          alignContent: "center",
          display: "flex",
          justifyContent: "space-around",
          width: "400px",
          margin: "auto",
        }}
      >
        <span>+91 9025574760</span>
        <span> </span>
        <span>jeev.reh@gmail.com</span>
      </Box>

      <Box
        sx={{
          alignContent: "center",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <BottomNavigation>
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMqjRjdQrmbQkLvCJLfswXKszsQSRtdDDtKLDbNgKLNKpDwNrTZCsnqdVXmWPZclqDNrvwG"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            {<MailIcon />}
          </Link>
          <Link
            href="https://github.com/JeevarehaR"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            {<GitHubIcon />}
          </Link>
          <Link
            href="https://goo.gl/maps/bNEA7KgbwZm7g4VW8"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            {<LocationOnIcon />}
          </Link>
          <Link
            href="https://twitter.com/jvReyh"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            {<TwitterIcon />}
          </Link>
          <Link
            href="https://www.linkedin.com/in/jeeva-reha-786790264/"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            {<LinkedInIcon />}
          </Link>
          <Link
            href="https://www.instagram.com/jvreyh/"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            {<InstagramIcon />}
          </Link>
        </BottomNavigation>
      </Box>
    </div>
  );
}
