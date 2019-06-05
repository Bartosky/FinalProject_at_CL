import React  from "react"
import styled from 'styled-components'



const FirstLook = styled.div`
        background-image: url(./bcg_desktop.jpg);
        width:100%;
        height:800px;
        background-size:cover;
        background-repeat:no-repeat;
  @media (max-width: 375px) {
                width:375px;
                height:650px;
                background-image: url(./mobile.jpg);
                background-repeat:no-repeat;
                background-size:cover;
  

    }


`;

const  Header = styled.div`
width:40rem;
font-size: 4rem;
text-align: center;
font-family: "Pacifico";
font-weights: bold;
color:#5A6F67;
position: absolute;
top:45%;
right:30%;

  @media (max-width: 375px) {
            font-size: 2.5rem;    
            top:45%;
            right:10%;

    }


`;
const  Logo = styled.div`
font-size: 5.5rem;
 @media (max-width: 375px) {
            font-size: 3rem;  
            }

`;

class LandingPage extends React.Component{

    render(){
        return(
          <div>
            <FirstLook id= 'landingPage'>
                <Header>
                    zadbaj o siebie  z
                    <Logo>Young & Beauty</Logo>
                    <div> studio</div>
                </Header>
            </FirstLook>

            </div>
        )
    }

}


export default LandingPage;

