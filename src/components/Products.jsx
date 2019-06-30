import React  from "react"
import Title from "./Title"
import Article from "./Article"

class Products extends React.Component{

    render(){
        return(
            <div>
                <Title Id={'produkty'} TitleText={'PRODUKTY'}/>
                <Article ClassName= {'left'} ArtcileText={'Jako odpowiedzialny gabinet, którego celem jest satysfakcja Klienta zawsze wybieramy sprawdzone produkty  - dlatego nasze zabiegi wyknujemy przy użyciu prodktów firmy Arcana'}
                         Foto={'./arkana.svg'} />
                <Title Id={'promocje'} TitleText={'PROMOCJE'}/>
            </div>
        )
    }

}


export default Products;

