import React from "react";

import AppBar from "../Components/AppBar";
import BodyAnimalFeeder from "./BodyAnimalFeeder";
import Footer from "../Components/Footer";

export default function FeedingAnimals() {
  return (
    <>
      <AppBar /> 
        <BodyAnimalFeeder />
      <Footer />
    </>
  );
}