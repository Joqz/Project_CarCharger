import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import ChargerLocations from './components/ChargerLocations';
import ChargingPage from './components/ChargingPage';
import NoLoginMap from './components/NoLoginMap';
import ProtectedRoute from './components/ProtectedRoute';
import Authenticator from './components/Authenticator';
import axios from 'axios';
import constants from './constants.json';
import chargerdata from './chargerdata.json';

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      Chargers: chargerdata.chargers,
      UserInfo: null,
      ChargerInfo: null,
      TotalPrice: null,
      SearchFilter: "",
      isAuthenticated: false,
      someData: null
    };
  }  

  onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("Login failed");
  }

  SearchFilterUpdate = (newValue) => {
    this.setState({ SearchFilter: newValue });
  }

  SetUserInfo = (username) => {
    this.setState({ UserInfo: { username }});
  }

  GetChargerInfo = (ChargerId) => {
    return this.state.Chargers.find(item => item.id === ChargerId);
  }

  /* This function illustrates how some protected API could be accessed */
  loadProtectedData = () => {
    axios.post(constants.baseAddress + '/getchargehistory', {params: {username: "test123"}}, Authenticator.getAxiosAuth())
      .then(results => {
      this.setState({ someData: results.data });
    })
  }

  render() {

    return (
      <Router>
        <Route path="/" exact render={
          (routeProps) =>
            <LoginPage
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              SetUserInfo = { this.SetUserInfo }
              redirectPathOnSuccess="/HomePage"
              {...routeProps}
              />
        } />

        <Route path="/SignupPage" exact render={
          (routeProps) =>
            <SignupPage
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              SetUserInfo = { this.SetUserInfo }
              redirectPathOnSuccess="/HomePage"
              {...routeProps}
              />
        } />

        <Route path="/NoLoginMap" exact render={
          (routeProps) =>
            <NoLoginMap
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              SetUserInfo = { this.SetUserInfo }
              redirectPathOnSuccess="/HomePage"
              {...routeProps}
              />
        } />

        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/HomePage" exact render={
            (routeProps) =>
              <HomePage
                loadProtectedData={ this.loadProtectedData }
                someData={ this.state.someData }
                UserInfo={ this.state.UserInfo }
                />
          }>          
        </ProtectedRoute>

        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/ChargerLocations" exact render={
            (routeProps) =>
              <ChargerLocations
                UserInfo={ this.state.UserInfo }
                Chargers={ this.state.Chargers }
                SearchFilter={ this.state.SearchFilter }
                SearchFilterUpdate={ this.SearchFilterUpdate }
                />
          }>          
        </ProtectedRoute>

        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/charger/:id" exact render={
            routeProps =>
              <ChargingPage {...routeProps}
                SetPrice = { this.SetPrice }
                TotalPrice = { this.state.TotalPrice }
                UserInfo= { this.state.UserInfo }
                ChargerInfo= { this.state.ChargerInfo }
                GetChargerInfo ={this.GetChargerInfo}
                />
          }>          
        </ProtectedRoute>
      </Router>
    )
  }
}