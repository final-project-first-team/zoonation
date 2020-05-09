import React from "react";

import AppBar from "../Components/AppBar";
import BodyProfileInfo from "./BodyProfileInfo";
import Footer from "../Components/Footer";

export default function ProfileInfo() {
  return (
    <>
      <AppBar /> 
      <BodyProfileInfo />
      <Footer />
    </>
  );
}