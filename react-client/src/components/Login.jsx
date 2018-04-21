import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";
import account from './account.jsx';

class Login extends Component {

  constructor(props) {
   super(props);
   this.state = {
     states:{
       userName:"",
       passWord:""
     },
     data:""
   };
   this.onChange = this.onChange.bind(this);
   this.Login = this.Login.bind(this);
 }

 onChange (e) {
  var states = this.state.states;
  var name = e.target.name;
  var value = e.target.value;
  states[name] = value;
  this.setState({states});
 }

 Login() {
   $.ajax({
     url: '/Login',
     type: 'POST',
     data: this.state,
     success: (data) => {
      this.setState({data:data});
      console.log(data)
     }
   });
 }

 render(){
  if(this.state.data!==""){
      return (
        <Router>
         
          <Route path="/account" component={account}/>
       
        </Router>
      )
    }
  
  else{

   return (

     <center>
      <div>
       <h1>Log in</h1>
       <input type="text" name="userName" placeholder="userName" value={this.state.userName} onChange={this.onChange}/><br/><br/><br/>
       <input type="text" name="passWord" placeholder="passWord" value={this.state.passWord} onChange={this.onChange}/><br/>
       <br/><br/><br/>

       <Router>
       <button ><Link onClick={this.Login} to="/account">Log in</Link></button>
      </Router>
      </div>
     </center>
   )
    }
  
   }
 }

export default Login;