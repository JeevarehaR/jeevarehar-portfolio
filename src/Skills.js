import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Skills({ data }) {
  return (
    <div className="skills-cont" style={{ marginBottom: "50px" }}>
      <h3>Skills</h3>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          rowGap: "30px",
          columnGap: "10px",
          height: "auto",
          padding: "20px",
        }}
      >
        {data.map((dt) => (
          <Item
            sx={{
              width: "131px",
              height: "131px",
              padding: "10px",
              opacity: 1,
            }}
          >
            <img src={dt.image} alt={dt.skill} width={64} height={64} />
            <h4>{dt.skill}</h4>
          </Item>
        ))}
      </Box>
    </div>
  );
}
