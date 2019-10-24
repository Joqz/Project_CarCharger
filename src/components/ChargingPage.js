import React from 'react';
import Timer from './Timer';
import axios from 'axios';
import constants from '../constants.json';

export default function ChargingPage(props) {

  const Charger = props.GetChargerInfo(parseInt(props.match.params.id));

  function StartCharger(){

  }

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
  }

  return (
    <div>
      <h1>Charger</h1>

      <div>
        You selected charger {Charger.name} <br></br>
        The price to use this charger is { Charger.price + " " + Charger.price_per }
      </div>      

      <br></br>

      <div>
        <Timer/>
      </div>

      <div>
        <button onClick={PayCharge}>Pay your charge</button>
      </div>
    </div>
  )
}
