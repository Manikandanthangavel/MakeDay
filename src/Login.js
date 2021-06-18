import React, { Component } from 'react'
import './Login.css';
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UserPage from './UserPage';
class Login extends Component {
    constructor(props) {
        super(props)

        let loggedIn=false
    
       
    
        this.state = {
            username:'',
            password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitForm(e){
        e.preventDefault();
        const {username , password} = this.state
        if(username==="niraj" && password==='123')
        {
       localStorage.setItem("token", "mmm")
            this.setState({
                loggedIn: true
            })
        }
    }
    
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/userpage"/>
        }
        return (
           
            <div>
                <section className="loginbox">
        <div className="container">
            <h1 className='kk'>TELUS INTERNATIONAL</h1>
        </div>
       <div>
        <div className="container">
            <div className='center-box'>
            <h2>Log in</h2>
            <p>Enter your existing TELUS account details here</p>
            <form onSubmit={this.submitForm} className='form'>
            <div className='as'>
                <p> Email / Username</p>
                <input type='text' name='username' className='username' placeholder='Username' value={this.state.username} onChange={this.onChange}>
                </input>
</div>
                <div className='as'>
                 <p>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
               </p>
                
                <input type='password' name='password' className='password' placeholder='password' value={this.state.password} onChange={this.onChange}>
                </input>      
             
            </div>
            <br></br>
 
            <input type='submit' className="btn btn-success">
                </input> 
            </form>
        </div>
       </div>
       </div>
    </section>
 
            </div>
            
        )
    }
}

export default Login;

