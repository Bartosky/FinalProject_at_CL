import React  from "react"
import Title from "./Title"
import Article from "./Article"

class AboutMe extends React.Component{

    render(){
        return(
            <div>
                <Title Id={'oMnie'} TitleText={'O MNIE'}/>
                <Article ClassName= {'left'}  ArtcileText={
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
            </div>
        )
    }

}


export default AboutMe;

