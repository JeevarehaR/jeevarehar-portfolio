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
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export function ContactMe() {
  return (
    <div className="contacts" style={{ alignContent: "center" }}>
      <h2>Contact Me</h2>

      <Box
        sx={{
          alignContent: "center",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <BottomNavigation>
          <Link color="inherit" sx={{ padding: 1 }}>
            <Popup trigger={<PhoneIcon />} on={["hover"]} position="top center">
              <div style={{ color: "black" }}>+91 9025574760</div>
            </Popup>
          </Link>

          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMqjRjdQrmbQkLvCJLfswXKszsQSRtdDDtKLDbNgKLNKpDwNrTZCsnqdVXmWPZclqDNrvwG"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            <Popup trigger={<MailIcon />} on={["hover"]} position="top center">
              <div style={{ color: "black" }}>jeev.reh@gmail.com</div>
            </Popup>
          </Link>

          <Link
            href="https://github.com/JeevarehaR"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            <Popup
              trigger={<GitHubIcon />}
              on={["hover"]}
              position="top center"
            >
              <div style={{ color: "black" }}>github.com/JeevarehaR</div>
            </Popup>
          </Link>
          <Link
            href="https://goo.gl/maps/bNEA7KgbwZm7g4VW8"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            <Popup
              trigger={<LocationOnIcon />}
              on={["hover"]}
              position="top center"
            >
              <div style={{ color: "black" }}>TamilNadu,India</div>
            </Popup>
          </Link>
          <Link
            href="https://twitter.com/jvReyh"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            <Popup
              trigger={<TwitterIcon />}
              on={["hover"]}
              position="top center"
            >
              <div style={{ color: "black" }}>twitter.com/jvReyh</div>
            </Popup>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jeeva-reha-786790264/"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            <Popup
              trigger={<LinkedInIcon />}
              on={["hover"]}
              position="top center"
            >
              <div style={{ color: "black" }}>linkedin.com/jeeva-reha-</div>
            </Popup>
          </Link>
          <Link
            href="https://www.instagram.com/jvreyh/"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ padding: 1 }}
          >
            <Popup
              trigger={<InstagramIcon />}
              on={["hover"]}
              position="top center"
            >
              <div style={{ color: "black" }}>instagram.com/jvReyh</div>
            </Popup>
          </Link>
        </BottomNavigation>
      </Box>
    </div>
  );
}
