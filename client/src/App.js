import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coupon from './Coupon';
import AddCoupon from './add';
import RemoveCoupon from './remove';
import {Link,Route} from 'react-router-dom';
class App extends React.Component {
render(){
  return (
    <header align='center'>
    <h1 align='center' style={{color:'Green', background:'black'}}>Home Page</h1>
    <ul align='center'>
      <li><Link to='/view'>View Coupons</Link></li>
      <li><Link to='/add'>Add Coupon</Link></li>
      <li><Link to='/delete'>Remove Coupon</Link></li>
    </ul>
    <Route path='/view' component={Coupon}></Route>
    <Route path='/add' component={AddCoupon}></Route>
    <Route path='/delete' component={RemoveCoupon}></Route>
    </header>
  );
}
} 
export default App;
