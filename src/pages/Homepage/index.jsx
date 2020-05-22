import React from "react";

import AppBar from "../../assets/Components/AppBar";
import Footer from "../../assets/Components/Footer";
import Body from "./Body";
import '../Homepage/homepage.css';
import HomepageNew from './HomepageNew'
import SliderHome from '../../assets/Components/SliderHome'

export default function Homepage() {
  return (
    <>
      

      <AppBar />
      <Body />
      
      <Footer />
    </>
  );
}
