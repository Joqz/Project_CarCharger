import React from 'react';
import Timer from './Timer';
import axios from 'axios';
import constants from '../constants.json';

export default function ChargingPage(props) {
  function PayCharge(event)
  {    
    event.preventDefault();

    axios({
      method: 'post',
      url: constants.baseAddress + '/chargehistory',
      data: {
              chargehistory: props.ChargerInfo.chargername,
              username: props.UserInfo.username
            }
    });
  }

  return (
    <div>
      <h1>Charger</h1>

      <div>
        You selected charger { props.ChargerInfo.chargername }
      </div>      

      <div>
        <Timer/>
      </div>

      <button onClick={PayCharge}>Pay your charge</button>
    </div>
  )
}
