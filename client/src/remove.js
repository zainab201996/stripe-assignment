import React from 'react';
import logo from './logo.svg';
import './App.css';

class RemoveCoupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let id=this.state.id;
    fetch('https://stripe-assignment.herokuapp.com/delete/'+id)
    .then(res=>res.text())
    .then(res=>{
    alert(res);
    })
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() 
  {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1 align='center' style={{color:'green', background:'black'}}>Remove a Coupon</h1>
      <p>ID :</p>
      <input
        type='text'
        name='id'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

export default RemoveCoupon;