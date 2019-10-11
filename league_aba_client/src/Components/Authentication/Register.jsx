import React, {Component} from 'react'

class Register extends Component{
    constructor(){
        super();
        this.state = {
            email: null,
            password: null,
    
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
         })
        console.log(this.state)
    }
   
    // handleRegister=(e)=>{
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
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
                    <label htmlFor="email">email</label>
                <input type ="text" name = "email"  onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
                <input type ="password" name = "password" onChange={this.handleChange}/>
                <input type ="submit"></input>
                </form>
            </div>
        )
    }
}
export default Register