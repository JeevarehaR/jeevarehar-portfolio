import { React } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
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
          <Link
            href=""
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
        </BottomNavigation>
      </Box>
    </div>
  );
}
