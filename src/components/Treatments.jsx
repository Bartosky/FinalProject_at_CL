import React  from "react"
import Article from "../components/Article"
import Title from "./Title"



class Treatments extends React.Component{

    render(){
        return(
            <div>
                <Title Id={'zabiegi'} TitleText={'ZABIEGI kosmetyczne'}/>
                <Article ClassName= {'left'} SubtitleText= {'Zabiegi Twarzy'} ArtcileText={'tu bajecznie opisuje co zrobimy z Twoją twarzą, czytając to już rodzi się zadowlenie na Twojej twarzy, więc jakby efekt w połowie osiągniety :)'}
                         Foto={'./face_treatment.jpg'} />
                <Article ClassName= {'right'} SubtitleText= {'Zabiegi na całe ciało'} ArtcileText={'tu wypunktuje zabiegi, ale czy to ważne skoro i tak męska część patrzy tylko na zdjecie ;)'}
                         Foto={'./body_treatment.jpg'} />
                <Title  TitleText={'ZABIEGI pielęgnacyjne'}/>
                <Article ClassName= {'left'} SubtitleText= {'Pielęgnacja oczu'} ArtcileText={'tu bajecznie opisuje co zrobimy z Twoją twarzą, czytając to już rodzi się zadowlenie na Twojej twarzy, więc jakby efekt w połowie osiągniety :)'}
                         Foto={'./eye.jpg'} />
                <Article ClassName= {'right'} SubtitleText= {'Pielęgnacja dłoni'} ArtcileText={'tu wypunktuje zabiegi, ale czy to ważne skoro i tak męska część patrzy tylko na zdjecie ;)'}
                         Foto={'./hands.jpg'} />
                <Article ClassName= {'left'} SubtitleText= {'Pielęgnacja stóp'} ArtcileText={'tu bajecznie opisuje co zrobimy z Twoją twarzą, czytając to już rodzi się zadowlenie na Twojej twarzy, więc jakby efekt w połowie osiągniety :)'}
                         Foto={'./feet.jpg'} />
                <Title  TitleText={'STREFA MĘŻCZYZNY'}/>
                <Article ClassName= {'right'} SubtitleText= {''} ArtcileText={
                    <ul style={{listStyleType:'none'}}>
                        <li>oczyszczanie twarzy</li>
                        <li>nawilżanie twarzy</li>
                        <li>iMEN - “Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu”</li>
                        <li>manicure  - Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu</li>
                        <li> pedicure - Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu</li>
                    </ul>}
                         Foto={'./man.jpg'} />
                <Title Id={'cennik'} TitleText={'CENNIK'}/>
            </div>
        )
    }

}


export default Treatments;

