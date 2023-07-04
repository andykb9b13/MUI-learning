import "./App.css";
import { Container, Button, Box, Grid } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import { CustomTheme } from "./Theme";

const CustomButton = styled("button")(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(2),
  borderRadius: 50,
}));

const CustomBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.test,
  height: theme.sizing.height.primary,
}));

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          mt={1}
          sx={{
            backgroundColor: "lightBlue",
            border: "1px solid black",
            borderRadius: "8px",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <h1>Andy Kleindienst</h1>
          <CustomButton>Hi There!</CustomButton>
        </Box>
        <CustomBox component="div">
          <CustomButton>Here's another button</CustomButton>
        </CustomBox>
      </Container>
    </ThemeProvider>
  );
}

export default App;
