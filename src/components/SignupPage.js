import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import constants from '../constants.json';
import Authenticator from './Authenticator';


export default function SignupPage(props) {

    function signup(event) {
        event.preventDefault();  
        // Sending a POST request
        axios({
            method: 'post',
            url: constants.baseAddress + '/users/',
            data: {
            username: event.target['username'].value,
            password: event.target['password'].value
            }
        })
        //Authenticating the signup to automatically log in
        .then(Authenticator.authenticate(event.target['username'].value, event.target['password'].value),props.SetUserInfo(event.target['username'].value))
        .then(result =>
          {
            props.loginSuccess();
            props.history.push(props.redirectPathOnSuccess);
          })
        .catch(() => {
          props.loginFail();
        });
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>Sign Up</h1>
            <div>
                Please enter an username and password to signup
            </div>

            <form onSubmit={signup}>
                <div>
                    Username <input type="text" name="username" /> (>4 characters)
                </div>

                <div>
                    Password <input type="password" name="password" /> (>6 characters)
                </div>

                <div>
                <button type="submit">Signup</button>
                </div>
            </form>

            <br></br>
            Already have an account? Login <Link to="/">here</Link>

        </div>
    )
}