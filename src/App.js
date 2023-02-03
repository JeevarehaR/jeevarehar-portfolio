import "./App.css";
import { React, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import { Divider, Toolbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import data from "./data.json";
import { Button } from "@mui/material";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { ProjectsCard } from "./ProjectsCard";
import { ContactMe } from "./ContactMe";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

export function App() {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0, minHeight: "100vh" }} elevation={0}>
        <div className="App">
          <Toolbar sx={{ float: "right" }}>
            <Button
              variant="inherit"
              sx={{
                textTransform: "none",
                fontFamily: "Rouge Script, cursive",
                fontSize: "24px",
              }}
              onClick={handleClickOpen}
            >
              Qualifications
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle sx={{ color: " #555A8f", fontWeight: "bold" }}>
                B.Tech/Information Technology
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  I've done my Bachelors in Information Technology (2016 - 2020)
                  in VCET, Madurai. While, HSC and SSLC in NAMMHSS, Ramnad.
                  After graduation, I self-trained myself and got an Udemy
                  Certificate as well I completed Full (MERN) Stack Development
                  Course from GUVI in 2022.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={handleClose}>
                  Pop
                </Button>
              </DialogActions>
            </Dialog>

            <Button
              sx={{
                marginLeft: 2,
              }}
              color="inherit"
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            ></Button>
          </Toolbar>
          <CssBaseline />
          <Container maxWidth="md">
            <AboutMe />
            <Divider />
            <Skills data={data} />
            <Divider />
            <ProjectsCard />
          </Container>
          <Divider />
          <ContactMe />
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
