import React from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const Signup = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google sign-in response
  };

  return (
    <Container component="main" maxWidth="xs" style={{ "margin-top": "20vh" }}>
      <Paper
        elevation={3}
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar style={{ backgroundColor: "primary.main" }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ margin: "20px 0" }}>
          Sign up
        </Typography>
        <form style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Photo URL" variant="outlined" />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            Sign Up
          </Button>
          <p style={{ marginTop: 10, color: "#555" }}>
            Already have an account?{" "}
            <a href="/components/login" style={{ color: "#1976D2", textDecoration: "underline" }}>
              Sign In
            </a>
          </p>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
