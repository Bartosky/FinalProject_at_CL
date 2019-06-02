import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from "gatsby"
import LandingPage from "../components/LandingPage"
import Menu from "../components/menu"

import Title from "../components/Title"
import Article from "../components/Article"
// import Prices from "../components/Prices"
// import Products from "../components/Products"
// import Promo from "../components/Promo"
// import Treatments from "../components/Treatments"
// import About from "../components/About"
// import Contact from "../components/Contact"

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


    <Title Id={'zabiegi'} TitleText={'ZABIEGI kosmetyczne'}/>
    <Article ClassName= {'left'} SubtitleText= {'Zabiegi Twarzy'} ArcileText={'tu bajecznie opisuje co zrobimy z Twoją twarzą, czytając to już rodzi się zadowlenie na Twojej twarzy, więc jakby efekt w połowie osiągniety :)'}
             Foto={'./face_treatment.jpg'} />
    <Article ClassName= {'right'} SubtitleText= {'Zabiegi na całe ciało'} ArcileText={'tu wypunktuje zabiegi, ale czy to ważne skoro i tak męska część patrzy tylko na zdjecie ;)'}
             Foto={'./body_treatment.jpg'} />
      <Title  TitleText={'ZABIEGI pielęgnacyjne'}/>
      <Article ClassName= {'left'} SubtitleText= {'Pielęgnacja oczu'} ArcileText={'tu bajecznie opisuje co zrobimy z Twoją twarzą, czytając to już rodzi się zadowlenie na Twojej twarzy, więc jakby efekt w połowie osiągniety :)'}
               Foto={'./eye.jpg'} />
      <Article ClassName= {'right'} SubtitleText= {'Pielęgnacja dłoni'} ArcileText={'tu wypunktuje zabiegi, ale czy to ważne skoro i tak męska część patrzy tylko na zdjecie ;)'}
               Foto={'./hands.jpg'} />
      <Article ClassName= {'left'} SubtitleText= {'Pielęgnacja stóp'} ArcileText={'tu bajecznie opisuje co zrobimy z Twoją twarzą, czytając to już rodzi się zadowlenie na Twojej twarzy, więc jakby efekt w połowie osiągniety :)'}
               Foto={'./feet.jpg'} />

    <Title Id={'cennik'} TitleText={'CENNIK'}/>
    <Article/>
    <Title Id={'produkty'} TitleText={'PRODUKTY'}/>
    <Article/>
    <Title Id={'promocje'} TitleText={'PROMOCJE'}/>
    <Article/>
    <Title Id={'oMnie'} TitleText={'O MNIE'}/>
    <Article/>
    <Title Id={'kontakt'} TitleText={'KONTAKT'}/>
    <Article/>
    </div>
    {/*<Treatments/>*/}
    {/*<Prices/>*/}
    {/*<Products/>*/}
    {/*<Promo/>*/}
    {/*<About/>*/}
    {/*<Contact/>*/}
  </StyledWrapper>

  </Container>
)

export default IndexPage
