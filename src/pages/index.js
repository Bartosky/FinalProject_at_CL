import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import LandingPage from "../components/LandingPage"
import Menu from "../components/Menu"
import Treatments from "../components/Treatments"
import Products from "../components/Products"
import Promo from "../components/Promo"
import Prices from "../components/Prices"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"

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

    const Container = styled.div`
          margin: 0 auto;
          max-width: 1117px;
          display: flex;
          align-items: center;
          justify-content: space-between;
    `;


    const StyledWrapper = styled.div`
        width: 100vw;
        height: 100vh;
      `;

    const IndexPage = () => (
          <Container>
                <GlobalStyle/>
                <StyledWrapper>
                    <Menu/>
                        <div>
                            <LandingPage/>
                            <Treatments/>
                            <Prices/>
                            <Products/>
                            <Promo/>
                            <AboutMe/>
                            <Contact/>
                        </div>
                </StyledWrapper>
          </Container>
    )
export default IndexPage
