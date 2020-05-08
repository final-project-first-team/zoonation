import React from "react";

import AppBar from "../Components/AppBar";
import BodySignIn from "./BodySignIn";
import Footer from "../Components/Footer";

export default function SignIn() {
  return (
    <>
      <AppBar /> 
      <BodySignIn />
      <Footer />
    </>
  );
}