import React from "react";

import AppBar from "../Components/AppBar";
import BodyFeedsStore from "./BodyFeedsStore";
import Footer from "../Components/Footer";

export default function ProfileInfo() {
  return (
    <>
      <AppBar /> 
      <BodyFeedsStore />
      <Footer />
    </>
  );
}