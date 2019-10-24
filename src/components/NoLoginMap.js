import React from 'react';
import {Link} from 'react-router-dom';
import Map from '../components/Map';

export default function NoLoginMap() {

    return (
      <div style={{textAlign: "center"}}>
        <h1>Here are our charging stations</h1>
        <br></br>
        <Map 
        />
        <br></br>
        Login to access more functions by logging in <Link to="/">here</Link>
      </div>
    )
  }