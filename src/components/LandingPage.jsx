import React  from "react"
import styled from 'styled-components'



const FirstLook = styled.div`
width:375px;
height:586px;
background-image: url(./mobile.jpg);
background-repaeat:no-repeat;
background-size:cover;
`;

class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          
        };
    }

    render(){
        return(
          <div>
            <FirstLook id= 'landingPage'></FirstLook>
            <div>zadbaj o siebie  z Young & Beauty studio</div>
            </div>
        )
    }

}


export default LandingPage;

