import React, { useState } from 'react';

const LoginPage = () => {
  const handleSignup = (event) => {
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;
    console.log('log in button clicked');
    event.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
    .then((res) => {
      res.json()
      window.location.reload()
    })
    .then(
      (result) => {
        },
        (error) => {
          console.log(error);
        }
        );
  }

  const handleLogin = (event) => {
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;

    console.log('sign up button clicked');
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result: ', result);
          if (result !== undefined) {
            window.location.replace('http://localhost:8080/dashboard');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="outerContainer">
      <div className="loginContainer">
        <input id="name" placeholder="username"></input>
        <input id="password" placeholder="password"></input>
        <button onClick={handleSignup}>Sign up</button>
        <button onClick={handleLogin}>Log in</button>
      </div>
    </div>
  );
}

export default LoginPage;
