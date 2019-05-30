import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from "gatsby"
import About from "../components/About"
import Contact from "../components/Contact"
import LandingPage from "../components/LandingPage"
import Menu from "../components/menu"
import Prices from "../components/Prices"
import Products from "../components/Products"
import Promo from "../components/Promo"
import Treatments from "../components/Treatments"

const GlobalStyle = createGlobalStyle`
body{
  margin: 0px;
  padding: 0px;
   background-color: #CAE3D9;

}
html{
font-size:10px}

*{
  margin: 0px;
  padding: 0px;

}
*, *::before; *::after{
  box-sizing: border-box;
}
`;




const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  `;

const IndexPage = () => (
  <>
  <GlobalStyle/>
  <StyledWrapper>
    <Menu/>
    <LandingPage/>
    <Treatments/>
    <Prices/>
    <Products/>
    <Promo/>
    <About/>
    <Contact/>
  </StyledWrapper>

  </>
)

export default IndexPage
