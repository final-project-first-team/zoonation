import React from "react";

import AppBar from "../Components/AppBar";
import BodyFeedingAnimals from "./BodyFeedingAnimals";
import Footer from "../Components/Footer";

export default function FeedingAnimals() {
  return (
    <>
      <AppBar /> 
      <BodyFeedingAnimals />
      <Footer />
    </>
  );
}