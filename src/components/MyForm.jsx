import React  from "react"
import styled from 'styled-components'






class  MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          name:'',
          email:'',
          msg:'',
        };
    }
  handleNameChange = (event) => {
    this.setState({name: event.target.name});
  };

  handleEmailChange = (event) => {
    this.setState({name: event.target.name});
  };
  handleMsgChange = (event) => {
    this.setState({name: event.target.name});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Your name is '
      + this.state.name);
  };

    render(){
        return(

                        <form onSubmit={this.handleSubmit}>
                          <label>
                            Imię:
                            <input type='text' value = {this.state.name}
                                   onChange={this.handleNameChange}/>
                          </label>
                          <label>
                            Email:
                            <input type='text' value = {this.state.email}
                                   onChange={this.handleEmailChange}/>
                          </label>
                            <textarea/>
                          <label>
                            Wyślij
                            <input type='submit' value = 'Wyślij'/>
                          </label>
                        </form>

        )
    }

}


export default MyForm;


);