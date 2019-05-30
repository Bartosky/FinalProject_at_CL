import React  from "react"
import styled from 'styled-components'


const TopLine = styled.div`
display: flex;
max-width:144rem;
align-items:center;
background-color:#AAC8BD;
border-bottom: 2px solid #5A6F67;

`;

const nav = styled.header`
max-width:80%;
display: flex;
flex-direction: row;

`;


const StyledListItem = styled.a`
font-family: Kodchasan;
font-style: normal;
font-weight: bold;
font-size: 0.8em;
line-height: 1em;
align-items: center;
text-align: center;
color: #5A6F67;
text-decoration: none;
  
  `;


const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    font-size: 2.5rem;
    line-height: 200%;
    @media (max-width: 375px) {
        display: none;
    }
    &.open{
        flex-wrap:nowrap;
        line-height: 100%;
        font-size: 3rem;
        position: fixed;
        top:52px;
        left:0;
        align-items:center;
        width:375px;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #CAE3D9;

        z-index: 20;
        
    }
`;


const ListStyle = styled.li`
list-style:none;
padding:2rem;
 
`;

const Hamburger = styled.div`
width: 5rem;
height: 5rem;
margin-right:2rem;
@media (min-width: 376px) {
    display: none;
  }
     &.open{
        display:none;
    }
`;

const HamClose= styled.div`
width: 5rem;
height: 5rem;
margin-right:2rem;
display: none;
    &.open{
        display:block;
    }

`;
const Logo = styled.a`
width:20rem;
margin:0.20rem 6rem 0.20rem 0.20rem;
font-size: 2rem;
text-align: center;
text-decoration:none;
font-family: "Pacifico";
font-weights: bold;
color:#5A6F67;
border: 2px solid #5A6F67;

@media (max-width: 376px) {
    width:60%;
    height: 50%;
  }
`;

const ShortName = styled.span`

@media (max-width: 376px) {
    display: none;
  }
`;




class TopMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: ''
        };
    }
    handleStartClick = () => {
        console.log(this.state.menu)
        console.log('clicked')
    this.setState({
        menu:'open'
    })
}

handleCloseClick = () =>{
     this.setState({
        menu:''
    })
}

    render(){
        return(
            <TopLine>
                <Logo href = '#landingPage'>Y<ShortName>oung</ShortName> & B<ShortName>eautiful</ShortName> studio</Logo>
                <nav>
                    <Hamburger className={this.state.menu} onClick = {this.handleStartClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" >
                        <path fill="none" d="M 0 0 h 24 v 24 H 0 Z" />
                        <path fill="#5A6F67" d="M 3 18 h 18 v -2 H 3 v 2 Z m 0 -5 h 18 v -2 H 3 v 2 Z m 0 -7 v 2 h 18 V 6 H 3 Z" />
                        </svg></Hamburger>

                    <HamClose className={this.state.menu} onClick = {this.handleCloseClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                    <path fill="#5A6F67" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    <path d="M0 0h24v24H0z" fill="none"/></svg>
                    </HamClose>
                    <List className ={this.state.menu}>
                        <ListStyle><StyledListItem href = "#" onClick = {this.handleCloseClick}>ZABIEGI</StyledListItem></ListStyle>
                        <ListStyle><StyledListItem href = "#cennik" onClick = {this.handleCloseClick}>CENNIK</StyledListItem></ListStyle>
                        <ListStyle><StyledListItem href = "#" onClick = {this.handleCloseClick}>PRODUKTY</StyledListItem></ListStyle>
                        <ListStyle><StyledListItem href = "#" onClick = {this.handleCloseClick}>PROMOCJE</StyledListItem></ListStyle>
                        <ListStyle><StyledListItem href = "#" onClick = {this.handleCloseClick}>O MNIE</StyledListItem></ListStyle>
                        <ListStyle><StyledListItem href = "#" onClick = {this.handleCloseClick}>KONTAKT</StyledListItem></ListStyle>
                    </List>
                </nav>
            </TopLine>
        )
    }

}


export default TopMenu;

