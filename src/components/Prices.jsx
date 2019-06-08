import React  from "react"
import styled from 'styled-components'



const PricesBox = styled.div`
        background-image: url(./cennik.jpg);
        width:100%;
        height:450px;
        background-size:cover;
        background-repeat:no-repeat;
  @media (max-width: 375px) {
               max-width:100%;
               height:100px;
               background-image: url(./cennik.jpg);
         
    }


`;



class Prices extends React.Component{

    render(){
        return(
            <div>
                <PricesBox>

                </PricesBox>
            </div>
        )
    }

}


export default Prices;

