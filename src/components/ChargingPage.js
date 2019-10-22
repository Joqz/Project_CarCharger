import React from 'react';
import Timer from './Timer';

export default function ChargingPage(props) {
  function PayCharge(event)
  {    
    event.preventDefault();
  }

  return (
    <div>
      <h1>Charger</h1>

      <div>
        You selected charger { props.ChargerInfo.chargername }
      </div>      

      <div>
        <Timer />
      </div>

      <button onClick={PayCharge}>Pay your charge</button>
    </div>
  )
}
