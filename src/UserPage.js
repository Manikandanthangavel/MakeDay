import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom';
import Logout from './Logout';
import Pdf from './PdfDownload';
import Nbar from './Nvbar.js'
import PdfDownload from './PdfDownload';
import './Upage.css';
class UserPage extends Component {
    constructor(props) {
        super(props)
        
        const token=localStorage.getItem("token")

        let loggedIn = true
    
        if(token == null){
            loggedIn = false
        }
  
        this.state = {
             loggedIn
        }
    }
    
    render() {  
        if(this.state.loggedIn===false){
            return <Redirect to='/'/>
        }
        return (
<div>
   <Nbar/>
   <div className="container">
        <h1 className="yy">Login Successfully!!!</h1>
   </div>
               
               
               
                </div>       
    
)
    }
}

export default UserPage;




















