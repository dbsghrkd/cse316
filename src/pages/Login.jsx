import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import '../App.css';

function Login() { 
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async () => {
      try{
        const response = await axios.post('http://127.0.0.1:3001/login', {
          userID: userID,
          password: password
        });
        if(response.data.message === "Login Successful"){
          window.location.href = "/Home";
          alert("Login Successful");
        }
      }
      catch(error){
        console.error("Error: ", error);
        alert("Login Access Denied");
      }
    };

    return (
        <div className="Login">
        <div className="loginBox">
          <h2 style={{marginBottom: "20px"}}>Login</h2>
          <form>
            <div className="formGroup">
              <label htmlFor="username">ID:</label>
              <input type="text" id="username" name="username" placeholder='ID' value={userID} onChange={(e)=>setUserID(e.target.value)}/>
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="formGroup">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="button" className="login-btn" onClick={logIn}>Login</button>
          </form>
        </div>
      </div>
    );
  }

export default Login;