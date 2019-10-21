import React from 'react';
import Authenticator from './Authenticator';
import {Link} from 'react-router-dom';

export default function LoginPage(props) {

  function login(event)
  {    
    event.preventDefault();
    props.SetUserInfo(event.target['username'].value);    
    Authenticator.authenticate(event.target['username'].value, event.target['password'].value)
      .then(result =>
        {
          props.loginSuccess();
          props.history.push(props.redirectPathOnSuccess);
        })
      .catch(() => {
        props.loginFail();
      })
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Login</h1>
      <div>
       Enter your username and password
      </div>

      <form onSubmit={login}>
        <div>
          Username <input type="text" name="username" />
        </div>
        <div>
          Password <input type="password" name="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <br></br>
      Or sign up by clicking <Link to="/SignupPage">here</Link>
      <br></br>
      You can also view our map without logging in <Link to="/NoLoginMap">here</Link>
    </div>
  )
}
