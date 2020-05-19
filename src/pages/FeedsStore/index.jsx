import React from "react";

import AppBar from "../../assets/Components/AppBar";
import Footer from "../../assets/Components/Footer";
import BodyFeedsStore from "./BodyFeedsStore";

export default function ProfileInfo() {
  return (
    <>
      <AppBar /> 
      <BodyFeedsStore />
      <Footer />
    </>
  );
}