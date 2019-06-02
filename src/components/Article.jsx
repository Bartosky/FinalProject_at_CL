import React  from "react"
import styled from 'styled-components'

const Box = styled.div`
display: flex;
margin:3rem;
    &.left{
        flex-direction:row-reverse;   
    }
    &.right{
    flex-direction:row;
    justify-content:space-between;
    }
    @media (max-width: 375px){
        &.left,
        &.right{
            flex-direction:column-reverse;
            align-items:center;
        }
    }
    
`;



const Image = styled.img` 
        min width:20%;
        width:20rem;
        height:20rem;
        background-size:cover;
        background-repeat:no-repeat;

        
        
`;


const TextWrapper= styled.div`
margin-top:1rem

`;

const Subtitle = styled.h4`
    margin:2rem;
    font-family: "Kalam";
    font-size: 2.5rem;
    font-weights: bold;
    color:#5A6F67;


`;


 const Descripttion= styled.p`
    font-family: "Kalam";
    font-size: 1.5rem;
    color: brown;
    margin-left:2rem;
    margin-right:2rem;
 
 `;

class Article extends React.Component{

    render(){
        return(
            <Box className={this.props.ClassName}>
                <TextWrapper>
                <Subtitle>{this.props.SubtitleText}</Subtitle>
                <Descripttion >{this.props.ArcileText}</Descripttion>
                </TextWrapper>
                <Image src = {this.props.Foto}/>
            </Box>
        )
    }

}


export default Article;

