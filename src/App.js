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
              color="inherit"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle sx={{ fontWeight: "bold" }}>
                B.Tech/Information Technology
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  I've done my Bachelors in Information Technology in VCET (2016
                  - 2020), HSC(2016) and SSLC(2014) in NAMMHSS. In 2021, I
                  prepared for GATE. In 2022, I've done web development courses
                  online in Udemy and GUVI.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button sx={{ textTransform: "none" }} onClick={handleClose}>
                  Close
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
