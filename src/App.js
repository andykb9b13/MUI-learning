import "./App.css";
import { useState } from "react";
import {
  Button,
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Link,
} from "@mui/joy";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {" "}
      {mode === "light" ? "dark" : "light"}
    </Button>
  );
}

function App() {
  return (
    <CssVarsProvider>
      <ModeToggle />
      <Sheet
        sx={{
          width: 300,
          mx: "auto",
          my: 4,
          poy: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <div>
          <Typography lvel="h4" component="h1">
            Welcome
          </Typography>
          <Typography level="body2">Sign in to continue</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" placeholder="andy@andy.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" placeholder="password" />
        </FormControl>
        <Button sx={{ mt: 1 }}>Log In</Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign Up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don't have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}

export default App;
