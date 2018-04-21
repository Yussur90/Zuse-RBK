import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Login from './Login.jsx';


class account extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      post:''
     
    };

    this.submit=this.submit.bind(this);
    this.onChange=this.onChange.bind(this);
}

    onChange (e) {
    this.setState({
       [e.target.name]: e.target.value 
        });
  }

  submit(post) {
    $.ajax({ 
      type:'POST',
      url: '/account',
      data:{
        post:post
        
      },
      success: (data) => {
        console.log(data)
      },
    });

    $.ajax({
      type:'GET',
      url: '/account', 
      success: (data) => {
        this.setState({
          items:data
        })
      }
    });
  }



render(){
   return (
   	 
     <center>
      <div>

       <h1>User</h1>
       <select>
  <option value="select">select</option>
  <option value="plastic">plastic</option>
  <option value="clothes">clothes</option>
  <option value="wood">wood</option>
  <option value="iron">iron</option>
       </select>
  <br/><br/><br/>
  <textarea name="post" placeholder="post" value={this.state.post} onChange={this.onChange} rows="4" cols="50">
  </textarea>
       <br/><br/><br/>
  <button onClick={this.submit}>post</button><br/>
 
      </div>
     </center>
   )
 }
  
}

 
export default account;