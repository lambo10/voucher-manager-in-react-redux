
// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {loginModal_action} from '../../actions'
import './loginModal.css';

export const LoginModalcomp = ({show}) => {
    const dispatch = useDispatch();
    // const {email,setEmail} = useState("");
    // const {password,setPassword} = useState("");

  return (
    <div className="modal-wrapper"
      style={{
        width: '77%',
        position:'fixed',
        left:"10%",
        right:"10%",
        top:"10%",
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Login</p>
        <span onClick={()=>dispatch(loginModal_action(false))} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Enter Details</h4>
          <input type="text" placeholder="Enter Email" class="form-control"  />
          <br></br>
          <input type="password" placeholder="Enter Password" class="form-control"/>
        </div>
        <div className="modal-footer">
          <button onClick={!show} className="btn-cancel">Login</button>
        </div>
      </div>
    </div>
  )
};