import React from "react";

import AppBar from "../../assets/Components/AppBar";
import Footer from "../../assets/Components/Footer";
import BodyAnimalFeeder from "./BodyAnimalFeeder";

export default function FeedingAnimals() {
  return (
    <>
      <AppBar /> 
        <BodyAnimalFeeder />
      <Footer />
    </>
  );
}