import React from 'react'
import {Link} from 'react-router-dom';

export default function HomePage(props) {

  return (
    <div>
      <h1>Hello {props.UserInfo.username}!</h1>
      <div>
        You should not be able to access this without being logged in
      </div>
      <div>
        <button onClick={ props.loadProtectedData }>Click to load protected content from API</button>        
      </div>
      <div style={{ color: "red" }}>
        Protected content result: <strong>{ props.someData }</strong>
      </div>
      <div>
        <Link to="/ChargerLocations">Show charger locations</Link>
      </div>
      
    </div>
  )
}
