import React, { Component } from 'react'
import './Login.css';
export class Register extends Component {
    render() {
        return (
            <div>
                <section className="loginbox">
        <div className="container">
            <h1 className='kk'>MY TELUS</h1>
        </div>
       
        <div className="container">
            <div className='center-box'>
            <h2>Create New Account</h2>
            <p>Enter your new TELUS account details here</p>
            <form className='form'>
            <div className='as'>
                <p> FirstName</p>
                <input type='text' className='firstname'>
                </input>
                </div>
                <div className='as'>
                <p> LastName</p>
                <input type='text' className='lastname'>
                </input>
                </div>
                <div className='as'>
                <p> Email / Username</p>
                <input type='text' className='username'>
                </input>
                </div>
                <div className='as'>
                 <p>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <a href="https://www.telus.com" className='color-purple'>Forgot?
               </a>
               </p>
               <div className="form-input">
				<span className='icon'><a href='#'><button className="btn"><i class="fa"></i>show</button></a></span>   
                <input type="password" className="password"></input>        
                </div> 
            </div>
			<br></br>
            <button className="btn btn-success" type="submit" value="Next">Register Now</button>
        
            </form>
        </div>
       </div>
    </section>
                
            </div>
        )
    }
}

export default Register;
