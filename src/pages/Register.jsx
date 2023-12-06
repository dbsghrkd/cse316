import React from 'react';
import '../App.css';
import { useState } from 'react';

function Register() { 
   
    const [ID, setID] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const join = () => {
      // Create an object with user data
      if (!ID || !password || !userName || !email || !age) {
        alert('Please fill in all the required fields.');
        return;
      }
      alert("You are now our Member!");
      window.location.href="/Login";
      const userData = {
        ID: ID,
        password: password,
        userName: userName,
        email: email,
        age: age
      };
      fetch('http://127.0.0.1:3001/saveUserInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Redirect to Home page after successful registration
        window.location.href = "/Home";
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors or display a message to the user
      });
  }


    return (
        <div className="Login">
        <div className="loginBox">
          <h2 style={{marginBottom: "20px"}}>Join Us</h2>
          <form>
            <div className="formGroup">
              <label htmlFor="username">ID:</label>
              <input type="text" id="Id" name="username" placeholder='ID' value={ID} onChange={(e)=> setID(e.target.value)}/>
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input type="password" id="pass" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="formGroup">
                <label htmlFor="UserName">Name:</label>
              <input type="text" id="UserName" name="Name" placeholder='User Name' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className="formGroup">
                <label htmlFor="Email">E-mail:</label>
              <input type="text" id="Email" name="Email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="formGroup">
                <label htmlFor="Age">Age:</label>
                <input type="number" id="Age" name="Age" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />

            </div>
            <button type="button" className="login-btn" onClick={join}>Join Us</button>
          </form>
        </div>
      </div>
    );
  }

export default Register;