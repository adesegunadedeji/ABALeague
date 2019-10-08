import React, {Component} from 'react'

class Register extends Component{
    constructor(){
        super();
        this.state = {
            email: null,
            password: null
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
         })
        console.log(this.state)
    }
   
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submitted Form")
        //Grandchild Props passer
        this.props.handleRegister(this.state)
    }
    render(){
        return (
            <div>
                <h1> New User</h1>
                <form onSubmit ={this.handleSubmit}>
                <input type ="text" name = "email"  onChange={this.handleChange}/>
                <input type ="password" name = "password" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
export default Register