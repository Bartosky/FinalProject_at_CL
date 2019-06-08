import React  from "react"
import styled from 'styled-components'

const Stopka = styled.footer`
margin-top:2rem;
`;

const TriBlock= styled.div`
display: flex;
justify-content: space-between;
margin-bottom:2rem;
    @media(max-width:375px){
            flex-direction:column;
            justify-content: left;
            margin-left:2rem
    }
`;

const Map =styled.div`
   width:300px;
   height:300px;
   background-image: url(./map.jpg);
    background-size:cover;
    background-repeat:no-repeat;
        @media(max-width:375px){
           width:90%;
           margin:0.5rem;
        
        
    }
`;

const Block= styled.div`
        width:30%;
        height:100%;
         @media(max-width:375px){
            flex-direction:column;
            width:90%;
            justify-content: center;
         
    }
`;
const  Adres = styled.div`
        text-align: center;
        padding-top: 5rem;
        font-size:3.5rem;
        font-family:Kalam;
        color:#5A6F67;
    @media(max-width:375px){
            width:300px;
            padding-top: 2rem;
            font-size:2.0rem;
    }
`;

const DraftForm = styled.form`
        display:flex;
        flex-direction:column;
        justify-content:left;
`;

const FormHead =styled.p`
        font-size:3rem;
        font-family:Kalam;
        color:#5A6F67;
`;

const StyledInput = styled.input`
        width:100%;
        padding: 0.2rem;
        margin: 0.2rem;
        font-family:Kalam;
        font-size:2rem;
`;

const StyledTextarea = styled.textarea`
        margin: 0.2rem;
        width:100%;
        height:9rem;
        resize: none; 
        padding: 0.2rem;
        font-family:Kalam;
        font-size:2rem;
`;

const StylesSubmit  = styled.input`
        position: relative;
        float:none;
        padding:0px;
        margin: 0 auto;
        margin-top:0.6rem;
        width:20%;
        padding: 0.2rem;
        font-family:Kalam;
        font-size:2rem;
         color:#5A6F67;
         background-color:#AAC8BD;
         border:none;
         border-radius:10px;
`;

const BottomLine= styled.div`
        height:5rem;
        background-color:#5A6F67;
        display:flex;
        align-items:center;
        justify-content:space-between;
`;
const FollowUs = styled.div`
      color:#CAE3D9;
      font-size:3rem;
      font-family: Kalam;
`;
const Line= styled.div`
      height:0.2rem;
      width:18%;
      background-color:#CAE3D9;
 @media(max-width:375px){
        width:10%;
    }
`;

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          name:'',
          email:'',
          mobile:'',
          msg:'',

        };
    }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  };
  handleMobileChange = (event) => {
    this.setState({mobile: event.target.value});
  };

  handleMsgChange = (event) => {
    this.setState({msg: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Your name is '
      + this.state.name);
  };

    render(){
        return(
            <Stopka>
                <TriBlock>
                    <Block>
                          <a href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4946.405370322502!2d-0.38960343262334474!3d51.69273591961321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487640058723d80d%3A0xecb4f94920612981!2sTrevellance+Way%2C+Watford%2C+Wielka+Brytania!5e0!3m2!1spl!2spl!4v1559760354991!5m2!1spl!2spl" width="600" height="450" frameBorder="0" style="border:0" allowFullScreen' target='_blank'>
                            <Map> </Map>
                          </a>
                    </Block>
                    <Block>
                            <Adres>
                                    <p>90 Trevellance Way</p>
                                    <p>Watford WD25 0LZ</p>
                                    <p>Wielka Brytania</p>
                                    <p>Mobile: 04470072772</p>
                        </Adres>
                    </Block>
                    <Block>
                        <FormHead>Zostaw nam wiadomość</FormHead>
                      <DraftForm onSubmit={this.handleSubmit}>
                        <label >
                          <StyledInput type='text' value = {this.state.name}
                                 onChange={this.handleNameChange}
                                  placeholder='Imię'/>
                        </label>

                        <label>
                          <StyledInput  type='text' value = {this.state.email}
                                 onChange={this.handleEmailChange}
                                 placeholder='Email'/>
                        </label>
                        <label>
                          <StyledInput type='text' value = {this.state.mobile}
                                 onChange={this.handleMobileChange}
                                 placeholder='Mobile'/>
                        </label>
                        <StyledTextarea type='text' value = {this.state.msg}
                                  onChange={this.handleMsgChange}
                                        placeholder='Twoja wiadomość'/>

                          <StylesSubmit type='submit' value = 'Wyślij'/>

                      </DraftForm>
                    </Block>
                </TriBlock>

                    <BottomLine>
                        <Line></Line>
                        <FollowUs>Follow us</FollowUs>
                        <Line></Line>
                        <div>
                       <a href='https://www.facebook.com/YoungAndBeautifulStudioWatford/'  target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#CAE3D9"d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                       </a>
                        </div>
                        <Line></Line>
                    <div>
                           <a href='https://www.instagram.com/young_and_beautiful_studio/'  target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#CAE3D9" d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"/></svg>
                           </a>
                    </div>
                    <Line></Line>
                    </BottomLine>
            </Stopka>

        )
    }

}


export default Contact;

