import React from 'react';
import logo from './logo.svg';
import './App.css';

class Coupon extends React.Component {
  constructor(props) {
    super(props);
    this.state={couponList:[]};
  }
  callApi(){
    fetch('http://localhost:5000/view')
    .then(res=>res.json())
    .then(res=>{
      //console.log(res[0].id);
      this.setState({couponList: res});
      console.log(this.state.couponList);

    });
    
  }
  
  componentWillMount()
    {
      this.callApi();
    }
  render(){
  return (
    <div className="App">
    <style>{"table{border:2px solid black }"}</style>

      <h1 align='center' style={{color:'green', background:'black'}}>Coupon List</h1>
        <table align='center' style={{background:'grey'}}>
        <tr>
          <th>ID </th>
          <th>Created Date </th>
          <th>Duration </th>
          <th>Duration In Months</th>
          <th>Percent Off </th>
          <th>Valid </th>
          <th>Times redeemed </th>
        </tr>
        {this.state.couponList.map(coupon=>{return <tr>
          <td>{coupon.id} </td>  
          <td>{coupon.created} </td>
           <td>{coupon.duration} </td>
            <td>{coupon.duration_in_months} </td> 
            <td>{coupon.percent_off} </td> 
            <td>{coupon.valid} </td> 
            <td>{coupon.times_redeemed} </td> 
            </tr>})}
        </table>
    </div>
  );
  };

}

export default Coupon;
