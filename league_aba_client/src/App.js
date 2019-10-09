import React,{Component} from 'react';
import './App.css';
import FooterComponent from './Components/Footer/Footer'
import PlayerRoster from './Components/PlayersRoster/PlayerRoster';
import Register from './Components/Authentication/Register';

class App extends Component{
  constructor(){
      super();
      this.state={
          loggedIn: false,
          email: null
      }
  } 
 
  componentDidMount(){
    console.log("Component did Mount");
    this.getUser();
}
  getUser = async()=>{
    try{ 
      const player  = await fetch("http://localhost:3001/users");
      const parsedResponse = await player.json();
      console.log(parsedResponse)
  }
  catch(err){
      console.log(err)
  }
  }

  handleRegister = async(formData)=>{
      console.log(formData)
      const registerResponse = await fetch(`http://localhost:3001/users`,{
          method: "POST",
          body: JSON.stringify(formData),
          headers:{
              "Content-Type": "application/json",
          }
      })
      const parsedResponse = await registerResponse.json();
      if(parsedResponse.status){
          console.log("Succesfull Registration")
          this.setState({
              loggedIn: true,
              email: parsedResponse.data.email
          })
      }
  }
  render(){
      return(
          <div className="app">
              {
              this.state.loggedIn ?
          <PlayerRoster/>:
          <Register handleRegister={this.handleRegister}/>
      }
      <FooterComponent/>
    </div>)
  }

}
export default App