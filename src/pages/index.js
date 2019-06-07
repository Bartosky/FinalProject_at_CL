import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import LandingPage from "../components/LandingPage"
import Menu from "../components/menu"
import Title from "../components/Title"
import Article from "../components/Article"
import Promo from "../components/Promo"
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
      <Title  TitleText={'STREFA MĘŻCZYZNY'}/>

      <Article ClassName= {'right'} SubtitleText= {''} ArcileText={
            <ul style={{listStyleType:'none'}}>
                <li>oczyszczanie twarzy</li>
                <li>nawilżanie twarzy</li>
                <li>iMEN - “Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu”</li>
                <li>manicure  - Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu</li>
                <li> pedicure - Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu</li>
          </ul>}
               Foto={'./man.jpg'} />
    <Title Id={'cennik'} TitleText={'CENNIK'}/>
    <img src='./cennik.jpg' style={{display:'block', marginLeft: 'auto', marginRight:'auto'}}/>
    <Title Id={'produkty'} TitleText={'PRODUKTY'}/>
      <Article ClassName= {'left'} ArcileText={'Jako odpowiedzialny gabinet, którego celem jest satysfakcja Klienta zawsze wybieramy sprawdzone produkty  - dlatego nasze zabiegi wyknujemy przy użyciu prodktów firmy Arcana'}
               Foto={'./arkana.svg'} />
    <Title Id={'promocje'} TitleText={'PROMOCJE'}/>
     <Promo/>
    <Title Id={'oMnie'} TitleText={'O MNIE'}/>
      <Article ClassName= {'left'}  ArcileText={
        <ul style={{listStyleType:'none'}}>
              <li>Ukończyłam kosmetologię estetyczną.Odbyłam kursy:</li>
              <ul style={{listStyleType:'none'}}>
                      <li>oczyszczanie twarzy</li>
                      <li>nawilżanie twarzy</li>
              </ul>
              <li>Nieustannie rozwijam się poszukując nowych możliwości zadbania o Twoje Piękno i dobre samopoczucie.</li>
              <li>Mając rozległą wiedzę i znakomite przygotowanie w zakresie fizjologii, chemii kosmetycznej i obsługi nowoczesnych urządzeń, postanowiłam kształcić się dalej. </li>
              <li>Inspiracją są dla mnie moi klienci, chetnie odpowiem na Twoje pytania.</li>
        </ul>
      }
               Foto={'./manager.jpg'} />
    <Title Id={'kontakt'} TitleText={'KONTAKT'}/>
    <Contact/>
    </div>

  </StyledWrapper>

  </Container>


)

export default IndexPage
