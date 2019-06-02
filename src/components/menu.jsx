import React  from "react"
import { Link } from  'gatsby';
import styled from 'styled-components'
import 'react-sticky-header/styles.css';
import  StickyHeader from 'react-sticky-header';
/*
position: -webkit-sticky;
position: sticky;
top: 0;*/

const  TopLine = styled.div`
display: flex;
max-width:100%;
align-items:center;
justify-content:center;
background-color:#AAC8BD;
border-bottom: 2px solid #5A6F67;
opacity:100%;
z-index:100;

`;

const Nav = styled.header`
max-width:80%;
display: flex;
flex-direction: row;

`;


const  styledListItem = {
    fontFamily: 'Kalam',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '0.8em',
    lineHeight: '1em',
    alignItems: 'center',
    textAlign: 'center',
    color: '#5A6F67',
    textDecoration: 'none'
}


const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    font-size: 3rem;
    line-height: 150%;
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

   &:hover {
               box-shadow: inset 0 0 1rem #CAE3D9;
            }
 
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
margin:0.20rem 6.5rem 0.20rem 0.20rem;
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
            <StickyHeader header ={


                <TopLine>
                    <Logo href='#landingPage'>Y<ShortName>oung</ShortName> &
                        B<ShortName>eautiful</ShortName> studio</Logo>
                    <Nav>
                        <Hamburger className={this.state.menu} onClick={this.handleStartClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                                <path fill="none" d="M 0 0 h 24 v 24 H 0 Z"/>
                                <path fill="#5A6F67"
                                      d="M 3 18 h 18 v -2 H 3 v 2 Z m 0 -5 h 18 v -2 H 3 v 2 Z m 0 -7 v 2 h 18 V 6 H 3 Z"/>
                            </svg>
                        </Hamburger>

                        <HamClose className={this.state.menu} onClick={this.handleCloseClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                                <path fill="#5A6F67"
                                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </HamClose>
                        <List className={this.state.menu}>
                            <ListStyle><Link to="#zabiegi" onClick={this.handleCloseClick}
                                             style={styledListItem}>ZABIEGI</Link></ListStyle>
                            <ListStyle><Link to="#cennik" onClick={this.handleCloseClick}
                                             style={styledListItem}>CENNIK</Link></ListStyle>
                            <ListStyle><Link to="#produkty" onClick={this.handleCloseClick}
                                             style={styledListItem}>PRODUKTY</Link></ListStyle>
                            <ListStyle><Link to="#promocje" onClick={this.handleCloseClick}
                                             style={styledListItem}>PROMOCJE</Link></ListStyle>
                            <ListStyle><Link to="#oMnie" onClick={this.handleCloseClick} style={styledListItem}>O
                                MNIE</Link></ListStyle>
                            <ListStyle><Link to="#kontakt" onClick={this.handleCloseClick}
                                             style={styledListItem}>KONTAKT</Link></ListStyle>
                        </List>
                    </Nav>
                </TopLine>
            }>
            </StickyHeader >
        )
    }

}


export default TopMenu;

