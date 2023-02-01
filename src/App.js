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
import { Breads } from "./Breads";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { ProjectsCard } from "./ProjectsCard";
import { ContactMe } from "./ContactMe";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0, minHeight: "100vh" }} elevation={0}>
        <div className="App">
          <Toolbar sx={{ float: "right" }}>
            <Breads />
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
