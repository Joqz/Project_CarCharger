import React from 'react'
import {Link} from 'react-router-dom';
import Map from './Map';

export default function HomePage(props) {
  return (
    <div style={{textAlign: "center"}}>
      <h1>Hello {props.UserInfo.username}!</h1>

      <div>
        <button onClick={ props.GetChargeHistory }>Show my charge history</button>        
      </div>

      <div style={{ color: "red" }}>
        <strong>{ props.ChargeHistory }</strong>
      </div>

      <Map></Map>
      <div>
        <Link to="/ChargerLocations">Start by selecting a charger</Link>
      </div>
      
    </div>
  )
}
