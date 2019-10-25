import React from 'react';
import Timer from './Timer';
import FastTimer from './FastTimer';
import FreeTimer from './FreeTimer';
import axios from 'axios';
import constants from '../constants.json';
import {Redirect} from 'react-router-dom';

export default function ChargingPage(props) {

  const Charger = props.GetChargerInfo(parseInt(props.match.params.id));

  function PayCharge(event)
  {    
    event.preventDefault();
    axios({
          method: 'post',
          url: constants.baseAddress + '/chargehistory',
          data: {
                  chargehistory: Charger.name,
                  username: props.UserInfo.username
                }
        });
    props.history.push(props.redirectPathOnSuccess);
  }

  function SelectTimer(){
    if(Charger.type === "FAST CHARGER"){
      return(
        <div><FastTimer/></div>
      ) 
    }
    else if(Charger.price === "FREE"){
      return(
        <div><FreeTimer/></div>
      ) 
    }
    else{
      return(
        <div><Timer/></div>
      ) 
    }
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Charger</h1>

      <div>
        You selected charger {Charger.name} ({Charger.type})<br></br>
        The price to use this charger is { Charger.price + " " + Charger.price_per }
      </div>      

      <br></br>

      {SelectTimer()}

      <div>
        <button onClick={PayCharge}>Pay for your charge</button>
      </div>
    </div>
  )
}
