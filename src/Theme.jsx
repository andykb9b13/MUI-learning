import React from "react";
import { createTheme } from "@mui/material";

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "black",
      test: "green",
    },
    secondary: {
      main: "purple",
    },
  },
  sizing: {
    height: {
      primary: 500,
    },
  },
});
