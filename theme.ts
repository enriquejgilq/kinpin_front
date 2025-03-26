import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#819da1",
      contrastText: "#0a0a0a",
    },
    secondary: {
      main: "#708c90",
    },
    background: {
      default: "#0a0a0a", // Fondo oscuro
      paper: "#0a0a0a", // Color de tarjetas
    },
    text: {
      primary: "#ffffff", // Texto en fondo oscuro
      secondary: "#3e595c",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
    