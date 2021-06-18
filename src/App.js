
import React ,{Component} from 'react';
import {Route, NavLink, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Logout from './Logout';
import Register from './Register'
import UserPage from './UserPage';

class App extends Component {
  render() {
    return (
<Router>
  <Switch>
  <Route exact path='/'>
  <Home/>
  </Route>
  <Route  path='/signin'>
  <Login/>
  </Route>
  <Route path='/register'>
  <Register/>
  </Route>
  <Route exact path='/userpage'>
  <UserPage/>
  </Route>
  </Switch>

 

 </Router>

    )
  }
}

export default App;
