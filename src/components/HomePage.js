import React from 'react'
import {Link} from 'react-router-dom';

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

      <div>
        <Link to="/ChargerLocations">Show charger locations</Link>
      </div>
      
    </div>
  )
}
