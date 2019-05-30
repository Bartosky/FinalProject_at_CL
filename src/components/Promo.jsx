import React  from "react"
import styled from 'styled-components'


const TopLine = styled.div`
display: flex;
align-items:center;
background-color:#AAC8BD;
border-bottom: 2px solid #5A6F67;

`;


class Promo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: 'closed'
        };
    }


    render(){
        return(
            <div>welcome pack</div>
            
        )
    }

}


export default Promo;

