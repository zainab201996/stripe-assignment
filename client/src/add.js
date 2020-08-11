import React from 'react';
import logo from './logo.svg';
import './App.css';

class AddCoupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '',
      durationInMonths: '',
      percent:'',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let d=this.state.duration;
    let dm=this.state.durationInMonths;
    let p=this.state.percent;
    fetch('http://localhost:9000/add/'+d+'/'+dm+'/'+p)
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
      <h1 align='center' style={{color:'green', background:'black'}}>Add Coupon</h1>
      <p>Duration:</p>
      <input
        type='text'
        name='duration'
        onChange={this.myChangeHandler}
      />
      <p>Duration In Months:</p>
      <input
        type='text'
        name='durationInMonths'
        onChange={this.myChangeHandler}
      />
      <p>Percent:</p>
      <input
        type='text'
        name='percent'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

export default AddCoupon;