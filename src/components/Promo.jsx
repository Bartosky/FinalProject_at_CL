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
width:40rem;
font-size: 4rem;
text-align: center;
font-family: "Pacifico";
font-weights: bold;
color:#5A6F67;          
padding-top:6rem;
padding-left:2rem;


  @media (max-width: 375px) {
            height:300px;
            width:35rem;
            font-size: 2rem;    
            text-align: left;
           
           padding-top:5rem;
            padding-left:0.5rem;

    }


`;
const  Logo = styled.div`
font-size: 6.5rem;
 @media (max-width: 375px) {
            font-size: 3rem;  
            }

`;


class Promo extends React.Component{

    render(){
        return(
            <div>
                <PromoBox>
                    <PromoOffer>-10%
                        na Twój pierwszy raz w
                        <Logo>Young & Beauty</Logo>
                        <div> studio</div>
                    </PromoOffer>
                </PromoBox>
            </div>
        )
    }

}


export default Promo;

