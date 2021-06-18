import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Logout extends Component {
    constructor(props) {
        super(props)
    localStorage.removeItem("token")
       
    }
    
    render() {
        return (
            <div>
                <Link to="/">Logout</Link>
            </div>
        )
    }
}

export default Logout;
