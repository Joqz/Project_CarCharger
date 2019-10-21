import React from 'react';
import {Link} from 'react-router-dom';

export default function NoLoginMap() {

    return (
      <div style={{textAlign: "center"}}>
        <h1>Here are our charging stations</h1>

        <br></br>
        Login to access more functions by clicking <Link to="/">here</Link>
      </div>
    )
  }