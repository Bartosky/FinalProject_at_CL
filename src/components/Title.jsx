import React  from "react"
import styled from 'styled-components'

const TitleText = styled.div`
    height: 2rem;
    font-family: Kalam;
    font-weight: bold;
    font-size: 3em;
    padding: 0.25em ;
    padding-bottom: 0.75em ;
    color: #5A6F67;
    border-top: 0.2rem solid #5A6F67;
    border-bottom: 0.2rem solid #5A6F67;
`;

class Title extends React.Component{
    constructor(props){
        super(props);

        };


    render(){
        return(
            <TitleText id={this.props.Id}>{this.props.TitleText}</TitleText>
            
        )
    }

}


export default Title;

