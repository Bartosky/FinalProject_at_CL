import React  from "react"
import styled from 'styled-components'



const PromoBox = styled.div`
        background-image: url(./promo.jpg);
        width:100%;
        height:600px;
        background-size:cover;
        background-repeat:no-repeat;
  @media (max-width: 375px) {
                width:375px;
                height:100%;
                background-image: url(./promo.jpg);
                background-repeat:no-repeat;
                background-size:cover;
  

    }


`;

const  PromoOffer = styled.div`
width:45rem;
font-size: 4rem;
text-align: center;
font-family: "Pacifico";
font-weights: bold;
color:#5A6F67;          
padding-top:6rem;
padding-left:2rem;


  @media (max-width: 375px) {
            font-size: 1.5rem;    
       

    }


`;
const  Logo = styled.div`
font-size: 6.5rem;
 @media (max-width: 375px) {
            font-size: 1.5rem;  
            }

`;
const  SubLogo = styled.div`


`;



class Promo extends React.Component{

    render(){
        return(
            <div>
                <PromoBox>
                    <PromoOffer>-10%
                        na Twój pierwszy raz w
                        <Logo>Young &           Beauty</Logo>
                        <SubLogo> studio</SubLogo></PromoOffer>
                </PromoBox>

            </div>
        )
    }

}


export default Promo;

