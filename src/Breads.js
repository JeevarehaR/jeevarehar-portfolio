import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";

const breads = [
  {
    name: "Profile",
    icon: <HomeIcon fontSize="inherit" sx={{ mr: 0.5 }} />,
    href: "/",
  },
  {
    name: "Blog",
    icon: <WhatshotIcon fontSize="inherit" sx={{ mr: 0.5 }} />,
    href: "/blog",
  },
  {
    name: "Games",
    icon: <GrainIcon fontSize="inherit" sx={{ mr: 0.5 }} />,
    href: "/games",
  },
];

export function Breads() {
  return (
    <div className="breads">
      <Breadcrumbs aria-label="breadcrumb">
        {breads.map((item) => (
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href={item.href}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
