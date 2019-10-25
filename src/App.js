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
import {Marker} from 'react-map-gl';

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
      ChargeHistory: null
    };
  }  

  onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("Login failed");
  }

  onLogout = () => {
    this.setState({ isAuthenticated: false});
  }

  SearchFilterUpdate = (newValue) => {
    this.setState({ SearchFilter: newValue });
  }

  SetUserInfo = (username) => {
    this.setState({ UserInfo: { username }});
  }

  SetChargerInfo = (chargerprice) => {
    this.setState({ ChargerInfo: { chargerprice }});
  }

  GetChargerInfo = (ChargerId) => {
    return this.state.Chargers.find(item => item.id === ChargerId);
  }

  ChargerMarkers = () =>{
    return this.state.Chargers.map((Chargers, index) => {
    return <Marker key={index} id={index} position={{
    latitude: this.Chargers.latitude,
    longitude: this.Chargers.longitude
    }}
    onClick={() => console.log("You clicked me!")} />
    })
  }

  GetChargeHistory = () => {
    axios.post(constants.baseAddress + '/getchargehistory', {params: {username: "test123"}}, Authenticator.getAxiosAuth())
      .then(results => {
      this.setState({ ChargeHistory: results.data });
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
              {...routeProps}
              />
        } />

        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/HomePage" exact render={
            (routeProps) =>
              <HomePage
                GetChargeHistory={ this.GetChargeHistory }
                ChargeHistory={ this.state.ChargeHistory }
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
                Chargers={ this.state.Chargers }
                TotalPrice = { this.state.TotalPrice }
                UserInfo= { this.state.UserInfo }
                ChargerInfo= { this.state.ChargerInfo }
                GetChargerInfo ={this.GetChargerInfo}
                redirectPathOnSuccess="/HomePage"
                />
          }>          
        </ProtectedRoute>
      </Router>
    )
  }
}