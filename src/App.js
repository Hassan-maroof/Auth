import React ,{Component} from 'react';
import Profile from "./Profile.js" ;
import Home from "./Home.js" ;
import Nav from "./Nav.js" ;
import {Route} from "react-router-dom" ;
import Auth from "./Auth/Auth"; 

class App extends Component {
 constructor(props){
   super(props);
   this.auth=new Auth(this.props.history)
 }
  render(){
  return (
    <>
      <Nav />
      <div className="body">
      <Route 
        path ="/" 
        exact  
        render = {props => <Home auth={this.auth}{...props}  />}
      />
      <Route path ="/profile" component = {Profile} />
      </div>
    </>
    );
  }
}
export default App;
