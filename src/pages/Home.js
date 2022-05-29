import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";

function Home() {
  return (
    <HomePageStyle>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </HomePageStyle>
  );
}

const HomePageStyle = styled.div`
  height: 100vh;
  /* overflow-x: hidden; */
`;

export default Home;
