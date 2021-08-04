import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import {increment, signIn, loginModal_action} from './actions'
import {loginModal_action} from './actions'
import './my_css/bootstrap.css'
import {LoginModalcomp} from './components/modals/loginModal'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const loginModal = useSelector(state => state.loginModal);
  
  const dispatch = useDispatch();
  return (
    <div className="App">
     {/* <h1>counter{counter}</h1>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button>-</button> */}
<div class="row">
<div class="col-md-4 left_div">
  <div class="left_d_component2">
    <div>BALANCE: $0</div>
    <div>REDEEMED: 0</div>
  </div>
  <br></br><br></br>
  <button class="left_d_component1" onClick={()=>dispatch(loginModal_action(true))}>
   Login
 </button><br></br><br></br>
 <button class="left_d_component1" onClick={()=>dispatch(loginModal_action(true))}>
   New Voucher
 </button>

 
 
</div>
<div class="col-md-8 right_div">
  <div class="voucher_container">
<div class="row">
  <div class="col-md-6">
    <div class="tiny_dash"></div>
    <div class="card_header1">
     <b> GIFT VOUCHER</b>
    </div>
    <div class="txt1">
      CODE: X0IEIUR34
    </div>
    <div class="txt2">
      EXPIARY: 03/08/2021
    </div>
    <div class="sizebox1">
    </div>
    <div>
      Please present
    </div>
    <div>
      The Voucher
    </div>
    <div>
      Before odering
    </div>
  </div>

  <div class="col-md-6">
    <div class="card_header2">
     <b> YOUR BALANCE</b>
    </div>
    <div class="tiny_dash"></div>
    <div class="card_header3"><b>$100</b></div>
    <div class="sizebox2">
    </div>
    <div class="txt3">
Venu name, 000 Street name, city name, Status, ZIP
    </div>
    <br></br>
    <div class="txt3">
p +00 00 00000 0000
    </div>
    <div class="txt3">
    <button class="left_d_component1">REDEEM</button>
    </div>
    <br></br>
    <div class="txt3">
     www.example.com
    </div>
  </div>
</div>
  </div>
<br></br><br></br>
  <div class="voucher_container">
<div class="row">
  <div class="col-md-6">
    <div class="tiny_dash"></div>
    <div class="card_header1">
     <b> GIFT VOUCHER</b>
    </div>
    <div class="txt1">
      CODE: X0IEIUR34
    </div>
    <div class="txt2">
      EXPIARY: 03/08/2021
    </div>
    <div class="sizebox1">
    </div>
    <div>
      Please present
    </div>
    <div>
      The Voucher
    </div>
    <div>
      Before odering
    </div>
  </div>

  <div class="col-md-6">
    <div class="card_header2">
     <b> YOUR BALANCE</b>
    </div>
    <div class="tiny_dash"></div>
    <div class="card_header3"><b>$100</b></div>
    <div class="sizebox2">
    </div>
    <div class="txt3">
Venu name, 000 Street name, city name, Status, ZIP
    </div>
    <br></br>
    <div class="txt3">
p +00 00 00000 0000
    </div>
    <div class="txt3">
<button class="left_d_component1">REDEEM</button>
    </div>
    <br></br>
    <div class="txt3">
     www.example.com
    </div>
  </div>
</div>
  </div>
  <div>

  </div>
</div>
</div>
{ loginModal ? <div onClick={()=>dispatch(loginModal_action(false))} className="back-drop" style={{position:'fixed',left:0,top:0}}></div> : null }
<LoginModalcomp show={loginModal} />
     {loginModal? <h3>Valuable Information I should't see</h3>:''}

    
    </div>
  );
}

export default App;
