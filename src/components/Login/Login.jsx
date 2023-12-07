import { auth } from "@/utils/firebase";
import { Button } from "@mui/material";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div className="app">
      <div className="login">
        <div className="login__background" />
        <div className="login__container">
          <img src="/logo.png" alt="Logo" />
          <div className="login__text">
            <h1>Sign in to Blaze Chatter App</h1>
          </div>
          <Button onClick={() => signInWithGoogle()}>
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
